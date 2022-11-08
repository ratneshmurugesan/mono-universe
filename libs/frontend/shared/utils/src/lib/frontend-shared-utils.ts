export function flatArray(array: any[], key: string) {
  let result: any[] = []
  array.forEach(function (a) {
    result.push(a)
    if (Array.isArray(a[key])) {
      result = result.concat(flatArray(a[key], key))
    }
  })
  return result
}
