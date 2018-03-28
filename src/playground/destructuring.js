console.log('destructing');

//object destructuring
const person = {
  age: 30,
  location: {
    city: 'Chicago',
    temp: 50
  }
}

// const {name = 'anon', age} = person;

// console.log(`${name} is ${age}`);

// const {temp: temperature, city} = person.location;

// if(city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

//array destructuring

// const address = [];
// const [,, state = 'New Jersey'] = address; 
// console.log(`You are in ${state}`)

const address = ['123 Fake St', 'Chicago', 'Illinois', 60643];
// const [street, city, state, zip] = address; 
const [, city, state] = address; 
console.log(`You are in ${city}, ${state}`)








