import { Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tenant, TenantSchema } from './tenant.model';
import { TenantController } from './tenant.controller';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tenant.name, schema: TenantSchema }]),
  ],
  providers: [TenantService],
  controllers: [TenantController],
  exports: [TenantService]
})
export class TenantModule {}
