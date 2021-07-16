import mongoose, { Model, Schema, Types } from 'mongoose';

import m from '../../../utils/mongoose';
const MsBlogDB = m.msBlog;

interface CommentType {
  thumbnail: string;
  writer: string;
  comment: string;
}

export interface CommentListDocument extends CommentType, mongoose.Document {}
type CommentListModel = Model<CommentListDocument>

/* eslint-disable */
const CommentListSchema = new Schema<CommentListDocument>(
  {
    thumbnail: String,
    writer: String,
    comment: String,
  },
  {
    timestamps: true,
  },
);

export default MsBlogDB.model<CommentListDocument, CommentListModel>('Commentlist', CommentListSchema);