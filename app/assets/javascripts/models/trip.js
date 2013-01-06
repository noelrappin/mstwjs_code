EmberTimeTravel.Trip = DS.Model.extend({
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

  startMoment: function() {
    return moment(this.get('start_date'))
  }.property('start_date'),

  startDateDisplay: function() {
    return this.get('startMoment').format("MMMM D, YYYY")
  }.property('startMoment')

});
