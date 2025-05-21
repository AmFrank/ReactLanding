
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-hire-blue">Hire On Us</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-hire-gray hover:text-hire-blue transition-colors">
              Home
            </Link>
            <a href="#how-it-works" className="text-hire-gray hover:text-hire-blue transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-hire-gray hover:text-hire-blue transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-hire-gray hover:text-hire-blue transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#contact">
              <Button variant="default" className="hidden md:flex bg-hire-blue hover:bg-hire-dark-blue transition-colors">
                Find Your Perfect Match
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="border-hire-blue text-hire-blue hover:bg-hire-blue hover:text-white transition-colors">
              Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
