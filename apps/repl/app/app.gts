// an in-monorepo dependency
import * as repl from 'ember-repl';

console.log(repl);

import Application from 'ember-strict-application-resolver';

export default class App extends Application {
  modules = {
    './templates/application': <template>hello there!, welcome!</template>,
  };
}
