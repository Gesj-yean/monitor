export default function selectProps (obj, keyList) {
  return keyList.reduce((prev, cur) => {
    if (typeof obj[cur] !== 'undefined' && obj[cur] !== null && obj[cur] !== '') {
      prev[cur] = obj[cur]
    }
    return prev
  }, {})
}
