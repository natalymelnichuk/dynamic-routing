
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/blog');
    };

    return (
        <nav className="bg-white border-b shadow-sm mb-6">
            <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="space-x-4">
                    <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
                        Blog
                    </Link>
                    {isAuthenticated && (
                        <Link to="/admin" className="text-gray-700 hover:text-blue-600 font-medium">
                            Admin Dashboard
                        </Link>
                    )}
                </div>

                <div>
                    {isAuthenticated ? (
                        <button 
                            onClick={handleLogout}
                            className="bg-red-50 text-red-600 px-3 py-1.5 rounded text-sm font-medium hover:bg-red-100 transition"
                        >
                            Log Out
                        </button>
                    ) : (
                        <Link 
                            to="/login"
                            className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-blue-700 transition"
                        >
                            Log In
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}