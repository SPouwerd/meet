import { ValidationPipe, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const logger = new Logger('main');

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
    .setDescription(
      'Here you have overview and capablities list generated with swagger. ',
    )
    .setVersion('0.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, SwaggerConfig);
  SwaggerModule.setup('/', app, document);

  const port = process.env.PORT || 3000;

  if (require.main === module) {
    const port = process.env.SERVER_PORT || 3000;
    logger.log(
      `Starting server on port: ${port} in ${process.env.NODE_ENV} mode`,
    );
    await app.listen(port);
  }
}
bootstrap();
