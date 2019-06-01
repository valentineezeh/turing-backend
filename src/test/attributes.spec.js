import supertest from 'supertest';
import should from 'should';
import dotenv from 'dotenv';

dotenv.config();


const app = supertest.agent(process.env.HOSTNAMEURL);

describe('Attributes Endpoint /attributes', () => {
  it('should get all attributes', (done) => {
    app
      .get('/api/attributes')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should get a attribute by attribute id', (done) => {
    const attributeId = 1;
    app
      .get(`/api/attributes/${attributeId}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when attribute id does not exit', (done) => {
    const attributeId = 10000000;
    app
      .get(`/api/attributes/${attributeId}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.should.equal('Attribute resource not found');
        done();
      });
  });
  it('should get all values allocated to an attribute', (done) => {
    const attributeId = 2;
    app
      .get(`/api/attributes/values/${attributeId}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when value allocated to that attribute does not exist', (done) => {
    const attributeId = 10000000;
    app
      .get(`/api/attributes/values/${attributeId}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.should.equal('Attribute Values resource not found');
        done();
      });
  });
  it('should get attributes by product id', (done) => {
    const productId = 2;
    app
      .get(`/api/attributes/inProduct/${productId}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when product does not exist', (done) => {
    const productId = 10000000;
    app
      .get(`/api/attributes/inProduct/${productId}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.should.equal('Product attribute resource not found');
        done();
      });
  });
});
