const HouseDescription = require("../models/HouseDescription");

const calculateTotalPrice = (data) => {
  const {
    sittingRooms,
    rooms,
    bathrooms,
    kitchens,
    floors,
    balconies,
    stores,
    runningWater,
  } = data;

  let totalPrice =
    sittingRooms * 5000 +
    rooms * 7000 +
    bathrooms * 3000 +
    kitchens * 4000 +
    floors * 10000 +
    balconies * 2000 +
    stores * 3000;

  if (runningWater) {
    totalPrice += 5000;
  }

  return totalPrice;
};

exports.addHouseDescription = async (req, res) => {
  try {
    const totalPrice = calculateTotalPrice(req.body);
    const houseDescription = new HouseDescription({
      ...req.body,
      totalPrice,
    });

    await houseDescription.save();

    res.status(201).json({
      success: true,
      data: houseDescription,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
