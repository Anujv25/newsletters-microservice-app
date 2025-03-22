import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SubscribeForm from './components/SubscribeForm';

const App: React.FC = () => {
  return <>
      <SubscribeForm />
    </>;
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
