import Container from './Container';
import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--text)] text-white">
      <Container className="max-w-full py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Your one-stop destination for all your shopping needs. We provide quality products 
              at competitive prices with excellent customer service.
            </p>
            <SocialMedia 
              className="justify-start" 
              linkClassName="text-gray-300 hover:text-white hover:bg-[var(--main)] border-gray-600"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-gray-300 hover:text-white transition-colors">
                  Hot Offers
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-300 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--main)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Commerce Street<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--main)] flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--main)] flex-shrink-0" />
                <a href="mailto:support@shopfluence.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  support@shopfluence.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            © 2025 Shopfluence. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-300 hover:text-white transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;