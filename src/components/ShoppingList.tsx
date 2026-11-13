import { useState, type FormEvent } from 'react'

type Item = {
  id: string
  name: string
  bought: boolean
}

export const ShoppingList = () => {
  const [items, setItems] = useState<Item[]>([])
  const [name, setName] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedName = name.trim()
    if (trimmedName === '') return

    setItems([
      ...items,
      { id: crypto.randomUUID(), name: trimmedName, bought: false },
    ])
    setName('')
  }

  const toggleItem = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item,
      ),
    )
  }

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const remainingCount = items.filter((item) => !item.bought).length

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
          <p>To buy: {remainingCount}</p>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={item.bought}
                    onChange={() => toggleItem(item.id)}
                  />
                  {item.name}
                </label>
                <button
                  type="button"
                  aria-label={`Remove ${item.name}`}
                  onClick={() => removeItem(item.id)}
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
