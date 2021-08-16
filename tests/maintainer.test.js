const request = require('supertest');
const assert = require('chai').assert;
const app = require('../src/index')
const Product = require("../src/models/Product.js");
const maintainerCtrl = require("../src/controllers/maintainerController")

describe("Testing maintainerController", () => {
    it('respond listProducts data', done => {
        request(app)
            .post('/maintainer/listProducts')
            .set('Accept', 'application/json')
            .expect('Content-Type', "application/json; charset=utf-8")
            .expect(200, done);
    })

    it('Add a new product', done => {        
        let newProducts = [
            {
                "id": 12,
                "name": "test cobertura",
                "price": 100,
                "sellIn": 3
            }
        ];

        request(app)
            .post('/maintainer/listProducts')
            .send(newProducts)
            .set('Accept', 'application/json')
            .expect('Content-Type', "application/json; charset=utf-8")            
            .expect(200, done);
    })

    it('Delete a product', done => {        
        let toDelete = [
            {
                "id": 1
            }
        ];

        request(app)
            .post('/maintainer/deleteById')
            .send(toDelete)
            .set('Accept', 'application/json')
            .expect('Content-Type', "application/json; charset=utf-8")            
            .expect(200, done);
    })


    it('maintainerCtrl add a product', done => {        
        let newProducts = [
            {
                "id": 18,
                "name": "test cobertura",
                "price": 100,
                "sellIn": 3
            }
        ];

        let message= maintainerCtrl.addProducts(newProducts)
        assert.equal(message.message,'add products')
        //assert.equal(message.code, 0);
        done();       
    })
    
    it('maintainerCtrl delete a product thats not exists', done => {      
        let toDelete = [
            {
                "id": 2
            }
        ];
        let message = maintainerCtrl.deleteById(toDelete);
      
        //assert.equal(message.code,0)
        assert.equal(message.message,'product not found')
        done();
    })
})