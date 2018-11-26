// Total profit for 2017?
let carProfit = []

function getInfo() {
  return fetch("http://localhost:8088/carSales")
    .then(response => response.json())
    .then(cars => cars.forEach(car => {
      carProfit.push(car.gross_profit)
    }))
    .then(x => addProfits())
}

getInfo()

function addProfits() {
  let totalProfit = carProfit.reduce((a, b) => a + b)
  console.log("Total profit in 2017:", totalProfit)
}

// In which month did they sell the most cars ?


// Which salesperson sold the most cars ?


// Which salesperson made the most profit ?


//  Which model was the most popular ?


// Which bank provided the most loans to our customers ?