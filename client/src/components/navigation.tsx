import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Home", key: "home" },
    { path: "/about", label: "Experience", key: "about" },
    { path: "/schedule", label: "Contact", key: "schedule" },
  ];

  return (
    <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-medium text-neutral-800 hover:text-neutral-600 transition-colors">
              Calvin Lu
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Link
                  key={item.key}
                  href={item.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-neutral-800 border-b-2 border-neutral-800 pb-4"
                      : "text-neutral-600 hover:text-neutral-800"
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
