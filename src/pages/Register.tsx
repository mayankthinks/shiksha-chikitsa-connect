
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    organizationName: "",
    contactPerson: "",
    designation: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    sponsorshipTier: "",
    message: "",
    hearAbout: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSelectChange = (name: string, value: string) => {
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
        title: "Registration Submitted",
        description: "Thank you for your interest in sponsoring Shiksha & Chikitsa. Our team will contact you shortly.",
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <div className="flex-grow flex items-center justify-center py-16">
          <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl p-12 shadow-sm border border-border/50 text-center animate-fade-up">
              <div className="mx-auto p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center text-primary mb-6">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Registration Successful!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for your interest in sponsoring Shiksha & Chikitsa 2025. Our team will review your information and contact you within 2-3 business days to discuss the next steps.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/">
                    Return to Home
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/sponsors">
                    View Sponsorship Options
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Register Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Sponsorship Registration
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Become a Sponsor
            </h1>
            <p className="text-lg text-muted-foreground">
              Partner with Shiksha & Chikitsa to make a lasting impact on Bihar's education and healthcare landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-secondary">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-border/50 animate-fade-up">
            <SectionHeading 
              title="Sponsorship Registration Form"
              subtitle="Fill out the form below to express your interest in sponsoring Shiksha & Chikitsa 2025."
            />
            
            <form onSubmit={handleSubmit} className="space-y-8 mt-8">
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Organization Information</h3>
                
                <div className="space-y-2">
                  <label htmlFor="organizationName" className="text-sm font-medium">
                    Organization Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="organizationName"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleChange}
                    placeholder="Enter organization name"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contactPerson" className="text-sm font-medium">
                      Contact Person <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      placeholder="Enter contact person's name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="designation" className="text-sm font-medium">
                      Designation <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="Enter designation"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-medium">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter organization address"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-medium">
                      City <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter city"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="state" className="text-sm font-medium">
                      State <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter state"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Sponsorship Details</h3>
                
                <div className="space-y-3">
                  <label className="text-sm font-medium">
                    Preferred Sponsorship Tier <span className="text-red-500">*</span>
                  </label>
                  <RadioGroup 
                    value={formData.sponsorshipTier} 
                    onValueChange={(value) => handleSelectChange("sponsorshipTier", value)}
                    required
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="platinum" id="platinum" />
                        <Label htmlFor="platinum">Platinum (₹25,00,000)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="gold" id="gold" />
                        <Label htmlFor="gold">Gold (₹15,00,000)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="silver" id="silver" />
                        <Label htmlFor="silver">Silver (₹10,00,000)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bronze" id="bronze" />
                        <Label htmlFor="bronze">Bronze (₹5,00,000)</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="hearAbout" className="text-sm font-medium">
                    How did you hear about us? <span className="text-red-500">*</span>
                  </label>
                  <Select 
                    value={formData.hearAbout} 
                    onValueChange={(value) => handleSelectChange("hearAbout", value)}
                    required
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="newspaper">Newspaper</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="word-of-mouth">Word of Mouth</SelectItem>
                      <SelectItem value="government">Government Communication</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Additional Comments or Questions
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific requirements or questions about sponsorship?"
                    rows={4}
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Sponsorship Registration"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up">
            <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions or need further details about sponsorship opportunities, please don't hesitate to contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
              <div className="flex items-center justify-center gap-2">
                <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0" asChild>
                  <a href="tel:+919876543210">
                    <Phone className="h-4 w-4" />
                  </a>
                </Button>
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0" asChild>
                  <a href="mailto:sponsor@shikshachiksitsa.org">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
                <span className="text-muted-foreground">sponsor@shikshachiksitsa.org</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;
