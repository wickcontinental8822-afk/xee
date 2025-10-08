import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Import your providers
import { DataProvider } from './context/DataContext';
import { AuthProvider } from './context/AuthContext'; // If used

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </AuthProvider>
  </StrictMode>
);

