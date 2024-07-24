import { isArray, isEmpty, isNumber, isObject, isString } from '@/check'

export function orderById<T extends object> (
  array: T[],
  key: keyof T,
  isAsc: boolean = true
): T[] {
  if (isEmpty(array)) return array // If the array is empty, return the array

  if (!isArray(array)) throw new Error('The first argument must be an array') // Verify that the first argument is an array

  if (!isObject(array[0])) throw new Error('The array must contain objects') // Verify that the array contains objects

  if (!isString(array[0][key]) && !isNumber(array[0][key])) {
    throw new Error('The key must be a string or a number')
  } // Verify that the key is a string or a number

  return array.sort((a, b) => {
    const valueA = a[key]
    const valueB = b[key]

    if (isString(valueA) && isString(valueB)) {
      return isAsc ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA)
    }

    if (isNumber(valueA) && isNumber(valueB)) {
      return isAsc ? valueA - valueB : valueB - valueA
    }
    throw new Error('The keys do not match the same type')
  })
}
