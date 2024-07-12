import { isArray, isEmpty, isNumber, isString } from '@/check'

type Item = string | number

export function filterById<T extends object> (array: T[], key: keyof T, item: Item): T[] {
  // Validation Array
  if (!isArray(array)) throw new Error('The first argument must be an array')
  // Is the array empty?
  if (isEmpty(array)) return array
  // Validation Key
  // Verificar si la clave existe en el primer elemento del array
  if (!(key in array[0])) {
    throw new Error('The filter key does not exist in the object')
  }
  const keyValue = array[0][key]

  // Ajustar la validación para permitir null y undefined, pero verificar que sea string o number cuando no lo sea
  if (keyValue !== null && keyValue !== undefined && !isString(keyValue) && !isNumber(keyValue)) {
    throw new Error('The key must be a string or a number')
  }
  // Validation Item
  if (!isString(item) && !isNumber(item)) throw new Error('The item must be a string or a number')

  // Process
  // Ajustar el filtro para manejar correctamente null y undefined
  return array.filter((element) => element[key] === item || (item === null && element[key] === null) || (item === undefined && element[key] === undefined))
}
