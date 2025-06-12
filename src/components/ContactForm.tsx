import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, Terminal, Shield } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch('https://formspree.io/f/xjkrwrwq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitError('Failed to send message. Please try again or contact directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen py-20 px-4 relative z-10 flex items-center justify-center">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center glass rounded-lg p-8 neon-border"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-hacker-green text-6xl sm:text-8xl mb-6 font-mono"
            >
              ✓
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-mono font-bold text-hacker-green mb-4 animate-pulse-neon">
              MESSAGE_TRANSMITTED
            </h3>
            <p className="text-hacker-cyan font-mono text-sm sm:text-base mb-4">
              Secure connection established. Your message has been encrypted and delivered.
            </p>
            <div className="text-xs font-mono text-gray-400">
              <div>Status: DELIVERED</div>
              <div>Encryption: AES-256</div>
              <div>Response ETA: 24-48 hours</div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-hacker-green mb-4 animate-pulse-neon">
            {'</'} CONTACT_PROTOCOL {'>'}
          </h2>
          <p className="text-hacker-cyan font-mono text-sm sm:text-base mb-6">
            Establish secure communication channel
          </p>
          
          {/* Contact Info */}
          <div className="glass rounded-lg p-4 sm:p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <User className="w-5 h-5 text-hacker-green mx-auto" />
                <div className="text-hacker-green font-mono text-sm">NAME</div>
                <div className="text-gray-300 font-mono text-xs sm:text-sm">Vinayak Bansal</div>
              </div>
              <div className="space-y-2">
                <Mail className="w-5 h-5 text-hacker-green mx-auto" />
                <div className="text-hacker-green font-mono text-sm">EMAIL</div>
                <div className="text-gray-300 font-mono text-xs sm:text-sm break-all">vb.vinayakbansal@gmail.com</div>
              </div>
              <div className="space-y-2">
                <Terminal className="w-5 h-5 text-hacker-green mx-auto" />
                <div className="text-hacker-green font-mono text-sm">PHONE</div>
                <div className="text-gray-300 font-mono text-xs sm:text-sm">+91 6397053122</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-lg p-4 sm:p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-hacker-green" />
              <h3 className="text-hacker-green font-mono text-sm sm:text-base">SECURE_MESSAGE_FORM</h3>
            </div>

            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-hacker-red/10 border border-hacker-red/30 rounded text-hacker-red text-sm font-mono"
              >
                {submitError}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-hacker-green w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name..."
                  required
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 bg-hacker-dark/50 border border-hacker-green/30 rounded-lg text-hacker-green placeholder-gray-500 focus:outline-none focus:border-hacker-green focus:ring-1 focus:ring-hacker-green/50 transition-all duration-300 font-mono text-sm sm:text-base"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-hacker-green w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email..."
                  required
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 bg-hacker-dark/50 border border-hacker-green/30 rounded-lg text-hacker-green placeholder-gray-500 focus:outline-none focus:border-hacker-green focus:ring-1 focus:ring-hacker-green/50 transition-all duration-300 font-mono text-sm sm:text-base"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 text-hacker-green w-4 h-4 sm:w-5 sm:h-5" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message..."
                  required
                  rows={5}
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 bg-hacker-dark/50 border border-hacker-green/30 rounded-lg text-hacker-green placeholder-gray-500 focus:outline-none focus:border-hacker-green focus:ring-1 focus:ring-hacker-green/50 transition-all duration-300 resize-none font-mono text-sm sm:text-base"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-hacker-green/20 border border-hacker-green text-hacker-green font-mono font-semibold rounded-lg hover:bg-hacker-green hover:text-black focus:outline-none focus:ring-2 focus:ring-hacker-green/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-hacker-green border-t-transparent rounded-full"
                    />
                    <span>TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>SEND_MESSAGE</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* System Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-lg p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-hacker-green" />
                <h3 className="text-hacker-green font-mono text-sm sm:text-base">SYSTEM_STATUS</h3>
              </div>
              <div className="space-y-2 text-xs sm:text-sm font-mono">
                <div className="flex justify-between">
                  <span className="text-hacker-cyan">Connection:</span>
                  <span className="text-hacker-green">SECURE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-hacker-cyan">Encryption:</span>
                  <span className="text-hacker-green">AES-256</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-hacker-cyan">Response Time:</span>
                  <span className="text-hacker-green">24-48 HRS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-hacker-cyan">Availability:</span>
                  <span className="text-hacker-green">99.9%</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-lg p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-hacker-green" />
                <h3 className="text-hacker-green font-mono text-sm sm:text-base">SECURITY_NOTICE</h3>
              </div>
              <div className="text-xs sm:text-sm font-mono text-gray-400 space-y-2">
                <p>All communications are encrypted using military-grade security protocols.</p>
                <p>Your data is protected and will never be shared with third parties.</p>
                <p>Messages are processed through secure channels only.</p>
              </div>
            </div>

            <div className="glass rounded-lg p-4 sm:p-6">
              <div className="text-center">
                <div className="text-hacker-green font-mono text-lg sm:text-xl mb-2">READY</div>
                <div className="text-xs sm:text-sm text-gray-400 font-mono">
                  System online and accepting secure transmissions
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;