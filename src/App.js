// import { useState } from 'react';
// import LoginForm from './components/Signin/Signin';
// import { Route, Routes } from 'react-router-dom';
// import { Layout } from './components/Layout/Layout';
// import { Home } from './components/Home/Home';
// import Register from './components/Signup/Signup';
// import { OneProduct } from './components/OneProduct/OneProduct';

function App() {
  // const [login, Setlogin] = useState('');
  // // eslint-disable-next-line
  // const [showOverlay, SetshowOverlay] = useState(false);

  // const handleLogin = () => {
  //   Setlogin(true);
  //   SetshowOverlay(true);
  // };

  // const closeForm = () => {
  //   Setlogin(false);
  //   SetshowOverlay(false);
  // };

  return (
    <div
      style={{ paddingBottom: '40px', maxWidth: '1400px', margin: '0 auto' }}
    >
      {' '}
      Hello
      {/* {login ? (
        <LoginForm closeForm={closeForm} backdrop={SetshowOverlay} />
      ) : (
        <></>
      )}
      <Routes>
        <Route path="/" element={<Layout handleLogin={handleLogin}/>}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<OneProduct/>}/>
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
