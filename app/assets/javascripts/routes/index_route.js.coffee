TimeTravel.IndexRoute = Ember.Route.extend
  model: ->
    TimeTravel.Trip.find()
