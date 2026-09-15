
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        login(); 
        navigate('/admin'); 
    };

    return (
        <div className="max-w-md mx-auto mt-16 p-6 border rounded-lg shadow-sm bg-white">
            <h1 className="text-2xl font-bold mb-6 text-gray-900">Admin Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input 
                        type="password" 
                        placeholder="Enter password..."
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="password"
                    />
                </div>
                <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition font-medium"
                >
                    Log In
                </button>
            </form>
        </div>
    );
}