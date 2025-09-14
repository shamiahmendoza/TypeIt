import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Navbar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Create', path: '/create' },
        { name: 'Generate', path: '/generate' },
    ];
    return (
        <nav className="bg-[#FDE68A] text-black px-4 py-3 flex items-center justify-between shadow-md md:px-10">
            <div className="flex items-center">
                <span className="text-xl font-semibold tracking-wide flex items-center">
                    <img src={Logo} alt="Logo" className="h-full w-full mr-2" />
                </span>
            </div>
            {/* Desktop menu */}
            <ul className="hidden md:flex flex-1 justify-end space-x-20">
                {navLinks.map(link => (
                    <li key={link.path}>
                        <Link
                            to={link.path}
                            className={`font-medium transition-colors ${location.pathname === link.path ? 'text-[#3B82F6]' : 'hover:text-[#3B82F6]'}`}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* Hamburger icon for mobile */}
            <button
                className="md:hidden flex items-center p-2 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            {/* Mobile menu */}
            {menuOpen && (
                <ul className="absolute top-16 left-0 w-full bg-[#FDE68A] flex flex-col items-center space-y-4 py-4 shadow-md md:hidden z-50">
                    {navLinks.map(link => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`font-medium text-lg transition-colors ${location.pathname === link.path ? 'text-[#3B82F6]' : 'hover:text-[#3B82F6]'}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;