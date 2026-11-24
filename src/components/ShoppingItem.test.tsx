import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ShoppingItem } from './ShoppingItem'
import type { Item } from './shoppingListReducer'

const milk: Item = { id: '1', name: 'Milk', bought: false }

describe('ShoppingItem', () => {
  it('shows the product as a checkbox', () => {
    render(<ShoppingItem item={milk} onToggle={vi.fn()} onRemove={vi.fn()} />)

    expect(screen.getByRole('checkbox', { name: 'Milk' })).not.toBeChecked()
  })

  it('checks the checkbox for a bought product', () => {
    render(
      <ShoppingItem item={{ ...milk, bought: true }} onToggle={vi.fn()} onRemove={vi.fn()} />,
    )

    expect(screen.getByRole('checkbox', { name: 'Milk' })).toBeChecked()
  })
})
