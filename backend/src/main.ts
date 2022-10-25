import { NestFactory } from '@nestjs/core';
import express from 'express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.use('/data', express.static(join(__dirname, '..', 'data')));
  
  await app.listen(9000);
}
bootstrap();
