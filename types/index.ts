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
