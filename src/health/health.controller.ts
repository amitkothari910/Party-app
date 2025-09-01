import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return { status: 'ok' };
  }

  @Get('readiness')
  readiness() {
    return { ready: true };
  }

  @Get('liveness')
  liveness() {
    return { alive: true };
  }
}
