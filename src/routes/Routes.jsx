import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/home';

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
