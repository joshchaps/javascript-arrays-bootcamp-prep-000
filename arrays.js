var chocolateBars = [
  'snickers', 
  'hundred grand', 
  'kitkat', 
  'skittles'
  ];
  
  function addElementToBeginningOfArray(chocolateBars, foo) {
    var newChocolateBars = [foo, ...chocolateBars];
    return newChocolateBars;
  }
  
  function destructivelyAddElementToBeginningOfArray(chocolateBars, foo) {
    chocolateBars.unshift(foo);
    return chocolateBars;
  }
  
  function addElementToEndOfArray(chocolateBars, element) {
    var newerChocolateBars = [...chocolateBars, element]
    return newerChocolateBars
  }
  
  function destructivelyAddElementToEndOfArray (chocolateBars, foo) {
    chocolateBars.push(foo)
    return chocolateBars
  }
  
  function accessElementInArray (chocolateBars, index) {
    return chocolateBars[2]
    }
  
  function destructivelyRemoveElementFromBeginningOfArray (chocolateBars) {
    chocolateBars.shift()
    return chocolateBars
  }
  
  function destructivelyRemoveElementFromEndOfArray (chocolateBars) {
    chocolateBars.pop()
    return chocolateBars
  }
  
  function removeElementFromBeginningOfArray (chocolateBars) {
    var x = chocolateBars.slice(1)
    return chocolateBars
  }
  
  function destructivelyRemoveElementFromEndOfArray (chocolateBars) {
    chocolateBars.pop()
    return chocolateBars
  }