
import React from 'react';
import { Users, Clock, Target, DollarSign } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ProblemSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-hire-light-gray/30 section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced header with visual treatment */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block mb-6">
            <span className="px-4 py-1 bg-hire-blue/10 rounded-full text-hire-blue text-sm font-medium">OUR APPROACH</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold relative">
              <span className="text-hire-blue">Hiring the Right Employee </span>
              <span className="text-hire-gray">Equals Results</span>
            </h2>
          </div>
          
          {/* Main description card with shadow effect */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100 transform hover:translate-y-[-5px] transition-all duration-300">
            <p className="text-lg text-hire-gray/80 leading-relaxed">
              At HireOnUs, we specialize in connecting businesses with the right overseas talent to achieve exceptional results. By aligning skilled professionals with your business goals, we ensure a seamless match that drives success and maximizes efficiency. Our approach not only provides access to top-tier talent but also enables significant cost savings, helping your business thrive without the high overhead. With a 98% match success rate, HireOnUs offers an affordable, effective solution that delivers the results your business needs to succeed.
            </p>
          </div>
        </div>
        
        {/* Redesigned benefit cards with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problemCards.map((card, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up bg-white rounded-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-2 bg-gradient-to-r from-hire-blue to-hire-light-blue"></div>
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-hire-blue/10 flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-semibold text-hire-gray mb-4">{card.title}</h3>
                <p className="text-hire-gray/80 text-lg leading-relaxed">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const problemCards = [
  {
    icon: <Target className="w-8 h-8 text-hire-blue" />,
    title: "Connecting the Right Talent to the Right Business",
    description: "We focus on ensuring the perfect match between your business needs and the right professional, driving results that help your company succeed."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-hire-blue" />,
    title: "Substantial Savings by Hiring Overseas",
    description: "Save a significant amount of money by hiring skilled professionals from overseas, offering an affordable solution without compromising on quality."
  },
  {
    icon: <Clock className="w-8 h-8 text-hire-blue" />,
    title: "Maximizing Efficiency and Success",
    description: "By combining cost-efficiency with the right talent, we help your business thrive, ensuring both financial benefits and exceptional outcomes."
  }
];

export default ProblemSection;
