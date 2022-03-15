const rotateString = (str, num) => {
  newString = "";

  for (var i = 0; i < str.length; i++) {
    newString.push(str[(i + 2) % str.length]);
    console.log(`i: ${i} --- str.len: ${str.length}`);
  }
  return newString;
};

const isRotation = (str1, str2) => {};

a = "Did I shine my shoes today?";
b = "es  today?Did  I shine my sho";
c = "es  today ?Did  I shine my sho";

console.log();
