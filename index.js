module.exports = function h(string) {
  if(string.size === "big") {
    return string.replace(/\S/g, "H");
  } else {
    if(string.size === "small") {
      return string.replace(/\S/g, "h");
    }
  }
  
  if(typeof(string) !== "string") throw new TypeError("argument(s) must be a string!");
  return string.replace(/\S/g, "h");
}