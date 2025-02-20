import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  console.log(process.env.NODE_ENV);
  console.log(process.env.MYSQLDB_USERNAME);
  console.log(process.env.MYSQLDB_PASSWORD);
  console.log(process.env.MYSQLDB_HOST);

  const app = await NestFactory.create(AppModule);
  //await app.listen(process.env.PORT ?? 3000);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(Number(process.env.NODE_PORT));
}
bootstrap();
