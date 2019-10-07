const logDriverNames = function(driver) {
    return driver.forEach(function(el) {console.log(el.name)});
}

const logDriversByHometown = function(driver, hometown) {
    return driver.forEach(function(el) {
        if (el.hometown === hometown) {
            console.log(el.name)
        }
    })
}

const driversByRevenue = function(driver) {
    const n = driver.map(x => x)
    return n.sort(function (num1, num2) {
        return num1.revenue - num2.revenue
    } )
}

const driversByName = function(driver) {
    const n = driver.map(x => x);
    return n.sort(function(a, b) {
        return a.name.localeCompare(b.name)
    })
}

const totalRevenue = function(driver) {
    return driver.reduce(function(agg, cv) {
        return agg + cv.revenue;
    }, 0)
}

const averageRevenue = function(driver) {
    return totalRevenue(driver) / driver.length;
}

const drivers = [
    { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
    { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
    { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
    { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
    { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
  ];

console.log(averageRevenue(drivers))