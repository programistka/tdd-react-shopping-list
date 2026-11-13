# TDD in React: shopping list

Companion repository for a blog series about TDD in React on [programistka.com](https://programistka.com) (posts in Polish).

Part 1 uses the top-down (outside-in) approach. Every step of the red → green → refactor cycle is a separate commit, so you can walk through the history step by step:

```bash
git log --oneline --reverse
git checkout <hash>
pnpm test:run
```

## Getting started

```bash
pnpm install
pnpm test        # watch mode
pnpm test:run    # single run
pnpm dev         # run the app in the browser
```

## Stack

React, TypeScript, Vite, Vitest, React Testing Library, `@testing-library/user-event`, `@testing-library/jest-dom`, jsdom.
