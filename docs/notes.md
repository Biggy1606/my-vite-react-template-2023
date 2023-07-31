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

I wrote own notification system but i think it's not good enough. I'll try to use `notistack` instead.
Below example from my old project where i used `notistack`:

```typescript
import { useSnackbar, VariantType, WithSnackbarProps } from 'notistack';
import React from 'react';

let useSnackbarRef: WithSnackbarProps;
export const SnackbarExtension: React.FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

const snack = {
  success(msg: string) {
    this.toast(msg, 'success');
  },
  warning(msg: string) {
    this.toast(msg, 'warning');
  },
  info(msg: string) {
    this.toast(msg, 'info');
  },
  error(msg: string) {
    this.toast(msg, 'error');
  },
  toast(msg: string, variant: VariantType = 'default') {
    useSnackbarRef.enqueueSnackbar(msg, { variant });
  },
};

export default snack;
```

>I mostly don't understand what I'm doing
