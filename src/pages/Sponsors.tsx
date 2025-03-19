
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Camera, ImageIcon, BookOpen, BarChart, Building, Presentation, Trophy, Flag, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import SponsorCard from "@/components/SponsorCard";

const Sponsors = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Sponsors Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Sponsorship
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Partner with Shiksha & Chikitsa
            </h1>
            <p className="text-lg text-muted-foreground">
              Become a catalyst for positive change in Bihar's education and healthcare landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Why Partner With Us?"
            subtitle="Sponsoring Shiksha & Chikitsa offers numerous benefits beyond brand visibility"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-border/50 transition-all duration-300 hover:shadow-md animate-fade-up">
              <div className="p-3 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center text-primary mb-4">
                <Camera className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Unparalleled Visibility</h3>
              <p className="text-muted-foreground">
                Connect with over 1 lakh students and families from across Bihar. Your brand will gain exposure among a highly engaged audience actively seeking educational and healthcare opportunities.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8 border border-border/50 transition-all duration-300 hover:shadow-md animate-fade-up [animation-delay:100ms]">
              <div className="p-3 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center text-primary mb-4">
                <Building className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Government Backed Initiative</h3>
              <p className="text-muted-foreground">
                Associate with a prestigious initiative supported by the Government of Bihar. Benefit from the credibility and wide reach of a state-endorsed event.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8 border border-border/50 transition-all duration-300 hover:shadow-md animate-fade-up [animation-delay:200ms]">
              <div className="p-3 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center text-primary mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Responsibility</h3>
              <p className="text-muted-foreground">
                Demonstrate your commitment to social responsibility by supporting education and healthcare development in Bihar. Make a tangible impact on the lives of students and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Sponsorship Packages"
            subtitle="Choose the sponsorship tier that best aligns with your goals and budget"
            centered
          />
          
          <div className="mt-12 animate-fade-up">
            <Tabs defaultValue="platinum" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="platinum">Platinum</TabsTrigger>
                <TabsTrigger value="gold">Gold</TabsTrigger>
                <TabsTrigger value="silver">Silver</TabsTrigger>
                <TabsTrigger value="bronze">Bronze</TabsTrigger>
              </TabsList>
              
              <TabsContent value="platinum" className="mt-0">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-border/50">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="p-6 bg-gradient-to-br from-slate-100 to-slate-300 rounded-xl border border-slate-300 text-center">
                        <h3 className="text-2xl font-bold mb-2">Platinum Sponsor</h3>
                        <p className="text-3xl font-bold mb-4">₹25,00,000</p>
                        <Button className="w-full" asChild>
                          <Link to="/register">
                            Become a Sponsor
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-semibold mb-4">Premium Benefits Include:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Premier logo placement on all event materials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Dedicated 10×10m exhibition space</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Speaking opportunity during opening ceremony</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Branding on main stage and entry gates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Logo on 101 hoardings across Bihar</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Exclusive digital marketing campaign</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Full-page ad in the event guide</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Dedicated car with logo presence</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Presenting sponsor for mini marathon</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Logo on all certificates & mementos</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="gold" className="mt-0">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-border/50">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="p-6 bg-gradient-to-br from-amber-50 to-amber-200 rounded-xl border border-amber-300 text-center">
                        <h3 className="text-2xl font-bold mb-2">Gold Sponsor</h3>
                        <p className="text-3xl font-bold mb-4">₹15,00,000</p>
                        <Button className="w-full" asChild>
                          <Link to="/register">
                            Become a Sponsor
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-semibold mb-4">Gold Benefits Include:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Prominent logo placement on event materials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>8×8m exhibition space</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Panel participation opportunity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Branding on side stages</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Logo on 50 hoardings in major cities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Featured in digital marketing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Half-page ad in event guide</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Logo on all certificates</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="silver" className="mt-0">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-border/50">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="p-6 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl border border-neutral-300 text-center">
                        <h3 className="text-2xl font-bold mb-2">Silver Sponsor</h3>
                        <p className="text-3xl font-bold mb-4">₹10,00,000</p>
                        <Button className="w-full" asChild>
                          <Link to="/register">
                            Become a Sponsor
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-semibold mb-4">Silver Benefits Include:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Logo placement on selected materials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>6×6m exhibition space</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Branding in exhibition areas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Logo on 25 hoardings in Patna</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Included in social media promotions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Quarter-page ad in event guide</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="bronze" className="mt-0">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-border/50">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 text-center">
                        <h3 className="text-2xl font-bold mb-2">Bronze Sponsor</h3>
                        <p className="text-3xl font-bold mb-4">₹5,00,000</p>
                        <Button className="w-full" asChild>
                          <Link to="/register">
                            Become a Sponsor
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-semibold mb-4">Bronze Benefits Include:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Logo inclusion in sponsor section</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>4×4m exhibition space</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Logo on 10 hoardings in Patna</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Mention in digital promotions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Logo in event guide</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Sponsorship Deliverables */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Basic Deliverables"
            subtitle="All sponsors receive these fundamental promotional opportunities"
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md animate-fade-up">
              <div className="p-3 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center text-primary mb-4">
                <ImageIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">On-Site Visibility</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Backdrop presence</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Branding at venue</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Logo on appreciation certificates</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md animate-fade-up [animation-delay:100ms]">
              <div className="p-3 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center text-primary mb-4">
                <Flag className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Promotional Items</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Branding on caps</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Branding on t-shirts</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Logo on memento</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md animate-fade-up [animation-delay:200ms]">
              <div className="p-3 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center text-primary mb-4">
                <Presentation className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Media Exposure</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Bus panel advertisement</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>News & ads in cable TV</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Social & digital media presence</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md animate-fade-up [animation-delay:300ms]">
              <div className="p-3 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center text-primary mb-4">
                <BarChart className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Government Campaign</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Block-level campaign on flags</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Govt. of Bihar Youth Dept. campaign</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md animate-fade-up [animation-delay:400ms]">
              <div className="p-3 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center text-primary mb-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Outdoor Advertising</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Hoardings across Bihar</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Coverage in sub-divisions & districts</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Dedicated car with logo presence</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md animate-fade-up [animation-delay:500ms]">
              <div className="p-3 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center text-primary mb-4">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Educational Reach</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>School & college level competitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Leading newspaper coverage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Past Sponsors */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Past Sponsors"
            subtitle="Join these distinguished organizations who have supported Shiksha & Chikitsa"
            centered
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12">
            <SponsorCard name="Bank of India" logo="https://upload.wikimedia.org/wikipedia/commons/8/88/Bank_Of_India_logo.svg" tier="platinum" className="animate-fade-up" />
            <SponsorCard name="Punjab National Bank" logo="https://upload.wikimedia.org/wikipedia/en/5/53/Punjab_National_Bank_logo.svg" tier="platinum" className="animate-fade-up [animation-delay:100ms]" />
            <SponsorCard name="SBI" logo="https://upload.wikimedia.org/wikipedia/commons/c/cc/State_Bank_of_India_logo.svg" tier="gold" className="animate-fade-up [animation-delay:200ms]" />
            <SponsorCard name="Jaypee" logo="/placeholder.svg" tier="gold" className="animate-fade-up [animation-delay:300ms]" />
            <SponsorCard name="Delhi Public School" logo="/placeholder.svg" tier="silver" className="animate-fade-up [animation-delay:400ms]" />
            <SponsorCard name="Lux Cozi" logo="/placeholder.svg" tier="silver" className="animate-fade-up [animation-delay:500ms]" />
            <SponsorCard name="RBI" logo="/placeholder.svg" tier="gold" className="animate-fade-up [animation-delay:600ms]" />
            <SponsorCard name="SuperTron" logo="/placeholder.svg" tier="bronze" className="animate-fade-up [animation-delay:700ms]" />
            <SponsorCard name="Gupta Brothers" logo="/placeholder.svg" tier="bronze" className="animate-fade-up [animation-delay:800ms]" />
            <SponsorCard name="Shyam Metalics" logo="/placeholder.svg" tier="silver" className="animate-fade-up [animation-delay:900ms]" />
          </div>
        </div>
      </section>

      {/* Budget Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Event Budget Overview"
            subtitle="Transparency in how your sponsorship will be utilized"
            centered
          />
          
          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-border/50 animate-fade-up">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 px-4 font-semibold">Description</th>
                    <th className="py-4 px-4 font-semibold text-right">Value (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-4">Venue Rental</td>
                    <td className="py-4 px-4 text-right">12,50,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4">Stall and Venue Management</td>
                    <td className="py-4 px-4 text-right">15,00,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4">Marketing (Block-wise)</td>
                    <td className="py-4 px-4 text-right">1,55,00,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4">Event Staff</td>
                    <td className="py-4 px-4 text-right">65,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4">Entertainment</td>
                    <td className="py-4 px-4 text-right">17,50,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4">Direct Expenses</td>
                    <td className="py-4 px-4 text-right">5,00,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4">Other Expenses</td>
                    <td className="py-4 px-4 text-right">1,00,000</td>
                  </tr>
                  <tr className="bg-secondary/50">
                    <td className="py-4 px-4 font-bold">Total</td>
                    <td className="py-4 px-4 text-right font-bold">2,07,30,000</td>
                  </tr>
                </tbody>
              </table>
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
              Ready to Make an Impact?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join us in shaping the future of education and healthcare in Bihar. Your sponsorship will directly impact the lives of over 1 lakh students and contribute to the state's development.
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

export default Sponsors;
