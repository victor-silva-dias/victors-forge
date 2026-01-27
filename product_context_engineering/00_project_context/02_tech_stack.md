# Tech Stack & Architecture

## 1. Core Stack
*   **Runtime**: Bun (Package Manager & Script Runner)
*   **Framework**: React 19
*   **Build Tool**: Vite
*   **Language**: TypeScript

## 2. Styling & UI
*   **Styling Engine**: `styled-components` (CSS-in-JS).
*   **Animation**: `framer-motion` (Declarative animations).
*   **Icons**: SVGs / React Icons (TBD).

## 3. State Management
*   **Global State**: `zustand` (Minimalist flux-like state).
*   **Server State**: `@tanstack/react-query` (if API integration is needed later).

## 4. Routing
*   **Router**: `react-router-dom` v6+.

## 5. Dev Tools & Quality
*   **Linting**: ESLint (Flat Config).
*   **Formatting**: Prettier (if configured).
*   **Conventions**:
    *   **Barrel Exports**: `index.ts` for folder encapsulation.
    *   **Component Structure**: `src/components/{type}/{Name}.tsx`.
