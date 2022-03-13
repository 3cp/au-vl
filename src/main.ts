import { Aurelia, ViewLocator, Origin } from 'aurelia-framework';

export function configure(aurelia: Aurelia): void {
  aurelia.use.standardConfiguration();
  aurelia.use.feature('resources');
  if (process.env.NODE_ENV === 'production') {
    aurelia.use.developmentLogging('warn');
  } else {
    aurelia.use.developmentLogging('info');
    aurelia.use.plugin('aurelia-testing');
  }

  ViewLocator.prototype.convertOriginToViewUrl = (origin: Origin) => {
    const moduleId = origin.moduleId;
    const id = (moduleId.endsWith(".js") || moduleId.endsWith(".ts"))
        ? moduleId.substring(0, moduleId.length - 3)
        : moduleId;
    return 'templates/' + id + '.html';
  }
  aurelia.start().then(() => aurelia.setRoot());
}
