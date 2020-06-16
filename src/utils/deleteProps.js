export default function deleteProps (obj, keyList) {
  return Object.keys(obj).reduce((prev, cur) => {
    if (!keyList.includes(cur) && typeof obj[cur] !== 'undefined' && obj[cur] !== null && obj[cur] !== '') {
      prev[cur] = obj[cur]
    }
    return prev
  }, {})
}
