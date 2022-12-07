export interface Asset {
  id: number;
  num_sales: number;
  background_color: any;
  image_url: string;
  image_preview_url: string;
  image_thumbnail_url: string;
  image_original_url: string;
  animation_url: any;
  animation_original_url: any;
  name: any;
  description: any;
  external_link: any;
  asset_contract: AssetContract;
  permalink: string;
  collection: Collection;
  decimals: number;
  token_metadata: string;
  is_nsfw: boolean;
  owner: any;
  seaport_sell_orders: any;
  creator: Creator;
  traits: Trait[];
  last_sale: LastSale;
  top_bid: any;
  listing_date: any;
  supports_wyvern: boolean;
  rarity_data: RarityData;
  transfer_fee: any;
  transfer_fee_payment_token: any;
  token_id: string;
}

export interface AssetContract {
  address: string;
  asset_contract_type: string;
  created_date: string;
  name: string;
  nft_version: string;
  opensea_version: any;
  owner: number;
  schema_name: string;
  symbol: string;
  total_supply: any;
  description: string;
  external_link: string;
  image_url: string;
  default_to_fiat: boolean;
  dev_buyer_fee_basis_points: number;
  dev_seller_fee_basis_points: number;
  only_proxied_transfers: boolean;
  opensea_buyer_fee_basis_points: number;
  opensea_seller_fee_basis_points: number;
  buyer_fee_basis_points: number;
  seller_fee_basis_points: number;
  payout_address: string;
}

export interface Collection {
  banner_image_url: string;
  chat_url: any;
  created_date: string;
  default_to_fiat: boolean;
  description: string;
  dev_buyer_fee_basis_points: string;
  dev_seller_fee_basis_points: string;
  discord_url: string;
  display_data: DisplayData;
  external_url: string;
  featured: boolean;
  featured_image_url: string;
  hidden: boolean;
  safelist_request_status: string;
  image_url: string;
  is_subject_to_whitelist: boolean;
  large_image_url: string;
  medium_username: any;
  name: string;
  only_proxied_transfers: boolean;
  opensea_buyer_fee_basis_points: string;
  opensea_seller_fee_basis_points: string;
  payout_address: string;
  require_email: boolean;
  short_description: any;
  slug: string;
  telegram_url: any;
  twitter_username: string;
  instagram_username: any;
  wiki_url: any;
  is_nsfw: boolean;
  fees: Fees;
  is_rarity_enabled: boolean;
}

export interface DisplayData {
  card_display_style: string;
}

export interface Fees {
  seller_fees: SellerFees;
  opensea_fees: OpenseaFees;
}

export interface SellerFees {
  '0x229c487eaf50369e1ada49893a1ecddd4d513114': number;
}

export interface OpenseaFees {
  '0x0000a26b00c1f0df003000390027140000faa719': number;
}

export interface Creator {
  user: User;
  profile_img_url: string;
  address: string;
  config: string;
}

export interface User {
  username: string;
}

export interface Trait {
  trait_type: string;
  value: string;
  display_type: any;
  max_value: any;
  trait_count: number;
  order: any;
}

export interface LastSale {
  asset: Asset;
  asset_bundle: any;
  event_type: string;
  event_timestamp: string;
  auction_type: any;
  total_price: string;
  payment_token: PaymentToken;
  transaction: any;
  created_date: string;
  quantity: string;
}

export interface Asset {
  decimals: number;
  token_id: string;
}

export interface PaymentToken {
  symbol: string;
  address: string;
  image_url: string;
  name: string;
  decimals: number;
  eth_price: string;
  usd_price: string;
}

export interface RarityData {
  strategy_id: string;
  strategy_version: string;
  rank: number;
  score: number;
  calculated_at: string;
  max_rank: number;
  tokens_scored: number;
  ranking_features: RankingFeatures;
}

export interface RankingFeatures {
  unique_attribute_count: number;
}
