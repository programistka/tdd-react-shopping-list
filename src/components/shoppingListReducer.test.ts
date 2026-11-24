import { describe, expect, it } from 'vitest'
import { shoppingListReducer, type Item } from './shoppingListReducer'

const milk: Item = { id: '1', name: 'Milk', bought: false }

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
})
