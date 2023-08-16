const customer={           //customer object creation
    firstName:'jake',
    lastName:'smith',
    email:'jaekSmih!aol.com',
    phone:undefined,
    zipCode:'631',
    favoriteFlavors:32,
    cupSize:'medium',
    favoriteStore:'target',
    firstVisit:false
}
console.table(customer);

customer.email='Jak3Smith1992@email.com';
customer.phone=3195551234;
customer.zipCode='63132';
customer.favoriteFlavors=['coffee','strawberry','matcha'];
console.log(customer);

delete customer.zipCode;
delete customer.favoriteStore;
console.log(customer);

customer.toppings=['chocolate sprinkles','wafer straws','gummy bears'];
customer.futureFlovors='mango';
customer.todaysPurchaseCost=5.32;
console.log(customer);

for(const prop in customer){
    console.log(prop);
}