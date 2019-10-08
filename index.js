const logDriverNames = function logDriverNames(array){
    array.forEach(function(driver){
        console.log(driver.name)
    }) 
}

const logDriversByHometown = function logDriversByHometown(array, hometown){
    array.forEach(function(driver){
        if (driver.hometown === hometown) {
            console.log(driver.name)
        }
    })      
}

const driversByRevenue = function driversByRevenue(drivers){
    return drivers.slice().sort(function (a,b){
        return a.revenue - b.revenue 
    })
}

const driversByName = function driversByName(drivers){
    return drivers.slice().sort(function(a,b){
        return a.name.localeCompare(b.name)
    })
}

const totalRevenue = function totalRevenue(drivers){
    return drivers.slice().reduce(revenueCalculation,0)
}

const revenueCalculation = function revenueCalculation(amount, driver){
    return amount + driver.revenue 
}

const averageRevenue = function averageRevenue(drivers){
    return (totalRevenue(drivers))/(drivers.length)
}