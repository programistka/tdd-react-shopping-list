export type Item = {
  id: string
  name: string
  bought: boolean
}

export type Action =
  | { type: 'added'; id: string; name: string }
  | { type: 'toggled'; id: string }
  | { type: 'removed'; id: string }

export const shoppingListReducer = (items: Item[], action: Action): Item[] => {
  switch (action.type) {
    case 'added': {
      const name = action.name.trim()
      if (name === '') return items

      return [...items, { id: action.id, name, bought: false }]
    }
    case 'toggled':
      return items.map((item) =>
        item.id === action.id ? { ...item, bought: !item.bought } : item,
      )
    case 'removed':
      return items.filter((item) => item.id !== action.id)
  }
}

export const countRemaining = (_items: Item[]): number => {
  return 0
}
