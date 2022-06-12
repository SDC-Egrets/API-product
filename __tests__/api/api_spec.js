const frisby = require('frisby');
const joi = require('joi');
const testData  = require('../../testData/testData.js');

describe('test unit API for /products/:product_id using product id: 37312', () => {
  let baseUrl = 'http://localhost:3000/products/37312';
  it('should send back status code 200 if query is success', () => {
    return frisby.get(baseUrl).expect('status', 200)
  });

  it('should not return an error', () => {
    return frisby.get(baseUrl).expectNot('json', { result: 'error' })
  });

  it('should send back data in JSON', () => {
    return frisby.get(baseUrl).expect('header', 'Content-Type', 'application/json; charset=utf-8')
  });
  
  it('should send back data in expected JSON structure', () => {
    let schema = joi.object({
      id: joi.number().required(),
      name: joi.string(),
      slogan: joi.string(),
      description: joi.string(),
      category: joi.string(),
      default_price: joi.number(),
      features: joi.array()
    })
    return frisby.get(baseUrl).then((result)=>expect(schema.validate(result._json).error).toBe(undefined))
  });

  it('should send back correct product informatioin', () => {
    return frisby.get(baseUrl).then((result) => { 
      expect(JSON.parse(result.body).id).toEqual(testData['product_37312']['id']);
      expect(JSON.parse(result.body).name).toEqual(testData['product_37312']['name'])
    })
  });
});

describe('test unit API for /products/:product_id/styles using product id: 37320', () => {
  let baseUrl = 'http://localhost:3000/products/37320/styles';
  it('should send back status code 200 if query is success', () => {
    return frisby.get(baseUrl).expect('status', 200)
  });

  it('should not return an error', () => {
    return frisby.get(baseUrl).expectNot('json', { result: 'error' })
  });

  it('should send back data in JSON', () => {
    return frisby.get(baseUrl).expect('header', 'Content-Type', 'application/json; charset=utf-8')
  });

  it('should send back correct product informatioin', () => {
    return frisby.get(baseUrl).then((result) => { expect(JSON.parse(result.body).product_id).toEqual(testData['product_37320']['product_id'])})
  });
});

describe('test unit API for /products/:product_id/related using product id: 37311', () => {
  let baseUrl = 'http://localhost:3000/products/37311/related';
  it('should send back status code 200 if query is success', () => {
    return frisby.get(baseUrl).expect('status', 200)
  });

  it('should not return an error', () => {
    return frisby.get(baseUrl).expectNot('json', { result: 'error' })
  });

  it('should send back data in JSON', () => {
    return frisby.get(baseUrl).expect('header', 'Content-Type', 'application/json; charset=utf-8')
  });

  it('should send back correct product informatioin', () => {
    return frisby.get(baseUrl).then((result) => { 
      expect(JSON.parse(result.body)).toEqual(testData['product_37311'])
      // console.log(JSON.parse(result.body))
    })
  });
});

