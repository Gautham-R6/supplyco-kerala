export interface Product {
  id: string;
  name: string;
  nameMl: string;
  category: "groceries" | "vegetables" | "sabari";
  price: number; // Current selling price (adjusted for subsidy if isSubsidy)
  mrp: number; // Typical market price
  isSubsidy: boolean;
  unit: string;
  aisle: string;
  image: string;
  inStock: boolean;
  description?: string;
  subCategory?: string;
  // Firestore dynamic fields
  real_mrp?: number;
  supplyco_mrp?: number;
  offer_price?: number;
  offer_expires_at?: string; // ISO String or Date
  soccer_eleven_team?: string; // Name of paired team (Argentina, Brazil, etc.)
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface UserProfile {
  username?: string;
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  addressLine1: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  isVerified: boolean;
  activeStoreId: string;
  notificationsEnabled: boolean;
  theme: "light" | "dark" | "vintage";
  language: "english" | "malayalam" | "bilingual";
  rationCardNumber?: string;
  rationCardType?: "AAY" | "PHH" | "NPS" | "NPNS";
}

export interface StoreLocation {
  id: string;
  name: string;
  nameMl: string;
  location: string;
  locationMl: string;
  type: string;
}

export type AppTab =
  | "loading"
  | "login"
  | "register"
  | "home"
  | "groceries"
  | "vegetables"
  | "sabari"
  | "cart"
  | "profile"
  | "settings"
  | "ai-saver";
