import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class HhData {
  @Prop()
  count: number;

  @Prop()
  juniorSalary: number;

  @Prop()
  middleSalary: number;

  @Prop()
  seniorSalary: number;
}

class TopPageAdvantage {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const TopPageAdvantageSchema =
  SchemaFactory.createForClass(TopPageAdvantage);

@Schema({ timestamps: true })
export class TopPageModel {
  @Prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;

  @Prop()
  secondCategory: string;

  @Prop({ unique: true })
  alias: string;

  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop({ type: HhData, _id: false })
  hh?: HhData;

  @Prop({ type: [TopPageAdvantageSchema], _id: false })
  advantages: TopPageAdvantage[];

  @Prop()
  seoText: string;

  @Prop()
  tagsTitle: string;

  @Prop([String])
  tags: string[];
}

export type TopPageModelDocument = HydratedDocument<TopPageModel>;
export const TopPageSchema = SchemaFactory.createForClass(TopPageModel);
