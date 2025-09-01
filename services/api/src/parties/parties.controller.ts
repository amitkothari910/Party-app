import { Controller, Get } from '@nestjs/common';
import { PartiesService } from './parties.service';

@Controller('parties')
export class PartiesController {
  constructor(private readonly partiesService: PartiesService) {}

  @Get()
  findAll() {
    return this.partiesService.findAll();
  }
}
