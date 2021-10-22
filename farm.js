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

// #1 calculate the costs for a crop
const getCostsForCrop = (crops) => {
    const costsForCrop = crops.crop.cost * crops.numCrops;
    return costsForCrop;
};

// #2 calculate the revenue for a crop (without environmental factors)
const getRevenueForCrop = (crops) => {
    const revenueForCrop = crops.crop.salesprice * crops.numCrops;
    return revenueForCrop;
};

// #3 calculate the profit for a crop (without environmental factors)
const getProfitForCrop = (crops) => {
    const profitForCrop = getRevenueForCrop(crops) - getCostsForCrop(crops);
    return profitForCrop;
};

// #4 calculate the profit for multiple crops (without environmental factors)
const getTotalProfit = (crops) => {
    const cropsArray = crops.crops;
    const total = cropsArray.reduce((currentTotal, crop) => {
        const profitForCrop = getProfitForCrop(crop);
        console.log(profitForCrop);
        return profitForCrop + currentTotal;
    }, 0)
    return total;
};

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
};