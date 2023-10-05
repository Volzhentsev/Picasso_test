import './App.css';
import { Route, Routes } from 'react-router-dom';
import PostsList from './pages/components/PostsList';
import Post from './pages/components/Post';

function App() {

  return (
    <Routes>
      <Route path='/'>
        <Route index element={<PostsList/>}/>
        <Route path="/:id" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default App;
