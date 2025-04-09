  
  import { Button } from "../components/ui/button";

import { Link } from "react-router-dom";
  import { 
    ChevronRight, 
    Check, 
    BarChart3, 
    Search, 
    Wallet, 
    ArrowRight, 
    Mic, 
    Camera,
    Brain
  } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import React from "react";

  
  
const LandingPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  
    // Handle scroll events
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
 
  const features = [
    {
      icon: <Wallet/>,
      title: "Multiple Accounts",
      description: "Manage personal, work, and savings accounts all in one place."
    },
    {
      icon: <Camera />,
      title: "Receipt Scanning",
      description: "Capture receipts with your camera and automatically extract data."
    },
    {
      icon: <Mic  />,
      title: "Voice Commands",
      description: "Add transactions hands-free with simple voice commands."
    },
    {
      icon: <BarChart3 />,
      title: "Expense Analytics",
      description: "Visualize your spending patterns with interactive charts."
    },
    {
      icon: <Brain />,
      title: "AI Financial Advisor",
      description: "Get personalized insights and recommendations for your finances."
    },
    {
      icon: <Search />,
      title: "Smart Search",
      description: "Find transactions quickly with powerful search capabilities."
    }
  ];

  return (
    
        
     
        <div className="min-h-screen flex flex-col">
      
       {/* Header */}
       <header 
        className={`py-4 px-6 fixed top-0 w-full z-50 transition-all duration-200 ${
          isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto max-w-7xl flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-md bg-gradient-to-r from-finwise-400 to-finwise-600 flex items-center justify-center text-white font-bold mr-2">
              FW
            </div>
            <span className="text-2xl font-bold text-gray-900">BLA BLA</span>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors duration-200">
              Features
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors duration-200">
              About
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors duration-200">
              Testimonials
            </a>
            <SignedIn>
  <Link to="/dashboard">
    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
      Go to Dashboard
      <ChevronRight className="ml-2 h-4 w-4" />
    </Button>
  </Link>
  <UserButton 
    afterSignOutUrl="/"
    appearance={{
      elements: {
        avatarBox: "h-9 w-9",
        userButtonPopoverCard: "shadow-lg"
      }
    }}
  />
</SignedIn>

<SignedOut>
  <SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
    <Button variant="outline" className="mr-2">Log In</Button>
  </SignInButton>
  <SignUpButton mode="modal" fallbackRedirectUrl="/dashboard">
    <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign Up</Button>
  </SignUpButton>
</SignedOut>
          </nav>
        </div>
      </header>


     {/* Hero Section */}
<section className="pt-32 pb-20 px-6 relative overflow-hidden">
  <div className="container mx-auto max-w-7xl">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          <span className="text-gray-900">Smart</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
            Expense Tracking
          </span>{" "}
          <span className="text-gray-900">with AI Assistant</span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
          Manage your finances effortlessly with FinWise's smart expense tracker and AI-powered financial advisor.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <Link to="/register">
            <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a href="#features">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Explore Features
            </Button>
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2 text-sm text-gray-500">
          <div className="flex items-center">
            <Check className="h-4 w-4 text-blue-600 mr-2" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center">
            <Check className="h-4 w-4 text-blue-600 mr-2" />
            <span>Free 14-day trial</span>
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 px-4 md:px-0 mt-8 md:mt-0">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-3xl transform rotate-3"></div>
          <img 
                  src="https://placehold.co/600x400/e6f7ff/0088e6?text=FinWise+Dashboard+Preview&font=roboto" 
                  alt="FinWise Dashboard"
                  className="relative rounded-3xl shadow-xl transform -rotate-3 transition-transform hover:rotate-0 duration-500"
                />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Features Section */}
<section id="features" className="py-20 px-6 bg-gray-50">
  <div className="container mx-auto max-w-7xl">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Smart Finance</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Blabla combines cutting-edge technology with intuitive design to help you manage your finances like never before.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="h-14 w-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
            {React.cloneElement(feature.icon, {
              className: "h-8 w-8 text-blue-600" // Using Tailwind's built-in blue colors
            })}
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    {/* About Section */}
<section id="about" className="py-20 px-6">
  <div className="container mx-auto max-w-7xl">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img 
          src="https://placehold.co/600x400/e6f7ff/0088e6?text=About+FinWise&font=roboto" 
          alt="About FinWise"
          className="rounded-2xl shadow-lg"
        />
      </div>
      
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose FinWise?</h2>
        
        <p className="text-lg text-gray-600">
          Blabla was designed with one goal in mind: to make personal finance management simple, intelligent, and accessible to everyone.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="mt-1 bg-blue-100 rounded-full p-1">
              <Check className="h-5 w-5 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Easy to Use</h3>
              <p className="text-gray-600">Intuitive interface designed for users of all technical levels.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mt-1 bg-blue-100 rounded-full p-1">
              <Check className="h-5 w-5 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Privacy Focused</h3>
              <p className="text-gray-600">Your financial data stays private and secure with end-to-end encryption.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mt-1 bg-blue-100 rounded-full p-1">
              <Check className="h-5 w-5 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Smart AI Insights</h3>
              <p className="text-gray-600">Get personalized financial advice based on your spending patterns.</p>
            </div>
          </div>
        </div>
        
        <div className="pt-4">
          <Link to="/register">
            <Button className="bg-blue-600 hover:bg-blue-700" size="lg">
              Start Your Financial Journey
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
<section id="testimonials" className="py-20 px-6 bg-gray-50">
  <div className="container mx-auto max-w-7xl">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Thousands of users trust FinWise to manage their personal finances every day.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
            JD
          </div>
          <div className="ml-4">
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-sm text-gray-500">Small Business Owner</p>
          </div>
        </div>
        <p className="text-gray-600">
          "FinWise has completely changed how I manage my business expenses. The receipt scanning feature is a game-changer!"
        </p>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
            JS
          </div>
          <div className="ml-4">
            <h3 className="font-semibold">Jane Smith</h3>
            <p className="text-sm text-gray-500">Freelancer</p>
          </div>
        </div>
        <p className="text-gray-600">
          "As a freelancer, I need to keep track of multiple income sources. FinWise makes it incredibly easy with its intuitive design."
        </p>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
            RJ
          </div>
          <div className="ml-4">
            <h3 className="font-semibold">Robert Johnson</h3>
            <p className="text-sm text-gray-500">Student</p>
          </div>
        </div>
        <p className="text-gray-600">
          "The AI advisor helped me identify where I was overspending and suggested ways to save money. I've saved over $200 last month alone!"
        </p>
      </div>
    </div>
  </div>
</section>

     {/* CTA Section */}
<section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
  <div className="container mx-auto max-w-7xl text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take Control of Your Finances?</h2>
    <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
      Join thousands of users who have transformed their financial lives with FinWise.
    </p>
    
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link to="/register">
        <Button 
          size="lg" 
          className="w-full sm:w-auto bg-white text-blue-600 hover:bg-white/90 hover:text-blue-700"
        >
          Get Started for Free
        </Button>
      </Link>
      
      <Link to="/login">
        <Button 
          size="lg" 
          variant="outline" 
          className="w-full sm:w-auto border-white text-black hover:bg-white/10 hover:text-white"
        >
          Log In
        </Button>
      </Link>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-300">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-md bg-gradient-to-r from-finwise-400 to-finwise-600 flex items-center justify-center text-white font-bold mr-2">
                  FW
                </div>
                <span className="text-2xl font-bold text-white">FinWise</span>
              </div>
              <p className="text-gray-400 mb-4">
                Smart expense tracking with AI-powered insights.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Expense Tracking</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Multiple Accounts</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Receipt Scanning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Voice Commands</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Financial Advisor</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} FinWise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
