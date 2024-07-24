/*
    Test for filterById
 */

import { filterById } from '..'

describe('filterById', () => {
  // Caso de prueba básico
  it('should filter an array of objects based on a given key and value', () => {
    const input = [{ id: 2 }, { id: 1 }, { id: 3 }]
    const key = 'id'
    const item = 2
    const expected = [{ id: 2 }]

    expect(filterById(input, key, item)).toEqual(expected)
  })

  // Caso de prueba con clave numérica
  it('should handle numeric keys correctly', () => {
    const input = [{ 0: 2 }, { 0: 1 }, { 0: 3 }]
    const key = 0
    const item = 3
    const expected = [{ 0: 3 }]

    expect(filterById(input, key, item)).toEqual(expected)
  })

  // Caso de prueba con arreglo vacío
  it('should return an empty array when input array is empty', () => {
    // @ts-expect-error we need to test this usecase
    const input = []
    const key = 'id'
    const item = 1

    // @ts-expect-error we need to test this usecase
    expect(filterById(input, key, item)).toEqual([])
  })

  // Caso de prueba sin coincidencias
  it('should return an empty array when no items match', () => {
    const input = [{ id: 2 }, { id: 1 }, { id: 3 }]
    const key = 'id'
    const item = 4

    expect(filterById(input, key, item)).toEqual([])
  })

  // Caso de prueba con múltiples coincidencias
  it('should return all matching items when multiple items match the criteria', () => {
    const input = [{ id: 2 }, { id: 2 }, { id: 3 }]
    const key = 'id'
    const item = 2
    const expected = [{ id: 2 }, { id: 2 }]

    expect(filterById(input, key, item)).toEqual(expected)
  })

  // Caso de prueba con valores nulos y undefined
  it('should handle null and undefined values correctly', () => {
    const input = [{ id: null }, { id: undefined }, { id: 2 }]
    const key = 'id'
    const item = 2
    const expected = [{ id: 2 }]

    expect(filterById(input, key, item)).toEqual(expected)
  })

  // Caso de prueba con argumentos inválidos
  it('should throw an error when the first argument is not an array', () => {
    const input = 'not an array'
    const key = 'id'
    const item = 2

    // @ts-expect-error we need to test this usecase
    expect(() => filterById(input, key, item)).toThrow(
      'The first argument must be an array'
    )
  })

  it('should throw an error when the item is not a string or a number', () => {
    const input = [{ id: 2 }]
    const key = 'id'
    const item = { obj: 'not a string or number' }

    // @ts-expect-error we need to test this usecase
    expect(() => filterById(input, key, item)).toThrow(
      'The item must be a string or a number'
    )
  })

  // Caso de prueba con claves no existentes
  it('should return an error when the filter key does not exist in the object', () => {
    const input = [{ id: 2 }]
    const key = 'name'
    const item = 2

    // @ts-expect-error we need to test this usecase
    expect(() => filterById(input, key, item)).toThrow(
      'The filter key does not exist in the object'
    )
  })

  // Caso de prueba para verificar el error cuando el primer argumento no es un arreglo
  it('should throw an error if the first argument is not an array', () => {
    // @ts-expect-error we need to test this usecase
    expect(() => filterById('notAnArray', 'id', 2)).toThrow(
      'The first argument must be an array'
    )
  })

  // Caso de prueba para verificar el error cuando la clave no es una cadena o un número
  it('should return an error when the value associated with the key is not a string or a number', () => {
    const input = [{ id: {} }]
    const key = 'id'
    const item = 2

    expect(() => filterById(input, key, item)).toThrow(
      'The key must be a string or a number'
    )
  })

  // Caso de prueba para verificar el error cuando el item no es una cadena o un número
  it('should throw an error if the item is not a string or number', () => {
    // @ts-expect-error we need to test this usecase
    expect(() => filterById([{ id: 2 }], 'id', {})).toThrow(
      'The item must be a string or a number'
    )
  })
})
