import Product from "./product";

export interface BannerLogo {
  image: string;
  link: string;
  name: string;
}

export interface SubCategory {
  name: string;
  id: string;
  href: string;
  next_category_call_id: string;
  thumb: string;
  note: string;
}

export interface Category {
  name: string;
  id: string;
  href: string;
  thumb: string;
  sub_category: SubCategory[];
  csv_sub_category: string;
  note: string;
}

export interface OfferProducts {
  products: Product[];
}

export default interface Data {
  status: boolean;
  lists: any[];
  thumb: string;
  banner_logos: BannerLogo[];
  categories: Category[];
  offer_show: string;
  offer_products: OfferProducts;
}

