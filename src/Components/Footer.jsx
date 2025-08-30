import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    { name: "Usage conditions", path: "/" },
    { name: "Terms and conditions", path: "/" },
    { name: "Privacy policy", path: "/" },
    { name: "Jobs applications", path: "/" },
    { name: "Bazooka franchise", path: "/" },
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-700 py-6 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left: Copyright */}
        <div className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Bazooka. All Rights Reserved
        </div>

        {/* Middle: Links */}
        <div className="flex flex-wrap justify-center gap-x-4 text-sm text-gray-300">
          {footerLinks.map((link, i) => (
            <span key={i} className="flex items-center">
              <Link to={link.path} className="hover:text-yellow-500">
                {link.name}
              </Link>
              {i !== footerLinks.length - 1 && (
                <span className="mx-2 text-gray-500">|</span>
              )}
            </span>
          ))}
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-500 text-lg"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-500 text-lg"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
