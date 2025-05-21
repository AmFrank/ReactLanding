
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
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xzzrwqqv', { // 👈 Replace with your Formspree endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Perfect match request submitted!",
          description: "We'll analyze your needs and be in touch within 24 hours with potential matches.",
        });
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
      } else {
        toast({
          variant: 'destructive',
          title: "Submission failed",
          description: "Please try again later.",
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: "Network error",
        description: "Unable to send message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-hire-light-gray section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-hire-blue p-8 md:p-12 text-white">
              {/* Left info panel unchanged */}
              ...
            </div>

            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-semibold text-hire-gray mb-6">Tell Us About Your Ideal Match</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Your form inputs unchanged */}
                {/* Example: */}
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
                  {/* Other inputs */}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-hire-blue hover:bg-hire-dark-blue"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Find My Perfect Match"}
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