# TDD in React: shopping list

Companion repository for the blog series **TDD w React** on [programistka.com](https://programistka.com).

**Part 1 – top-down:** [TDD w React, część 1: lista zakupów metodą top-down](https://programistka.com/tdd-w-react-czesc-1-top-down/) (Polish) · [English translation](https://programistka.com/en/tdd-w-react-czesc-1-top-down/)

**Part 2 – bottom-up:** [TDD w React, część 2: lista zakupów metodą bottom-up](https://programistka.com/tdd-w-react-czesc-2-bottom-up/) (Polish) · [English translation](https://programistka.com/en/tdd-w-react-czesc-2-bottom-up/). The code lives on the [`bottom-up`](https://github.com/programistka/tdd-react-shopping-list/tree/bottom-up) branch.

Every step of the red → green → refactor cycle is a separate commit, so you can follow the post commit by commit and run the tests at each step.

## What we build

A shopping list component, driven by these requirements:

1. An empty list shows the message "The list is empty".
2. Typing a name and clicking "Add" adds the product and clears the input.
3. An empty name (or only spaces) does not add a product.
4. A product can be marked as bought.
5. A counter shows how many products are left to buy.
6. A product can be removed from the list.

Part 1 builds it **top-down (outside-in)**: tests render the whole `<ShoppingList />` and interact with it the way a user would. The internal structure (a reducer) only appears when the code needs it. Part 2 builds the same component **bottom-up (inside-out)** on the `bottom-up` branch: first the reducer, then `<ShoppingItem />` and `<AddProductForm />` tested in isolation, and finally `<ShoppingList />` composed from them.

## Commit by commit

| Step | Commit | Tests |
|---|---|---|
| Setup: Vite, React, Vitest, React Testing Library | [`beb18d6`](https://github.com/programistka/tdd-react-shopping-list/commit/beb18d66ee82ddc2f11149bdd2240db92207cec8) | – |
| Cycle 1 (red): empty list message | [`dc36690`](https://github.com/programistka/tdd-react-shopping-list/commit/dc36690bba0bcad3667990ae4fa555b18b418142) | 1 failing |
| Cycle 1 (green) | [`537f737`](https://github.com/programistka/tdd-react-shopping-list/commit/537f73700ae079c5b825a292fa1881f5848f91ab) | 1 passing |
| Cycle 2 (red): adding a product | [`8df4cdb`](https://github.com/programistka/tdd-react-shopping-list/commit/8df4cdb410931e002cf12d8aaf17b7121487b712) | 1 failing |
| Cycle 2 (green) | [`c6fb498`](https://github.com/programistka/tdd-react-shopping-list/commit/c6fb4985bbee8afca8bcbab9e4d044be703b29fd) | 2 passing |
| Cycle 3 (red): empty product name | [`f8c6e91`](https://github.com/programistka/tdd-react-shopping-list/commit/f8c6e91962b35a0486d542e17874e4e06dfb2c71) | 1 failing |
| Cycle 3 (green) | [`06d7177`](https://github.com/programistka/tdd-react-shopping-list/commit/06d7177b0c52ff6e0f4373aa40d8c454bf7d29a2) | 3 passing |
| Cycle 4 (red): marking a product as bought | [`1b19970`](https://github.com/programistka/tdd-react-shopping-list/commit/1b1997087ebfe01180222358e9b0c2a10f3294e8) | 1 failing |
| Cycle 4 (green) | [`47ec2e4`](https://github.com/programistka/tdd-react-shopping-list/commit/47ec2e40418c40589a17148979e412cc23503862) | 4 passing |
| Refactor tests: `addProduct` helper | [`fd37cf8`](https://github.com/programistka/tdd-react-shopping-list/commit/fd37cf8c84049a60a63c58c5ec64907c00647cac) | 4 passing |
| Cycle 5 (red): products-to-buy counter | [`3d797a4`](https://github.com/programistka/tdd-react-shopping-list/commit/3d797a4cccb128bff7cde7e921d5977fd36cebd2) | 2 failing |
| Cycle 5 (green) | [`5c7063b`](https://github.com/programistka/tdd-react-shopping-list/commit/5c7063b9cfba069edd92061b86174dfe12250f3f) | 6 passing |
| Cycle 6 (red): removing a product | [`6f76acd`](https://github.com/programistka/tdd-react-shopping-list/commit/6f76acd5757d5c33c235ecfa57b96c3e553c5c27) | 1 failing |
| Cycle 6 (green) | [`a03e0c6`](https://github.com/programistka/tdd-react-shopping-list/commit/a03e0c6af2dceabd6c44b217dcc0f06208f5b9b0) | 7 passing |
| Refactor: list logic moved to a reducer | [`872126c`](https://github.com/programistka/tdd-react-shopping-list/commit/872126c6bd41e03f52abd4d02fc464ad4f83589a) | 7 passing, component tests unchanged |
| Reducer unit tests | [`fe8af84`](https://github.com/programistka/tdd-react-shopping-list/commit/fe8af8454847a039be0441422b28e6453a786682) | 12 passing |

To check out a step locally:

```bash
git log --oneline --reverse
git checkout <hash>
pnpm test:run
git checkout main   # back to the latest version
```

## Project structure

```
src/
├── components/
│   ├── ShoppingList.tsx               # the component
│   ├── ShoppingList.test.tsx          # component tests (React Testing Library)
│   ├── shoppingListReducer.ts         # list logic, extracted in the last refactor
│   └── shoppingListReducer.test.ts    # reducer unit tests
├── vitest-setup.ts                    # jest-dom matchers + cleanup after each test
└── App.tsx
```

## Getting started

```bash
pnpm install
pnpm test        # watch mode
pnpm test:run    # single run
pnpm dev         # run the app in the browser
```

## Stack

React 19, TypeScript, Vite, Vitest 5, React Testing Library 16, `@testing-library/user-event`, `@testing-library/jest-dom`, jsdom.

Vitest runs without `globals`, so `src/vitest-setup.ts` calls React Testing Library's `cleanup` after each test explicitly.
