import supertest from 'supertest';
import should from 'should';
import dotenv from 'dotenv';

dotenv.config();


const app = supertest.agent(process.env.HOSTNAMEURL);

const verifyTokenTest = {};

describe('Customer Endpoint /customer', () => {
  it('should login a customer in to the app', (done) => {
    const loginDetails = {
      email: 'jennifer@gmail.com',
      password: 'password'
    };
    app
      .post('/api/customers/login')
      .send(loginDetails)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        verifyTokenTest.token = res.body.accessToken;
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when user input invalid credentials', (done) => {
    const loginDetails = {
      email: 'jennifer@gmail.com',
      password: 'pass'
    };
    app
      .post('/api/customers/login')
      .send(loginDetails)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400)
      .end((err, res) => {
        res.status.should.equal(400);
        res.body.error.message.should.equal('Email or Password is invalid.');
        done();
      });
  });
  it('should throw an error when email inputed by user does not exist', (done) => {
    const loginDetails = {
      email: 'tolu@gmail.com',
      password: 'pass'
    };
    app
      .post('/api/customers/login')
      .send(loginDetails)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.message.should.equal('The email does not exist.');
        done();
      });
  });
  it('should get a customer using the customer id', (done) => {
    app
      .get('/api/customer')
      .set('user-key', verifyTokenTest.token)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when user is not authorize', (done) => {
    app
      .get('/api/customer')
      .set('user-key', 'herion,879si908b3')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(401)
      .end((err, res) => {
        res.status.should.equal(401);
        res.body.error.message.should.equal('Access Unauthorized.');
        done();
      });
  });
  it('should update a customer address details', (done) => {
    const addressDetails = {
      address_1: 'Fresh field primary school',
      address_2: 'Plot 3 avenue',
      city: 'Ikorodu',
      region: 'Africa',
      country: 'Nigeria',
      postal_code: '23401',
      shipping_region_id: '203'
    };
    app
      .put('/api/customers/address')
      .send(addressDetails)
      .set('user-key', verifyTokenTest.token)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error for unauthorized customer', (done) => {
    const addressDetails = {
      address_1: 'Fresh field primary school',
      address_2: 'Plot 3 avenue',
      city: 'Ikorodu',
      region: 'Africa',
      country: 'Nigeria',
      postal_code: '23401',
      shipping_region_id: '203'
    };
    app
      .put('/api/customers/address')
      .send(addressDetails)
      .set('user-key', 'beyourOwnhero1230=-=er')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(401)
      .end((err, res) => {
        res.status.should.equal(401);
        res.body.error.message.should.equal('Access Unauthorized.');
        done();
      });
  });

  it('should update a customer card details', (done) => {
    const cardDetails = {
      credit_card: '12098456738291028',
    };
    app
      .put('/api/customers/creditCard')
      .send(cardDetails)
      .set('user-key', verifyTokenTest.token)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
});

export default verifyTokenTest;
