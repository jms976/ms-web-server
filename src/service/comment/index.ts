import { Types } from 'mongoose';
import CommentListModel, { CommentListDocument } from '../../models/mongoose/msBlog/Commentlist';

export default class Comment {
  static async saveComment(data: any) {
    const comment = new CommentListModel(data);
    await comment.save();
    const list = await CommentListModel.find().lean();
    return list;
  }
}
