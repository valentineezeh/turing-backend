import supertest from 'supertest';
import should from 'should';


const app = supertest.agent('http://localhost:3000');

describe('Departments Endpoint /departments', () => {
  it('should get all departments', (done) => {
    app
      .get('/api/departments')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should get a attribute by attribute id', (done) => {
    const departmentId = 1;
    app
      .get(`/api/departments/${departmentId}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should throw an error when department does not exist', (done) => {
    const departmentId = 10000000;
    app
      .get(`/api/departments/${departmentId}`)
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .end((err, res) => {
        res.status.should.equal(404);
        res.body.error.should.equal('Department not found.');
        done();
      });
  });
});
