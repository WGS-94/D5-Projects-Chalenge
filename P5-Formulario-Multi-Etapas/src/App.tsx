import { Router } from './routes';
import { FormProvider } from './contexts/FormContext';

import './global.css';

export default function App() {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}