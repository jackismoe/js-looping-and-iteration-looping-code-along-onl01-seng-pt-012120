const writeCards = (array, event) => {
  let thankYouCards = [];
  for (let i = 0; i < array.length; i++) {
    thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
  }
  return thankYouCards
}

const countDown = (num) => {
  while (num > 0) {
    console.log(num)
    num -= 1
  }
  console.log(num)
}