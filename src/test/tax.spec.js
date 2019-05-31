import supertest from 'supertest';
import should from 'should';


const app = supertest.agent('http://localhost:3000');

describe('Tax Endpoint /tax', () => {
  it('should get all tax', (done) => {
    app
      .get('/api/tax')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should get a tax detail using the tax id', (done) => {
    const taxId = 1;
    app
      .get(`/api/tax/${taxId}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when tax id does not exit', (done) => {
    const taxId = 10000000;
    app
      .get(`/api/tax/${taxId}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.should.equal('tax resource not found.');
        done();
      });
  });
});
