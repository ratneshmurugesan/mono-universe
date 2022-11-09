// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function flatArray(array: any[], key: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any[] = []
  array.forEach(function (a) {
    result.push(a)
    if (Array.isArray(a[key])) {
      result = result.concat(flatArray(a[key], key))
    }
  })
  return result
}
