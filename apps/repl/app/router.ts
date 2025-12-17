import EmbroiderRouter from '@embroider/router';

import { properLinks } from 'ember-primitives/proper-links';

import config from '#config';

@properLinks
export default class Router extends EmbroiderRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

(window as any)._embroiderRouteBundles_ = [
  // omitted for repro
];

Router.map(function () {
  /**
   * The main editing UI is here
   */
  this.route('edit');
});
