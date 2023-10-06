import { BuilderContext, createBuilder } from '@angular-devkit/architect';
import {
  DevServerBuilderOptions,
  serveWebpackBrowser,
} from '@angular-devkit/build-angular/src/builders/dev-server';
import { JsonObject } from '@angular-devkit/core';
import { BuildExecutorSchema } from './schema';

export function executeWebpackServerBuilder(
  schema: BuildExecutorSchema,
  context: BuilderContext
) {
  console.log('WTF?');
  return serveWebpackBrowser({} as DevServerBuilderOptions, context);
}

export default createBuilder<JsonObject & BuildExecutorSchema>(
  executeWebpackServerBuilder
);
