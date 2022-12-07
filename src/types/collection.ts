export interface Collection {
  editors: string[];
  payment_tokens: PaymentToken[];
  primary_asset_contracts: PrimaryAssetContract[];
  traits: Traits;
  stats: Stats;
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

export interface Contract {
  collection: Collection;
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

export interface PaymentToken {
  id: number;
  symbol: string;
  address: string;
  image_url: string;
  name: string;
  decimals: number;
  eth_price: number;
  usd_price: number;
}

export interface PrimaryAssetContract {
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

export interface Traits {
  Clothing: Clothing;
  Earrings: Earrings;
  'Eye Colour': EyeColour;
  Emotion: Emotion;
  'Hair Style': HairStyle;
  Hat: Hat;
  Breed: Breed;
  Gender: Gender;
  Face: Face;
  Glasses: Glasses;
  Wings: Wings;
  Back: Back;
  Neck: Neck;
  'Eye Lightning': EyeLightning;
  Blood: Blood;
  Halo: Halo;
  Origin: Origin;
  Horns: Horns;
}

export interface Clothing {
  'bomber jacket': number;
  top: number;
  sweater: number;
  'high neck': number;
  'scarf top': number;
  suit: number;
  'fur jacket': number;
  kimono: number;
  dress: number;
  'ripped shirt': number;
  'maid outfit': number;
  spacesuit: number;
  'golden armour': number;
}

export interface Earrings {
  'ruby earrings': number;
  'timeless blue': number;
  'emerald earrings': number;
  'sapphire earrings': number;
  'timeless gold': number;
  'timeless purple': number;
  'timeless red': number;
  'timeless green': number;
  'gold earrings': number;
}

export interface EyeColour {
  purple: number;
  golden: number;
  green: number;
  blue: number;
  brown: number;
  red: number;
  heterochromia: number;
}

export interface Emotion {
  angry: number;
  happy: number;
  neutral: number;
  sad: number;
}

export interface HairStyle {
  'twin tails': number;
  'short spikes': number;
  'short cut': number;
  buzzcut: number;
  styled: number;
  messy: number;
  'long bangs': number;
  'equal length': number;
  tied: number;
  'twin buns': number;
}

export interface Hat {
  'baseball hat': number;
  beret: number;
  'oni mask': number;
  strawhat: number;
  crown: number;
  'iron mask': number;
}

export interface Breed {
  zombie: number;
  lich: number;
  human: number;
  jovian: number;
  sidhe: number;
}

export interface Gender {
  female: number;
  male: number;
}

export interface Face {
  cigarette: number;
  plaster: number;
  'black mask': number;
  'eye patch': number;
  'soul mask': number;
}

export interface Glasses {
  'aviator glasses': number;
  sunglasses: number;
  goggles: number;
  'round glasses': number;
  'regular glasses': number;
}

export interface Wings {
  'fairy wings': number;
  'demon wings': number;
  'angel wings': number;
}

export interface Back {
  'dual sword': number;
  bow: number;
  scythe: number;
  'broad sword': number;
  'soul sword': number;
  sword: number;
  headband: number;
  guitar: number;
  staff: number;
}

export interface Neck {
  medal: number;
  chain: number;
}

export interface EyeLightning {
  true: number;
}

export interface Blood {
  true: number;
}

export interface Halo {
  true: number;
}

export interface Origin {
  'the natural timeless': number;
  'the hidden timeless': number;
  'the hatred timeless': number;
  'the glowing timeless': number;
  'the bred timeless': number;
}

export interface Horns {
  'golden horns': number;
}

export interface Stats {
  one_hour_volume: number;
  one_hour_change: number;
  one_hour_sales: number;
  one_hour_sales_change: number;
  one_hour_average_price: number;
  one_hour_difference: number;
  six_hour_volume: number;
  six_hour_change: number;
  six_hour_sales: number;
  six_hour_sales_change: number;
  six_hour_average_price: number;
  six_hour_difference: number;
  one_day_volume: number;
  one_day_change: number;
  one_day_sales: number;
  one_day_sales_change: number;
  one_day_average_price: number;
  one_day_difference: number;
  seven_day_volume: number;
  seven_day_change: number;
  seven_day_sales: number;
  seven_day_average_price: number;
  seven_day_difference: number;
  thirty_day_volume: number;
  thirty_day_change: number;
  thirty_day_sales: number;
  thirty_day_average_price: number;
  thirty_day_difference: number;
  total_volume: number;
  total_sales: number;
  total_supply: number;
  count: number;
  num_owners: number;
  average_price: number;
  num_reports: number;
  market_cap: number;
  floor_price: number;
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
