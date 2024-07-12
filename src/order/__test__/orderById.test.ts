import { orderById } from '..'

/*
    Test for orderById
*/

describe('orderById', () => {
  it('should return an object array ordered by the key', () => {
    expect(orderById([{ id: 2 }, { id: 1 }, { id: 3 }], 'id')).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }])
  })
  it('should return an object array ordered by the key in descending order', () => {
    expect(orderById([{ id: 2 }, { id: 1 }, { id: 3 }], 'id', false)).toEqual([{ id: 3 }, { id: 2 }, { id: 1 }])
  })
  it('should return an object array ordered by the key in ascending order', () => {
    expect(orderById([{ id: 2 }, { id: 1 }, { id: 3 }], 'id', true)).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }])
  })
  it('should return an empty array', () => {
    expect(orderById([], 'id')).toEqual([])
  })
  it('should return an error if the array is not an object', () => {
    // @ts-expect-error we need to test this usecase
    expect(() => orderById(['a', 'b', 'c'], 'id')).toThrow('The array must contain objects')
  })
  it('should return an error if the array does not have the key to order it', () => {
    // @ts-expect-error we need to test this usecase
    expect(() => orderById([2, 3])).toThrow('The array must contain objects')
  })
  it('should return an error if the key is not a string or a number', () => {
    expect(() => orderById([{ id: true }, { id: false }], 'id')).toThrow('The key must be a string or a number')
  })
})
