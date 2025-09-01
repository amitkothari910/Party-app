import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Optional: add global prefix for APIs
  app.setGlobalPrefix('api');

  await app.listen(3000);
  console.log(`🚀 Party API running at http://localhost:3000/api/health`);
}
bootstrap();
