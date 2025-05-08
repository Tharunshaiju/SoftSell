import React from 'react';
import { Shield, Clock, DollarSign, LineChart } from 'lucide-react';

const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex-shrink-0 p-3 bg-blue-100 text-blue-800 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-center md:text-left text-gray-800">{title}</h3>
        <p className="text-gray-600 text-center md:text-left">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield size={24} />,
      title: 'Secure & Compliant',
      description: 'Our platform ensures all transactions follow software licensing laws and vendor policies.',
    },
    {
      icon: <Clock size={24} />,
      title: 'Fast Process',
      description: 'From submission to payment, our streamlined process typically takes less than 3 business days.',
    },
    {
      icon: <DollarSign size={24} />,
      title: 'Best Market Rates',
      description: 'We analyze current market conditions to ensure you get the maximum value for your licenses.',
    },
    {
      icon: <LineChart size={24} />,
      title: 'Transparent Pricing',
      description: 'See exactly how we value your licenses with our detailed breakdown and zero hidden fees.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose SoftSell</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            With years of experience in the software resale market, we offer unique advantages over other services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 p-8 bg-blue-50 rounded-xl border border-blue-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Ready to maximize your software investment?</h3>
              <p className="text-blue-700">
                Whet`her you're downsizing, upgrading, or just cleaning house, convert those unused licenses into cash.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-md transition-all duration-300"
              >
                Get Your Valuation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;