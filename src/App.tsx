import type {} from 'styled-components/cssprop'

import { Routes, Route } from 'react-router-dom';
import Layout from './components/UI/layout';
import Home from './components/page/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
