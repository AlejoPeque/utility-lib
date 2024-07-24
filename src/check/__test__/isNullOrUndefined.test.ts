import { isNullOrUndefined } from '../isNullOrUndefined'

describe('isNullOrUndefined', () => {
  it('should return true when the value is an null', () => {
    expect(isNullOrUndefined(null)).toBe(true)
  })
  it('should return true when the value is an undefined', () => {
    expect(isNullOrUndefined(undefined)).toBe(true)
  })
  it('should return false when the value is an number', () => {
    expect(isNullOrUndefined(1)).toBe(false)
  })
})
