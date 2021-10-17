function safeDiv(num1, num2) {
  let sum = num1 / num2;
  try {
    if (num2 == 0) {
      throw "Denominator is zero";
    }
    console.log(sum);
  } catch (error) {
    console.log(error);
  }
}
safeDiv(1, 8)