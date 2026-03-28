# Bunanas 🍌🍞🤪

**Get cooking faster!** A *craaaazyy* template for building full-stack applications with [Bun](https://bun.sh/), [Vite](https://vitejs.dev/), [React](https://react.dev/), and [TypeScript](https://www.typescriptlang.org/).

<p align="center">
    bun<br />
    bun bun bun bun<br />
    bun bun bun bun bun bun<br />
    bun bun bun bun bun bun bun bun<br />
    bun bun bun bun bun bun bun bun bun bun<br />
    bun bun bun bun bun bun bun bun bun bun<br />
    bun bun bun bun bun bun bun bun bun bun<br />
    bun bun bun bun bun bun bun bun bun bun<br />
    bun bun bun bun bun bun bun bun<br />
    bun bun bun bun bun bun<br />
    bun bun bun bun
</p>

---

## Core Features

📚 **Full-Stack Ready:** Get started quick with a preconfigured `front` and `back` end.

📺 **Vite + React Frontend:** A modern, fast frontend setup with Vite, React, and TypeScript.

🍞 **Bun Trunk:** Leverages Bun for the backend server, package management, and script execution.

🫂 **Seamless Code Sharing:** A `shared` directory allows you to write code once and import it in both the frontend and backend using the `@shared` alias.

🙈 **Choose your own style:** No pre-installed component libraries, do whatever you want!

## Project Structure

```text
.
├── back/         # Bun backend application
├── front/        # Vite + React frontend application
├── shared/       # Code shared between front and back
├── package.json  # Root configuration and scripts
└── tsconfig.json # Root TypeScript configuration
```

## Getting Started

### Prerequisites

- Install [Bun](https://bun.sh/docs/installation).
- Use this template by [clicking here](https://github.com/new?template_name=bunanas&template_owner=joelebutler) or with the button at the top of the page.

### Setup

1. **Install dependencies:**

    In the root directory, this command will install all dependencies. You do not need to run this in each subfolder.

    ```bash
    bun install
    ```

2. **Run the development server:**
    This will start the backend server and the frontend Vite server concurrently.

    ```bash
    bun run dev
    ```

    - In dev, the frontend will be available at `http://localhost:5173/*`.
    - In dev, the backend will be available via proxy at `http://localhost:5173/api/*`.

## Available Scripts

All scripts can be run from the root directory.

- `bun run dev`: Starts both the frontend and backend development servers in watch mode.
- `bun run build`: Builds the frontend application for production.
- `bun run start`: Starts the backend server, serving the built frontend files.
- `bun run go`: A convenience script that builds and then starts the application.
- `bun run lint`: Lints the entire project using ESLint.
- `bun run check`: Runs the TypeScript compiler to check for type errors across the project.

## Code Sharing

To share code (e.g., types, validation logic, utility functions) between the frontend and backend, place it in the `shared` directory. You can then import it using the `@shared` alias in any file.

**Example:**

```typescript
// in shared/utils.ts
export const mySharedFunction = () => {
  // do shared thing here...
  return sharedValue
};
```

```typescript
// in back/index.ts or front/src/App.tsx
import { mySharedFunction } from '@shared/utils';

console.log(mySharedFunction());
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
