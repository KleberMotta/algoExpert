export function zeroSumSubarray(nums: number[]) {
  let currentSum = 0
  const sumsSet = new Set([0])
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i]
    if (sumsSet.has(currentSum)) {
      return true
    }
    sumsSet.add(currentSum)
  }
  return false
}
