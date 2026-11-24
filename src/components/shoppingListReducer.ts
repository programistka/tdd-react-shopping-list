export type Item = {
  id: string
  name: string
  bought: boolean
}

export type Action = { type: 'added'; id: string; name: string }

export const shoppingListReducer = (items: Item[], action: Action): Item[] => {
  return [...items, { id: action.id, name: action.name, bought: false }]
}
