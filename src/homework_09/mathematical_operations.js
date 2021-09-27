export function getTriangle(a, b, c) {
  const [sideA, sideB, sideC] = [a, b, c].sort((y, x) => y - x);
  const res = Math.sqrt(sideA ** 2 + sideB ** 2);
  if (res === sideC) {
    return true;
  }
  return false;
}

export function getCircle() {
  const r = Number(prompt("Введите радиус круга:"));
  if (r > 0) {
    const c = 2 * Math.PI * r;
    const s = Math.PI * r ** 2;
    console.log(c.toFixed(0), s.toFixed(0));
  } else {
    console.log(0, 0);
  }
}

function getDigital(value) {
  return Number(value);
}

export function getQuadraticEquation() {
  const input = prompt("Введите a, b и с:");
  const array = input.toString().split(",");
  let [a, b, c] = array;

  a = getDigital(a);
  b = getDigital(b);
  c = getDigital(c);

  const d = b ** 2 - 4 * a * c;
  console.log(d);
  if (d > 0) {
    const x1 = ((-b + Math.sqrt(d)) / 2) * a;
    const x2 = ((-b - Math.sqrt(d)) / 2) * a;
    console.log(x1.toFixed(0), x2.toFixed(0));
  } else if (d === 0) {
    const x1 = ((-b + Math.sqrt(d)) / 2) * a;
    console.log(x1.toFixed(0));
  } else {
    console.log("no roots");
  }
}