import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/movies_viewer_api/", // Replace with your GitHub repository name
});
