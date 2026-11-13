import { render, screen } from '@testing-library/react'
import userEvent, { type UserEvent } from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ShoppingList } from './ShoppingList'

const addProduct = async (user: UserEvent, name: string) => {
  await user.type(screen.getByRole('textbox', { name: 'Product' }), name)
  await user.click(screen.getByRole('button', { name: 'Add' }))
}

describe('ShoppingList', () => {
  it('shows a message when the list is empty', () => {
    render(<ShoppingList />)

    expect(screen.getByText('The list is empty')).toBeInTheDocument()
  })

  it('adds a product to the list', async () => {
    const user = userEvent.setup()
    render(<ShoppingList />)

    await addProduct(user, 'Milk')

    expect(screen.getByRole('listitem')).toHaveTextContent('Milk')
    expect(screen.queryByText('The list is empty')).not.toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Product' })).toHaveValue('')
  })

  it('does not add a product with an empty name', async () => {
    const user = userEvent.setup()
    render(<ShoppingList />)

    await addProduct(user, '   ')

    expect(screen.queryByRole('listitem')).not.toBeInTheDocument()
    expect(screen.getByText('The list is empty')).toBeInTheDocument()
  })

  it('marks a product as bought', async () => {
    const user = userEvent.setup()
    render(<ShoppingList />)

    await addProduct(user, 'Milk')
    await user.click(screen.getByRole('checkbox', { name: 'Milk' }))

    expect(screen.getByRole('checkbox', { name: 'Milk' })).toBeChecked()
  })

  it('shows the number of products to buy', async () => {
    const user = userEvent.setup()
    render(<ShoppingList />)

    await addProduct(user, 'Milk')
    await addProduct(user, 'Bread')

    expect(screen.getByText('To buy: 2')).toBeInTheDocument()
  })

  it('does not count products marked as bought', async () => {
    const user = userEvent.setup()
    render(<ShoppingList />)

    await addProduct(user, 'Milk')
    await addProduct(user, 'Bread')
    await user.click(screen.getByRole('checkbox', { name: 'Milk' }))

    expect(screen.getByText('To buy: 1')).toBeInTheDocument()
  })

  it('removes a product from the list', async () => {
    const user = userEvent.setup()
    render(<ShoppingList />)

    await addProduct(user, 'Milk')
    await addProduct(user, 'Bread')
    await user.click(screen.getByRole('button', { name: 'Remove Milk' }))

    expect(screen.queryByRole('checkbox', { name: 'Milk' })).not.toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: 'Bread' })).toBeInTheDocument()
  })
})
