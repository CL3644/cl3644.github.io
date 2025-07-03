import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Home", key: "home" },
    { path: "/about", label: "Experience", key: "about" },
    { path: "/schedule", label: "Contact", key: "schedule" },
  ];

  return (
    <nav className="bg-background sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-lg font-medium text-foreground hover:text-neutral-300 transition-colors">
              Home
            </Link>
            <div className="w-px h-6 bg-neutral-700"></div>
            {navItems.slice(1).map((item) => {
              const isActive = location === item.path;
              return (
                <Link
                  key={item.key}
                  href={item.path}
                  className={`text-lg font-medium transition-colors px-3 py-1 rounded ${
                    isActive
                      ? "nav-active"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
