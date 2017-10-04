var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();
var constants = require('./constants');

chai.use(chaiHttp);

describe('POST /calculate-crons', function() {
    it('should create valid json', function(done) {
        chai.request(server)
            .post('/calculate-crons')
            .type('form')
            .send({'json' :  JSON.stringify(constants.INPUT)})
            .end(function(err, res){
                res.should.have.status(200);
                JSON.stringify(res.body).should.equal(JSON.stringify(constants.OUTPUT));
                done();
        });
    });
    it('should create empty json', function(done) {
        chai.request(server)
            .post('/calculate-crons')
            .type('form')
            .send({'json' : JSON.stringify(constants.INPUT2)})
            .end(function(err, res){
                res.should.have.status(200);
                JSON.stringify(res.body).should.equal(JSON.stringify(constants.OUTPUT2));
                done();
        });
    });
    it('should sort and remove duplicates', function(done) {
        chai.request(server)
            .post('/calculate-crons')
            .type('form')
            .send({'json' : JSON.stringify(constants.INPUT3)})
            .end(function(err, res){
                res.should.have.status(200);
                JSON.stringify(res.body).should.equal(JSON.stringify(constants.OUTPUT3));
                done();
        });
    });

});
