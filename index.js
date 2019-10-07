const logDriverNames = function(driverArr) {
    driverArr.forEach(function(driver) {
        console.log(driver.name);
    });
};

const logDriversByHometown = function(driverArr, hometown) {
  driverArr.forEach(function(driver) {
      if (driver.hometown === hometown) {
        console.log(driver.name);
      }
  });
};

const driversByRevenue = function (driverArr) {
    return driverArr.slice().sort(function(driverA, driverB) {
        return driverA.revenue - driverB.revenue;
    });
};

const driversByName = function(driverArr) {
    return driverArr.slice().sort(function(driverA, driverB){
        return driverA.name.localeCompare(driverB.name);
    });
};

const totalRevenue = function (driverArr) {
    return driverArr.reduce(function (total, currentDriver) {
        return currentDriver.revenue + total;
    }, 0);
};
  
const averageRevenue = function (driverArr) {
    return totalRevenue(driverArr) / driverArr.length;
};