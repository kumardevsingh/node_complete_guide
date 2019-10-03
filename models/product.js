
const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = cb => {
    
    fs.readFile(p, (err, fileContent) => {
        console.log("In fetchAll :-", err);
        if (err) {
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    })
}

const products = [];
module.exports = class Product {
    constructor(t) {
        this.title = t;
    }
    save() {
       // products.push(this)
        // const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }
    static fetchAll(cb) {
        getProductsFromFile(cb)
    }
}
