import { Product, StoreLocation, UserProfile } from "./types";

export const STORES: StoreLocation[] = [
  {
    id: "tvm_eastfort",
    name: "Supplyco Supermarket, East Fort",
    nameMl: "ഈസ്റ്റ് ഫോർട്ട് സൂപ്പർമാർക്കറ്റ്, തിരുവനന്തപുരം",
    location: "Trivandrum",
    locationMl: "തിരുവനന്തപുരം",
    type: "Supermarket"
  },
  {
    id: "ekm_mgroad",
    name: "Maveli Store, MG Road, Ernakulam",
    nameMl: "മാവേലി സ്റ്റോർ, എം.ജി റോഡ്, എറണാകുളം",
    location: "Ernakulam",
    locationMl: "എറണാകുളം",
    type: "Maveli Store"
  },
  {
    id: "kzk_palayam",
    name: "Palayam Hypermarket, Kozhikode",
    nameMl: "പാളയം ഹൈപ്പർമാർക്കറ്റ്, കോഴിക്കോട്",
    location: "Kozhikode",
    locationMl: "കോഴിക്കോട്",
    type: "Hypermarket"
  },
  {
    id: "tsr_round",
    name: "Swaraj Round Outlet, Thrissur",
    nameMl: "സ്വരാജ് റൗണ്ട് ഔട്ട്ലെറ്റ്, തൃശൂർ",
    location: "Thrissur",
    locationMl: "തൃശൂർ",
    type: "Sovereign Outlet"
  }
];

export const INITIAL_USER: UserProfile = {
  fullName: "Anandhu K.",
  email: "anandhu.k@example.com",
  phone: "+91 98765 43210",
  dob: "1988-05-12",
  addressLine1: "TC 12/345, Kowdiar PO",
  city: "Trivandrum",
  district: "Thiruvananthapuram",
  state: "Kerala",
  pincode: "695003",
  isVerified: true,
  activeStoreId: "tvm_eastfort",
  notificationsEnabled: true,
  theme: "vintage",
  language: "bilingual",
  rationCardNumber: "1609124850",
  rationCardType: "PHH"
};

