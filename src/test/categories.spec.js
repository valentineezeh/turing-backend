/* eslint-disable camelcase */
import supertest from 'supertest';
import should from 'should';
import dotenv from 'dotenv';

dotenv.config();

const app = supertest.agent(process.env.HOSTNAMEURL);

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
    const category_id = 1;
    app
      .get(`/api/categories/${category_id}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when category does not exist', (done) => {
    const category_id = 10000000;
    app
      .get(`/api/categories/${category_id}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.message.should.equal('Categories not found.');
        done();
      });
  });
  it('should get a category by product id', (done) => {
    const product_id = 1;
    app
      .get(`/api/categories/inProduct/${product_id}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when category of product does not exist', (done) => {
    const product_id = 10000000;
    app
      .get(`/api/categories/inProduct/${product_id}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.message.should.equal('Product Category not found.');
        done();
      });
  });
  it('should get a category by department id', (done) => {
    const department_id = 1;
    app
      .get(`/api/categories/inDepartment/${department_id}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when category in department does not exist', (done) => {
    const department_id = 10000000;
    app
      .get(`/api/categories/inDepartment/${department_id}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.message.should.equal('Category not found in department.');
        done();
      });
  });
});
