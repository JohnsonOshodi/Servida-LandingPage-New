function calculatePrice(basePrice, extraRooms = 0, extraStaff = 0, noRunningWater = false) {
    let finalPrice = basePrice;
    finalPrice += extraRooms * 2000;
    finalPrice += extraStaff * 10000;
    if (noRunningWater) {
      finalPrice += 5000;
    }
    return finalPrice;
  }
  
  module.exports = { calculatePrice };
  