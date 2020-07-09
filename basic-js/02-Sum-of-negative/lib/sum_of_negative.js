sumOfNegative = (array) => {
  let sum = 0
  for (let i = 0; i < array.length; i++){
    if (array[i] < 0)
    sum = sum+array[i]
  }

  return sum
  // TODO: You are getting a `numbers` array. Return the sum of **negative** numbers only.
}
