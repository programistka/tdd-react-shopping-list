import { useReducer, useState, type FormEvent } from 'react'
import { countRemaining, shoppingListReducer } from './shoppingListReducer'

export const ShoppingList = () => {
  const [items, dispatch] = useReducer(shoppingListReducer, [])
  const [name, setName] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (name.trim() === '') return

    dispatch({ type: 'added', id: crypto.randomUUID(), name })
    setName('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="product-name">Product</label>
        <input
          id="product-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {items.length === 0 ? (
        <p>The list is empty</p>
      ) : (
        <>
          <p>To buy: {countRemaining(items)}</p>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={item.bought}
                    onChange={() => dispatch({ type: 'toggled', id: item.id })}
                  />
                  {item.name}
                </label>
                <button
                  type="button"
                  aria-label={`Remove ${item.name}`}
                  onClick={() => dispatch({ type: 'removed', id: item.id })}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}
