// A tiny tip calculator app used to practice running tests in a pipeline.

// Returns the tip for a bill, rounded to cents.
function calculateTip(billAmount, tipPercent) {
  if (billAmount < 0 || tipPercent < 0) {
    throw new Error('Bill and tip must not be negative');
  }
  return Math.round(billAmount * tipPercent) / 100;
}

// Splits the bill plus tip evenly between people, rounded to cents.
function splitBill(billAmount, tipPercent, people) {
  if (people < 1) {
    throw new Error('There must be at least 1 person');
  }
  const total = billAmount + calculateTip(billAmount, tipPercent);
  return Math.round((total / people) * 100) / 100;
}

module.exports = { calculateTip, splitBill };
