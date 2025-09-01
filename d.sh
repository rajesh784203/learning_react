#!/bin/bash

# Exit on error
set -e

APP_NAME="my-app"

# Remove old project if exists
rm -rf $APP_NAME

# Create new Vite + React project
npm create vite@latest $APP_NAME -- --template react

cd $APP_NAME

# Install deps
npm install
npm install -D tailwindcss @tailwindcss/postcss

# Create tailwind.config.js
cat > tailwind.config.js <<'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

# Create postcss.config.js
cat > postcss.config.js <<'EOF'
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
EOF

# Configure src/index.css
cat > src/index.css <<'EOF'
@import "tailwindcss";
EOF

# Replace App.jsx with sample Tailwind component
cat > src/App.jsx <<'EOF'
function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white text-4xl font-bold">
      Tailwind Works 🎉
    </div>
  )
}
export default App
EOF

# Start dev server
npm run dev


