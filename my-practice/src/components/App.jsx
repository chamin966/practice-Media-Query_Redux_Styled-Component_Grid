import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact={true} element={<Home />}></Route>
        {/* 인자를 줄 거라면 exact={true}를 풀고 콜론을 넣고 인자 이름을 입력해야 한다 */}
        <Route path='/:id' element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
