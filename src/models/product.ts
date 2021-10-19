export default interface Product {
    key: string;
    qty_in_cart: number;
    variations?: any;
    store_product_variation_id: number;
    product_id: string;
    product_store_id: string;
    default_variation_name: string;
    thumb: string;
    name: string;
    unit: string;
    description: string;
    price: string;
    special: string;
    percent_off: string;
    tax: string;
    minimum: string;
    rating: number;
    href: string;
  }