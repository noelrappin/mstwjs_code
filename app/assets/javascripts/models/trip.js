TimeTravel.Trip = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  imageName: DS.attr('string'),
  slug: DS.attr('string'),
  tagLine: DS.attr('string'),
  price: DS.attr('number'),
  location: DS.attr('string'),
  activity: DS.attr('string')
});
