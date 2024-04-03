# Install package

- delete dependencies and devDependencies in package.json

```sh
yarn add @types/react @types/react-dom @types/node @vitejs/plugin-react @types/react-router-dom dotenv typescript react react-dom react-router-dom axios vite --network-timeout 100000
```

# Setup eslint and prettier

to bypass checking --no-verify

```sh
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-react
```

```sh
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

# Setup husky

```sh
yarn add -D husky
```

```sh
yarn husky init
```

```sh
echo "npm run lint:fix" > .husky/pre-commit
```

# Extension vscode

- **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**
- **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**
- **[Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)**

# Copy files ( for Laravel )

- vite.config.ts
- tsconfig.node.json
- tsconfig.json
- package.json
- index.html
