import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const licenseTypes = [
    'Microsoft',
    'Adobe',
    'Oracle',
    'SAP',
    'Salesforce',
    'Autodesk',
    'IBM',
    'Other',
  ];

  const validate = (formValues) => {
    const newErrors = {};
    
    if (!formValues.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formValues.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    if (!formValues.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }
    
    if (!formValues.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formValues.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate(values);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setValues({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: '',
        });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get Your Free License Valuation</h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Fill out the form below and our team will provide a no-obligation valuation of your software licenses
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-blue-800 p-8 md:p-12 flex items-center">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <p className="mb-8">
                    Ready to turn your unused software licenses into cash? Our team is here to help you get the best value for your assets.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">Email</p>
                      <p>contact@softsell.com</p>
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p>+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>123 Software Lane<br />San Francisco, CA 94103</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="text-green-500 mb-4">
                      <CheckCircle size={64} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      We've received your information and will contact you shortly with your license valuation.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors duration-200"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name*
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={values.company}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.company ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Acme Inc."
                      />
                      {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
                    </div>

                    <div>
                      <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 mb-1">
                        License Type*
                      </label>
                      <select
                        id="licenseType"
                        name="licenseType"
                        value={values.licenseType}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.licenseType ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="" disabled>
                          Select license type
                        </option>
                        {licenseTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.licenseType && <p className="mt-1 text-sm text-red-500">{errors.licenseType}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Please provide details about your software licenses (quantity, version, purchase date, etc.)"
                      ></textarea>
                      {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-6 py-3 flex items-center justify-center gap-2 rounded-md text-white font-semibold transition-colors duration-200 ${
                        isSubmitting
                          ? 'bg-blue-400 cursor-not-allowed'
                          : 'bg-blue-800 hover:bg-blue-900'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Send size={18} />
                      )}
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;