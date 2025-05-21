
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MessageSquare, UserSearch } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    staffingNeeds: 'Virtual Assistant',
    workStyle: '',
    teamSize: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    toast({
      title: "Perfect match request submitted!",
      description: "We'll analyze your needs and be in touch within 24 hours with potential matches.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      staffingNeeds: 'Virtual Assistant',
      workStyle: '',
      teamSize: ''
    });
  };
  
  return (
    <section id="contact" className="bg-hire-light-gray section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-hire-blue p-8 md:p-12 text-white">
              <h2 className="mb-6">Let's Find Your Perfect Match</h2>
              <p className="mb-8 text-white/80">
                Tell us about your business, team culture, and specific needs so we can connect you with 
                the ideal remote professional who will seamlessly integrate with your organization.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <UserSearch className="w-6 h-6 text-hire-warm flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Personalized Matching</h3>
                    <p className="text-white/80">We analyze your needs, work style, and culture for the ideal fit</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-hire-warm flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-white/80">(212) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-hire-warm flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-white/80">hello@hireonus.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MessageSquare className="w-6 h-6 text-hire-warm flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Book a Matching Call</h3>
                    <p className="text-white/80">Schedule a free 30-minute personalized consultation</p>
                    <a 
                      href="#" 
                      className="inline-block mt-2 bg-hire-warm hover:bg-opacity-90 text-white px-4 py-2 rounded"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-semibold text-hire-gray mb-6">Tell Us About Your Ideal Match</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(212) 555-0123"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input 
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company, Inc."
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="staffingNeeds">What role do you need?</Label>
                    <select 
                      id="staffingNeeds"
                      name="staffingNeeds"
                      value={formData.staffingNeeds}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      required
                    >
                      <option value="Virtual Assistant">Virtual Assistant</option>
                      <option value="Customer Service">Customer Service Representative</option>
                      <option value="Bookkeeper">Bookkeeper/Accountant</option>
                      <option value="Content Writer">Content Writer</option>
                      <option value="Social Media Manager">Social Media Manager</option>
                      <option value="Web Developer">Web Developer</option>
                      <option value="Graphic Designer">Graphic Designer</option>
                      <option value="Other">Other (Please specify)</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team Size</Label>
                    <select 
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    >
                      <option value="">Select...</option>
                      <option value="Solo">Just me</option>
                      <option value="2-5">2-5 employees</option>
                      <option value="6-15">6-15 employees</option>
                      <option value="16-50">16-50 employees</option>
                      <option value="51+">51+ employees</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="workStyle">Describe your work style and company culture</Label>
                  <Textarea 
                    id="workStyle"
                    name="workStyle"
                    value={formData.workStyle}
                    onChange={handleChange}
                    placeholder="Help us understand your work environment, communication style, and what makes someone a great fit for your team..."
                    rows={3}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Specific skills and requirements</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about any specific skills, software experience, or personality traits you're looking for in your ideal match..."
                    rows={3}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-hire-blue hover:bg-hire-dark-blue">
                  Find My Perfect Match
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
