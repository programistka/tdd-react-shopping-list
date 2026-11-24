import { useState, type FormEvent } from 'react'

type AddProductFormProps = {
  onAdd: (name: string) => void
}

export const AddProductForm = ({ onAdd }: AddProductFormProps) => {
  const [name, setName] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (name.trim() === '') return

    onAdd(name)
    setName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product-name">Product</label>
      <input
        id="product-name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}
