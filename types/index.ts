export type ProductType = {
  id: string;
  storeId: string;
  name: string;
  categoryId: string;
  price: string;
  isFeatured: boolean;
  isArchived: boolean;
  sizeId: string;
  colorId: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type BillboardType = {
  id: string;
  storeId: string;
  label: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CategoryType = {
  id: string;
  storeId: string;
  billboardId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ProductWithCategoryType = ProductType & {
  category: CategoryType;
};

export type Size = {
  id: string;
  storeId: string;
  name: string;
  value: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Color = {
  id: string;
  storeId: string;
  name: string;
  value: string;
  createdAt: Date;
  updatedAt: Date;
};

export type DetailProductType = ProductType & {
  category: CategoryType;
  size: Size;
  color: Color;
};

export type CartItemType = {
  id: string;
  imgUrl: string;
  color: string;
  size: string;
  name: string;
  price: string;
};
