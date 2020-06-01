export function demoStart (startVal, decimalPlaces, prefix, suffix, id, endVal
) {
  const OPTIONS = {
    startVal: startVal,
    decimalPlaces: decimalPlaces,
    prefix: prefix,
    suffix: suffix
  };
  /* global CountUp */
  const DEMO = new CountUp(id, endVal, OPTIONS);
  if (!DEMO.error) {
    DEMO.start();
  } else {
    console.log(DEMO.error);
  }
}
