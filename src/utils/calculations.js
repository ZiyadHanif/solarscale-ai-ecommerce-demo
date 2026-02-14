export function calculateSystemSize(monthlyEnergyUsage) {
  // Average system produces about 1.3-1.5 kWh per kW per day
  // Assuming 30 days per month and 1.4 production ratio
  const dailyUsage = monthlyEnergyUsage / 30
  const requiredKw = dailyUsage / (1.4 * 5) // 5 peak sun hours average
  return Math.round(requiredKw * 10) / 10 // Round to 1 decimal
}

export function estimatePrice(systemSizeKw) {
  // Average cost: $2.50-3.00 per watt
  const costPerWatt = 2.75
  const pricePerKw = costPerWatt * 1000
  return Math.round(systemSizeKw * pricePerKw)
}

export function calculateRoi(systemPrice, monthlyUsage, electricityRate = 0.14) {
  const annualSavings = monthlyUsage * 12 * electricityRate
  const roiYears = systemPrice / annualSavings
  return Math.round(roiYears * 10) / 10
}