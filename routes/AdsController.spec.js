const server = require("supertest");
const should = require('should');
const app = require('../app');


describe("AdsController", function () {

    it("[ALL] should respond with json", function (done) {
        server(app)
            .get("/adcampaign")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

    it("[ALL] First result should have ID 100000001", function (done) {
        server(app)
            .get("/adcampaign")
            .end(function (err, res) {
                if (err) throw err;
                res.body[0].id.should.equal(100000001);
                done();
            });
    });

    it("[SINGLE] should respond with json", function (done) {
        server(app)
            .get("/adcampaign/100000002")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

    it("[SINGLE] should be empty", function (done) {
        server(app)
            .get("/adcampaign/1")
            .end(function (err, res) {
                if (err) throw err;
                res.body.should.be.empty();
                done();
            });
    });

    it("[SINGLE] should have id 100000002", function (done) {
        server(app)
            .get("/adcampaign/100000002")
            .end(function (err, res) {
                if (err) throw err;
                console.log(res.body);
                res.body[0].id.should.equal(100000002);
                done();
            });
    });

    it("[ERR] should respond with 404", function (done) {
        server(app)
            .get("/adcampaigns")
            .expect(404)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

});
