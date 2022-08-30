const name_ = 90;
console.log(`${name_}`)

function doTest(myVar = ''){
    if(myVar == name_) return 
    if(myVar === '') return
}

console.log(doTest(-1))

let smallest = Number.NEGATIVE_INFINITY;

console.log(smallest)

const getSmallest = (arr) => arr.reduce((small, num) => Math.min(small, num))

const shuffledArr =  (arr) => arr.sort(() => Math.random() - 0.5)

console.log(shuffledArr([3,4,5,6,7,0,2,4]))

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

  console.log(myUpdatedVehicle)