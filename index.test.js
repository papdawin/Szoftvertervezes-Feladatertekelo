const axios = require("axios");

describe("API routes", () => {
    test("1. feladat", async () => {
        const response = await getReq("http://localhost:5000/");
        expect(response.status).toEqual(200);
        expect(response.data).not.toBe(null);
    });
    test("2. feladat", async () => {
        const response = await postReq("http://localhost:5000/adat");
        expect(response.status).toEqual(200);
        expect(response.data).toEqual({ fName: "Till", lName: "Lindemann" });
    });
    test("3. feladat", async () => {
        const response = await getReq("http://localhost:5000/time");
        expect(response.status).toEqual(200);
        expect(response.data).not.toBe(null);
    });
    test("4. feladat", async () => {
        const response = await postReq("http://localhost:5000/error");
        expect(response.request.res.statusCode).toBeGreaterThanOrEqual(400);
        expect(response.request.res.statusCode).toBeLessThan(500);
    });
});

const getReq = async (url) => {
    return await axios({
        method: "GET",
        url,
    }).then((res) => {
        return res;
    });
};

const postReq = async (url) => {
    return await axios({
        method: "POST",
        url,
        data: {
            fName: "Till",
            lName: "Lindemann",
        },
    })
        .then((res) => {
            return res;
        })
        .catch((res) => {
            return res;
        });
};
