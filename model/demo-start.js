import { CountUp } from '../dist/countUp.min.js';

export function demoStart (startVal, decimalPlaces, prefix, suffix, id, endVal
) {
  const OPTIONS = {
    startVal: startVal,
    decimalPlaces: decimalPlaces,
    prefix: prefix,
    suffix: suffix
  };
  const DEMO = new CountUp(id, endVal, OPTIONS);
  if (!DEMO.error) {
    DEMO.start();
  } else {
    console.log(DEMO.error);
  }
}
