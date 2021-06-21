import { Types } from 'mongoose';
// import Member from '../../models/mongoose/awesomebot/Member';
import MemberModel, { MemberDocument } from '../../models/mongoose/awesomebot/Member';

export default class Member {
  static async getMemberList() {
    const list = await MemberModel.find().lean();
    return list;
  }

  static async getMember(memberId: Types.ObjectId) {
    const member = await MemberModel.findById(memberId);
    return member;
  }

  static async updateMemberState({ memberId, state }: { memberId: Types.ObjectId; state: string }) {
    const _id = memberId;
    const member = await MemberModel.findByIdAndUpdate(
      _id,
      {
        $set: {
          state: state,
        },
      },
      { new: true },
    );
    return member;
  }

  static async updateMemberConfig({ memberId, config }: { memberId: Types.ObjectId; config: any }) {
    const _id = memberId;
    const member = await MemberModel.findByIdAndUpdate(
      _id,
      {
        $set: {
          config: config,
        },
      },
      { new: true },
    );
    return member;
  }

  static async updateMemberLicense({ memberId, license }: { memberId: Types.ObjectId; license: string }) {
    const _id = memberId;
    const member = await MemberModel.findByIdAndUpdate(
      _id,
      {
        $set: {
          license: license,
        },
      },
      { new: true },
    );
    return member;
  }
}
