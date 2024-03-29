const { toNumber } = require('../server');
const app = require('../server');
const request = require('supertest');


// describe('toNumber', () => {
//     it('should convert "One hundred and one" to 101', () => {
//         const words = "One hundred and one";
//         const expected = 101;
//         const result = toNumber(words);
//         expect(result).toEqual(expected);
//     });

//     it('should convert "Nine Hundred Ninety-nine Thousand Nine Hundred Ninety-nine" to 999999', () => {
//         const words = "Nine Hundred Ninety-nine Thousand Nine Hundred Ninety-nine";
//         const expected = 999999;
//         const result = toNumber(words);
//         expect(result).toEqual(expected);
//     });

//     it('should convert "Ninety-nine Thousand Nine Hundred Ninety-nine" to 99999', () => {
//         const words = "Ninety-nine Thousand Nine Hundred Ninety-nine";
//         const expected = 99999;
//         const result = toNumber(words);
//         expect(result).toEqual(expected);
//     });
// });

describe('POST /to/number', () => {
    it('should convert "One hundred and one" to 101', async () => {
      const response = await request(app)
        .post('/to/number')
        .send({ words: "One hundred and one" });
  
      expect(response.statusCode).toBe(200);
      expect(response.body.number).toBe(101);
    });
  
    // Add more tests...
  });
