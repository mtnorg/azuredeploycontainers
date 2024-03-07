import { Controller, Get, Inject } from '@nestjs/common';

import { AzuredeploycontainersService } from '../services/azuredeploycontainers.service';

@Controller('azuredeploycontainers')
export class AzuredeploycontainersController {
  @Inject(AzuredeploycontainersService)
  private readonly azuredeploycontainersService: AzuredeploycontainersService;

  constructor(azuredeploycontainersService: AzuredeploycontainersService) {
    this.azuredeploycontainersService = azuredeploycontainersService;
  }

  @Get()
  findAll(): string {
    return this.azuredeploycontainersService.findAll();
  }
}
