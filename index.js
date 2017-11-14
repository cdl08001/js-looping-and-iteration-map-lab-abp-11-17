// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const newArr = drivers.map(function(driver){
    return driver.toLowerCase()
  });
  return newArr
}

function nameToAttributes(names) {
  return newArr = names.map(function(name){
    let fName = name.split(" ")[0]
    let lName = name.split(" ")[1]
    return nameObject = {firstName: fName, lastName: lName}
  })
}

function attributesToPhrase(drivers){
  // Starting with: { name: 'Bobby',   hometown: 'Pittsburgh'  }
  // Convert to: 'Bobby is from Pittsburgh'
  return newArr = drivers.map(function(driver){
    let name = driver.name
    let hometown = driver.hometown
    return `${name} is from ${hometown}`
  })
}
