import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS so your frontend (React/Next.js) can call the API
  app.enableCors();

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 API is running on http://localhost:${port}`);
}
bootstrap();
