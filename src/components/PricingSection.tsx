
import React, { useEffect, useState } from 'react';
import { Target, Briefcase, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  
  useEffect(() => {
    setRefreshKey(prev => prev + 1);
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-hire-light-gray/30 section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up" key={`pricing-headline-${refreshKey}`}>
          <h2 className="text-hire-blue font-bold mb-4 text-3xl md:text-4xl lg:text-5xl">
            Hiring the Right Employee Equals Results
          </h2>
          <p className="text-xl text-hire-gray/80 max-w-3xl mx-auto">
            We connect you with exceptional overseas professionals who deliver real business impact - our focus is on results, not just filling positions.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative h-full min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1590402494587-44b71d7772f6?q=80&w=1000&auto=format&fit=crop"
                alt="International remote work collaboration"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-hire-blue/80 to-hire-blue/40 flex items-center justify-center p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  The Right Hire<br />
                  Equals The Right Results<br />
                  Everytime.
                </h3>
              </div>
            </div>
            
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-hire-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Target className="w-5 h-5 text-hire-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-hire-gray mb-2">Perfect Talent Match Guarantee</h4>
                    <p className="text-hire-gray/80">We find you the ideal overseas professional who understands your business goals and delivers measurable results - or we keep searching until we do.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-hire-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-hire-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-hire-gray mb-2">Any Industry. Any Role.</h4>
                    <p className="text-hire-gray/80">Whether you need technical specialists, creative professionals, or executive support - we connect you with exceptional overseas talent across all sectors.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-hire-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe className="w-5 h-5 text-hire-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-hire-gray mb-2">Cultural & Work Style Alignment</h4>
                    <p className="text-hire-gray/80">Our matching process ensures your remote worker perfectly fits your company culture and communication style for seamless collaboration.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Button className="bg-hire-blue hover:bg-hire-dark-blue text-white px-8 py-6 text-lg rounded-md w-full">
                  Find Your Perfect Talent Match Today
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 text-sm text-hire-gray/70 max-w-2xl mx-auto animate-fade-up">
          <p>
            Our focus is finding you the right talent who will bring real results to your business. 
            We prioritize quality matches that deliver measurable outcomes — not packages or pricing.
            <a href="#contact" className="text-hire-blue underline ml-1">Contact us</a> to discuss your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
