const chai=require("chai");
const chaiHttp=require("chai-http")
const expect=require("chai").expect;
chai.use(chaiHttp);
const app=require("../index.js").app;

const url="http://localhost:3000";


describe ("Test 1: post inserte nombre y precio", ()=>{
  it ("Esperamos un name y un price", (done)=>{
    chai.request(url)
    .post("/api/v1/products")
    .send({name:'Computer', price: 2000})
    .end((err, res)=>{
      console.log(res.text)
      expect(res).to.have.status(200)
      done()
    })

  })
})


describe ("Test 2 Get:devuelve todos los productos", ()=>{
  it ("esperamos la lista de 5 productos", (done)=>{
    chai.request(url)
    .get("/api/v1/products")
     .end((err, res)=>{
      console.log(res.body)
      expect(res).to.have.status(200)
      done()
    })

  })
})
describe ("Test 3 Get:devuelve todos los productos", ()=>{
  it ("esperamos la lista de 1 productos", (done)=>{
    chai.request(url)
    .get("/api/v1/products?size=1")
     .end((err, res)=>{
      console.log(res.body)
      expect(res).to.have.status(200)
      done()
    })

  })
})
describe (" Test 4:Suite de pruebas e2e", ()=>{
  it ("esperamos un hola mundo", (done)=>{
    chai.request("http://localhost:3000")
        .get("/")
        .end ((err,res)=>{
          console.log("A");
          chai.assert.equal(res.text,'Hola mundo');
          done();
        })
      console.log("B")
  })
})
