import { Module } from '@nestjs/common';

import { AzuredeploycontainersController } from './controller/azuredeploycontainers.controller';
import { AzuredeploycontainersService } from './services/azuredeploycontainers.service';

@Module({
    controllers: [AzuredeploycontainersController],
    providers: [AzuredeploycontainersService]
})
export class AzuredeploycontainersModule {}