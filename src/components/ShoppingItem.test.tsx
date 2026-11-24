import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  it('calls onToggle with the product id', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<ShoppingItem item={milk} onToggle={onToggle} onRemove={vi.fn()} />)

    await user.click(screen.getByRole('checkbox', { name: 'Milk' }))

    expect(onToggle).toHaveBeenCalledWith('1')
  })

  it('calls onRemove with the product id', async () => {
    const user = userEvent.setup()
    const onRemove = vi.fn()
    render(<ShoppingItem item={milk} onToggle={vi.fn()} onRemove={onRemove} />)

    await user.click(screen.getByRole('button', { name: 'Remove Milk' }))

    expect(onRemove).toHaveBeenCalledWith('1')
  })
})
