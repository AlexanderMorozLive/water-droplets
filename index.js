const input = [1, 0, 2, 0, 1, 4, 3, 0, 2, 0, 0]

/**
 * returns the height of all traps
 *
 * @param {array} height
 * @return {number} total
 */
const trap = (height) => {
  let maxL = height[0]
  let maxR = height[height.length - 1]

  let left = 1
  let right = height.length - 2
  let total = 0

  while (left <= right) {
    if (maxL <= maxR) {
      maxL = Math.max(maxL, height[left])
      total += maxL - height[left]
      left += 1
    } else {
      maxR = Math.max(maxR, height[right])
      total += maxR - height[right]
      right -= 1
    }
  }

  console.log(total)
  // return total
}

trap(input)