
import React from 'react';
import { Button } from "@/components/ui/button";
import { Globe, UserCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-hire-light-gray py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col space-y-6 animate-fade-up max-w-3xl mx-auto">
            <h1 className="font-bold leading-tight">
              <span className="text-hire-blue">Hiring the Right Employee </span>
              <span className="text-hire-gray">Equals Results</span>
            </h1>
            <p className="text-xl text-hire-gray max-w-lg mx-auto">
              HireOnUs connects you with the right overseas talent who delivers the results your business needs to succeed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button className="bg-hire-blue hover:bg-hire-dark-blue text-white px-8 py-6 text-lg rounded-md transition-all duration-300 transform hover:scale-105">
                <Globe className="mr-2" />
                Find Your Perfect Match Today
              </Button>
              <Button variant="outline" className="border-hire-blue text-hire-blue hover:bg-hire-blue hover:text-white px-8 py-6 text-lg rounded-md">
                <UserCheck className="mr-2" />
                Book a Personalized Matching Call
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-2 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-hire-light-blue border-2 border-white flex items-center justify-center text-white text-xs">JD</div>
                <div className="w-8 h-8 rounded-full bg-hire-blue border-2 border-white flex items-center justify-center text-white text-xs">MK</div>
                <div className="w-8 h-8 rounded-full bg-hire-warm border-2 border-white flex items-center justify-center text-white text-xs">SL</div>
              </div>
              <p className="text-sm text-hire-gray">
                <span className="font-semibold">98% match success rate</span> with businesses worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
