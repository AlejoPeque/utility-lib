import { prettyPrint } from '../prettyPrint'

describe('prettyPrint', () => {
  test('should return null for non-object values', () => {
    expect(prettyPrint(42)).toBeNull()
    expect(prettyPrint('foo')).toBeNull()
    expect(prettyPrint(true)).toBeNull()
    expect(prettyPrint(null)).toBeNull()
  })

  test('should return pretty-printed JSON for objects', () => {
    expect(prettyPrint({ foo: 'bar' })).toBe('{\n  "foo": "bar"\n}')
    expect(prettyPrint({ foo: { bar: 'baz' } })).toBe(
      '{\n  "foo": {\n    "bar": "baz"\n  }\n}'
    )
  })
})
