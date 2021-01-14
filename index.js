module.exports = function h(string) {
  if(typeof(string) !== "string") throw new TypeError("argument(s) must be a string!");
  return string.replace("h");
}