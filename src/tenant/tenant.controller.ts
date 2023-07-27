import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { Tenant } from './tenant.model';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantsService: TenantService) { }
  @Get()
  async getAllTenants(): Promise<Tenant[]> {
    return this.tenantsService.findAll();
  }
  @Get(':id')
  async getTenantById(@Param('id') id: string): Promise<Tenant> {
    const tenant = await this.tenantsService.findById(id);
    if (!tenant) {
      throw new NotFoundException('Tenant not found');
    }
    return tenant;
  }

  @Post()
  async createTenant(@Body() tenant: Tenant): Promise<Tenant> {
    return this.tenantsService.create(tenant);
  }
  @Put(':id')
  async updateTenant(@Param('id') id: string, @Body() tenant: Tenant): Promise<Tenant> {
    const updatedTenant = await this.tenantsService.update(id, tenant);
    if (!updatedTenant) {
      throw new NotFoundException('Tenant not found');
    }
    return updatedTenant;
  }
  @Delete(':id')
  async deleteTenant(@Param('id') id:string): Promise<Tenant>{
    const deletedTenant = await this.tenantsService.delete(id);
    if(!deletedTenant){
      throw new NotFoundException('Tenant not found');
    }
    return deletedTenant;
  }
}
