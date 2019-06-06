/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import supertest from 'supertest';
import should from 'should';
import dotenv from 'dotenv';

dotenv.config();

const app = supertest.agent(process.env.HOSTNAMEURL); 

describe('Products Endpoint /products', () => {
  it('should get all products', (done) => {
    app
      .get('/api/products')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should get a product by product id', (done) => {
    const productId = 1;
    app
      .get(`/api/products/${productId}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when product id does not exit', (done) => {
    const product_id = 10000000;
    app
      .get(`/api/products/${product_id}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.message.should.equal('Product requested does not exist.');
        done();
      });
  });
  it('should search for a product', (done) => {
    app
      .get('/api/products/search?searchString=shirt&inAllWords=on&page=1&limit=5&descriptionLength=10')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when invalid query input is inputted', (done) => {
    app
      .get('/api/products/search?searchString=shirt&inAllWords=black&page=1&limit=5&descriptionLength=10')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400)
      .end((err, res) => {
        res.status.should.equal(400);
        res.body.error.message.should.equal('This field can either be On, Off or empty');
        done();
      });
  });
  it('should throw an error when product search for is not found', (done) => {
    const value = 'cow';
    app
      .get(`/api/products/search?searchString=${value}&inAllWords=on&page=1&limit=5&descriptionLength=10`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.message.should.equal('Product requested does not exist.');
        done();
      });
  });
  it('should get a product using the category Id', (done) => {
    const categoryId = 2;
    app
      .get(`/api/products/inCategory/${categoryId}?page=1&limit=10&descriptionLength=10`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error if product in category is not found', (done) => {
    const categoryId = 1000000;
    app
      .get(`/api/products/inCategory/${categoryId}?page=1&limit=10&descriptionLength=10`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.message.should.equal('Product requested does not exist.');
        done();
      });
  });
  it('should get all products in department using departmentId', (done) => {
    const departmentId = 2;
    app
      .get(`/api/products/inDepartment/${departmentId}?page=2&limit=5&descriptionLength=20`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error if no product exists in the department', (done) => {
    const departmentId = 1000000;
    app
      .get(`/api/products/inDepartment/${departmentId}?page=2&limit=5&descriptionLength=20`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.message.should.equal('Product requested does not exist.');
        done();
      });
  });
  it('should get details of a product using the productId', (done) => {
    const productId = 2;
    app
      .get(`/api/products/${productId}/details`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error if product details does not exist', (done) => {
    const productId = 1000000;
    app
      .get(`/api/products/${productId}/details`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.message.should.equal('Product requested does not exist.');
        done();
      });
  });
  it('should get location of a product using the productId', (done) => {
    const productId = 2;
    app
      .get(`/api/products/${productId}/locations`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error if product location does not exist', (done) => {
    const productId = 1000000;
    app
      .get(`/api/products/${productId}/locations`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.message.should.equal('Product requested does not exist.');
        done();
      });
  });
  it('should get reviews of a product using the productId', (done) => {
    const productId = 2;
    app
      .get(`/api/products/${productId}/reviews`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error if product reviews does not exist', (done) => {
    const productId = 1000000;
    app
      .get(`/api/products/${productId}/reviews`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.message.should.equal('This product is yet to have any review.');
        done();
      });
  });
});
