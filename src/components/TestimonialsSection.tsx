
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StarIcon } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-white section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-hire-gray mb-4">Success Stories</h2>
          <p className="text-xl text-hire-gray/80 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what New York businesses say about their Hire On Us experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-hire-warm fill-current" />
                  ))}
                </div>
                <p className="text-hire-gray/80 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    {testimonial.image ? (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <AvatarFallback className="bg-hire-blue text-white">
                        {testimonial.initials}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <p className="font-semibold text-hire-gray">{testimonial.name}</p>
                    <p className="text-sm text-hire-gray/70">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Updated the call-to-action box below testimonials */}
        <div className="bg-hire-light-warm rounded-lg p-8 border border-hire-warm/20 animate-fade-up">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:w-2/3">
              <h3 className="text-2xl font-semibold text-hire-gray mb-2">We're With You Every Step of the Way</h3>
              <p className="text-hire-gray/80">
                Unlike faceless platforms, we build long-term relationships and provide hands-on support to ensure your remote staffing success.
              </p>
            </div>
            <div className="md:w-1/3 md:pl-8 flex justify-center">
              <div className="bg-white rounded-full p-4 shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=300&fit=crop" 
                  alt="Remote work support" 
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    quote: "We've hired three remote staff through Hire On Us, and they've transformed our operations. The cost savings allowed us to expand faster than we thought possible.",
    name: "Michael Rodriguez",
    position: "Founder, MR Digital Marketing",
    image: "",
    initials: "MR"
  },
  {
    quote: "After struggling with unreliable freelancers, Hire On Us found us a dedicated virtual assistant who's been with us for over two years now. Worth every penny!",
    name: "Sarah Johnson",
    position: "CEO, Brooklyn Boutique",
    image: "",
    initials: "SJ"
  },
  {
    quote: "The matching process was spot-on. Our remote developer understood our business needs from day one, and the ongoing support from Hire On Us has been excellent.",
    name: "David Kim",
    position: "Tech Director, StartupNYC",
    image: "",
    initials: "DK"
  }
];

export default TestimonialsSection;
