# University of Modo Campus Assistant Chatbot - Front End

A React-based frontend for the University of Modo Campus Assistant, connecting to a FastAPI backend. Response data currently finds best match from MIT handbook.

## 🎬 Demo Video  
[![Watch the Demo](https://img.shields.io/badge/▶_Watch_Full_Demo-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=YGy8wsjA0Vs)  
*(Click the button above to see the full functionality walkthrough!)*

## Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher) or yarn
- Vite (will be installed automatically with dependencies)
- FastAPI backend running (see backend documentation)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/modolabs/SEED25-Special-Project/tree/test
   cd frontend

2. Install dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm run dev

The application will be available at http://localhost:5173

## Dependencies
- Core
  ```bash
   react ^19.1.0
   react-dom ^19.1.0

- Development
  ```bash
   @vitejs/plugin-react ^4.6.0
   vite ^7.0.4

## Configuration
The project is pre-configured with:

1. Vite Proxy (in vite.config.js):
   ```bash
   server: {
      proxy: {
         '/api': {
            target: 'http://127.0.0.1:8000',
            changeOrigin: true
         }
      }
   }
All requests to /api will be redirected to your FastAPI backend without CORS issues.

2. Environment Variables:
Create .env file if needed:
   ```bash
   PINECONE_API_KEY=
   GROQ_API_KEY=
See backend documentation for more information.


## Project Structure
```bash
src/
├── App.jsx           # Main component
├── App.css           # Styles
├── index.css         # Styles
├── main.jsx          # main app
├── assets/           # Images
public/               # Static files
├── modo logo.png     # Modo logo
├── rectangle-1.png   # Modo bar
vite.config.js        # Vite configuration
