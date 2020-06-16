export default function (el, parentNode) {
  const containWidth = 1920
  const containHeight = 1080
  const ratinX = parentNode.offsetWidth / containWidth
  const ratinY = parentNode.offsetHeight / containHeight
  const ratinBoundary = containHeight / containWidth
  const ratin = parentNode.offsetHeight / parentNode.offsetWidth > ratinBoundary ? ratinX : ratinY
  el.style.transform = `scale(${ratin})`
  // el.style.transform = `scale(${1})`
}
