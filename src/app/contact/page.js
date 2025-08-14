'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    movingFrom: '',
    movingTo: '',
    shiftingDate: '',
    movementOfThings: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        contactNumber: '',
        email: '',
        movingFrom: '',
        movingTo: '',
        shiftingDate: '',
        movementOfThings: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      contactNumber: '',
      email: '',
      movingFrom: '',
      movingTo: '',
      shiftingDate: '',
      movementOfThings: ''
    });
    setSubmitStatus(null);
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Have any question?",
      subtitle: "Free +91 75500 16167",
      color: "bg-blue-500",
      delay: "0.1s"
    },
    {
      icon: EnvelopeIcon,
      title: "Write email",
      subtitle: "kvtpackersandmovers@gmail.com",
      color: "bg-green-500",
      delay: "0.2s"
    },
    {
      icon: MapPinIcon,
      title: "Visit anytime",
      subtitle: "2nd floor, 5/11, Anna Avenue, Near, DG Vaishnav College Rd, Arumbakkam, Chennai, Tamil Nadu",
      color: "bg-purple-500",
      delay: "0.3s"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#a89f91] to-[#d6c8b8] overflow-hidden">
  {/* Subtle Background Texture */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-gradient-to-br from-[#8b7f6f]/30 to-transparent"></div>
  </div>

  <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-15">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-10">
      {/* Text Section */}
      <div className={`w-full md:w-1/2 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-gray-100 mb-8 max-w-xl">
          Get in touch with us today to discuss your moving needs and receive personalized assistance.
        </p>
        <div className="flex items-center text-gray-200 text-sm">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-white">Contact Us</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src="/img/hero/hero_contact.jpg"
          alt="Happy couple moving boxes"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>


      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="animate-slideInUp" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Feel free to write</h2>
                <p className="text-gray-600 mb-8">Send us a message and we'll get back to you as soon as possible.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                         <div className="form-field-appear">
                       <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                       <input
                         type="text"
                         name="name"
                         value={formData.name}
                         onChange={handleInputChange}
                         placeholder="Enter Name"
                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent form-input-focus"
                         required
                       />
                     </div>
                                         <div className="form-field-appear">
                       <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                       <input
                         type="tel"
                         name="contactNumber"
                         value={formData.contactNumber}
                         onChange={handleInputChange}
                         placeholder="Enter Contact Number"
                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent form-input-focus"
                         required
                       />
                     </div>
                  </div>
                  
                                     <div className="form-field-appear">
                     <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                     <input
                       type="email"
                       name="email"
                       value={formData.email}
                       onChange={handleInputChange}
                       placeholder="Enter Email"
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent form-input-focus"
                       required
                     />
                   </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                         <div className="form-field-appear">
                       <label className="block text-sm font-medium text-gray-700 mb-2">Moving From</label>
                       <input
                         type="text"
                         name="movingFrom"
                         value={formData.movingFrom}
                         onChange={handleInputChange}
                         placeholder="Enter Moving From"
                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent form-input-focus"
                         required
                       />
                     </div>
                                         <div className="form-field-appear">
                       <label className="block text-sm font-medium text-gray-700 mb-2">Moving To</label>
                       <input
                         type="text"
                         name="movingTo"
                         value={formData.movingTo}
                         onChange={handleInputChange}
                         placeholder="Enter Moving To"
                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent form-input-focus"
                         required
                       />
                     </div>
                  </div>
                  
                                     <div className="form-field-appear">
                     <label className="block text-sm font-medium text-gray-700 mb-2">Shifting Date</label>
                     <input
                       type="date"
                       name="shiftingDate"
                       value={formData.shiftingDate}
                       onChange={handleInputChange}
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent form-input-focus"
                       required
                     />
                   </div>
                  
                                     <div className="form-field-appear">
                     <label className="block text-sm font-medium text-gray-700 mb-2">Movement of Things</label>
                     <textarea
                       name="movementOfThings"
                       value={formData.movementOfThings}
                       onChange={handleInputChange}
                       placeholder="Enter Movement of Things"
                       rows="4"
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent form-input-focus resize-none"
                       required
                     ></textarea>
                   </div>
                  
                  {/* Submit Status */}
                                     {submitStatus && (
                     <div className={`p-4 rounded-lg flex items-center gap-3 success-bounce ${
                       submitStatus === 'success' 
                         ? 'bg-green-50 text-green-800 border border-green-200' 
                         : 'bg-red-50 text-red-800 border border-red-200'
                     }`}>
                      {submitStatus === 'success' ? (
                        <CheckCircleIcon className="w-5 h-5 text-green-600" />
                      ) : (
                        <ExclamationCircleIcon className="w-5 h-5 text-red-600" />
                      )}
                      <span className="font-medium">
                        {submitStatus === 'success' 
                          ? 'Message sent successfully! We\'ll get back to you soon.' 
                          : 'Something went wrong. Please try again.'}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="flex-1 bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slideInUp" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in touch with us</h2>
                <p className="text-gray-600 mb-8">
                  Get in touch with us today to discuss your moving needs and receive personalized assistance.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                                         <div
                       key={index}
                       className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 contact-card-hover"
                       style={{ animationDelay: info.delay }}
                     >
                      <div className={`p-3 rounded-full ${info.color} text-white`}>
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-gray-600">{info.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Additional Info */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Why Choose KVT?</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <ArrowRightIcon className="w-4 h-4 text-green-600" />
                      25+ years of experience
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRightIcon className="w-4 h-4 text-green-600" />
                      Professional and reliable service
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRightIcon className="w-4 h-4 text-green-600" />
                      Insurance coverage for all items
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRightIcon className="w-4 h-4 text-green-600" />
                      24/7 customer support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office in Chennai for a personal consultation about your moving needs
            </p>
          </div>
          
                     <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-slideInUp map-container" style={{ animationDelay: '0.3s' }}>
             <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9855!2d80.2177!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjciTiA4MMKwMTMnMDMuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KVT Packers and Movers Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-10 transform rotate-12 -translate-x-1/2"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Move?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Get a free quote for your moving needs today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors transform hover:scale-105"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+917550016167"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 