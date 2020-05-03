export function countdown () {
  const RESET = new Date();
  RESET.setUTCDate(new Date().getUTCDate() + 1);
  RESET.setUTCHours(0);
  RESET.setUTCMinutes(0);
  RESET.setUTCSeconds(0);
  RESET.setUTCMilliseconds(0);
  const COUNTDOWN = RESET.getTime() - new Date().getTime();
  const HOURS = Math.floor((COUNTDOWN % (1000 * 60 * 60 * 24)) / (1000 * 60 *
    60));
  const MINUTES = Math.floor((COUNTDOWN % (1000 * 60 * 60)) / (1000 * 60));
  const SECONDS = Math.floor((COUNTDOWN % (1000 * 60)) / 1000);
  document.getElementById('countdown').innerHTML = (HOURS.toString().length ===
  1 ? '0' + HOURS : HOURS) + ':' + (MINUTES.toString().length === 1 ? '0' +
    MINUTES : MINUTES) + ':' + (SECONDS.toString().length === 1 ? '0' +
    SECONDS : SECONDS);
}
