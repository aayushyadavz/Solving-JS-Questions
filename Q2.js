// Create a function that takes voltage and current and returns the calculated power.

function circuitPower(voltage, current) {
  const result = voltage * current;
  return result;
}

const power = circuitPower(480, 20);
console.log(power);
