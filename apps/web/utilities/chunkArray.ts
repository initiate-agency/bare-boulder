export function chunkArray(array: any[], size: number) {
  const chunkedArr = []
  let index = 0

  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index))
    index += size
  }

  return chunkedArr
}
