import mongoose, { Model, Schema, Types } from 'mongoose';

import m from '../../../utils/mongoose';
const AwesomeBotDB = m.awesomebot;

import { IMemberType } from 'member';

export interface MemberDocument extends IMemberType, mongoose.Document {}

interface MemberModel extends Model<MemberDocument> {
  findByName({ _id, name }: { _id: Types.ObjectId; name: string }): Promise<MemberDocument>;
}

/* eslint-disable */
const memberSchema = new Schema<MemberDocument>(
  {
    name: String,
    phone: String,
    email: String,
    country: String,
    password: {
      type: String,
      select: false,
    },
    state: String,
    license: String,
    provider: String,
    providerData: {
      siteId: String,
      partnerId: Number,
    },
    refreshToken: String,
    tutorial: {
      type: Boolean,
      default: false,
    },
    changePasswordAt: {
      type: Date,
    },
    dropMemberAt: {
      type: Date,
    },
    tryLoginCount: Number,
    tmpAuthCode: String,
    profileThumbnail: String,
    config: Object,
    customOptions: Object,
    authProvider: String,
  },
  {
    timestamps: true,
  },
);

memberSchema.statics.findByName = function ({ _id, name }: { _id: Types.ObjectId; name: string }) {
  return this.findOne({ _id, name });
};

export default AwesomeBotDB.model<MemberDocument, MemberModel>('Member', memberSchema);
