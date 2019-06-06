/* eslint-disable camelcase */
import supertest from 'supertest';
import should from 'should';
import dotenv from 'dotenv';
import verifyTokenTest from './customer.spec';

dotenv.config();


const app = supertest.agent(process.env.HOSTNAMEURL);

describe('Order Endpoint /order', () => {
  it('should get a customer order by orderId', (done) => {
    const order_id = 1;
    app
      .get(`/api/orders/${order_id}`)
      .set('user-key', verifyTokenTest.token)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should create an order for an authorized customer', (done) => {
    const orderDetails = {
      cart_id: '3',
      shipping_id: '2',
      tax_id: '4'
    };
    app
      .post('/api/orders/')
      .send(orderDetails)
      .set('user-key', verifyTokenTest.token)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(201)
      .end((err, res) => {
        res.status.should.equal(201);
        done();
      });
  });
  it('should get all customer orders', (done) => {
    app
      .get('/api/orders/inCustomer/')
      .set('user-key', verifyTokenTest.token)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when user is not authorized', (done) => {
    app
      .get('/api/orders/inCustomer/')
      .set('user-key', 'ijksw12we34k5r0-mdd')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(401)
      .end((err, res) => {
        res.status.should.equal(401);
        done();
      });
  });
  it('should get a short detail of the customer orders', (done) => {
    const order_id = 9;
    app
      .get(`/api/orders/shortDetail/${order_id}`)
      .set('user-key', verifyTokenTest.token)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when customer orders does not exist', (done) => {
    const order_id = 1000000;
    app
      .get(`/api/orders/shortDetail/${order_id}`)
      .set('user-key', verifyTokenTest.token)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.message.should.equal('Order not found.');
        done();
      });
  });
});
