import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tenant, TenantDocument } from './tenant.model';

@Injectable()
export class TenantService {
    constructor(@InjectModel(Tenant.name) private tenantModel: Model<TenantDocument>) { }
    async findAll(): Promise<Tenant[]> {
        return this.tenantModel.find().exec();
    }
    async findById(id: string): Promise<Tenant> {
        return this.tenantModel.findById(id).exec();
    }
    async create(tenant: Tenant): Promise<Tenant> {
        const newTenant = new this.tenantModel(tenant);
        return newTenant.save();
    }
    async update(id: string, tenant: Tenant): Promise<Tenant> {
        return this.tenantModel.findByIdAndUpdate(id, tenant, { new: true }).exec();
    }
    async delete(id: string): Promise<Tenant> {
        return this.tenantModel.findByIdAndRemove(id).exec();
    }
}
// constructor(@InjectModel)