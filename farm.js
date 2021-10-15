// functions
const getYieldForPlant = (plant) => {
    const result = plant.yield;
    return result;
};

const getYieldForCrop = (input) => {
    const result = (input.numCrops * input.crop.yield);
    return result;
};

const getTotalYield = (crops) => {
    console.log(crops);
    const result = (crops.numCrops * crops.crop.yield);
    return result;
};
getTotalYield();

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield
};