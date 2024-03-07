import { NestFactory } from '@nestjs/core';

import { AzuredeploycontainersModule } from './azuredeploycontainers.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AzuredeploycontainersModule);
  await app.listen(3000);
};

bootstrap();
