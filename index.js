// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(element => {
    console.log(element.name);
  });
}
function logDriversByHometown(drivers, hometown) {
  return drivers.forEach(driver => {
    if (driver.hometown === hometown) console.log(driver.name);
  });
}
function driversByRevenue(drivers) {
  const driversClone = drivers.slice(0);
  return driversClone.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}
function driversByName(drivers) {
  const driversClone = drivers.slice(0);
  return driversClone.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
}
function totalRevenue(drivers) {
  return drivers.reduce((sum, ele) => ele.revenue + sum, 0);
}
function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
