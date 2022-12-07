export interface Order {
  created_date: string;
  closing_date: string;
  listing_time: number;
  expiration_time: number;
  order_hash: string;
  protocol_data: ProtocolData;
  protocol_address: string;
  maker: Maker;
  taker: any;
  current_price: string;
  maker_fees: MakerFee[];
  taker_fees: any[];
  side: string;
  order_type: string;
  cancelled: boolean;
  finalized: boolean;
  marked_invalid: boolean;
  client_signature: string;
  relay_id: string;
  criteria_proof: any;
}

export interface ProtocolData {
  parameters: Parameters;
  signature: string;
}

export interface Parameters {
  offerer: string;
  offer: Offer[];
  consideration: Consideration[];
  startTime: string;
  endTime: string;
  orderType: number;
  zone: string;
  zoneHash: string;
  salt: string;
  conduitKey: string;
  totalOriginalConsiderationItems: number;
  counter: number;
}

export interface Offer {
  itemType: number;
  token: string;
  identifierOrCriteria: string;
  startAmount: string;
  endAmount: string;
}

export interface Consideration {
  itemType: number;
  token: string;
  identifierOrCriteria: string;
  startAmount: string;
  endAmount: string;
  recipient: string;
}

export interface Maker {
  user: number;
  profile_img_url: string;
  address: string;
  config: string;
}

export interface MakerFee {
  account: Account;
  basis_points: string;
}

export interface Account {
  user: number;
  profile_img_url: string;
  address: string;
  config: string;
}
