// functions
const getYieldForPlant = (plant) => {
    const result = plant.yield;
    return result;
};

const getYieldForCrop = (input) => {
    const result = (input.numCrops * 3);
    return result;
};

const getTotalYield = ({ crops }) => {
    const result = crops.crop * crops.numCrops;
    return result;
};

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield
};