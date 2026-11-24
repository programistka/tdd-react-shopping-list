import type { Item } from './shoppingListReducer'

type ShoppingItemProps = {
  item: Item
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

export const ShoppingItem = ({ item, onToggle }: ShoppingItemProps) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.bought}
          onChange={() => onToggle(item.id)}
        />
        {item.name}
      </label>
    </li>
  )
}
