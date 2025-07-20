import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message! I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tanishaofficial30@gmail.com',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'ACT, Australia',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
    },
  ];

  const socialLinks = [
  { icon: Github, url: "https://github.com/TanishaSharma01", color: 'text-purple-400', bgColor: 'bg-purple-500/20', hoverColor: 'hover:bg-purple-500/30' },
  { icon: Linkedin, url: "https://www.linkedin.com/in/tanisha-sharma-465aa71b6/", color: 'text-cyan-400', bgColor: 'bg-cyan-500/20', hoverColor: 'hover:bg-cyan-500/30' },
];

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
            >
              <h3 className="text-xl font-semibold mb-6 text-purple-400 flex items-center">
                <Send className="mr-3 h-5 w-5" />
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className={`w-10 h-10 ${info.bgColor} rounded-lg flex items-center justify-center`}>
                      <info.icon className={`h-5 w-5 ${info.color}`} />
                    </div>
                    <div>
                      <p className="text-slate-300 font-medium">{info.label}</p>
                      <p className={info.color}>{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
            >
              <h3 className="text-xl font-semibold mb-6 text-cyan-400 flex items-center">
                <Github className="mr-3 h-5 w-5" />
                Follow Me
              </h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`w-12 h-12 ${social.bgColor} rounded-lg flex items-center justify-center ${social.hoverColor} transition-colors duration-300`}
                  >
                    <social.icon className={`h-5 w-5 ${social.color}`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
          >
            <h3 className="text-xl font-semibold mb-6 text-green-400 flex items-center">
              <Mail className="mr-3 h-5 w-5" />
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-slate-100 placeholder-slate-400"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-100 placeholder-slate-400"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-slate-100 placeholder-slate-400"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-100 placeholder-slate-400 resize-none"
                  placeholder="Hi Tanisha, I would like to discuss..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
