import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { 
  Home, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  CheckCircle, 
  Clock, 
  DollarSign,
  FileText,
  Users,
  TrendingUp,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import './App.css';

function App() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const services = [
    {
      icon: <Home className="w-8 h-8 text-green-600" />,
      title: "Residential Appraisals",
      description: "Professional property valuations for homes, condos, and multi-family properties with detailed reports.",
      features: ["Certified professional appraisers", "Detailed, accurate reports", "Fast turnaround times"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Real Estate Sales Support",
      description: "Expert guidance for buying or selling properties, including market analysis and negotiation support.",
      features: ["Market analysis and pricing strategy", "Property preparation guidance", "Negotiation and transaction support"]
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-600" />,
      title: "Mortgage Financing",
      description: "Comprehensive mortgage solutions with competitive rates and personalized financing options.",
      features: ["Access to multiple lenders", "Competitive rates and terms", "Personalized guidance"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Philadelphia, PA",
      text: "Jordan at GG Appraisals provided an incredibly thorough and professional appraisal for our home refinance. The report was detailed, delivered on time, and exactly what our lender needed. Highly recommend!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      location: "Montgomery County, PA",
      text: "We needed an appraisal quickly for a time-sensitive purchase, and GG Appraisals came through for us. Jordan was responsive, professional, and provided a comprehensive report that helped us make an informed decision.",
      rating: 5
    },
    {
      name: "Jennifer Williams",
      location: "Delaware County, PA",
      text: "As a real estate agent, I rely on accurate appraisals to close deals. GG Appraisals consistently delivers reliable, well-researched reports that stand up to scrutiny. They've become my go-to appraisal service in the Philadelphia area.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What is a residential appraisal?",
      answer: "A residential appraisal is a professional assessment of a property's value. Our certified appraisers evaluate factors like location, size, condition, and recent comparable sales to determine the fair market value of your property."
    },
    {
      question: "How long does an appraisal take?",
      answer: "Most residential appraisals are completed within 3-5 business days from the inspection date. We understand the importance of timely service and strive to deliver quick results without compromising quality."
    },
    {
      question: "What services are included in real estate sales support?",
      answer: "Our real estate sales support includes market analysis and pricing strategy, property preparation guidance, and negotiation and transaction support to help you achieve the best possible outcome."
    },
    {
      question: "How do I know which mortgage financing option is right for me?",
      answer: "Our mortgage specialists will review your financial situation, goals, and preferences to recommend the best financing options. We work with multiple lenders to ensure you get competitive rates and terms that fit your needs."
    },
    {
      question: "Do you offer services for commercial properties?",
      answer: "Currently, we specialize in residential properties including homes, condos, and multi-family properties in Philadelphia, Delaware County, and Montgomery County. For commercial property needs, we can refer you to qualified commercial appraisers."
    },
    {
      question: "What information do I need to provide for an appraisal?",
      answer: "We'll need basic property information including the address, property type, and reason for the appraisal. Our team will guide you through any additional documentation needed and schedule a convenient inspection time."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-600">GG Appraisals</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">Home</a>
                <a href="#services" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">Services</a>
                <a href="#about" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">About Us</a>
                <a href="#reviews" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">Reviews</a>
                <a href="#contact" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">Contact</a>
              </div>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Residential Appraisal Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert appraisals, real estate support, and mortgage financing serving Philadelphia, Delaware County, and Montgomery County
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Home className="w-5 h-5 mr-2" />
                Get an Appraisal
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <TrendingUp className="w-5 h-5 mr-2" />
                Real Estate Support
              </Button>
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                <DollarSign className="w-5 h-5 mr-2" />
                Mortgage Financing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive services to meet all your residential property needs in Philadelphia, Delaware County, and Montgomery County
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant="outline">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">
              We combine expertise, technology, and personalized service to deliver exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Appraisers</h3>
              <p className="text-gray-600">Our team consists of certified professionals with years of experience in residential property appraisal and real estate.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">We understand the importance of timely service and strive to deliver quick results without compromising quality.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">We offer transparent, competitive pricing for all our services with no hidden fees or surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 text-center">
              At GG Appraisals, we provide reliable, objective, and professional residential real estate appraisal services. Founded by Jordan Chaplin, a seasoned appraiser with vast experience in both the Arizona and Philadelphia markets, our firm is built on a foundation of integrity, precision, and market expertise.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <img src="/api/placeholder/400/300" alt="Downtown Phoenix, Arizona" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <p className="text-sm text-gray-500">Downtown Phoenix, Arizona</p>
              </div>
              <div className="text-center">
                <img src="/api/placeholder/400/300" alt="Downtown Philadelphia, Pennsylvania" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <p className="text-sm text-gray-500">Downtown Philadelphia, Pennsylvania</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Jordan brings years of hands-on valuation experience across a wide range of property types, neighborhoods, and market conditions. His background in appraising properties in diverse regions—from the desert landscapes of Arizona to the dense urban fabric of Philadelphia—gives him a unique perspective and a deep understanding of value across markets.
            </p>
            <p className="text-lg text-gray-600 text-center">
              At GG Appraisals, we're committed to delivering high-quality appraisal reports that meet industry standards and support confident decision-making for lenders, homeowners, investors, and developers. Whether you're purchasing, refinancing, or planning a strategic real estate move, we're here to provide the accurate, timely valuations you need.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Our simple process makes it easy to get the services you need</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Request Service", description: "Fill out our simple online form with your information and service needs.", icon: <FileText className="w-8 h-8" /> },
              { step: "2", title: "Initial Consultation", description: "Our experts will contact you to discuss your specific requirements.", icon: <Phone className="w-8 h-8" /> },
              { step: "3", title: "Service Execution", description: "We perform the requested service with attention to detail and quality.", icon: <CheckCircle className="w-8 h-8" /> },
              { step: "4", title: "Delivery", description: "Receive your completed appraisal, support, or financing solution.", icon: <Mail className="w-8 h-8" /> }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-600">{item.icon}</div>
                </div>
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What People Are Saying</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied clients</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="cursor-pointer" onClick={() => toggleFaq(index)}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                  {expandedFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </CardHeader>
                {expandedFaq === index && (
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-600 mr-3" />
                  <span>(215) 555-0123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-green-600 mr-3" />
                  <span>info@ggappraisals.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-600 mr-3" />
                  <span>Serving Philadelphia, Delaware County, and Montgomery County</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(215) 555-0123"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">How Can We Help You?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your property and what you need..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8">
            Whether you need a residential appraisal, real estate sales support, or mortgage financing in Philadelphia, Delaware County, or Montgomery County, we're here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GG Appraisals</h3>
              <p className="text-gray-400 mb-4">
                Expert residential appraisals, real estate support, and mortgage financing serving Philadelphia, Delaware County, and Montgomery County.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white">Residential Appraisals</a></li>
                <li><a href="#services" className="hover:text-white">Real Estate Sales Support</a></li>
                <li><a href="#services" className="hover:text-white">Mortgage Financing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
              <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="rounded-r-none bg-gray-800 border-gray-700 text-white"
                />
                <Button className="rounded-l-none bg-green-600 hover:bg-green-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 GG Appraisals. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a>
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

