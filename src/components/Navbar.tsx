
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
        <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 mb-8 shadow-xs">
            <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="space-x-3">
                    <Link 
                        to="/blog" 
                        className="px-4 py-2 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60 font-medium transition"
                    >
                        Blog
                    </Link>
                    {isAuthenticated && (
                        <Link 
                            to="/admin" 
                            className="px-4 py-2 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60 font-medium transition"
                        >
                            Admin Dashboard
                        </Link>
                    )}
                </div>

                <div>
                    {isAuthenticated ? (
                        <button 
                            onClick={handleLogout}
                            className="bg-rose-50 text-rose-600 px-4 py-2 rounded-2xl text-sm font-medium hover:bg-rose-100 transition shadow-2xs"
                        >
                            Log Out
                        </button>
                    ) : (
                        <Link 
                            to="/login"
                            className="bg-indigo-100 text-indigo-700 px-5 py-2 rounded-2xl text-sm font-medium hover:bg-indigo-200 transition shadow-2xs"
                        >
                            Log In
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}