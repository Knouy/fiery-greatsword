/* eslint-disable no-undef */
export const demoStart = (startVal, decimalPlaces, prefix, suffix, id,
  endVal) => {
  const OPTIONS = {
    startVal: startVal,
    decimalPlaces: decimalPlaces,
    prefix: prefix,
    suffix: suffix
  };
  // noinspection JSUnresolvedFunction
  const DEMO = new CountUp(id, endVal, OPTIONS);
  !DEMO.error ? DEMO.start() : console.log(DEMO.error);
};
