module.exports = function h(string, letter) {
  
  if(letter === undefined) {
    letter = "h";
  }
  
  if(typeof(letter) !== "string")
  throw new TypeError("letter must be specified in a string");
  
  if(letter.length > 1) 
  throw new RangeError("letter length cannot be more than 1");
  
  if(letter.match(/[0-9]+/g)) {
    throw new TypeError("letter must be specified as a letter")
  }
 return string.replace(/\S/g, letter);
}