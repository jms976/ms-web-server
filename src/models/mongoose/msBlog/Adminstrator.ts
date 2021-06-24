import mongoose, { Model, Schema, Types } from 'mongoose';

import m from '../../../utils/mongoose';
const MsBlogDB = m.msBlog;

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface IAdminType {
  fullName: string;
  email: string;
  password: string;
  googleId?: string;
  kakaoId?: string;
  pictuer: string;
  provider?: string;
}

export interface AdminstratorDocument extends IAdminType, mongoose.Document {}
interface AdminstratorModel extends Model<AdminstratorDocument> {
  findOneOrCreate({ condition, doc }: { condition: any; doc: any }): Promise<AdminstratorDocument>;
}

/* eslint-disable */
const AdminstratorSchema = new Schema<AdminstratorDocument>(
  {
    fullName: String,
    email: String,
    password: String,
    googleId: String,
    kakaoId: String,
    picture: String,
    provider: String,
  },
  {
    timestamps: true,
  },
);

AdminstratorSchema.statics.findOneOrCreate = async function findOneOrCreate({ condition, doc }: { condition: any; doc: any }) {
  const one = await this.findOne(condition);
  return one || this.create(doc);
};

export default MsBlogDB.model<AdminstratorDocument, AdminstratorModel>('Adminstrator', AdminstratorSchema);
