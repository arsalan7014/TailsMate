# Welcome to Tailsmate Project project

## Project info

**URL**: Ill Update it later

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://githunvm install 18.18.0
nvm use 18.18.0
node -
npm -vb.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/arsalan7014/TailsMate.git

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Supabase Auth Setup 🔧[for your personal uses!! For tailsmate ive already added a database so do not commit yor auth keys!!!!!!!!!!!!!!!!!!!!!!!!!!!!!]

1. Create a project at https://app.supabase.com and copy the **Project URL** and **Anon (public) API Key**.
2. Add them to `.env.local` at the project root:

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

3. Restart the dev server (`npm run dev`).

4. Routes added:
   - `/signup` — Create a new account
   - `/signin` — Sign in with email and password

