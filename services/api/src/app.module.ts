import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { UsersModule } from './users/users.module';
import { PartiesModule } from './parties/parties.module';

@Module({
  imports: [HealthModule, UsersModule, PartiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
