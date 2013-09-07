//##start
//= require application
//= require_tree .
//= require_self
//##start

document.write('<div id="ember-testing-container"><div id="ember-testing">' +
    '</div></div>');
document.write('<style>#ember-testing-container { position: absolute; ' +
    'background: white; bottom: 0; right: 0; width: 640px; height: 384px; ' +
    'overflow: auto; z-index: 9999; border: 1px solid #ccc; } ' +
    '#ember-testing { zoom: 50%; }</style>');

TimeTravel.rootElement = '#ember-testing';

TimeTravel.ApplicationAdapter = DS.FixtureAdapter.extend();

TimeTravel.setupForTesting();
TimeTravel.injectTestHelpers();

function exists(selector) {
  return !!find(selector).length;
}
