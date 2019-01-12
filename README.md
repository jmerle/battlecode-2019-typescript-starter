# Battlecode 2019 Typescript Starter

A starter project to use TypeScript in Battlecode 2019.

## Installation

1. Clone or download this repository.
2. `cd` into the directory.
3. Copy the `battlecode.d.ts` file from the [latest release of jmerle/battlecode-2019-types](https://github.com/jmerle/battlecode-2019-types/releases) to `src/battlecode.d.ts`.
4. Add `// tslint:disable variable-name member-access` to the top of `src/battlecode.d.ts`.
5. Run `yarn` to install the dependencies, or `npm install` when using npm.

## NPM

Although this starter project uses [Yarn](https://yarnpkg.com/en/) by default, you can also use npm. Just make sure to remove the `yarn.lock` file and remove the `package-lock.json` entry from the `.gitignore` file to make sure you commit the lockfile.

## Upgrading bc19

This project defines bc19 as a dependency. To upgrade it, run `yarn upgrade bc19` or `npm upgrade bc19` inside the root of the project.

## Scripts

You can run these scripts via `yarn {script name}` or `npm run {script name}`:
- `build`: builds the TypeScript code into one JavaScript file at `build/robot.js`.
- `lint`: lints your code with tslint.
- `start`: runs your bot against itself using `bc19run`.
- `compile`: compiles your bot using `bc19compile`.
- `upload`: uploads your bot using `bc19upload`.

## Extra tools

This starter project also includes some extra tools to make life easier:
- [Prettier](https://github.com/prettier/prettier) to enforce a consistent code style.
- [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) to automatically run tslint and Prettier on changed files when committing. This makes sure that all committed code uses the same style guide and lints against the linting rules in `tslinst.json`.
