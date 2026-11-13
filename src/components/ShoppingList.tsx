import { useState, type FormEvent } from 'react'

export const ShoppingList = () => {
  const [items, setItems] = useState<string[]>([])
  const [name, setName] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedName = name.trim()
    if (trimmedName === '') return

    setItems([...items, trimmedName])
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
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </>
  )
}
