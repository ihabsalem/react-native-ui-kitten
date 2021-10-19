export interface Store {
  store_id: string;
  name: string;
  email: string;
  telephone: string;
  fax: string;
  tax: string;
  vendor_id: string;
  address: string;
  zipcode: string;
  city_id: string;
  latitude: string;
  longitude: string;
  logo: string;
  big_logo: string;
  banner_logo: string;
  delivery_date_time_status: string;
  delivery_time_diff: string;
  home_delivery_timeslots: string;
  store_pickup_timeslots: string;
  status: string;
  min_order_amount: string;
  min_order_cod: string;
  commision: string;
  cost_of_delivery: string;
  delivery_by_owner: string;
  date_added: string;
  store_zipcode: string;
  store_type_ids: string;
  id: string;
  image: string;
  rating: number;
  review_count: number;
  store_note: string;
  store_detail_one: string;
  store_detail_two: string;
}

export interface StoreList {
  name: string;
  stores: Store[];
}

export interface IStores {
  filter: string;
  store_lists: StoreList[];
}

