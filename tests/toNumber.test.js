const { app, server } = require('../server');
const request = require('supertest');

describe('POST /to/number', () => {
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


  afterAll(done => {
    server.close(done);
  });
});
