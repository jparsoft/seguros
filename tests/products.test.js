const request = require('supertest');
const assert = require('chai').assert;
const app = require('../src/index')
const Product = require("../src/models/Product.js");
const productCtrl = require("../src/controllers/productController.js")
/**
 *  Testing endpoints
 */

describe("Testing endpoints", () => {
    let date = new Date().toDateString();

    it('Expect date now: ' + date, done => {
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
            .expect('Exito')
            .expect(200, done);
    })

    it('respond listSoldProducts data', done => {
        request(app)
            .post('/listSoldProducts')            
            .set('Accept', 'application/json')
            .expect('Content-Type', "application/json; charset=utf-8")           
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

describe("Testing productController", () => {
    it("productController should work", done => {
        assert.equal(productCtrl.getStatus(), 'Exito')
        done()
    })
})
describe("Testing Class Product.js", () => {
    it("Class product should work", done => {
        let product={
            "id": 12,
            "name": "test cobertura",
            "price": 100,
            "sellIn": 3
        }
        let seguro = new Product(product);
        assert.equal(seguro.getName(), 'test cobertura')
        assert.equal(seguro.getId(), 12)
        assert.equal(seguro.getPrice(), 100)
        assert.equal(seguro.getSellIn(), 3)
        done()
    })
})
