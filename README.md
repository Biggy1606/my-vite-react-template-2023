# Personal UI tool stack

Toolstack for my UI projects.
> It was challenging stuff to configure, but now it works like a charm... I hope.

Used technologies:

| Name | Description |
|--------|---|
| [TypeScript](https://www.typescriptlang.org/) | Main Language |
| [Vite](https://vitejs.dev/) | Bundler |
| [React](https://reactjs.org/) | Framework |
| [TailwindCSS](https://tailwindcss.com/) | CSS Framework |
| [PostCSS](https://postcss.org/) | CSS Processor |
| [DaisyUI](https://daisyui.com/) | A tool for transforming CSS with JavaScript |
| [RadixUI](https://www.radix-ui.com/) | Unstyled, accessible components for building high‑quality design systems and web apps in React |
| [Zod](https://zod.dev/) | TypeScript-first schema validation with static type inference |
| [React Router](https://reactrouter.com/) | Routing. Docs are lame, use [github](https://github.com/remix-run/react-router/tree/main) |
> Planned: [React Hook Form](https://react-hook-form.com/)  Forms

Linting, formatting and code editor:

- [VSCode](https://code.visualstudio.com/)
- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)

> Always up-to-date tools rather than stable old.
> It's not intended to be shared, but you can use it if you want.

ToDo:
[ ] Add tests
[?] Add CI/CD
[?] Add SSR

## Usage

- Setup `VITE_APP_NAME` in `.env.{mode}` files and run:

```bash
npm run dev
```

- To build for production, run:

```bash
npm run build
```

> Use <https://daisyui.com/components> for components styling and <https://www.radix-ui.com/docs/primitives/overview/introduction> for components

### Contact

If you have any suggestions/opinions, please let me know in issues

#### Dev notes

[notes](docs/notes.md)
