var BreackException = {}

module.exports = function check(str, bracketsConfig) {
  let firsts = bracketsConfig.map(c => c[0])
  let lasts = bracketsConfig.map(c => c[1])
  const holder = []
  for (let letter of str) {
    state = 0
    if (firsts.includes(letter) && lasts.includes(letter)) {
      state = holder.filter(h => h === letter).length % 2 === 0 ? 1 : 2
    }
    else if (firsts.includes(letter)) {
      state = 1
    } else if (lasts.includes(letter)) {
      state = 2
    }
    if (state === 1) {
      holder.push(letter)
    } else if (state === 2) {
      const openPair = firsts[lasts.indexOf(letter)]
      if (holder[holder.length - 1] === openPair) {
          holder.splice(-1,1)
      } else {
          holder.push(letter)
          break
      }
    }
  }

  return holder.length === 0
}