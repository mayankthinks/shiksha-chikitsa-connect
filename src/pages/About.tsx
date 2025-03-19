
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Calendar, MapPin, Building, Book, Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* About Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Empowering Bihar's Youth Through Education & Healthcare
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn about our mission, vision, and the impact we're making through Shiksha & Chikitsa.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <SectionHeading 
                title="Our Story"
                subtitle="How Yuva Shakti's vision for a better Bihar led to the creation of Shiksha & Chikitsa."
              />
              <p className="text-muted-foreground mb-6">
                In the heart of Bihar, where the aspirations of a vibrant youth population meet the pressing need for quality education and accessible healthcare, Yuva Shakti conceived the idea of 'Shiksha & Chikitsa'.
              </p>
              <p className="text-muted-foreground mb-6">
                Recognizing the symbiotic relationship between education and healthcare, we created this platform to address the critical need for comprehensive guidance and access to opportunities in these vital sectors.
              </p>
              <p className="text-muted-foreground">
                Since our inception, we've been dedicated to empowering students to pursue fulfilling careers, contribute to the state's development, and ultimately, build a healthier and more prosperous Bihar.
              </p>
            </div>
            <div className="animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Yuva Shakti team" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Mission & Vision"
            subtitle="What drives us and where we aim to go"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-border/50 h-full animate-fade-up">
              <div className="p-3 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center text-primary mb-4">
                <Book className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-4">
                To bridge the gap between talented students and quality educational and healthcare institutions in Bihar, creating a platform that facilitates informed decision-making and access to opportunities.
              </p>
              <p className="text-muted-foreground">
                We are committed to empowering Bihar's youth with the knowledge, connections, and resources they need to build successful careers and contribute to the state's development.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8 border border-border/50 h-full animate-fade-up [animation-delay:100ms]">
              <div className="p-3 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center text-primary mb-4">
                <Building className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground mb-4">
                A Bihar where every student has access to quality education and healthcare, where institutions thrive with talented individuals, and where the synergy between these sectors drives sustainable development.
              </p>
              <p className="text-muted-foreground">
                We envision a future where Shiksha & Chikitsa becomes the premier platform connecting youth with opportunities, fostering innovation, and catalyzing positive change across the state.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="The Team Behind Shiksha & Chikitsa"
            subtitle="Meet the dedicated individuals driving our mission forward"
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {/* Team member cards would go here - adding placeholder content */}
            <div className="rounded-xl bg-white shadow-sm border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-up">
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">Arjun Sharma</h3>
                <p className="text-sm text-muted-foreground">Founder & Director</p>
              </div>
            </div>
            
            <div className="rounded-xl bg-white shadow-sm border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-up [animation-delay:100ms]">
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">Meera Patel</h3>
                <p className="text-sm text-muted-foreground">Education Coordinator</p>
              </div>
            </div>
            
            <div className="rounded-xl bg-white shadow-sm border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-up [animation-delay:200ms]">
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">Rajiv Kumar</h3>
                <p className="text-sm text-muted-foreground">Healthcare Liaison</p>
              </div>
            </div>
            
            <div className="rounded-xl bg-white shadow-sm border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-up [animation-delay:300ms]">
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">Priya Singh</h3>
                <p className="text-sm text-muted-foreground">Partnerships Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Partners"
            subtitle="We collaborate with these organizations to bring Shiksha & Chikitsa to life"
            centered
          />
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl flex items-center justify-center shadow-sm border border-border/50 animate-fade-up">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/88/Bank_Of_India_logo.svg" alt="Bank of India" className="max-h-12" />
            </div>
            <div className="bg-white p-8 rounded-xl flex items-center justify-center shadow-sm border border-border/50 animate-fade-up [animation-delay:100ms]">
              <img src="https://upload.wikimedia.org/wikipedia/en/5/53/Punjab_National_Bank_logo.svg" alt="Punjab National Bank" className="max-h-12" />
            </div>
            <div className="bg-white p-8 rounded-xl flex items-center justify-center shadow-sm border border-border/50 animate-fade-up [animation-delay:200ms]">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/State_Bank_of_India_logo.svg" alt="SBI" className="max-h-12" />
            </div>
            <div className="bg-white p-8 rounded-xl flex items-center justify-center shadow-sm border border-border/50 animate-fade-up [animation-delay:300ms]">
              <span className="text-xl font-bold text-gray-400">Delhi Public School</span>
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
              Be Part of Our Journey
            </h2>
            <p className="text-muted-foreground mb-8">
              Join us in our mission to empower Bihar's youth through education and healthcare. Whether you're an institution, a potential sponsor, or someone who shares our vision, we'd love to connect with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group" asChild>
                <Link to="/register">
                  Become a Sponsor
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
