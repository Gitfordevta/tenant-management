import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TenantModule } from './tenant/tenant.module';
import { mongoUri } from './config/mongoUri';

@Module({
  imports: [
    MongooseModule.forRoot(mongoUri),
    TenantModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
