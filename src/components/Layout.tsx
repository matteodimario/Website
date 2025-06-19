import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className = "" }: LayoutProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-academic-gray-medium">
        <div className="max-w-academic-wide mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Site Title */}
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className="text-xl font-normal text-academic-blue hover:text-academic-blue-hover transition-colors"
              >
                Academic Blog
              </Link>

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <Link
                  to="/"
                  className={`nav-link ${isActive("/") ? "active" : ""}`}
                >
                  Home
                </Link>
                <Link
                  to="/blog"
                  className={`nav-link ${isActive("/blog") ? "active" : ""}`}
                >
                  Blog
                </Link>
                <Link
                  to="/research"
                  className={`nav-link ${isActive("/research") ? "active" : ""}`}
                >
                  Research
                </Link>
                <Link
                  to="/about"
                  className={`nav-link ${isActive("/about") ? "active" : ""}`}
                >
                  About
                </Link>
                <Link
                  to="/cv"
                  className={`nav-link ${isActive("/cv") ? "active" : ""}`}
                >
                  CV
                </Link>
              </nav>
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>

              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden mt-4 flex flex-wrap gap-4">
            <Link
              to="/"
              className={`nav-link text-sm ${isActive("/") ? "active" : ""}`}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className={`nav-link text-sm ${isActive("/blog") ? "active" : ""}`}
            >
              Blog
            </Link>
            <Link
              to="/research"
              className={`nav-link text-sm ${isActive("/research") ? "active" : ""}`}
            >
              Research
            </Link>
            <Link
              to="/about"
              className={`nav-link text-sm ${isActive("/about") ? "active" : ""}`}
            >
              About
            </Link>
            <Link
              to="/cv"
              className={`nav-link text-sm ${isActive("/cv") ? "active" : ""}`}
            >
              CV
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className={`${className}`}>{children}</main>

      {/* Footer */}
      <footer className="bg-academic-gray-light border-t border-academic-gray-medium mt-20">
        <div className="max-w-academic-wide mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-academic-text-light">
              © 2024 Academic Blog. Built with passion for knowledge and
              discovery.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="/rss"
                className="text-academic-text-light hover:text-academic-blue"
              >
                RSS Feed
              </a>
              <a
                href="mailto:contact@academicblog.com"
                className="text-academic-text-light hover:text-academic-blue"
              >
                Contact
              </a>
              <a
                href="/privacy"
                className="text-academic-text-light hover:text-academic-blue"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
