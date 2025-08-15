import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MSchema } from 'mongoose';
import { ProductModel } from 'src/product/product.model';

@Schema({ timestamps: true })
export class ReviewModel {
  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop({ type: MSchema.Types.ObjectId, ref: ProductModel.name })
  productId: ProductModel;
}

export type ReviewModelDocument = HydratedDocument<ReviewModel>;
export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);
