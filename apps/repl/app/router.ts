import EmbroiderRouter from '@embroider/router';

import { properLinks } from 'ember-primitives/proper-links';

import config from '#config';

@properLinks
export default class Router extends EmbroiderRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

/**
 * See: https://github.com/embroider-build/embroider/issues/2521
 */
function bundle(name: string, loader: () => Promise<{ default: unknown }>[]) {
  return {
    names: [name],
    load: async () => {
      const [template, route, controller] = await Promise.all(loader());
      const slashName = name.replaceAll('.', '/');
      const results: Record<string, unknown> = {};

      if (template) results[`./templates/${slashName}`] = template.default;
      if (route) results[`./routes/${slashName}`] = route.default;
      if (controller) results[`./controllers/${slashName}`] = controller.default;

      return {
        default: results,
      };
    },
  };
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
