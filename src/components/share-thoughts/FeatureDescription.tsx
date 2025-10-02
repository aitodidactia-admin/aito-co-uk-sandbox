
import React from "react";

const FeatureDescription = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-3">What Can You Do Here?</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Send us Feedback</h3>
          <p className="text-muted-foreground">
            We're continually evolving Aito, and all our Virtual People, based on your comments - good or bad. We need to know what we need to work on...
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Want to Work with Us?</h3>
          <p className="text-muted-foreground">
            We've built Virtual People for Bookkeepers, Charities, Consultancies, Coaching and Mentoring organisations, and more.
          </p>
        </div>

        <div className="mt-6">
          <p className="text-muted-foreground italic">
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureDescription;
