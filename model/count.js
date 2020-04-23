export function count (element, uce, s, gold, silver) {
  if (element != null && element.id === 81743) {
    uce.innerText = Number(uce.textContent) + element.count;
    s.innerHTML = Number(uce.textContent) > 1 ? '&nbspUnstable Cosmic Essences'
      : '&nbspUnstable Cosmic Essence';
    gold.innerHTML = (Math.trunc(Number(uce.textContent) / 2)).toString() +
      '&nbsp';
    silver.innerHTML = Number(uce.textContent) % 2 === 1
      ? '&nbsp&nbsp50&nbsp' : '&nbsp&nbsp0&nbsp';
  }
}
