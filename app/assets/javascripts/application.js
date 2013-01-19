//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require moment
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require_tree .

TimeTravel = Ember.Application.create();

TimeTravel.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create()
});
