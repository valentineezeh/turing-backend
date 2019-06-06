import supertest from 'supertest';
import should from 'should';
import dotenv from 'dotenv';
import verifyTokenTest from './customer.spec';

dotenv.config();


const app = supertest.agent(process.env.HOSTNAMEURL);

describe('Stripe Endpoint /stripes', () => {
  it('should place a webhook', (done) => {
    app
      .post('/api/stripe/webhook')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should charge the user card', (done) => {
    const paymentDetails = {
      token: 'tok_1Ej2aHBAIrxuKyOZav7PwAST',
      orderId: '5',
      description: 'Buy shoes',
      amount: '50',
      currency: 'usd',
      customer: 'cus_FD7FZwSBPV6QBn'
    };
    app
      .post('/api/stripe/charge')
      .send(paymentDetails)
      .set('user-key', verifyTokenTest.token)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(201)
      .end((err, res) => {
        res.status.should.equal(201);
        done();
      });
  });
});
