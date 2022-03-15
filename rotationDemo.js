const rotateString = (str, num) => {
  var newString = "";
  for (var i = 0; i < str.length; i++) {
    newString = newString + str[(i + (str.length - num)) % str.length];
  }
  return newString;
};












const isRotation = (str1, str2) => {};

a = "Did I shine my shoes today?";
b = "es  today?Did  I shine my sho";
c = "es  today ?Did  I shine my sho";

console.log();
