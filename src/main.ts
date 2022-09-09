import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //corrigir o timezone com o horário de brasília. Salva no nosso horário padrão
  process.env.TZ = '-03:00'   
  //.
  //habilita validação em todas as requisições http
  app.useGlobalPipes(new ValidationPipe())
  //.
  //outros domínios podem consumir a nossa API e não só o localhost
  app.enableCors()
  //.
  await app.listen(3000);
}
bootstrap();
