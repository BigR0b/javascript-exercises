const ftoc = function(temp) {
  let celsiusTemp = (temp - 32) * 5 / 9;
  if (celsiusTemp % 1 !== 0) {
    let celsiusRounded = Number(Math.round(celsiusTemp + "e1") + "e-1")
    return celsiusRounded;
  }else{
    return celsiusTemp;
  }
};

const ctof = function(temp) {
  let fahrenheitTemp = temp * 9/5 + 32;
  if (fahrenheitTemp % 1 !== 0) {
    let fahrenheitRounded = Number(Math.round(fahrenheitTemp + "e1") + "e-1")
    return fahrenheitRounded;
  } else {
    return fahrenheitTemp;
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
