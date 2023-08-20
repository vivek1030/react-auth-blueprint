// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import PrivateRoute from './helper/PrivateRoute';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route exact path="/" element={<h2>hhhh</h2>} />
          {/* Add other routes */}
        </Routes>
      </BrowserRouter>

    </Provider>
  );
};

export default App;
