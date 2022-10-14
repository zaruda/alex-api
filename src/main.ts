import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import { AppModule } from './app.module';
import { EntityNotFoundExceptionFilter } from './filters/not-found.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(compression());
  app.useGlobalFilters(new EntityNotFoundExceptionFilter());

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
