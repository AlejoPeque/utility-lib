import { isEmpty } from '../isEmpty'

describe('isEmpty', () => {
  it('should return true when the value is an empty', () => {
    expect(isEmpty(null)).toBe(true)
  })
})
