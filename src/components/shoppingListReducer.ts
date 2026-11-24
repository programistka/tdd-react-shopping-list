export type Item = {
  id: string
  name: string
  bought: boolean
}

export type Action = { type: 'added'; id: string; name: string }

export const shoppingListReducer = (items: Item[], _action: Action): Item[] => {
  return items
}
