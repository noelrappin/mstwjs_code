TimeTravel.Routers.TripRouter = Backbone.Router.extend({
  //##routes
  routes: {
    "": "index",
    "trips/:id": "tripDetail",
  },
  //##routes

  //##initialize
  initialize: function() {
    this.topNavigationView = new TimeTravel.Views.TopNavigationView();
    this.sidebarView = new TimeTravel.Views.SidebarView();
  },
  //##initialize

  container: function() {
    return $('#container');
  },

  content: function() {
    return $('#content');
  },

  pageHasContent: function() {
    return $.trim(this.container().html()) != "";
  },

  layout: function() {
    if (this.pageHasContent()) {
      return;
    }
    this.container().append(this.topNavigationView.render().el);
    this.container().append(this.sidebarView.render().el);
    this.container().append($("<div/>").attr("id", "content"));
  },

  //##refactor
  basicPage: function(view) {
    this.layout();
    this.content().html(view.render().el);
    return this.container();
  },

  index: function() {
    this.basicPage(new TimeTravel.Views.TripsView({
        collection: TimeTravel.trips}));
  },

  tripDetail: function(id) {
    this.basicPage(new TimeTravel.Views.TripDetailView({
        model: TimeTravel.getTrip(id)}));
  }
  //##refactor

});

