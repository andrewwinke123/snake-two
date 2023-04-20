
//------------variables----------------------------------------------//

let lastRenderTime = 0
const snakeSpeed = 2




//-------------functions---------------------------------------------//

function main(currentTime) {
  window.requestAnimationFrame(main)
  const secondsSinceLatRenderTime = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLatRenderTime < 1 / snakeSpeed) {
  return }

console.log('render')
lastRenderTime = currentTime
}





window.requestAnimationFrame(main)