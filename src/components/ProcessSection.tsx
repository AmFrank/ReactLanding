
import React from 'react';
import { Phone, FileText, UserSearch, Calendar } from 'lucide-react';

const ProcessSection = () => {
  return (
    <section id="how-it-works" className="bg-hire-light-gray section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block mb-6">
            <span className="px-4 py-1 bg-hire-blue/10 rounded-full text-hire-blue text-sm font-medium">HOW IT WORKS</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold relative">
              <span className="text-hire-gray">Our </span>
              <span className="text-hire-blue">Perfect-Match Process</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100 transform hover:translate-y-[-5px] transition-all duration-300">
            <p className="text-lg text-hire-gray/80 leading-relaxed">
              At HireOnUs, we've streamlined our process to make sure you're connected with the right talent quickly and efficiently.
            </p>
          </div>
        </div>
        
        <div className="relative">
          {/* Process Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-hire-blue/30 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Process Steps */}
          <div className="space-y-24 relative">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 relative animate-fade-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Circle for Desktop */}
                <div className="absolute left-1/2 w-14 h-14 bg-hire-blue rounded-full text-white text-xl font-bold flex items-center justify-center transform -translate-x-1/2 z-10 hidden md:flex shadow-lg border-4 border-white">
                  {index + 1}
                </div>
                
                {/* Content Boxes */}
                <div className="md:w-5/12 flex justify-center">
                  <div className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 w-full max-w-md ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px]`}>
                    <div className="w-16 h-16 rounded-full bg-hire-blue/10 flex items-center justify-center mb-6 transform transition-transform duration-300 hover:scale-110">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-hire-gray mb-4">{step.title}</h3>
                    <p className="text-hire-gray/80 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {/* Mobile Step Number (only visible on mobile) */}
                <div className="w-14 h-14 bg-hire-blue rounded-full text-white text-xl font-bold flex items-center justify-center md:hidden shadow-lg border-4 border-white">
                  {index + 1}
                </div>
                
                {/* Image Box */}
                <div className="md:w-5/12">
                  <div className="overflow-hidden rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-5px] group">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="object-cover w-full h-80 object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const processSteps = [
  {
    icon: <Phone className="w-8 h-8 text-hire-blue" />,
    title: "Initial Consultation",
    description: "First, we listen carefully to understand exactly what you're looking for in a candidate. This ensures we connect you with someone who truly fits your needs and vision.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: <FileText className="w-8 h-8 text-hire-blue" />,
    title: "Crafting the Perfect Description",
    description: "We then use ChatGPT to write a tailored job description, ensuring both you and the recruiter have a clear understanding of the candidate's requirements. This step guarantees that we're on the same page before moving forward.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: <UserSearch className="w-8 h-8 text-hire-blue" />,
    title: "Sample Portfolio and Resume Review",
    description: "Before any interviews, we send you a sample portfolio and resume to ensure you're comfortable with the candidate's qualifications. This way, you can be confident you're looking at the right person for the job from the start.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: <Calendar className="w-8 h-8 text-hire-blue" />,
    title: "Interview and Trial Period",
    description: "If the resume and portfolio look good, we arrange an interview. If you're satisfied, we set up a two-day trial period where you can see the candidate's performance firsthand. Following that, we offer a one-week trial to ensure the candidate delivers the results you expect.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1000&auto=format&fit=crop"
  }
];

export default ProcessSection;
