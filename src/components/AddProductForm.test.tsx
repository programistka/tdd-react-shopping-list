import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { AddProductForm } from './AddProductForm'

describe('AddProductForm', () => {
  it('calls onAdd with the product name and clears the input', async () => {
    const user = userEvent.setup()
    const onAdd = vi.fn()
    render(<AddProductForm onAdd={onAdd} />)

    await user.type(screen.getByRole('textbox', { name: 'Product' }), 'Milk')
    await user.click(screen.getByRole('button', { name: 'Add' }))

    expect(onAdd).toHaveBeenCalledWith('Milk')
    expect(screen.getByRole('textbox', { name: 'Product' })).toHaveValue('')
  })

  it('does not call onAdd for an empty name', async () => {
    const user = userEvent.setup()
    const onAdd = vi.fn()
    render(<AddProductForm onAdd={onAdd} />)

    await user.type(screen.getByRole('textbox', { name: 'Product' }), '   ')
    await user.click(screen.getByRole('button', { name: 'Add' }))

    expect(onAdd).not.toHaveBeenCalled()
  })
})
