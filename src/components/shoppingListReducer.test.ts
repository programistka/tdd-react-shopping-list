import { describe, expect, it } from 'vitest'
import { shoppingListReducer, type Item } from './shoppingListReducer'

const milk: Item = { id: '1', name: 'Milk', bought: false }
const bread: Item = { id: '2', name: 'Bread', bought: true }

describe('shoppingListReducer', () => {
  it('adds a product', () => {
    const items = shoppingListReducer([], { type: 'added', id: '1', name: 'Milk' })

    expect(items).toEqual([milk])
  })

  it('trims the product name', () => {
    const items = shoppingListReducer([], {
      type: 'added',
      id: '1',
      name: '  Milk ',
    })

    expect(items).toEqual([milk])
  })

  it('ignores a product with an empty name', () => {
    const items = shoppingListReducer([milk], {
      type: 'added',
      id: '2',
      name: '   ',
    })

    expect(items).toEqual([milk])
  })

  it('toggles the bought state of the given product only', () => {
    const items = shoppingListReducer([milk, bread], {
      type: 'toggled',
      id: '1',
    })

    expect(items).toEqual([{ ...milk, bought: true }, bread])
  })

  it('removes the given product', () => {
    const items = shoppingListReducer([milk, bread], {
      type: 'removed',
      id: '1',
    })

    expect(items).toEqual([bread])
  })
})
