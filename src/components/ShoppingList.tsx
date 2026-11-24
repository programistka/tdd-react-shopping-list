import { useReducer } from 'react'
import { AddProductForm } from './AddProductForm'
import { ShoppingItem } from './ShoppingItem'
import { countRemaining, shoppingListReducer } from './shoppingListReducer'

export const ShoppingList = () => {
  const [items, dispatch] = useReducer(shoppingListReducer, [])

  return (
    <>
      <AddProductForm
        onAdd={(name) => dispatch({ type: 'added', id: crypto.randomUUID(), name })}
      />

      {items.length === 0 ? (
        <p>The list is empty</p>
      ) : (
        <>
          <p>To buy: {countRemaining(items)}</p>
          <ul>
            {items.map((item) => (
              <ShoppingItem
                key={item.id}
                item={item}
                onToggle={(id) => dispatch({ type: 'toggled', id })}
                onRemove={(id) => dispatch({ type: 'removed', id })}
              />
            ))}
          </ul>
        </>
      )}
    </>
  )
}
