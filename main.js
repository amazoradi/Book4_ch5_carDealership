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

let monthCounter =[]

function getDates() {
  return fetch("http://localhost:8088/carSales")
    .then(response => response.json())
    .then(cars => cars.forEach(car => {
      monthCounter.push(parseInt(car.purchase_date.split("-")[1]))
      monthCounter.sort((a,b)=> a -b)
    }))
    .then(x =>
      filterMonths())
  }
  getDates()

function filterMonths() {
  let months = {}
   monthCounter.forEach( (month) => {
    months[month] = (months[month] || 0) + 1
  }) 
  console.log(months)  //{1: 5, 2: 2, 3: 8, 4: 5, 5: 3, 6: 10, 7: 4, 8: 4, 9: 6, 11: 9, 12: 5}  June has the most with 10
  console.log("June sold the most cars with 10", months)
}

// Which salesperson sold the most cars ?
let salepersonCounter = []

function getSalesperson() {
  return fetch("http://localhost:8088/carSales")
    .then(response => response.json())
    .then(people => people.forEach(person => {
      salepersonCounter.push(`${person.sales_agent.first_name} ${person.sales_agent.last_name}`)
      // console.log(`${person.sales_agent.first_name} ${person.sales_agent.last_name}`
      // console.log(salepersonCounter)
    
    }))
    .then(x =>
      filterSalespeople())
}
getSalesperson()

function filterSalespeople() {
  let people= {}
 salepersonCounter.forEach((person) => {
    people[person] = (people[person] || 0) + 1
  }) 
  console.log(people) //Shaina Botsford with 5
}

// Which salesperson made the most profit ?


//  Which model was the most popular ?


// Which bank provided the most loans to our customers ?