import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../redux/actions/authActions';
import { Navigate, useLocation } from "react-router";

const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    let location = useLocation();
    if (isAuthenticated) {
        return <Navigate to="/" state={{ from: location }} />;
    }
    const handleLogin = () => {
        dispatch(loginRequest(username, password));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
