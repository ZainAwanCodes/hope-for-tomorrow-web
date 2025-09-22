import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { label: 'Our Story', href: '#about' },
      { label: 'Mission & Vision', href: '#mission' },
      { label: 'Our Impact', href: '#impact' },
      { label: 'Annual Reports', href: '#' },
      { label: 'Careers', href: '#' }
    ],
    programs: [
      { label: 'Clean Water', href: '#' },
      { label: 'Education', href: '#' },
      { label: 'Healthcare', href: '#' },
      { label: 'Food Security', href: '#' },
      { label: 'Emergency Relief', href: '#' }
    ],
    getInvolved: [
      { label: 'Donate Now', href: '#' },
      { label: 'Volunteer', href: '#contact' },
      { label: 'Fundraise', href: '#' },
      { label: 'Corporate Partnerships', href: '#' },
      { label: 'Monthly Giving', href: '#' }
    ],
    support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQ', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Transparency', href: '#' }
    ]
  };

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl">Hope for Tomorrow</span>
              </div>
              
              <p className="text-background/80 mb-6 leading-relaxed">
                Building hope and creating lasting positive change in communities 
                worldwide through compassionate action and sustainable solutions.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-sm text-background/80">info@hopefortomorrow.org</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-sm text-background/80">+1 (555) 123-4567</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 bg-background/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h3 className="font-semibold text-lg mb-4">About Us</h3>
              <ul className="space-y-2">
                {footerLinks.about.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-background/80 hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Programs</h3>
              <ul className="space-y-2">
                {footerLinks.programs.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-background/80 hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Get Involved</h3>
              <ul className="space-y-2">
                {footerLinks.getInvolved.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-background/80 hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-background/80 hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-background/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-background/80 mb-6 max-w-2xl mx-auto">
              Get updates on our latest projects, success stories, and ways you can help make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-sm text-background/60 mb-4 sm:mb-0">
              © {currentYear} Hope for Tomorrow. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;