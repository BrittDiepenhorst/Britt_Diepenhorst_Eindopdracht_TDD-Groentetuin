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
    const cropsArray = crops.crops;
    const total = cropsArray.reduce((currentTotal, crop) => {
        const costsForCrop = crop.crop.cost * crop.numCrops;
        return costsForCrop + currentTotal;
    }, 0)
    return total;
};

const getRevenueForCrop = (crops) => {
    const cropsArray = crops.crops;
    const total = cropsArray.reduce((currentTotal, crop) => {
        const revenueForCrop = crop.crop.salesprice * crop.numCrops;
        return revenueForCrop + currentTotal;
    }, 0)
    return total;
};

const getProfitForCrop = (crops) => {
    const cropsArray = crops.crops;
    const total = cropsArray.reduce((currentTotal) => {
        const profitForCrop = getRevenueForCrop(crops) - getCostsForCrop(crops);
        return profitForCrop + currentTotal;
    }, 0)
    return total;
}


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop
};