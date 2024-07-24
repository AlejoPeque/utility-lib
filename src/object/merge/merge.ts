import { isObject } from '@/check/isObject'

export const merge = <T extends object, U extends object>(
  obj1: T,
  obj2: U
): (T & U) | null => {
  if (!isObject(obj1) || !isObject(obj2)) {
    return null
  }

  return { ...obj1, ...obj2 }
}
