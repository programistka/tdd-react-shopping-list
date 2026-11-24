export type Item = {
  id: string
  name: string
  bought: boolean
}

export type Action =
  | { type: 'added'; id: string; name: string }
  | { type: 'toggled'; id: string }

export const shoppingListReducer = (items: Item[], action: Action): Item[] => {
  if (action.type !== 'added') return items

  const name = action.name.trim()
  if (name === '') return items

  return [...items, { id: action.id, name, bought: false }]
}