export const PRODUCTS: Product[] = [
  // 13 SUBSIDIZED AND STANDARD GROCERIES
  {
    id: "gro_jaya_rice",
    name: "Jaya Rice (Subsidy)",
    nameMl: "ജയ അരി (സബ്സിഡി)",
    category: "groceries",
    price: 25.0,
    mrp: 42.0,
    isSubsidy: true,
    unit: "1 kg",
    aisle: "Aisle A1",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Subsidized Premium Sortex clean Jaya rice for ration card holders (Ceiling: 5kg per month)."
  },
  {
    id: "gro_matta_rice",
    name: "Matta Rice (Subsidy)",
    nameMl: "മട്ട അരി (സബ്സിഡി)",
    category: "groceries",
    price: 25.0,
    mrp: 45.0,
    isSubsidy: true,
    unit: "1 kg",
    aisle: "Aisle A1",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Kerala taste traditional Matta Rice under Food & Civil Supplies subsidy (Ceiling: 5kg per month)."
  },
  {
    id: "gro_kuruva_rice",
    name: "Kuruva Rice (Subsidy)",
    nameMl: "കുറുവ അരി (സബ്സിഡി)",
    category: "groceries",
    price: 25.0,
    mrp: 44.0,
    isSubsidy: true,
    unit: "1 kg",
    aisle: "Aisle A2",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Subsidized daily-use premium Kurva rice for registered households."
  },
  {
    id: "gro_pachari",
    name: "Raw Rice / Pachari (Subsidy)",
    nameMl: "പച്ചരി (സബ്സിഡി)",
    category: "groceries",
    price: 23.0,
    mrp: 36.0,
    isSubsidy: true,
    unit: "1 kg",
    aisle: "Aisle A2",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Raw white rice subsidized by civil department for making flour and traditional Appams."
  },
  {
    id: "gro_green_gram",
    name: "Green Gram / Cherupayar (Subsidy)",
    nameMl: "ചെറുപയർ (സബ്സിഡി)",
    category: "groceries",
    price: 74.0,
    mrp: 110.0,
    isSubsidy: true,
    unit: "1 kg",
    aisle: "Aisle B1",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Subsidized whole green gram high in protein, sourced organically (Limit: 1kg per card)."
  },
  {
    id: "gro_urad_dal",
    name: "Black Gram / Uzhunnu (Subsidy)",
    nameMl: "ഉഴുന്ന് (സബ്സിഡി)",
    category: "groceries",
    price: 66.0,
    mrp: 140.0,
    isSubsidy: true,
    unit: "1 kg",
    aisle: "Aisle B2",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Polished black gram whole (Uzhunnu) for breakfast dishes. Highly subsidized."
  },
  {
    id: "gro_bengal_gram",
    name: "Bengal Gram / Kadala (Subsidy)",
    nameMl: "കടല (സബ്സിഡി)",
    category: "groceries",
    price: 43.0,
    mrp: 85.0,
    isSubsidy: true,
    unit: "1 kg",
    aisle: "Aisle B1",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Nutritious whole Bengal gram (Kala Chana) subsidized by Government of Kerala."
  },
  {
    id: "gro_toor_dal",
    name: "Toor Dal (Subsidy)",
    nameMl: "തുവരപ്പരിപ്പ് (സബ്സിഡി)",
    category: "groceries",
    price: 65.0,
    mrp: 145.0,
    isSubsidy: true,
    unit: "1 kg",
    aisle: "Aisle B2",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Premium Toor Dal split yellow pigeon peas at government rates."
  },
  {
    id: "gro_sugar",
    name: "White Sugar (Subsidy)",
    nameMl: "പഞ്ചസാര (സബ്സിഡി)",
    category: "groceries",
    price: 27.0,
    mrp: 45.0,
    isSubsidy: true,
    unit: "1 kg",
    aisle: "Aisle C1",
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Refined sweet crystallite white sugar under Civil Supplies Card pricing (Limit: 1kg per card)."
  },
  {
    id: "gro_coconut_oil",
    name: "Maveli Pure Coconut Oil",
    nameMl: "വെളിച്ചെണ്ണ (ഭക്ഷ്യ വകുപ്പ്)",
    category: "groceries",
    price: 135.0,
    mrp: 160.0,
    isSubsidy: false,
    unit: "1 L",
    aisle: "Aisle C2",
    image: "https://images.unsplash.com/photo-1621447508373-1335f5de1a2d?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Pure Maveli double-roasted coconut oil, high-grade local product."
  },

  // VEGETABLES
  {
    id: "veg_tomato",
    name: "Fresh Tomato",
    nameMl: "തക്കാളി",
    category: "vegetables",
    price: 34.0,
    mrp: 34.0,
    isSubsidy: false,
    unit: "1 kg",
    aisle: "Veg Stall",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Farm fresh juicy and ripe red tomatoes."
  },
  {
    id: "veg_red_onion",
    name: "Red Onion / Savala (Subsidy)",
    nameMl: "സവാള (സബ്സിഡി)",
    category: "vegetables",
    price: 45.0,
    mrp: 58.0,
    isSubsidy: true,
    unit: "1 kg",
    aisle: "Veg Stall",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Unpeeled rich red onions, subsidized and essential for traditional Kerala gravies."
  },
  {
    id: "veg_carrot",
    name: "Ooty Carrot",
    nameMl: "കാരറ്റ്",
    category: "vegetables",
    price: 62.0,
    mrp: 62.0,
    isSubsidy: false,
    unit: "1 kg",
    aisle: "Veg Stall",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Sweet, crunchy and vitamin-packed orange carrots."
  },
  {
    id: "veg_potato",
    name: "Urulakkizhangu",
    nameMl: "ഉരുളക്കിഴങ്ങ്",
    category: "vegetables",
    price: 28.0,
    mrp: 33.0,
    isSubsidy: false,
    unit: "1 kg",
    aisle: "Veg Stall",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Earthy raw potatoes, perfect for mashing or Sambar curry."
  },

  // SABARI BRANDS
  {
    id: "sab_tea",
    name: "Sabari Gold Tea",
    nameMl: "ശബരി ഗോൾഡ്‌ ടീ",
    category: "sabari",
    price: 125.0,
    mrp: 150.0,
    isSubsidy: false,
    unit: "500g Packet",
    aisle: "Aisle D1",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    subCategory: "Premium Beverages",
    description: "Finest quality strong tea dust blended perfectly by Supplyco for robust, refreshing mornings.",
    real_mrp: 150.0,
    supplyco_mrp: 125.0,
    offer_price: 110.0,
    offer_expires_at: new Date(Date.now() + 4 * 3600 * 1000).toISOString(), // Active offer (Brazil - Scenario B)
    soccer_eleven_team: "Brazil"
  },
  {
    id: "sab_oil",
    name: "Sabari Agmark Coconut Oil",
    nameMl: "ശബരി വെളിച്ചെണ്ണ",
    category: "sabari",
    price: 92.0,
    mrp: 112.0,
    isSubsidy: false,
    unit: "500ml Pouch",
    aisle: "Aisle C1",
    image: "https://images.unsplash.com/photo-1621447508373-1335f5de1a2d?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Government certified pure, grade-one coconut oil matching stringent Agmark quality guidelines.",
    real_mrp: 112.0,
    supplyco_mrp: 92.0,
    offer_price: 85.0,
    offer_expires_at: new Date(Date.now() + 6 * 3600 * 1000).toISOString(), // Active offer (Argentina - Scenario A)
    soccer_eleven_team: "Argentina"
  },
  {
    id: "sab_chilli",
    name: "Sabari Chilli Powder",
    nameMl: "ശബരി മുളകുപൊടി",
    category: "sabari",
    price: 48.0,
    mrp: 60.0,
    isSubsidy: false,
    unit: "250g Packet",
    aisle: "Aisle D3",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Vibrant and natural spiced red chilli powder ground under perfect hygiene conditions.",
    real_mrp: 60.0,
    supplyco_mrp: 48.0,
    offer_price: null, // Scenario B (Portugal)
    soccer_eleven_team: "Portugal"
  },
  {
    id: "sab_turmeric",
    name: "Sabari Turmeric Powder",
    nameMl: "ശബരി മഞ്ഞൾപ്പൊടി",
    category: "sabari",
    price: 55.0,
    mrp: 70.0,
    isSubsidy: false,
    unit: "250g Packet",
    aisle: "Aisle D3",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Classic high-quality golden turmeric powder rich in healing curcumin value.",
    real_mrp: 70.0,
    supplyco_mrp: 55.0,
    offer_price: null, // Scenario B (Brazil)
    soccer_eleven_team: "Brazil"
  },
  {
    id: "sab_coriander",
    name: "Sabari Coriander Powder",
    nameMl: "ശബരി മല്ലിപ്പൊടി",
    category: "sabari",
    price: 42.0,
    mrp: 50.0,
    isSubsidy: false,
    unit: "250g Packet",
    aisle: "Aisle D3",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Naturally scented coriander powder, finely ground to ensure long-lasting freshness.",
    real_mrp: 50.0,
    supplyco_mrp: 42.0,
    offer_price: null
  },
  {
    id: "sab_mustard",
    name: "Sabari Mustard Seeds",
    nameMl: "ശബരി കടുക്",
    category: "sabari",
    price: 44.0,
    mrp: 55.0,
    isSubsidy: false,
    unit: "250g Packet",
    aisle: "Aisle D4",
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Raw black mustard seeds perfect for aromatic tempering of Kerala thorans.",
    real_mrp: 55.0,
    supplyco_mrp: 44.0,
    offer_price: null
  },
  {
    id: "sab_salt",
    name: "Sabari Iodized Salt",
    nameMl: "ശബരി ഉപ്പ്",
    category: "sabari",
    price: 10.0,
    mrp: 18.0,
    isSubsidy: false,
    unit: "1 kg Packet",
    aisle: "Aisle C3",
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Iodized refined dining salt refined fully under health parameters.",
    real_mrp: 18.0,
    supplyco_mrp: 10.0,
    offer_price: null, // Scenario B (England)
    soccer_eleven_team: "England"
  },
  {
    id: "sab_sambhar",
    name: "Sabari Sambar Powder",
    nameMl: "ശബരി സാമ്പാർ പൊടി",
    category: "sabari",
    price: 30.0,
    mrp: 38.0,
    isSubsidy: false,
    unit: "100g Packet",
    aisle: "Aisle D3",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Authentic Sabari blend spices to prepare warm, tasty, traditional Kerala Sambars.",
    real_mrp: 38.0,
    supplyco_mrp: 30.0,
    offer_price: 26.0,
    offer_expires_at: new Date(Date.now() + 5 * 3600 * 1000).toISOString(), // Active offer (Netherlands)
    soccer_eleven_team: "Netherlands"
  },
  {
    id: "sab_payasam_mix",
    name: "Sabari Payasam Mix",
    nameMl: "ശബരി പായസം മിക്സ്",
    category: "sabari",
    price: 65.0,
    mrp: 90.0,
    isSubsidy: false,
    unit: "300g Packet",
    aisle: "Aisle D2",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Delicious instant ready-to-cook sweet and creamy Payasam dessert base.",
    real_mrp: 90.0,
    supplyco_mrp: 75.0,
    offer_price: 65.0,
    offer_expires_at: new Date(Date.now() + 8 * 3600 * 1000).toISOString(), // Active offer (Argentina)
    soccer_eleven_team: "Argentina"
  },
  {
    id: "sab_appam_powder",
    name: "Sabari Appam Powder",
    nameMl: "ശബരി അപ്പം പൊടി",
    category: "sabari",
    price: 39.0,
    mrp: 55.0,
    isSubsidy: false,
    unit: "1 kg Packet",
    aisle: "Aisle D2",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Finely ground, high quality rice flour for soft, fluffy traditional lace appams.",
    real_mrp: 55.0,
    supplyco_mrp: 45.0,
    offer_price: 39.0,
    offer_expires_at: new Date(Date.now() + 3 * 3600 * 1000).toISOString(), // Active offer (Germany)
    soccer_eleven_team: "Germany"
  },
  {
    id: "sab_puttu_powder",
    name: "Sabari Puttu Powder",
    nameMl: "ശബരി പുട്ടുപൊടി",
    category: "sabari",
    price: 42.0,
    mrp: 60.0,
    isSubsidy: false,
    unit: "1 kg Packet",
    aisle: "Aisle D2",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Coarsely ground roasted rice powder perfect for making delicious cylindrical steam cakes.",
    real_mrp: 60.0,
    supplyco_mrp: 48.0,
    offer_price: 42.0,
    offer_expires_at: new Date(Date.now() + 10 * 3600 * 1000).toISOString(), // Active offer (Spain)
    soccer_eleven_team: "Spain"
  },
  {
    id: "sab_super_fine_dust_tea",
    name: "Sabari SF Dust Tea",
    nameMl: "ശബരി സൂപ്പർ ഫൈൻ ഡസ്റ്റ് ടീ",
    category: "sabari",
    price: 120.0,
    mrp: 160.0,
    isSubsidy: false,
    unit: "500g Packet",
    aisle: "Aisle D1",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "High-grade super fine dust tea for extra strong, full-bodied aromatic catering tea.",
    real_mrp: 160.0,
    supplyco_mrp: 135.0,
    offer_price: 120.0,
    offer_expires_at: new Date(Date.now() + 1 * 365 * 24 * 3600 * 1000).toISOString(), // Active offer, but team is knocked out! (Belgium)
    soccer_eleven_team: "Belgium"
  },
  {
    id: "sab_hotel_blend_tea",
    name: "Sabari Hotel Blend Tea",
    nameMl: "ശബരി ഹോട്ടൽ ബ്ലെൻഡ് ടീ",
    category: "sabari",
    price: 99.0,
    mrp: 140.0,
    isSubsidy: false,
    unit: "1 kg Packet",
    aisle: "Aisle D1",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=400",
    inStock: true,
    description: "Rich commercial grade catering tea blend for quick brewing and superb color extraction.",
    real_mrp: 140.0,
    supplyco_mrp: 115.0,
    offer_price: 99.0,
    offer_expires_at: new Date(Date.now() + 2 * 3600 * 1000).toISOString(), // Active offer, but next match kicked off (Morocco)
    soccer_eleven_team: "Morocco"
  }
];

