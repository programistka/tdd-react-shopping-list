import type { Item } from './shoppingListReducer'

type ShoppingItemProps = {
  item: Item
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

export const ShoppingItem = (_props: ShoppingItemProps) => {
  return null
}
