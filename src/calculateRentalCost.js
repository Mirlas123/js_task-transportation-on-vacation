/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longt = 7;
  const longdisk = 50;
  const smallt = 3;
  const smalltdisk = 20;

  if (days >= longt) {
    return days * 40 - longdisk;
  }

  if (days >= smallt) {
    return days * 40 - smalltdisk;
  }

  return days * 40;
}

module.exports = calculateRentalCost;
