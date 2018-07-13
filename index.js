// Write your solution in this file!
var driver = {
  
}

function updateDriverWithKeyAndValue(driver, key, value) {
  var newDriver = { 
    [key]:value
  }
  const driver2 = Object.assign({}, driver, newDriver);
    return driver2
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  const driver3 = Object.assign({driver: newDriver}, driver2);
  return driver3
}