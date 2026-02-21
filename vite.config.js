import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/Ambulance_FullLandingPage/',
    plugins: [
        tailwindcss(),
    ],
})
