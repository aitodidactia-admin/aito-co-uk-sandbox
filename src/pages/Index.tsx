import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Users, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { processStampWithBackgroundRemoval } from "@/utils/processStampImage";

const Index = () => {
  const [processedStampSrc, setProcessedStampSrc] = useState<string>("/lovable-uploads/1484aa1d-3554-426f-8742-f000219d5d1c.png");

  useEffect(() => {
    const processImage = async () => {
      try {
        const processed = await processStampWithBackgroundRemoval("/lovable-uploads/1484aa1d-3554-426f-8742-f000219d5d1c.png");
        setProcessedStampSrc(processed);
      } catch (error) {
        console.error("Failed to process stamp image:", error);
        // Keep original image as fallback
      }
    };

    processImage();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Aitodidactia
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            We build intelligent, Virtual People for your business...
          </p>
          <div className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto text-left">
            <p className="mb-2">Someone to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>answer your regular queries</li>
              <li><strong><em>take</em></strong> messages</li>
              <li>sell tickets</li>
              <li>train your clients</li>
              <li>book your meetings</li>
              <li><strong><em>take</em></strong> your meetings..</li>
            </ul>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-semibold">
            Your Virtual Team starts here...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Learn More
              </Button>
            </Link>
            <Link to="/share-thoughts">
              <Button variant="outline" size="lg" className="px-8 py-3">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Aitodidactia?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fully Managed...</h3>
              <p className="text-gray-600">
                Our Human team helps you work out what's (who's!) needed, how to build it, and how to measure it's benefits
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Evolving Capabilities</h3>
              <p className="text-gray-600">
                Like a new staff member, your VE will grow over time. We'll train them together
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Highly Customisable</h3>
              <p className="text-gray-600">
                If you think they're chatbots, think again. You can choose their voice, personality, confidence level, to name just a few...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-900 text-white relative">
        {/* Featured stamp in top left */}
        <img 
          src={processedStampSrc} 
          alt="Featured" 
          className="absolute top-6 left-6 w-24 h-24 z-10 transform -rotate-[10deg]"
        />
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Have a Chat with a VE?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            This month's featured VE is Aito, a personal development mentor. Just click to have a chat with him...
          </p>
          <a href="https://www.aitodidactia.uk" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3">
              Call Aito
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
