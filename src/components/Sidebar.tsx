
import { Home, Bot, Users, Calendar, BarChart3, Settings, Menu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  currentPage: string;
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'AI News Assistant', href: '/ai-assistant', icon: Bot },
  { name: 'Community', href: '/community', icon: Users },
  { name: 'Events', href: '/events', icon: Calendar },
];

const categories = [
  'Technology',
  'Business',
  'Finance',
  'Entertainment',
  'Sports',
  'Politics',
  'Health'
];

export const Sidebar = ({ isOpen, currentPage }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/category/${categoryName.toLowerCase()}`);
  };

  return (
    <div className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-40 ${
      isOpen ? 'w-64' : 'w-16'
    }`}>
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/b81f8737-b9e0-4ec4-a05c-e4147d047137.png" 
            alt="InfoAxis Logo" 
            className="w-8 h-8"
          />
          {isOpen && (
            <div>
              <h1 className="text-xl font-bold text-gray-900">InfoAxis</h1>
              <p className="text-xs text-gray-500">STAY INFORMED</p>
            </div>
          )}
        </div>
      </div>

      <nav className="mt-8 px-4">
        <div className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <button
                key={item.name}
                onClick={() => navigate(item.href)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className={`${isOpen ? 'mr-3' : ''} h-5 w-5`} />
                {isOpen && item.name}
              </button>
            );
          })}
        </div>

        {isOpen && (
          <div className="mt-8">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Categories
            </h3>
            <div className="mt-2 space-y-1">
              {categories.map((category) => {
                const isActive = location.pathname === `/category/${category.toLowerCase()}`;
                return (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
