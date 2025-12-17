// an in-monorepo dependency
import { getCompiler } from 'ember-repl';

console.log(getCompiler);

import Application from 'ember-strict-application-resolver';

export default class App extends Application {
  modules = {
    './templates/application': <template>hello there!, welcome!</template>,
  };
}
