import { Link } from 'react-router-dom';
import { Image as ImageIcon } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useModalStore } from '../store/modalStore';

export default function Header() {
  const { user, logout } = useAuthStore();
  const { openShareModal } = useModalStore();

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <ImageIcon className="w-6 h-6" />
          <span>PicShare</span>
        </Link>

        <nav className="flex items-center space-x-6">
          {user ? (
            <>
              <div className="flex items-center space-x-6">
                <Link 
                  to="/" 
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Home
                </Link>
                <Link 
                  to="/favorites" 
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Favorites
                </Link>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  onClick={openShareModal}
                >
                  Share Pic
                </button>
                <span className="text-gray-600">Hi {user.username}</span>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Log out
                </button>
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Log in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}