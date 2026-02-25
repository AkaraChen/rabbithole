# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Rabbit Hole" - A React application that displays a masonry layout of embedded tweets using `react-tweet`. Built with Rsbuild and styled with CSS.

## Common Commands

All commands use `pnpm`:

```bash
# Development server (opens browser automatically)
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Lint and auto-fix issues
pnpm run check

# Format code
pnpm run format
```

## Architecture

### Tech Stack
- **Build Tool**: Rsbuild (Rspack-based, fast webpack alternative)
- **Framework**: React 19 with TypeScript
- **Linting/Formatting**: Biome (replaces ESLint + Prettier)
- **Styling**: Plain CSS with CSS Modules support
- **Tweet Embedding**: `react-tweet` library

### Project Structure
```
src/
├── index.tsx      # Application entry point
├── App.tsx        # Main component with masonry layout
├── App.css        # Styles for masonry layout
├── data.json      # Array of tweet IDs to display
└── env.d.ts       # TypeScript declarations
```

### Key Implementation Details

**Masonry Layout**: The app uses CSS multi-column layout (`column-count`) in `App.css` to create a masonry grid of tweet cards.

**Data Source**: Tweet IDs are stored in `src/data.json` as an array of strings. The `react-tweet` library handles fetching and rendering each tweet.

**Build Configuration**: Rsbuild config is minimal (`rsbuild.config.ts`) - just the React plugin and HTML title. Rsbuild handles TypeScript, JSX, and CSS out of the box.

## Code Style

- Biome enforces consistent formatting and linting
- Single quotes for JavaScript/TypeScript
- 2-space indentation
- CSS modules enabled for component-scoped styles

## Adding Tweets

To add more tweets, append new tweet IDs (the numeric string from a tweet URL) to the array in `src/data.json`. The masonry layout will automatically adjust.

Example: From `https://twitter.com/username/status/1234567890123456789`, extract `1234567890123456789`.