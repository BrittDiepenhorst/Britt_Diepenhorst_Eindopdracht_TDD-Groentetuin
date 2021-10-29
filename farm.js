// functions

// calculate the yield for a plant
const getYieldForPlant = (plant, environmentFactors) => {
    if (!environmentFactors) {
        return plant.yield;
    }
    let sun;
    let rain;
    let wind;
    if (!environmentFactors.sun) {
        sun = 1;
    } else {
        switch (environmentFactors.sun) {
            case "low":
                sun = (100 - (Math.abs(plant.factors.sun.low))) / 100;
                break;
            case "medium":
                if (plant.factors.sun.medium === 0) { sun = 1 } else { plant.factors.sun.medium / 100 };
                break;
            case "high":
                sun = (100 + (plant.factors.sun.high)) / 100;
        }
    }

    if (!environmentFactors.rain) {
        rain = 1;
    } else {
        switch (environmentFactors.rain) {
            case "low":
                rain = (100 - (Math.abs(plant.factors.rain.low))) / 100;
                break;
            case "medium":
                if (plant.factors.rain.medium === 0) { rain = 1 } else { plant.factors.rain.medium / 100 };
                break;
            case "high":
                rain = (100 + (plant.factors.rain.high)) / 100;
        }
    }

    if (!environmentFactors.wind) {
        wind = 1;
    } else {
        switch (environmentFactors.wind) {
            case "low":
                wind = (100 - (Math.abs(plant.factors.wind.low))) / 100;
                break;
            case "medium":
                if (plant.factors.wind.medium === 0) { wind = 1 } else { plant.factors.wind.medium / 100 };
                break;
            case "high":
                wind = (100 + (plant.factors.wind.high)) / 100;
        }
    }

    const yieldForPlant = plant.yield * sun * rain * wind;
    // console.log(yieldForPlant);
    return yieldForPlant;
};


// calculate the yield for a crop
// const getYieldForCrop = (input) => {
//     const yieldForCrop = (input.numCrops * input.crop.yield);
//     return yieldForCrop;
// };

const getYieldForCrop = (input, environmentFactors) => {
    const yieldForCrop = (input.numCrops * getYieldForPlant(input.crop, environmentFactors));
    return yieldForCrop;
};

// calculate the total yield
// const getTotalYield = (crops) => {
//     const cropsArray = crops.crops;
//     const total = cropsArray.reduce((currentTotal, crop) => {
//         const totalYieldOneCrop = crop.crop.yield * crop.numCrops;
//         return totalYieldOneCrop + currentTotal;
//     }, 0)
//     return total;
// };

const getTotalYield = (crops, environmentFactors) => {
    const cropsArray = crops.crops;
    const total = cropsArray.reduce((currentTotal, crop) => {
        const totalYieldOneCrop = getYieldForPlant(crop.crop, environmentFactors) * crop.numCrops;
        return totalYieldOneCrop + currentTotal;
    }, 0)
    return total;
};


// calculate the costs for a crop
const getCostsForCrop = (crops) => {
    const costsForCrop = crops.crop.cost * crops.numCrops;
    return costsForCrop;
};

// calculate the revenue for a crop (without environmental factors)
const getRevenueForCrop = (crops) => {
    const revenueForCrop = crops.crop.salesprice * crops.numCrops;
    return revenueForCrop;
};

// calculate the profit for a crop (without environmental factors)
const getProfitForCrop = (crops) => {
    const profitForCrop = getRevenueForCrop(crops) - getCostsForCrop(crops);
    return profitForCrop;
};

// calculate the profit for multiple crops (without environmental factors)
const getTotalProfit = (crops) => {
    const cropsArray = crops.crops;
    const total = cropsArray.reduce((currentTotal, crop) => {
        const profitForCrop = getProfitForCrop(crop);
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