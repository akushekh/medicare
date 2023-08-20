function trimString(str){
  str = str.trim();
  return str;
}

function removeDuplicateObjectsFromArray(arr, property) {
  const seenValues = new Set();
  const uniqueObjects = [];

  for (const obj of arr) {
      const value = obj[property];
      if (!seenValues.has(value)) {
          seenValues.add(value);
          uniqueObjects.push(obj);
      }
  }

  return uniqueObjects;
  
}


module.exports = {
  trimString, 
  removeDuplicateObjectsFromArray
};
