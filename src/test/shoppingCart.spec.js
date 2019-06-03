/* eslint-disable camelcase */
import supertest from 'supertest';
import should from 'should';
import dotenv from 'dotenv';

dotenv.config();


const app = supertest.agent(process.env.HOSTNAMEURL);

describe('Shopping Cart Endpoint /shoppingcart', () => {
  it('should get generate a unique card id', (done) => {
    app
      .get('/api/shoppingcart/generateUniqueId')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should add a product to the shopping cart', (done) => {
    const productObject = {
      cart_id: '1xh7q2z4qajwg15fpy',
      product_id: '2',
      attributes: 'red, shirt'
    };
    app
      .post('/api/shoppingcart/add')
      .send(productObject)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(201)
      .end((err, res) => {
        res.status.should.equal(201);
        done();
      });
  });
  it('should get all the products in a cart', (done) => {
    const cart_id = '1xh7q2z4qajwg15fpy';
    app
      .get(`/api/shoppingcart/${cart_id}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when no product is found in the cart', (done) => {
    const cart_id = '1000000';
    app
      .get(`/api/shoppingcart/${cart_id}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.should.equal('Cart is empty.');
        done();
      });
  });
  it('should update an item in a cart', (done) => {
    const item_id = '53095';
    const quantityObj = {
      quantity: '20'
    };
    app
      .put(`/api/shoppingcart/update/${item_id}`)
      .send(quantityObj)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when no product is found in the cart', (done) => {
    const item_id = '1000000';
    const quantityObj = {
      quantity: '20'
    };
    app
      .put(`/api/shoppingcart/update/${item_id}`)
      .send(quantityObj)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.should.equal('Product not found in cart.');
        done();
      });
  });
  it('should throw an error when no product is found in the cart', (done) => {
    const cart_id = '1000000';
    app
      .delete(`/api/shoppingcart/empty/${cart_id}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.should.equal('No product found in cart.');
        done();
      });
  });
  it('should move product to cart', (done) => {
    const item_id = '53095';
    app
      .get(`/api/shoppingcart/moveToCart/${item_id}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should get the total amount of product in cart', (done) => {
    const card_id = '1xh7q2z4qajwg15fpy';
    app
      .get(`/api/shoppingcart/totalAmount/${card_id}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when product does not exist in the cart', (done) => {
    const card_id = '110000';
    app
      .get(`/api/shoppingcart/totalAmount/${card_id}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.should.equal('Cart is empty.');
        done();
      });
  });
  it('should save a product for later', (done) => {
    const item_id = '4';
    app
      .get(`/api/shoppingcart/saveForLater/${item_id}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should get saved products in cart', (done) => {
    const cart_id = '1xh7q2z4qajwg15fpy';
    app
      .get(`/api/shoppingcart/getSaved/${cart_id}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
});
