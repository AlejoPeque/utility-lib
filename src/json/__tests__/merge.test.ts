import { merge } from '../merge'

describe('merge', () => {
  test('should merge two objects', () => {
    expect(merge({ foo: 'bar' }, { bar: 'baz' })).toEqual({
      foo: 'bar',
      bar: 'baz'
    })

    const obj1 = { foo: 'bar' }
    const obj2 = {
      fob: 'baz',
      bar: {
        baz: 'qux'
      }
    }

    expect(merge(obj1, obj2)).toEqual({
      foo: 'bar',
      fob: 'baz',
      bar: {
        baz: 'qux'
      }
    })
  })

  test('should overwrite properties from the second object', () => {
    expect(merge({ foo: 'bar' }, { foo: 'baz' })).toEqual({ foo: 'baz' })
  })

  test('should error if either argument is not an object', () => {
    // @ts-expect-error we need to test this usecase
    expect(merge({ foo: 'bar' }, 42)).toBeNull()
  })
})
