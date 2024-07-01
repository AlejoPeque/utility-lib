export const isObject = (value: unknown): boolean => {
  if (value === null) return false
  return typeof value === 'object'
}
