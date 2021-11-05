const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit } = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

// calculate the costs for a crop 
describe("getCostsForCrop", () => {
    test("getCostsForCrop", () => {
        const corn = {
            name: "corn",
            yield: 30,
            cost: 1,
        };
        const crops = { crop: corn, numCrops: 5 };
        expect(getCostsForCrop(crops)).toBe(5);
    });
});

// calculate the revenue for a crop (without environmental factors)
describe("getRevenueForCrop (without environmental factors)", () => {
    test("getRevenueForCrop", () => {
        const corn = {
            name: "corn",
            yield: 30,
            cost: 1,
            salesPrice: 2,
        };

        const crops = { crop: corn, numCrops: 5 };
        expect(getRevenueForCrop(crops)).toBe(300);
    });
});

// calculate the profit for a crop (without environmental factors)
describe("getProfitForCrop (without environmental factors)", () => {
    test("getProfitForCrop", () => {
        const corn = {
            name: "corn",
            yield: 30,
            cost: 1,
            salesPrice: 2,
        };

        const crops = { crop: corn, numCrops: 5 };
        expect(getProfitForCrop(crops)).toBe(295);
    });
});

// calculate the profit for multiple crops (without environmental factors)
describe("getTotalProfit (without environmental factors)", () => {
    test("getTotalProfit", () => {
        const corn = {
            name: "corn",
            yield: 3,
            cost: 1,
            salesPrice: 2,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            cost: 2,
            salesPrice: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalProfit({ crops })).toBe(53);
    });
});

// calculate the yield for a plant (WITH environmental factors)
describe("getYieldForPlant WITH environment factors", () => {
    test("Get yield for plant WITH environment factors - sun low", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environmentFactors = {
            sun: "low",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });

    test("Get yield for plant WITH environment factors - sun medium", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environmentFactors = {
            sun: "medium",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(30);
    });

    test("Get yield for plant WITH environment factors - sun high", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environmentFactors = {
            sun: "high",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(45);
    });

    test("Get yield for plant WITH environment factors - rain low", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factors: {
                rain: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environmentFactors = {
            rain: "low",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });

    test("Get yield for plant WITH environment factors - rain medium", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factors: {
                rain: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environmentFactors = {
            rain: "medium",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(30);
    });

    test("Get yield for plant WITH environment factors - rain high", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factors: {
                rain: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environmentFactors = {
            rain: "high",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(45);
    });

    test("Get yield for plant WITH environment factors - wind low", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factors: {
                wind: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environmentFactors = {
            wind: "low",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(45);
    });

    test("Get yield for plant WITH environment factors - wind medium", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factors: {
                wind: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environmentFactors = {
            wind: "medium",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(30);
    });

    test("Get yield for plant WITH environment factors - wind high", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factors: {
                wind: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environmentFactors = {
            wind: "high",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });

});

describe("getYieldForCrop WITH environment factors", () => {
    test("Get yield for crop, simple WITH environment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                wind: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };

        const environmentFactors = {
            wind: "high",
        };

        expect(getYieldForCrop(input, environmentFactors)).toBe(15);
    });
});

describe("getTotalYield WITH environment factors", () => {
    test("Calculate total yield with multiple crops WITH environment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];

        const environmentFactors = {
            sun: "high",
        };
        expect(getTotalYield({ crops }, environmentFactors)).toBe(34.5);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

// calculate the revenue for a crop (WITH environmental factors)
describe("getRevenueForCrop (WITH environmental factors)", () => {
    test("getRevenueForCrop WITH environment factors - wind high", () => {
        const corn = {
            name: "corn",
            yield: 30,
            cost: 1,
            salesPrice: 2,
            factors: {
                wind: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const crops = { crop: corn, numCrops: 5 };
        const environmentFactors = {
            wind: "high",
        };
        expect(getRevenueForCrop(crops, environmentFactors)).toBe(150);
    });
});

// calculate the profit for a crop (WITH environmental factors)
describe("getProfitForCrop (WITH environmental factors)", () => {
    test("getProfitForCrop WITH environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            cost: 1,
            salesPrice: 2,
            factors: {
                wind: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const crops = { crop: corn, numCrops: 5 };
        const environmentFactors = {
            wind: "high",
        };
        expect(getProfitForCrop(crops, environmentFactors)).toBe(145);
    });
});


// bereken de winst voor meerdere crops getTotalProfit, neem omgevingsfactoren mee in je berekening