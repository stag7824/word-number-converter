const app= require('../app');
const request = require('supertest');

describe('Number conversion API', () => {
  it('should convert "One hundred and one" to 101', async () => {
    const response = await request(app)
      .post('/to/number')
      .send({ words: "One hundred and one" });

    expect(response.statusCode).toBe(200);
    expect(response.body.number).toBe(101);
  });
  it('should convert "Six Million Four Hundred Eighty-nine Thousand One Hundred Thirty-five" to 6489135', async () => {
    const response = await request(app)
      .post('/to/number')
      .send({ words: "Six Million Four Hundred Eighty-nine Thousand One Hundred Thirty-five" });

    expect(response.statusCode).toBe(200);
    expect(response.body.number).toBe(6489135);
  });

  it('should convert "One Million One Hundred Eleven Thousand One Hundred Eleven" to 1111111', async () => {
    const response = await request(app)
      .post('/to/number')
      .send({ words: "One Million One Hundred Eleven Thousand One Hundred Eleven" });

    expect(response.statusCode).toBe(200);
    expect(response.body.number).toBe(1111111);
  });

  it('should convert "zero" to 0', async () => {
    const response = await request(app)
      .post('/to/number')
      .send({ words: "zero" });

    expect(response.statusCode).toBe(200);
    expect(response.body.number).toBe(0);
  });

  it('should convert "Eleven Million One Hundred Eleven Thousand One Hundred Eleven" to 11111111', async () => {
    const response = await request(app)
      .post('/to/number')
      .send({ words: "Eleven Million One Hundred Eleven Thousand One Hundred Eleven" });

    expect(response.statusCode).toBe(200);
    expect(response.body.number).toBe(11111111);
  });
  it('should convert "One hundred and one" to 101', async () => {
    const response = await request(app)
      .post('/to/number')
      .send({ words: "One hundred and one" });
    expect(response.statusCode).toBe(200);
    expect(response.body.number).toBe(101);
  });
  it('give 433 error', async () => {
    const response = await request(app)
      .post('/to/number')
      .send({ words: "One hundreds and one" });
    expect(response.statusCode).toBe(422);
    expect(response.body.error).toBe("Invalid Input");
  });

  it('should convert "One hundred and fifty four" to 154', async () => {
    const response = await request(app)
      .post('/to/number')
      .send({ words: "One hundred and fifty four" });

    expect(response.statusCode).toBe(200);
    expect(response.body.number).toBe(154);
  });

  it('should convert "Two and a half" to 2.5', async () => {
    const response = await request(app)
      .post('/to/number')
      .send({ words: "Two and a half" });

    expect(response.statusCode).toBe(200);
    expect(response.body.number).toBe(2.5);
  });

  it('should convert "Two point five" to 2.5', async () => {
    const response = await request(app)
      .post('/to/number')
      .send({ words: "Two point five" });

    expect(response.statusCode).toBe(200);
    expect(response.body.number).toBe(2.5);
  });
  
  it('should convert "Two Million Three Hundred Twelve Thousand Three Hundred Fifteen Point Five" to 2312315.5', async () => {
    const response = await request(app)
      .post('/to/number')
      .send({ words: "Two Million Three Hundred Twelve Thousand Three Hundred Fifteen Point Five" });

    expect(response.statusCode).toBe(200);
    expect(response.body.number).toBe(2312315.5);
  });

  it('should convert "Two Million One Hundred Sixty-eight Thousand Four Hundred Sixty-three Point Eighteen" to 2168463.18', async () => {
    const response = await request(app)
      .post('/to/number')
      .send({ words: "Two Million One Hundred Sixty-eight Thousand Four Hundred Sixty-three Point Eighteen" });

    expect(response.statusCode).toBe(200);
    expect(response.body.number).toBe(2168463.18);
  });
  

  // afterAll(done => {
  //   if (server && server.listening) {
  //       server.close(done);
  //   } else {
  //       done();
  //   }
  // });
});
