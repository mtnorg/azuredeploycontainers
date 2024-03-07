import { Injectable } from '@nestjs/common';

@Injectable()
export class AzuredeploycontainersService {
    findAll(): string {
        return 'Hello from azuredeploycontainers service';
    }
}