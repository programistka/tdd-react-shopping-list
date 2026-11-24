import type { Item } from './shoppingListReducer'

type ShoppingItemProps = {
  item: Item
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

export const ShoppingItem = ({ item }: ShoppingItemProps) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={item.bought} readOnly />
        {item.name}
      </label>
    </li>
  )
}
