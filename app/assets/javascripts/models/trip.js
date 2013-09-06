TimeTravel.Trip = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  start_date: DS.attr('date'),
  end_date: DS.attr('date'),
  image_name: DS.attr('string'),
  slug: DS.attr('string'),
  tag_line: DS.attr('string'),
  price: DS.attr('number'),
  location: DS.attr('string'),
  activity: DS.attr('string'),

  //##moment
  startMoment: function() {
    return moment(this.get('start_date'))
  }.property("start_date"),

  endMoment: function() {
    return moment(this.get('end_date'))
  }.property("end_date")
  //##moment
});
