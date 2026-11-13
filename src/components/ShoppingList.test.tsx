import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ShoppingList } from './ShoppingList'

describe('ShoppingList', () => {
  it('shows a message when the list is empty', () => {
    render(<ShoppingList />)

    expect(screen.getByText('The list is empty')).toBeInTheDocument()
  })
})
