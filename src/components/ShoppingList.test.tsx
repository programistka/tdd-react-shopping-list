import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ShoppingList } from './ShoppingList'

describe('ShoppingList', () => {
  it('shows a message when the list is empty', () => {
    render(<ShoppingList />)

    expect(screen.getByText('The list is empty')).toBeInTheDocument()
  })

  it('adds a product to the list', async () => {
    const user = userEvent.setup()
    render(<ShoppingList />)

    await user.type(screen.getByRole('textbox', { name: 'Product' }), 'Milk')
    await user.click(screen.getByRole('button', { name: 'Add' }))

    expect(screen.getByRole('listitem')).toHaveTextContent('Milk')
    expect(screen.queryByText('The list is empty')).not.toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Product' })).toHaveValue('')
  })
})
