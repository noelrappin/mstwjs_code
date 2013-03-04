TimeTravel.Trip = DS.Model.extend
  name: DS.attr('string')
  startDate: DS.attr('date')
  endDate: DS.attr('date')
  price: DS.attr('number')
  description: DS.attr('string')
