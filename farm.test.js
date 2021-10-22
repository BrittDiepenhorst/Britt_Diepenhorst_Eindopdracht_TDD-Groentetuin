const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitForCrop } = require("./farm");

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

describe("getCostsForCrop", () => {
    test("getCostsForCrop", () => {
        const corn = {
            name: "corn",
            yield: 30,
            cost: 1,
        };

        const crops = [{ crop: corn, numCrops: 5 }];
        expect(getCostsForCrop({ crops })).toBe(5);
    });
});

describe("getRevenueForCrop", () => {
    test("getRevenueForCrop", () => {
        const corn = {
            name: "corn",
            yield: 30,
            cost: 1,
            salesprice: 2,
        };

        const crops = [{ crop: corn, numCrops: 5 }];
        expect(getRevenueForCrop({ crops })).toBe(10);
    });
});

describe("getProfitForCrop", () => {
    test("getProfitForCrop", () => {
        const corn = {
            name: "corn",
            yield: 30,
            cost: 1,
            salesprice: 2,
        };

        const crops = [{ crop: corn, numCrops: 5 }];
        expect(getProfitForCrop({ crops })).toBe(5);
    });
});