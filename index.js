function logDriverNames(driverArr){
    driverArr.forEach(function(driver){
        console.log(driver.name)
    });
};

function logDriversByHometown(driverArr, location){
    const filteredArr = driverArr.filter(function(driver){
        return driver.hometown == location
    });
    logDriverNames(filteredArr);
};

function driversByRevenue(driverArr){
    const clone = [...driverArr];
    return clone.sort(function(driver1, driver2){
        return driver1.revenue - driver2.revenue
    });
};

function driversByName(driverArr) {
    const clone = [...driverArr];
    return clone.sort(function(driver1, driver2){
        return driver1.name.localeCompare(driver2.name)
    });
}

const reduceDriverRevenue = (function(agg, driver){
    return agg + driver.revenue;
})


function totalRevenue(driverArr) {
    const clone = [...driverArr];
    return clone.reduce(reduceDriverRevenue, 0);
}

function averageRevenue(driverArr) {
    return (totalRevenue(driverArr)/driverArr.length)
}