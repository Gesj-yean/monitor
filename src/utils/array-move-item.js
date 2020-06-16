class MoveAction {
  swapArr (array, index, delta) {
    const newIndex = index + delta
    if (newIndex < 0 || newIndex === array.length) return
    const indexes = [index, newIndex].sort((a, b) => a - b)
    array.splice(indexes[0], 2, array[indexes[1]], array[indexes[0]])
  }

  moveUp (array, index) {
    this.swapArr(array, index, -1)
  }

  moveDown (array, index) {
    this.swapArr(array, index, 1)
  }

  moveBottom (array, index) {
    if (index !== array.length) {
      array.push(array.splice(index, 1)[0])
    }
  }

  moveTop (array, index) {
    if (index !== 0) {
      array.unshift(array.splice(index, 1)[0])
    }
  }
}

export default new MoveAction()
