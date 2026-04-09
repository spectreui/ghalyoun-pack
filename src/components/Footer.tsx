import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 dark:text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ghalyoun<span className="text-orange-500">Pack</span></h3>
            <p className="text-gray-400 mb-6">
              Premium paving services and materials supplier in Cairo, delivering quality and reliability since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-orange-400 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</Link></li>

            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-orange-400 transition-colors">Paving Installation</li>
              <li className="text-gray-400 hover:text-orange-400 transition-colors">Residential Projects</li>
              <li className="text-gray-400 hover:text-orange-400 transition-colors">Commercial Paving</li>
              <li className="text-gray-400 hover:text-orange-400 transition-colors">Maintenance & Repair</li>
              <li className="text-gray-400 hover:text-orange-400 transition-colors">Drainage Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-orange-500 mr-3 mt-1" size={18} />
                <span className="text-gray-400">Industrial Zone 15, 6th of October City, Giza, Egypt</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-orange-500 mr-3 mt-1" size={18} />
                <span className="text-gray-400">+2 (010) 1234 5678<br />+2 (02) 1234 5679</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-orange-500 mr-3 mt-1" size={18} />
                <span className="text-gray-400">info@ghalyounpack.com<br />sales@ghalyounpack.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ghalyoun Pack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
