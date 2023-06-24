# notes

## `.eslint.cjs`

> kinda strange prettier config, but it works

## `.prettierrc.cjs`

> `endOfLine: "lf"` - this may cause troubles with `git` on Windows but not tested yet.
> `printWidth: 80` - this is good for smaller screens, i've tried `120` and is also good
> `tabWidth: 1` - I think about disanling this and use `2` or `4` `spaces` instead

## `tailwind.config.js`

>Problems with `require` - just add `node: true` to eslint config

## `vite.config.js`

>This is how to enable `env` usage in code.
>Require `VITE_` prefix to be used in `.env` files.

```js
export default ({ mode }) => {
 process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
 return defineConfig({
    //...
 })
 //...
}
```

## `tsconfig.json`

> Most explanations are in file itself, nothig special. I was learning how to use it.
> `.tsconfig.node.json` is for `vite.config.js` to use `node` modules in code. But not sure if it's working so I disabled it.

### Summary

I mostly don't understand what I'm doing
