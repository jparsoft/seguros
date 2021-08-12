const request = require('supertest');
const app = require('../src/index')

/**
 *  Testing endpoints
 */


let date = new Date().toDateString();
it('respond date now: ' + date, done => {
    request(app)
        .get('/')
        .expect('"' + date + '"')
        .expect(200, done)

})

/* it('respond date now', done => {
    request(app)
        .get('/sell')
        .request('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(200, done);
}) */