// Connects the frontend directly to your running Python backend
fetch("https://supplyco-backend-3o29.onrender.com/subsidy")
  .then(res => res.json())
  .then(liveData => {
    // Check if live data actually arrived before touching the array!
    if (Array.isArray(liveData) && liveData.length > 0) {

      const mappedData = liveData.map((item: any) => {
        // Precise Category Mapping based on Name strings or flags
        let assignedCategory = "groceries";
        const lowerName = (item.name || "").toLowerCase();

        if (lowerName.includes("sabari")) {
          assignedCategory = "sabari";
        } else if (
          lowerName.includes("tomato") ||
          lowerName.includes("onion") ||
          lowerName.includes("savala") ||
          lowerName.includes("carrot") ||
          lowerName.includes("potato") ||
          lowerName.includes("urulakkizhangu")
        ) {
          assignedCategory = "vegetables";
        }

        return {
          id: item.id || `cloud_${Math.random().toString(36).substr(2, 9)}`,
          name: item.name || "Unknown Product",
          nameMl: item.name_malayalam || item.name || "",
          category: assignedCategory,
          price: Number(item.price) || 0,
          mrp: item.price ? Number(item.price) * 1.25 : 0,
          isSubsidy: item.is_subsidy !== undefined ? item.is_subsidy : false,
          unit: item.unit || "1 kg",
          aisle: assignedCategory === "vegetables" ? "Veg Stall" : "Aisle A1",
          image: item.image_url || "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
          inStock: true,
          description: item.offer_text || "Fresh stock direct from Supplyco hub.",
          // Strict Fail-Safe fallbacks to eliminate the Sabari View Crash completely:
          real_mrp: item.price ? Number(item.price) * 1.25 : 0,
          supplyco_mrp: Number(item.price) || 0,
          offer_price: item.offer_text ? Number(item.price) * 0.9 : null,
          offer_expires_at: item.offer_expires_at || new Date(Date.now() + 24 * 3600 * 1000).toISOString(),
          soccer_eleven_team: lowerName.includes("tea") ? "Brazil" : "Argentina"
        };
      });

      PRODUCTS.length = 0; // Clear safely now that mapping succeeded 
      PRODUCTS.push(...mappedData);
      console.log("Success: Cloud items fully parsed into layout schemas.");
    } else {
      console.log("Notice: Backend returned empty rows. Retaining local fallback design parameters.");
    }
  })
  .catch(e => {
    console.error("Critical: Network stream or parse routine collapsed:", e);
  });