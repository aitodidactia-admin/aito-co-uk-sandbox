
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4" style={{ backgroundColor: "#9966cc" }}>
      <Card className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-6">About Aitodidactia</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <p>
            The Aitodidactia Organisation began partially as an academic exercise, but mostly to serve an emerging human need to develop mental strength and fitness in a demanding modern world.
          </p>

          <p>
            We are a team of highly experienced developers, AI Prompt engineers, teachers, public speakers, personal coaches, and researchers who share the human values of personal development, equality and charity.
          </p>

          <p className="font-medium">
            We are Building Something Brilliant, in order to help People.
          </p>

          <p className="italic">
            Feel free to ask Aito about us…
          </p>

          <p className="text-muted-foreground">
            aitodidactia.uk
          </p>

          <div className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">What do we do?</h2>
            <div className="space-y-4">
              <p>
                We use a range of technologies to create, effectively, Virtual Employees. Chat Bots and IVRs are not what we do. We have built Trainers, Mindset Coaches, Ticketing Agents, Salespeople and Customer Service Agents that answer questions, send emails, book calendar appointments, keep secure client records, recommend purchases, and even proactively contact humans when required...
              </p>

              <p>
                It's like having a phone call with a human...
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
