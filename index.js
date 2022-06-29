// 1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present
//  in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// {
//   "TV": 2,
//   "AC": 2,
//   "FAN": 1
// }

const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];


let obj = {};

for(let i=0; i<listOfProducts.length;i++){
    obj[listOfProducts[i].productName]?obj[listOfProducts[i].productName] +=1: obj[listOfProducts[i].productName] = 1;
}

console.log(obj)



// 2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products 
// based on the productName and summing up the quantity for the same products present in the given list of Products considering 
// Product Name as Key.

// Sample Output for the given listOfProducts will be :

// [{
//     productName: "TV",
//     quantity: 20,
//     description: "television"
//   },
//   {
//     productName: "AC",
//     quantity: 10,
//     description: "air conditioner"
//   },
//   {
//     productName: "FAN",
//     quantity: 10,
//      description: "Ceiling Fan"
//   }
// ]

// function getUniqueProducts(listOfProducts) {
//     const uniqueproducts = Object.values(
//       listOfProducts.reduce((r, { productName, quantity, description }) => {
//         r[productName] = r[productName] || { productName, description, quantity: 0 };
//         r[productName].quantity += quantity;
//         return r;
//       }, {})
//     );
//     console.log(uniqueproducts);
//   }
//   console.log(getUniqueProducts(listOfProducts));
  
let uniqueProducts = [];

listOfProducts.filter(function(product) {
    if (uniqueProducts.find(function(uniqueProduct) {
        return uniqueProduct.productName === product.productName;
        }
        )
        ) 
        {
            uniqueProducts.find(function(uniqueProduct) {
            if (uniqueProduct.productName === product.productName) {
                uniqueProduct.quantity += product.quantity;
            }
            }
            )
        }
        else {
            uniqueProducts.push(product);
        }
    }
    );

    console.log(uniqueProducts);