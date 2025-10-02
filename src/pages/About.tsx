
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 px-4">
      <Card className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">About Aitodidactia</h1>
        
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
          <div className="pt-6">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What do we do?</h2>
            <div className="space-y-4">
              <p className="font-bold">
                We develop and utilise a range of technologies to create, effectively, Virtual People.
              </p>
              
              <p>
                Chat Bots and IVRs are not what we do. We have built Trainers, Mindset Coaches, Ticketing Agents, Salespeople and Customer Service Agents that answer questions, send emails, book calendar appointments, keep secure client records, recommend purchases, and even proactively contact humans when required...
              </p>

              <p>
                It's like having a phone call with a real person...
              </p>

              <p>
                They learn, they sound like you, they can process hundreds of enquires an hour, 24 hours per day. They never want a raise...
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;
