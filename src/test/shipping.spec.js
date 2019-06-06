import supertest from 'supertest';
import should from 'should';
import dotenv from 'dotenv';

dotenv.config();

const app = supertest.agent(process.env.HOSTNAMEURL);

describe('Shipping Endpoint /shippings', () => {
  it('should get all shipping regions', (done) => {
    app
      .get('/api/shipping/regions')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should get a shipping region using region id', (done) => {
    const regionId = 2;
    app
      .get(`/api/shipping/regions/${regionId}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when regionId is not found', (done) => {
    const regionId = 1;
    app
      .get(`/api/shipping/regions/${regionId}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.message.should.equal('Shipping region not found.');
        done();
      });
  });
});
