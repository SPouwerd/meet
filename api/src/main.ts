import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['verbose', 'error', 'warn'],
  });
  //controller validation
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  //openapi
  const SwaggerConfig = new DocumentBuilder()
    .setTitle('API documentation')
    .setDescription('Here you have overview and capablities list generated with swagger. ')
    .setVersion('0.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, SwaggerConfig);
  SwaggerModule.setup('swagger', app, document);

  const port = process.env.PORT || 3000;

  await app.listen(port, '0.0.0.0', function () {
    console.log('Server started.......');
  });
}
bootstrap();
