import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// import { IsNotEmpty, IsEmail } from 'class-validator';

export type TenantDocument =  Tenant & Document;

@Schema()

export class Tenant{
    @Prop({ required: true })
    name:string;

    @Prop({ required: true })
    email:string;

    @Prop({ required: true })
    phone:string;
}
export const TenantSchema = SchemaFactory.createForClass(Tenant);