
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll respond to you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Contact Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about Shiksha & Chikitsa or want to explore sponsorship opportunities? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md animate-fade-up">
              <div className="mx-auto p-3 bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center text-primary mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                For general inquiries and sponsorship information
              </p>
              <a 
                href="mailto:info@shikshachiksitsa.org" 
                className="text-primary hover:underline font-medium"
              >
                info@shikshachiksitsa.org
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md animate-fade-up [animation-delay:100ms]">
              <div className="mx-auto p-3 bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center text-primary mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <p className="text-muted-foreground mb-4">
                Monday to Friday, 9:00 AM - 6:00 PM
              </p>
              <a 
                href="tel:+919876543210" 
                className="text-primary hover:underline font-medium"
              >
                +91 98765 43210
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md animate-fade-up [animation-delay:200ms]">
              <div className="mx-auto p-3 bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center text-primary mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
              <p className="text-muted-foreground mb-4">
                Event venue & organizational office
              </p>
              <p className="text-foreground">
                Gyan Bhawan, Bailey Road, <br />
                Patna, Bihar 800001
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-up">
              <SectionHeading 
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you as soon as possible"
              />
              
              <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            
            <div className="animate-fade-in order-first lg:order-last">
              <div className="rounded-xl overflow-hidden shadow-xl h-full min-h-[400px]">
                {/* Replace with actual map or embed Google Maps */}
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Map to Gyan Bhawan" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Frequently Asked Questions"
            subtitle="Find quick answers to common questions about Shiksha & Chikitsa"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-up">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
              <h3 className="text-lg font-semibold mb-3">When and where is Shiksha & Chikitsa taking place?</h3>
              <p className="text-muted-foreground">
                Shiksha & Chikitsa 2025 will be held on April 26-27, 2025, at Gyan Bhawan, Bailey Road, Patna, Bihar.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
              <h3 className="text-lg font-semibold mb-3">How can my institution participate in the event?</h3>
              <p className="text-muted-foreground">
                Educational and healthcare institutions can participate as exhibitors or sponsors. Please contact us directly for participation details.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
              <h3 className="text-lg font-semibold mb-3">What sponsorship packages are available?</h3>
              <p className="text-muted-foreground">
                We offer Platinum, Gold, Silver, and Bronze sponsorship tiers, each with different benefits. Visit our Sponsors page for detailed information.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
              <h3 className="text-lg font-semibold mb-3">Is there an entry fee for students and visitors?</h3>
              <p className="text-muted-foreground">
                Entry to Shiksha & Chikitsa is free for all students and visitors. We encourage pre-registration for a smoother experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h2 className="text-3xl font-bold mb-6">
              Interested in Sponsoring Shiksha & Chikitsa?
            </h2>
            <p className="text-muted-foreground mb-8">
              Take this opportunity to connect with over 1 lakh students and make a lasting impact on Bihar's education and healthcare landscape.
            </p>
            <Button size="lg" className="group" asChild>
              <Link to="/register">
                Become a Sponsor
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
