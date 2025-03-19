
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Calendar, Clock, MapPin, Users, GraduationCap, Heart, LucideIcon, Trophy, Mic, Coffee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

interface EventScheduleItem {
  time: string;
  title: string;
  description: string;
  location: string;
  icon: React.ReactNode;
}

const EventSchedule: Record<string, EventScheduleItem[]> = {
  day1: [
    {
      time: "09:00 AM - 10:00 AM",
      title: "Opening Ceremony",
      description: "Inaugural address by the Chief Minister of Bihar and other dignitaries.",
      location: "Main Auditorium",
      icon: <Mic className="h-5 w-5" />,
    },
    {
      time: "10:30 AM - 12:30 PM",
      title: "Educational Institution Exhibition",
      description: "Explore stalls from leading colleges, universities, and educational institutions.",
      location: "Exhibition Hall A",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      time: "12:30 PM - 01:30 PM",
      title: "Lunch Break",
      description: "Networking lunch for participants and exhibitors.",
      location: "Food Court",
      icon: <Coffee className="h-5 w-5" />,
    },
    {
      time: "01:30 PM - 03:30 PM",
      title: "Healthcare Career Seminar",
      description: "Panel discussion on career opportunities in healthcare sector.",
      location: "Seminar Hall B",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      time: "04:00 PM - 05:30 PM",
      title: "Mini Marathon Kickoff",
      description: "Inaugural session for the mini marathon with registration and kit distribution.",
      location: "Outdoor Arena",
      icon: <Trophy className="h-5 w-5" />,
    },
  ],
  day2: [
    {
      time: "08:00 AM - 10:00 AM",
      title: "Mini Marathon",
      description: "A 5K run promoting health and education awareness across Patna.",
      location: "Starting from Gyan Bhawan",
      icon: <Trophy className="h-5 w-5" />,
    },
    {
      time: "10:30 AM - 12:30 PM",
      title: "Healthcare Pavilion",
      description: "Free health check-ups, awareness sessions, and interactions with healthcare providers.",
      location: "Exhibition Hall B",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      time: "12:30 PM - 01:30 PM",
      title: "Lunch Break",
      description: "Networking lunch for participants and exhibitors.",
      location: "Food Court",
      icon: <Coffee className="h-5 w-5" />,
    },
    {
      time: "01:30 PM - 03:30 PM",
      title: "Student Competition Finals",
      description: "Finals of various inter-school and college competitions held throughout Bihar.",
      location: "Main Auditorium",
      icon: <Trophy className="h-5 w-5" />,
    },
    {
      time: "04:00 PM - 05:30 PM",
      title: "Closing Ceremony",
      description: "Prize distribution, acknowledgments, and closing remarks.",
      location: "Main Auditorium",
      icon: <Mic className="h-5 w-5" />,
    },
  ],
};

const Event = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Event Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Event Details
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Shiksha & Chikitsa 2025
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Join us for a transformative education and healthcare fair on April 26-27, 2025 at Gyan Bhawan, Patna.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                <span>April 26-27, 2025</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Gyan Bhawan, Patna</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <SectionHeading 
                title="Event Overview"
                subtitle="A comprehensive two-day fair bringing together education and healthcare under one roof."
              />
              <p className="text-muted-foreground mb-6">
                Shiksha & Chikitsa 2025 is a landmark education and healthcare fair designed to connect ambitious students with the institutions that will shape their futures.
              </p>
              <p className="text-muted-foreground mb-6">
                With over 50 educational institutions, 30+ healthcare providers, and representation from all 38 districts of Bihar, this event is set to create a profound impact on the lives of over 1 lakh students and their families.
              </p>
              <p className="text-muted-foreground">
                The fair features exhibitions, workshops, competitions, panel discussions, cultural programs, and a mini marathon - all aimed at empowering Bihar's youth with information, opportunities, and connections.
              </p>
            </div>
            <div className="animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Event venue" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Event Schedule"
            subtitle="Plan your visit with our detailed schedule of activities and sessions"
            centered
          />
          
          <div className="mt-12 animate-fade-up">
            <Tabs defaultValue="day1" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="day1" className="text-base py-3">Day 1 (April 26, 2025)</TabsTrigger>
                <TabsTrigger value="day2" className="text-base py-3">Day 2 (April 27, 2025)</TabsTrigger>
              </TabsList>
              
              <TabsContent value="day1" className="mt-0">
                <div className="space-y-6">
                  {EventSchedule.day1.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/4">
                          <div className="flex items-center gap-2 text-primary font-medium">
                            <Clock className="h-4 w-4" />
                            <span>{item.time}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                        <div className="md:w-3/4 md:border-l md:pl-6">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="p-1.5 bg-primary/10 rounded-full text-primary">
                              {item.icon}
                            </div>
                            <h3 className="text-lg font-medium">{item.title}</h3>
                          </div>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="day2" className="mt-0">
                <div className="space-y-6">
                  {EventSchedule.day2.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/4">
                          <div className="flex items-center gap-2 text-primary font-medium">
                            <Clock className="h-4 w-4" />
                            <span>{item.time}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                        <div className="md:w-3/4 md:border-l md:pl-6">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="p-1.5 bg-primary/10 rounded-full text-primary">
                              {item.icon}
                            </div>
                            <h3 className="text-lg font-medium">{item.title}</h3>
                          </div>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Who Should Attend?"
            subtitle="Shiksha & Chikitsa welcomes a diverse audience interested in education and healthcare"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-border/50 transition-all duration-300 hover:shadow-md animate-fade-up">
              <div className="p-3 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center text-primary mb-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Students</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Secondary and higher secondary students (Classes 10-12)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Undergraduate and postgraduate students</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Students preparing for competitive exams (NEET, JEE)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Students interested in vocational training</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8 border border-border/50 transition-all duration-300 hover:shadow-md animate-fade-up [animation-delay:100ms]">
              <div className="p-3 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center text-primary mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Parents & Educators</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Parents involved in their children's education and career planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>School and college teachers</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Educational counselors and administrators</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Faculty members from universities and colleges</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8 border border-border/50 transition-all duration-300 hover:shadow-md animate-fade-up [animation-delay:200ms]">
              <div className="p-3 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center text-primary mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Healthcare Community</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Doctors, nurses, and other healthcare practitioners</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Medical and nursing students</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Representatives from healthcare institutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Individuals interested in health and wellness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Information */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up order-2 md:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-full min-h-[300px]">
                {/* Replace with actual map or embed Google Maps */}
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Map to Gyan Bhawan" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="animate-fade-up order-1 md:order-2">
              <SectionHeading 
                title="Venue Information"
                subtitle="All you need to know about reaching and navigating the event venue"
              />
              <div className="space-y-6 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Location</h4>
                    <p>Gyan Bhawan, Bailey Road, Patna, Bihar 800001</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Dates & Timings</h4>
                    <p>April 26-27, 2025</p>
                    <p>9:00 AM - 6:00 PM (both days)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Accessibility</h4>
                    <p>The venue is wheelchair accessible. Special assistance will be available for differently-abled visitors.</p>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="mt-4" asChild>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </Button>
              </div>
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
              Ready to Be Part of Shiksha & Chikitsa 2025?
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you're looking to attend, exhibit, or sponsor, we have opportunities for everyone who shares our vision for a better Bihar.
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

export default Event;
