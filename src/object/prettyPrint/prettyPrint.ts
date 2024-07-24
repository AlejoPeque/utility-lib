import { isObject } from '@/check/isObject'

export const prettyPrint = (value: unknown): string | null => {
  if (!isObject(value)) return null

  return JSON.stringify(value, null, 2)
}
