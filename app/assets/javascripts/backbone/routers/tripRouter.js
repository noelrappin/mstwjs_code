TimeTravel.Routers.TripRouter = Backbone.Router.extend({
  routes: {
    "": "index",
  },

  //##initialize
  initialize: function() {
    this.topNavView = new TimeTravel.Views.TopNavigationView();
    this.sidebarView = new TimeTravel.Views.SidebarView();
  },
  //##initialize

  index: function() {
  }
});

