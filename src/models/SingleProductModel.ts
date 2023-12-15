export interface ProductsApiResponse extends Array<SingleProductModel> {}

interface SingleProductModel {
  categories: string[];
  color: string[];
  createdAt: Date;
  desc: string;
  img: string;
  price: number;
  productNo: string;
  purchasedCount: number;
  quantity: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  size: string[];
  title: string;
  updatedAt: Date;
  _v: number;
  _id: string;
}
