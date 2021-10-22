// functions
const getYieldForPlant = (plant) => {
    const yieldForPlant = plant.yield;
    return yieldForPlant;
};

const getYieldForCrop = (input) => {
    const yieldForCrop = (input.numCrops * input.crop.yield);
    return yieldForCrop;
};

const getTotalYield = (crops) => {
    const cropsArray = crops.crops;
    const total = cropsArray.reduce((currentTotal, crop) => {
        const totalYieldOneCrop = crop.crop.yield * crop.numCrops
        return totalYieldOneCrop + currentTotal;
    }, 0)
    return total;
};

const getCostsForCrop = (crops) => {
    console.log(crops)
    const cropsArray = crops.crops;
    console.log(cropsArray);
    const total = cropsArray.reduce((currentTotal, crop) => {
        const costsForCrop = crop.crop.cost * crop.numCrops;
        return costsForCrop + currentTotal;
    }, 0)
    return total;
}

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop
};