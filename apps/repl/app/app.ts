import 'ember-statechart-component';

import setupInspector from '@embroider/legacy-inspector-support/ember-source-4.12';
import { isDevelopingApp, macroCondition } from '@embroider/macros';

import PageTitleService from 'ember-page-title/services/page-title';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - no types
import Application from 'ember-strict-application-resolver';

import Router from './router.ts';

export default class App extends Application {
  inspector = setupInspector(this);
  modules = {
    './router': Router,
    ...import.meta.glob('./templates/{application}.gts', {
      eager: true,
    }),

    // /////////////////
    // To keep
    // /////////////////
    './services/page-title': PageTitleService,
  };
}

if (macroCondition(isDevelopingApp())) {
  Object.assign(App, {
    LOG_RESOLVER: true,
    LOG_ACTIVE_GENERATION: true,
    LOG_TRANSITIONS: true,
    LOG_TRANSITIONS_INTERNAL: true,
    LOG_VIEW_LOOKUPS: true,
  });
}
