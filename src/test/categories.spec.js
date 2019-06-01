import supertest from 'supertest';
import should from 'should';

const app = supertest.agent('http://localhost:3000');

describe('Categories Endpoint /categories', () => {
  it('should get all categories', (done) => {
    app
      .get('/api/categories')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should get a category by category id', (done) => {
    const categoryId = 1;
    app
      .get(`/api/categories/${categoryId}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when category does not exist', (done) => {
    const categoryId = 10000000;
    app
      .get(`/api/categories/${categoryId}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.should.equal('Categories not found.');
        done();
      });
  });
  it('should get a category by product id', (done) => {
    const productId = 1;
    app
      .get(`/api/categories/inProduct/${productId}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when category of product does not exist', (done) => {
    const productId = 10000000;
    app
      .get(`/api/categories/inProduct/${productId}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.should.equal('Product Category not found.');
        done();
      });
  });
});
