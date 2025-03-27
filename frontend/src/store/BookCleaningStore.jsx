import { create } from "zustand";

export const useBookingStore = create((set, get) => ({
  currentStep: 1, 

  formData: {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    landmark: "",
    selectedTier: "basic",
    frequency: "onceOff",
    rooms: {
      bedrooms: 1,
      sittingRooms: 1,
      bathrooms: 1,
      kitchens: 1,
      floors: 1,
      balconies: 1,
      stores: 1,
    },
    extraStaff: 0,
    hasRunningWater: true,
    cleaningPlan: "",
    extraInfo: "",
    hasCleaningEquipment: true,
    contactPreference: "",
    heardAboutUs: [],
    preferredStartTime: "", 
    totalPrice: 0, 
    specialNote: "",  
    hasDependents: false, 
  },

  setFormData: (update) => {
    set((state) => {
        const newFormData =
            typeof update === "function" ? update(state.formData) : update;

        return {
            formData: {
                ...newFormData,
                cleaningPlan: newFormData.cleaningPlan || newFormData.selectedTier,
                extraInfo: newFormData.extraInfo?.trim() || "N/A",
                preferredStartTime: newFormData.preferredStartTime?.trim() || "Not Specified",
                contactPreference: newFormData.contactPreference?.trim() || "Not Provided",
            },
            totalPrice: get().calculateTotalPrice(newFormData), 

          };
    });
},
   calculateTotalPrice: (formData) => {
    const state = get();
    const basePrices = state.basePrices;

    if (!formData.selectedTier || !formData.frequency || !basePrices[formData.selectedTier]) {
      console.log("⚠️ Invalid Plan or Frequency. Returning 0.");
      return 0;
    }

    const basePrice = basePrices[formData.selectedTier][formData.frequency] || 0;
    const extraBedrooms = Math.max(0, formData.rooms.bedrooms - 1);
    const roomsCost = extraBedrooms * 2000;
    const staffCost = formData.extraStaff * 15000;
    const waterPenalty = formData.hasRunningWater ? 0 : 5000;

    const newTotalPrice = basePrice + roomsCost + staffCost + waterPenalty;

    console.log(`💰 Calculated Total Price: ${newTotalPrice} (Plan: ${formData.selectedTier}, Frequency: ${formData.frequency})`);
    return newTotalPrice;
  },

  getTotalPrice: () => {
    const price = get().calculateTotalPrice(get().formData);
    console.log(`💰 Updated Total Price: ${price}`);
    return price;
  },

  setCleaningPlan: (plan) => {
    console.log(`🛠 Setting Cleaning Plan: ${plan}`);
    set((state) => {
      const updatedFormData = { 
        ...state.formData, 
        selectedTier: plan,
        cleaningPlan: plan  
      };
      return {
        formData: updatedFormData,
        totalPrice: get().calculateTotalPrice(updatedFormData),
      };
    });
  },
  

  setFrequency: (frequency) => {
    console.log(`🛠 Setting Cleaning Frequency: ${frequency}`);
    set((state) => {
      const updatedFormData = { ...state.formData, frequency };
      return {
        formData: updatedFormData,
        totalPrice: get().calculateTotalPrice(updatedFormData),
      };
    });
  },

  updateRooms: (roomType, value) => {
    set((state) => {
      const updatedRooms = { ...state.formData.rooms, [roomType]: value };
      const updatedFormData = { ...state.formData, rooms: updatedRooms };
      return {
        formData: updatedFormData,
        totalPrice: get().calculateTotalPrice(updatedFormData),
      };
    });
  },

  toggleWater: () => {
    set((state) => {
      const updatedFormData = { ...state.formData, hasRunningWater: !state.formData.hasRunningWater };
      return {
        formData: updatedFormData,
        totalPrice: get().calculateTotalPrice(updatedFormData),
      };
    });
  },

  setCleaningTime: (time) => {
    console.log(`⏰ Setting Cleaning Time: ${time}`);
    set((state) => ({
      formData: { ...state.formData, cleaningTime: time }
    }));
  },

  setReferralSource: (source) => {
    set((state) => ({
      formData: { ...state.formData, heardAboutUs: source },
    }));
  },
  
  basePrices: {
    basic: {
      onceOff: 15000,
      onceAWeek: 25000,
      twiceAWeek: 35000,
      thriceAWeek: 40000,
      everyday: 60000,
    },
    deep: {
      onceOff: 40000,
      weekly: 50000,
      biweekly: 70000,
      monthly: 90000,
    },
  },
}));
