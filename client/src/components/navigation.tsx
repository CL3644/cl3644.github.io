import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Home", key: "home" },
    { path: "/about", label: "About", key: "about" },
    { path: "/schedule", label: "Contact", key: "schedule" },
  ];

  return (
    <nav className="glass-effect sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <span className="text-2xl font-bold gradient-text">Calvin Lu</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></div>
              </div>
              {/* <span className="ml-3 text-sm text-gray-600 font-medium">Product Manager</span> */}
            </Link>
          </div>
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Link
                  key={item.key}
                  href={item.path}
                  className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    isActive
                      ? "gradient-primary text-white shadow-lg"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  {item.label}
                  {!isActive && (
                    <div className="absolute inset-x-0 -bottom-6 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  )}
                </Link>
              );
            })}
          </div>
          <button className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-purple-50 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
