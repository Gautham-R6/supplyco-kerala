import { Product } from "../types";

export interface SoccerTeamState {
  teamName: string;
  goals: number;                   // Goals scored in latest match (reg/extra time)
  isKnockedOut: boolean;          // If true, discount drops to 0% immediately
  matchEnded: boolean;            // Discount activates immediately at match end
  nextMatchKickedOff: boolean;    // Valid exactly until next match kicks off
}

// Default initial state for Soccer Eleven pairs
export const INITIAL_SOCCER_TEAMS: SoccerTeamState[] = [
  { teamName: "Argentina", goals: 3, isKnockedOut: false, matchEnded: true, nextMatchKickedOff: false }, // 3% off Sabari Payasam Mix
  { teamName: "Brazil", goals: 2, isKnockedOut: false, matchEnded: true, nextMatchKickedOff: false }, // 2% off Sabari Turmeric Powder
  { teamName: "Germany", goals: 4, isKnockedOut: false, matchEnded: true, nextMatchKickedOff: false }, // 4% off Sabari Appam Powder
  { teamName: "France", goals: 1, isKnockedOut: false, matchEnded: true, nextMatchKickedOff: false }, // 1% off Sabari Gold Tea
  { teamName: "England", goals: 2, isKnockedOut: false, matchEnded: true, nextMatchKickedOff: false }, // 2% off Sabari Salt
  { teamName: "Spain", goals: 5, isKnockedOut: false, matchEnded: true, nextMatchKickedOff: false }, // 5% off Sabari Puttu Powder
  { teamName: "Portugal", goals: 0, isKnockedOut: false, matchEnded: true, nextMatchKickedOff: false }, // 0% off Sabari Chilli Powder
  { teamName: "Netherlands", goals: 2, isKnockedOut: false, matchEnded: true, nextMatchKickedOff: false }, // 2% off Sabari Sambar Powder
  { teamName: "Belgium", goals: 1, isKnockedOut: true, matchEnded: true, nextMatchKickedOff: false }, // Eliminated: 0% off Sabari Super Fine Dust Tea
  { teamName: "Croatia", goals: 3, isKnockedOut: false, matchEnded: false, nextMatchKickedOff: false }, // Not ended yet: 0% off Sabari Coconut Oil
  { teamName: "Morocco", goals: 2, isKnockedOut: false, matchEnded: true, nextMatchKickedOff: true }, // Next match kicked off: 0% off Sabari Hotel Blend Tea
];

/**
 * Calculates a team's active Soccer Eleven discount percentage based on criteria:
 * - Must not be knocked out
 * - Match must have ended
 * - Next match must not have kicked off yet
 */
export function getSoccerTeamDiscount(team: SoccerTeamState): number {
  if (team.isKnockedOut) return 0;
  if (!team.matchEnded) return 0;
  if (team.nextMatchKickedOff) return 0;
  return team.goals; // e.g. 3 goals = 3% discount
}

export interface CalculatedPrice {
  realMrp: number;
  supplycoMrp: number;
  offerPrice: number;
  isOfferActive: boolean;
  baseActivePrice: number;       // active price before Soccer Eleven discount
  soccerDiscountPct: number;    // Soccer Eleven discount percentage
  soccerDiscountAmt: number;    // Discount amount from soccer in rupees
  finalPrice: number;           // Final purchasing price
  savings: number;              // Total money saved compared to Real MRP
  isExpired: boolean;
  offerExpiresAt: string | null;
  supplycoDeduction: number;
  specialOfferDiscount: number;
  finalNet: number;
}

/**
 * Computes all tiered pricing details including the Soccer Eleven campaign.
 */
export function calculateProductPrice(product: Product, soccerTeams: SoccerTeamState[] = INITIAL_SOCCER_TEAMS): CalculatedPrice {
  // 1. Real MRP: The standard retail price
  const realMrp = product.real_mrp ?? product.mrp ?? 0;
  
  // 2. Supplyco MRP: The discounted price offered by Supplyco (Real MRP minus standard Supplyco deduction)
  const supplycoMrp = product.supplyco_mrp ?? product.price ?? 0;
  const supplycoDeduction = Math.max(0, realMrp - supplycoMrp);

  const rawOfferPrice = product.offer_price ?? null;
  const offerExpiresAt = product.offer_expires_at ?? null;
  let isExpired = false;
  
  if (offerExpiresAt) {
    try {
      const expirationDate = new Date(offerExpiresAt);
      isExpired = expirationDate.getTime() < Date.now();
    } catch {
      isExpired = false;
    }
  }

  // Offer is active if rawOfferPrice is positive number and NOT expired
  const isOfferActive = rawOfferPrice !== null && rawOfferPrice > 0 && !isExpired;
  
  // Determine base active price (Scenario A vs Scenario B)
  const baseActivePrice = isOfferActive && rawOfferPrice !== null ? rawOfferPrice : supplycoMrp;

  // Apply Special Campaign: "Soccer Eleven" (ONLY for category === 'sabari')
  let soccerDiscountPct = 0;
  if (product.category === "sabari" && product.soccer_eleven_team) {
    const matchedTeam = soccerTeams.find(
      (t) => t.teamName.toLowerCase() === product.soccer_eleven_team?.toLowerCase()
    );
    if (matchedTeam) {
      const baseDiscount = getSoccerTeamDiscount(matchedTeam);
      
      // Scenario B: Discount equals double the number of goals scored by Brazil, exclusively on Sabari Tea
      if (matchedTeam.teamName.toLowerCase() === "brazil" && product.id === "sab_tea") {
        soccerDiscountPct = baseDiscount * 2;
      } else {
        // Scenario A: Discount equals number of goals scored by Argentina (on Sabari Coconut Oil) or other standard 1:1 pairings
        soccerDiscountPct = baseDiscount;
      }
    }
  }

  const soccerDiscountAmt = baseActivePrice * (soccerDiscountPct / 100);

  // 3. Offer Price: The price after applying a special offer discount to the Supplyco MRP.
  // Special Offer Discount includes active direct offer price reduction and campaign-based soccer discounts
  const specialOfferDiscount = (supplycoMrp - baseActivePrice) + soccerDiscountAmt;
  const offerPrice = Math.max(0, supplycoMrp - specialOfferDiscount);

  // 4. Final Net: This must always equal the Offer Price
  const finalNet = offerPrice;
  const finalPrice = finalNet;
  const savings = Math.max(0, realMrp - finalPrice);

  return {
    realMrp,
    supplycoMrp,
    offerPrice,
    isOfferActive,
    baseActivePrice,
    soccerDiscountPct,
    soccerDiscountAmt,
    finalPrice,
    savings,
    isExpired,
    offerExpiresAt,
    supplycoDeduction,
    specialOfferDiscount,
    finalNet
  };
}
