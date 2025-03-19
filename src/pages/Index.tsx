import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Calendar, MapPin, BarChart3, Sparkles, GraduationCap, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import StatBox from "@/components/StatBox";
import SponsorCard from "@/components/SponsorCard";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  // This will trigger on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 animate-fade-up">
              <div className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                April 26-27, 2025 • Gyan Bhawan, Patna
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Shiksha <span className="text-primary">&</span> Chikitsa
                <span className="block text-2xl md:text-3xl font-normal mt-2 text-muted-foreground">
                  Bihar's Premier Education & Healthcare Fair
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                A transformative initiative connecting 1 lakh+ students with leading educational 
                and healthcare institutions to shape a brighter future for Bihar.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group" asChild>
                  <Link to="/register">
                    Become a Sponsor
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/event">
                    Event Details
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-20"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Students at an education fair" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatBox 
              value="100,000+" 
              label="Expected Attendees" 
              icon={<Users className="h-6 w-6" />} 
              className="animate-fade-up"
            />
            <StatBox 
              value="50+" 
              label="Participating Institutions" 
              icon={<GraduationCap className="h-6 w-6" />} 
              className="animate-fade-up [animation-delay:100ms]"
            />
            <StatBox 
              value="30+" 
              label="Healthcare Providers" 
              icon={<Heart className="h-6 w-6" />} 
              className="animate-fade-up [animation-delay:200ms]"
            />
            <StatBox 
              value="38" 
              label="Districts Represented" 
              icon={<MapPin className="h-6 w-6" />} 
              className="animate-fade-up [animation-delay:300ms]"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="About Shiksha & Chikitsa"
            subtitle="A landmark education and healthcare fair organized by Yuva Shakti to connect ambitious students with the institutions that will shape their futures."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-border/50 transition-all duration-300 hover:shadow-md animate-fade-up">
              <div className="p-3 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center text-primary mb-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Empowering Youth</h3>
              <p className="text-muted-foreground">
                Shiksha & Chikitsa provides a platform for Bihar's youth to develop skills, explore opportunities, network with institutions, and take action towards their future.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-border/50 transition-all duration-300 hover:shadow-md animate-fade-up [animation-delay:100ms]">
              <div className="p-3 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center text-primary mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fostering Community</h3>
              <p className="text-muted-foreground">
                We bring together educational institutions, healthcare providers, government bodies, and students to create a collaborative ecosystem for progress.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-border/50 transition-all duration-300 hover:shadow-md animate-fade-up [animation-delay:200ms]">
              <div className="p-3 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center text-primary mb-4">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inspiring Change</h3>
              <p className="text-muted-foreground">
                By connecting education and healthcare, we're motivating young minds to lead positive change in society and contribute to Bihar's development.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="mt-4" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Event Highlights"
            subtitle="Join us for two days of immersive experiences, interactive sessions, and networking opportunities."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-border/50 h-full flex flex-col transition-all duration-300 hover:shadow-md animate-fade-up">
              <div className="rounded-lg overflow-hidden mb-5">
                <img 
                  src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Educational Exhibitions" 
                  className="w-full h-40 object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Educational Exhibitions</h3>
              <p className="text-muted-foreground flex-grow">
                Meet representatives from leading educational institutions, explore courses, and get guidance on admissions and scholarships.
              </p>
              <div className="flex items-center text-sm text-muted-foreground mt-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>April 26-27, 2025</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-border/50 h-full flex flex-col transition-all duration-300 hover:shadow-md animate-fade-up [animation-delay:100ms]">
              <div className="rounded-lg overflow-hidden mb-5">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Healthcare Pavilion" 
                  className="w-full h-40 object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Healthcare Pavilion</h3>
              <p className="text-muted-foreground flex-grow">
                Discover healthcare career pathways, medical institutions, and participate in free health check-ups and awareness sessions.
              </p>
              <div className="flex items-center text-sm text-muted-foreground mt-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>April 26-27, 2025</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-border/50 h-full flex flex-col transition-all duration-300 hover:shadow-md animate-fade-up [animation-delay:200ms]">
              <div className="rounded-lg overflow-hidden mb-5">
                <img 
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Workshops & Seminars" 
                  className="w-full h-40 object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Workshops & Seminars</h3>
              <p className="text-muted-foreground flex-grow">
                Participate in interactive workshops, panel discussions, and seminars led by industry experts and acclaimed academicians.
              </p>
              <div className="flex items-center text-sm text-muted-foreground mt-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>April 26-27, 2025</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="mt-4" asChild>
              <Link to="/event">View Full Schedule</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Past Sponsors"
            subtitle="We're proud to have partnered with these leading organizations to make Shiksha & Chikitsa a success."
            centered
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12">
            <SponsorCard name="Bank of India" logo="https://upload.wikimedia.org/wikipedia/commons/8/88/Bank_Of_India_logo.svg" tier="platinum" className="animate-fade-up" />
            <SponsorCard name="Punjab National Bank" logo="https://upload.wikimedia.org/wikipedia/en/5/53/Punjab_National_Bank_logo.svg" tier="platinum" className="animate-fade-up [animation-delay:100ms]" />
            <SponsorCard name="SBI" logo="https://upload.wikimedia.org/wikipedia/commons/c/cc/State_Bank_of_India_logo.svg" tier="gold" className="animate-fade-up [animation-delay:200ms]" />
            <SponsorCard name="Jaypee" logo="/placeholder.svg" tier="gold" className="animate-fade-up [animation-delay:300ms]" />
            <SponsorCard name="Delhi Public School" logo="/placeholder.svg" tier="silver" className="animate-fade-up [animation-delay:400ms]" />
          </div>
          
          <div className="mt-16 bg-primary/5 rounded-xl p-8 border border-primary/10 animate-fade-up">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Become a Sponsor</h3>
                <p className="text-muted-foreground max-w-xl">
                  Partner with Shiksha & Chikitsa and become a catalyst for positive change in Bihar. Gain unparalleled visibility among 1 lakh+ students and families.
                </p>
              </div>
              <Button size="lg" className="whitespace-nowrap" asChild>
                <Link to="/register">
                  Get Sponsorship Details
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Some Glimpse of Our Journey"
            subtitle="Explore our past events, partnerships, and the impact we've made throughout our journey."
            centered
          />
          
          <div className="mt-12 animate-fade-up">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/86fb8aa4-d80e-4af8-889f-84aa07467fe3.png" 
                alt="YuvaShakti Journey Collage" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="What People Say"
            subtitle="Hear from our previous participants, sponsors, and partners about their experience with Shiksha & Chikitsa."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TestimonialCard 
              quote="Shiksha & Chikitsa provided our bank with an incredible platform to connect with young, ambitious students. The event was organized flawlessly, and we saw a significant increase in awareness about our educational loan programs."
              author="Rajesh Kumar"
              role="Marketing Director, Bank of India"
              className="animate-fade-up"
            />
            
            <TestimonialCard 
              quote="As a student who attended last year, I can say that this fair changed my life. I discovered educational opportunities I wasn't aware of and got guidance that helped me secure admission to my dream college."
              author="Priya Singh"
              role="Engineering Student"
              className="animate-fade-up [animation-delay:100ms]"
            />
            
            <TestimonialCard 
              quote="The synergy between education and healthcare at this event is truly innovative. As a medical institution, we were able to inspire many young minds to consider careers in healthcare while also providing valuable health information."
              author="Dr. Alok Sharma"
              role="Director, Medical College"
              className="animate-fade-up [animation-delay:200ms]"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us in Shaping the Future of Bihar
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're a student seeking opportunities, an institution looking to connect with talent, or a sponsor wanting to make a difference, Shiksha & Chikitsa welcomes you.
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

export default Index;
