import React from 'react';
import { Upload, DollarSign, CreditCard } from 'lucide-react';

const Step = ({ icon, title, description, stepNumber }) => {
  return (
    <div className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold">
        {stepNumber}
      </div>
      <div className="mb-4 p-4 bg-blue-100 text-blue-800 rounded-full transition-all duration-300 group-hover:bg-blue-800 group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-center text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload size={32} />,
      title: 'Upload License Details',
      description: 'Provide details about your unused software licenses. Our process is secure and confidential.',
      stepNumber: 1,
    },
    {
      icon: <DollarSign size={32} />,
      title: 'Get Instant Valuation',
      description: 'Our smart valuation engine gives you a competitive market price in seconds.',
      stepNumber: 2,
    },
    {
      icon: <CreditCard size={32} />,
      title: 'Get Paid Quickly',
      description: 'Once approved, receive payment within 48 hours via your preferred payment method.',
      stepNumber: 3,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We've simplified the process of selling your unused software licenses to just three easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              stepNumber={step.stepNumber}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Start Selling
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;