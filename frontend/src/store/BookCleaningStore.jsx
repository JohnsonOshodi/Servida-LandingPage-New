import { create } from 'zustand';

export const useBookingStore = create((set, get) => ({
  // Core state
  selectedTier: 'basic',
  frequency: 'onceOff',
  rooms: {
    bedrooms: 1,
    sittingRooms: 1,
    bathrooms: 1,
    kitchens: 1,
    floors: 1,
    balconies: 1,
    stores: 1
  },
  extraStaff: 0,
  hasRunningWater: true,

  // Pricing configuration
  basePrices: {
    basic: {
      onceOff: 15000,
      onceAWeek: 25000,
      twiceAWeek: 35000,
      thriceAWeek: 40000,
      everyday: 60000
    },
    deep: {
      onceOff: 40000,
      // Add other deep cleaning frequencies as needed
    }
  },

  // Actions
  setTier: (tier) => set({ selectedTier: tier }),
  setFrequency: (frequency) => set({ frequency }),
  updateRoom: (type, value) => set((state) => ({
    rooms: {
      ...state.rooms,
      [type]: Math.max(1, value)
    }
  })),
  setExtraStaff: (count) => set({ extraStaff: Math.max(0, count) }),
  setWaterAvailability: (hasWater) => set({ hasRunningWater: hasWater }),

  getTotalPrice: () => {
    const state = get();
    
    // Base price calculation
    const basePrice = state.basePrices[state.selectedTier][state.frequency] || 0;
    
    // Extra rooms calculation
    // const roomEntries = Object.values(state.rooms);
    // const extraRooms = roomEntries.reduce((acc, curr) => acc + Math.max(0, curr - 1), 0);
    // const roomsCost = extraRooms * 2000;

    const extraBedrooms = Math.max(0, state.rooms.bedrooms - 1);
    const roomsCost = extraBedrooms * 2000;
    
    // Additional charges
    const staffCost = state.extraStaff * 15000;
    const waterPenalty = state.hasRunningWater ? 0 : 5000;

    return basePrice + roomsCost + staffCost + waterPenalty;
  }
}));