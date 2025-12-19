import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';

const Footer = () => {
  const popularCities = [
    "Atlanta", "Denver", "Jacksonville", "Nashville", "New York", 
    "San Diego", "Seattle", "Chicago", "Miami", "Dallas",
    "Austin", "Boston", "Houston", "Los Angeles", "Phoenix"
  ];

  const footerLinks = [
    { title: "Company", links: ["About Us", "Careers", "Press", "Blog"] },
    { title: "Support", links: ["Help Center", "Safety", "Terms of Use", "Privacy Policy"] },
    { title: "Services", links: ["Interior", "Exterior", "Lawn & Garden", "More"] },
  ];

  return (
    <footer className="w-full font-serif bg-white pt-24">
      <div className=" mx-auto ">
        
        {/* Popular Cities Section */}
        <div className="mb-24 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-serif text-shadow-lg font-bold tracking-tight text-stone-900">Popular Cities</h2>
            <div className="h-px flex-1 bg-stone-300"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-8">
            {popularCities.map(city => (
              <a 
                key={city} 
                href={`#${city}`}
                className="text-lg font-serif text-stone-500 hover:text-[#97c77a] transition-colors duration-200 flex items-center group"
              >
                <span className="w-0 group-hover:w-2 h-px bg-[#9ab987] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                {city}
              </a>
            ))}
          </div>
        </div>

        {/* Main Footer Capsule */}
        <div className="bg-[#111111] text-white rounded-tl-[3rem] rounded-tr-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#9fe870]/10 blur-[100px] -mr-32 -mt-32"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 text-2xl font-bold mb-6">
                <div className="bg-[#9fe870] p-1.5 rounded-lg">
                  <HiHome className="text-black" />
                </div>
                <span className="tracking-tight text-white">HavenWorks</span>
              </div>
              <p className="text-stone-400 max-w-xs text-sm leading-relaxed mb-8">
                The most trusted platform for professional home services. Verified experts, transparent pricing, and quality guaranteed.
              </p>
              <div className="flex gap-4">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#9fe870] hover:text-black hover:border-[#9fe870] transition-all duration-300">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {footerLinks.map((col, i) => (
                <div key={i}>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-white mb-6">{col.title}</h4>
                  <ul className="space-y-4">
                    {col.links.map(link => (
                      <li key={link}>
                        <a href="#" className="text-stone-400 hover:text-white text-sm transition-colors">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-4">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h4 className="font-bold text-lg mb-2">Join our Newsletter</h4>
                <p className="text-stone-400 text-sm mb-6">Stay updated with the latest home maintenance tips and offers.</p>
                <div className="flex flex-col gap-3">
                  <div className="relative group">
                    <input 
                      className="w-full bg-white/5 rounded-2xl px-5 py-4 outline-none border border-white/10 focus:border-[#9fe870]/50 transition-all text-sm" 
                      placeholder="Enter your email" 
                    />
                    <button className="absolute right-2 top-2 bottom-2 bg-[#9fe870] text-black px-4 rounded-xl font-bold text-sm flex items-center gap-2 hover:scale-[1.02] transition-transform active:scale-95">
                      Join <FiArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="relative z-10 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 font-medium">
            <p>© 2024 HavenWorks. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;