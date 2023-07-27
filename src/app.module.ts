import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TenantModule } from './tenant/tenant.module';
import { mongoUri } from './config/mongoUri';
// import { Tenant,TenantSchema } from './tenant/tenant.model';

@Module({
  imports: [
    MongooseModule.forRoot(mongoUri),
    // MongooseModule.forFeature([{name: Tenant.name,schema: TenantSchema}]),
    TenantModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule { }
