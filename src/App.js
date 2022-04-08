import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './Components/shared/PageNotFound';
import Layout from './Components/layouts/Layout';
import Home from './Components/home/HomePage';
import Article from './Components/article/ArticlePage';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/article' element={<Article />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
