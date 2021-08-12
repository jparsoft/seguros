const request = require('supertest');
const app = require('../src/index')

/**
 *  Testing endpoints
 */

describe("Testing endpoints", () => {
    let date = new Date().toDateString();

    it('respond date now: ' + date, done => {
        request(app)
            .get('/')
            .expect('"' + date + '"')
            .expect(200, done)

    })


    it('respond sell data', done => {
        const data = {
            test: 'test'
        }
        request(app)
            .post('/sell')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', "text/html; charset=utf-8")
            .expect(200, done);
    })
    it('respond listProducts data', done => {
        const data = {
            test: 'test'
        }
        request(app)
            .post('/listProducts')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', "text/html; charset=utf-8")
            .expect(200, done);
    })
    it('respond evaluateProducts data', done => {
        const data = {
            days: 10
        }
        request(app)
            .post('/evaluateProducts')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', "application/json; charset=utf-8")
            .expect('10')
            .expect(200, done);
    })
})

