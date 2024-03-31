const request = require('supertest');
const app = require('../app'); 

describe('POST /to/words', () => {
    it('should convert 154 to words', async () => {
        const res = await request(app)
            .post('/to/words')
            .send({ number: 154 });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('words', 'one hundred and fifty-four');
    });

    it('should support decimals up to 2 decimal places', async () => {
        const res = await request(app)
            .post('/to/words')
            .send({ number: 154.25 });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('words', 'one hundred and fifty-four point twenty-five');
    });

    it('should support numbers up to 9999999.99', async () => {
        const res = await request(app)
            .post('/to/words')
            .send({ number: 9999999.99 });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('words', 'nine million, nine hundred and ninety-nine thousand, nine hundred and ninety-nine point ninety-nine');
    });

    it('should return error for negative numbers', async () => {
        const res = await request(app)
            .post('/to/words')
            .send({ number: -1 });
        expect(res.statusCode).toEqual(422);
    });

    it('should return error for numbers greater than 9999999.99', async () => {
        const res = await request(app)
            .post('/to/words')
            .send({ number: 10000000 });
        expect(res.statusCode).toEqual(422);
    });

    it('should return error for non-number inputs', async () => {
        const res = await request(app)
            .post('/to/words')
            .send({ number: 'abc' });
        expect(res.statusCode).toEqual(422);
    });

    // afterAll(done => {
    //     if (server && server.listening) {
    //         server.close(done);
    //     } else {
    //         done();
    //     }
    // });
});