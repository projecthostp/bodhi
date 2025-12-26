
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Globe,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUpRight,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Download,
  Code,
  Hammer,
  Wrench,
  Ruler,
  Layout,
  Home as HomeIcon,
  Box
} from 'lucide-react';
import { PRODUCTS_DATA, CATEGORY_CONFIG, HERO_SLIDES, GALLERY_PROJECTS, ALL_COLLECTION_PRODUCTS } from './constants';
import { ProductCard } from './components/ProductCard';
import { ProjectCard } from './components/ProjectCard';
import { Category, SubCategory } from './types';
import emailjs from '@emailjs/browser'
import { assetUrl } from './utils/paths';

const Logo = ({ light = false }: { light?: boolean }) => (
  <div className="flex items-center gap-4 group cursor-pointer">
    {/* The Square BT Logo Mark - Using uploaded logo */}
    <img src={assetUrl('logo/umesh.jpeg')} alt="Bodhitree Logo" className="w-12 h-12 transition-transform duration-700 group-hover:rotate-12 object-contain" />
    
    <div className="flex flex-col justify-center">
      <div className="flex items-center leading-none">
        <span className={`font-serif text-2xl font-light tracking-tighter ${light ? 'text-white' : 'text-primary'} group-hover:italic transition-all`}>bodhi</span>
        <span className={`font-serif text-2xl font-bold tracking-tighter ${light ? 'text-white' : 'text-primary'}`}>tree LLP</span>
      </div>
      <span className={`text-[7px] uppercase font-bold tracking-[0.5em] mt-1.5 ${light ? 'text-white/40' : 'text-primary/40'}`}>
        designer's furniture
      </span>
    </div>
  </div>
);
const EMAILJS_SERVICE_ID = 'service_l2opxmy';
const EMAILJS_TEMPLATE_ID = 'template_i9umcr4';
const EMAILJS_PUBLIC_KEY = 'cTdQsSabgpwLAOJGK';

const App = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'products' | 'gallery' | 'about' | 'services' | 'downloads' | 'contact'>('home');
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory>('none');
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  // Contact form state
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [contactErrors, setContactErrors] = useState<{ name?: string; email?: string; phone?: string; message?: string }>({});
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const validateContact = () => {
    const errors: { name?: string; email?: string; phone?: string; message?: string } = {};
    if (!contactForm.name.trim()) errors.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) errors.email = 'Enter a valid email';
    if (contactForm.phone && !/^\+?[0-9\s-]{7,15}$/.test(contactForm.phone)) errors.phone = 'Enter a valid phone number';
    if (contactForm.message.trim().length < 10) errors.message = 'Tell us a bit more (min 10 chars)';
    setContactErrors(errors);
    return Object.keys(errors).length === 0;
  };

 const submitContact = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  // validation first
  if (!validateContact()) return;

  setContactStatus('sending');

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name: contactForm.name,
        email: contactForm.email,
        phone: contactForm.phone,
        message: contactForm.message,
        time: new Date().toLocaleString(),
      },
      EMAILJS_PUBLIC_KEY
    );

    setContactStatus('sent');

    // clear form after success
    setContactForm({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  } catch (error) {
    console.error('EmailJS error:', error);
    setContactStatus('idle');
    alert('Failed to send message. Please try again.');
  }
};


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (activeSection === 'home') {
      const timer = setInterval(() => {
        setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      }, 7000);
      return () => clearInterval(timer);
    }
  }, [activeSection]);

  const filteredProducts = PRODUCTS_DATA.filter(p => {
    const catMatch = selectedCategory === 'all' || p.category === selectedCategory;
    const subMatch = selectedSubCategory === 'none' || p.subCategory === selectedSubCategory;
    const searchMatch = searchTerm === '' || 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      p.description.toLowerCase().includes(searchTerm.toLowerCase());
    return catMatch && subMatch && searchMatch;
  });

  // When showing all products, include the all collection items first
  const displayProducts = selectedCategory === 'all' && selectedSubCategory === 'none' && searchTerm === ''
    ? [...ALL_COLLECTION_PRODUCTS, ...filteredProducts]
    : filteredProducts;

  const handleCategorySelect = (cat: Category, sub: SubCategory = 'none') => {
    setSelectedCategory(cat);
    setSelectedSubCategory(sub);
    setActiveSection('products');
    setIsProductMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products', hasDropdown: true },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'downloads', label: 'Downloads' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-surfaceDark/10">
      
      {/* Dynamic Header */}
      <header 
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-1000 ease-[0.16,1,0.3,1] ${
          isScrolled || isProductMenuOpen || activeSection !== 'home' 
            ? 'bg-background/95 backdrop-blur-md py-4' 
            : 'bg-transparent py-12'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-12">
          {/* Logo & Meta Nav */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex-1">
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    if (e.target.value && activeSection !== 'products') {
                      setActiveSection('products');
                      setSelectedCategory('all');
                    }
                  }}
                  className="w-full px-4 py-2 pl-10 text-sm bg-transparent border-b border-primary/30 focus:border-primary outline-none text-primary placeholder-primary/40 transition-colors"
                />
                <Search size={16} className="absolute left-0 top-3 text-primary/40" />
              </div>
            </div>
            
            <div 
              onClick={() => { setActiveSection('home'); setIsProductMenuOpen(false); }}
            >
              <Logo />
            </div>

            <div className="flex-1 flex justify-end items-center gap-8">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
                <span>english</span>
                <Globe size={12} />
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="flex justify-center items-center gap-16">
            {navItems.map((item) => (
              <div 
                key={item.id} 
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setIsProductMenuOpen(true)}
              >
                <button
                  onClick={() => {
                    if (item.id === 'products') {
                      setActiveSection('products');
                      setSelectedCategory('all');
                      setSelectedSubCategory('none');
                      setIsProductMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      setActiveSection(item.id as any);
                      setIsProductMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`text-[11px] font-bold uppercase tracking-[0.4em] transition-all py-2 border-b-2 border-transparent ${
                    activeSection === item.id ? 'text-primary border-primary' : 'text-primary/40 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </nav>
        </div>
      </header>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isProductMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 pointer-events-none"
          >
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="bg-surfaceDark text-textLight pt-[220px] pb-24 shadow-2xl pointer-events-auto"
              onMouseLeave={() => setIsProductMenuOpen(false)}
            >
              <div className="max-w-[1600px] mx-auto px-20">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-20">
                  {Object.entries(CATEGORY_CONFIG).map(([key, config], idx) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.03 + 0.3 }}
                      className="flex flex-col gap-6"
                    >
                      <button
                        onClick={() => handleCategorySelect(key as Category)}
                        className="group flex items-center gap-6 hover:text-white transition-all text-left"
                      >
                        <div className="text-white/20 group-hover:text-white transition-all duration-500 scale-90 group-hover:scale-110">
                          {React.cloneElement(config.icon as React.ReactElement<any>, { size: 40, strokeWidth: 0.5 })}
                        </div>
                        <span className="text-[13px] font-bold uppercase tracking-[0.3em]">
                          {config.label}
                        </span>
                      </button>

                      {config.subCategories && (
                        <div className="pl-[72px] flex flex-col gap-4 border-l border-white/5">
                          {config.subCategories.map((sub) => (
                            <button
                              key={sub.id}
                              onClick={() => handleCategorySelect(key as Category, sub.id as SubCategory)}
                              className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors text-left flex items-center gap-2 group"
                            >
                              <ChevronRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            <div className="h-full w-full bg-black/40 backdrop-blur-sm pointer-events-auto" onClick={() => setIsProductMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative">
        
        {/* HOME / HERO SECTION */}
        {activeSection === 'home' && (
          <div className="relative overflow-hidden pt-[120px]">
             <AnimatePresence mode="wait">
              <motion.div
                key={currentHeroSlide}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="relative w-full"
              >
                <img src={HERO_SLIDES[currentHeroSlide].image} className="w-full h-auto object-contain" alt="Hero" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-10">
                  <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    className="max-w-5xl"
                  >
                    <h1 className="text-8xl md:text-[10rem] font-serif font-bold text-white tracking-tighter leading-[0.9] mb-8">
                      {HERO_SLIDES[currentHeroSlide].title}
                    </h1>
                    <p className="text-[11px] font-bold uppercase tracking-[0.8em] text-white/70">
                      {HERO_SLIDES[currentHeroSlide].subtitle}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Slide Navigation Dots */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4">
              {HERO_SLIDES.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentHeroSlide(idx)}
                  className={`w-1 h-10 transition-all duration-500 ${currentHeroSlide === idx ? 'bg-white h-16' : 'bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* PRODUCTS LISTING */}
        {activeSection === 'products' && (
          <div className="pt-[260px] max-w-[1600px] mx-auto px-12 pb-40">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-32"
            >
              <h2 className="text-[8rem] font-serif font-bold leading-none tracking-tighter opacity-10 select-none mb-[-4rem] uppercase">
                {selectedCategory === 'all' ? 'Collection' : CATEGORY_CONFIG[selectedCategory].label}
              </h2>
              <div className="pl-10">
                <h3 className="text-6xl font-serif italic text-primary capitalize mb-6">
                  {selectedCategory === 'all' ? 'The Full Collection' : 
                   selectedSubCategory !== 'none' ? 
                   `${CATEGORY_CONFIG[selectedCategory].subCategories?.find(s => s.id === selectedSubCategory)?.label}` : 
                   CATEGORY_CONFIG[selectedCategory].label}
                </h3>
                <div className="flex gap-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/40">
                    Precision Craftsmanship
                  </p>
                  {selectedCategory !== 'all' && (
                    <button 
                      onClick={() => {setSelectedCategory('all'); setSelectedSubCategory('none');}}
                      className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary underline"
                    >
                      Clear Filter
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-24"
            >
              {displayProducts.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
              {displayProducts.length === 0 && (
                <div className="col-span-full py-20 text-center opacity-40 italic">
                  No products currently in this collection.
                </div>
              )}
            </motion.div>
          </div>
        )}

        {/* GALLERY SECTION */}
        {activeSection === 'gallery' && (
          <div className="pt-[260px] pb-40">
             <div className="max-w-[1600px] mx-auto px-12 mb-32">
                <motion.h2 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-9xl font-serif font-bold tracking-tighter mb-12"
                >
                  Gallery
                </motion.h2>
                <div className="h-px w-32 bg-primary" />
             </div>

             <div className="space-y-40">
                {GALLERY_PROJECTS.map((project, idx) => (
                  <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'md:items-end' : ''}`}>
                    <div className="max-w-7xl px-12 w-full">
                      <ProjectCard project={project} index={idx} />
                    </div>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* ABOUT SECTION */}
        {activeSection === 'about' && (
          <div className="pt-[260px] pb-40 max-w-[1200px] mx-auto px-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-32"
            >
              <div className="space-y-20">
                <h2 className="text-8xl font-serif font-bold tracking-tighter leading-[0.9]">
                  Rooted in Craft. <br />Sustained by Purpose.
                </h2>
                <p className="text-lg font-light leading-relaxed opacity-70 max-w-2xl">
                  The Bodhi tree stands as a symbol of enlightenment, wisdom, and timeless strength. At Bodhitree Designers, we embrace these principles—creating furniture that transcends fleeting trends and becomes a lasting testament to thoughtful design. Each piece embodies the perfect balance between artistic vision and functional excellence, transforming spaces into sanctuaries of refined living.
                </p>
              </div>

              {/* Statistics Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-20 border-t border-b border-primary/10">
                <div className="space-y-3">
                  <h3 className="text-5xl font-serif font-bold text-primary">1000+</h3>
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-50">Designs Created</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-5xl font-serif font-bold text-primary">50</h3>
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-50">International Projects</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-5xl font-serif font-bold text-primary">800+</h3>
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-50">Satisfied Clients</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-5xl font-serif font-bold text-primary">100%</h3>
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-50">Craftsmanship Guarantee</p>
                </div>
              </div>

              <div className="space-y-12">
                <h3 className="text-3xl font-serif font-bold">Our Philosophy</h3>
                <p className="text-lg font-light leading-relaxed opacity-70">
                  We believe that furniture is not merely functional—it is a conversation between space, form, and the human experience. Inspired by the timeless wisdom of the Bodhi tree, we design with intention, craft with precision, and deliver with integrity. Every element is carefully considered, every material sustainably sourced, and every creation imbued with the spirit of lasting beauty.
                </p>
              </div>

              <div className="w-full bg-surfaceDark rounded-lg overflow-hidden">
                <img src={assetUrl('about us/ROYAL.png')} className="w-full h-auto object-contain" alt="Bodhitree Design Heritage" />
              </div>
            </motion.div>
          </div>
        )}

        {/* CONTACT SECTION */}
        {activeSection === 'contact' && (
          <div className="pt-[260px] pb-40 max-w-[1600px] mx-auto px-12">
            <div className="grid md:grid-cols-2 gap-32">
               <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} className="space-y-16">
                  <h2 className="text-9xl font-serif font-bold tracking-tighter">Reach.</h2>
                  
                  {/* Manufacturing Unit */}
                  <div className="space-y-8">
                    <div className="flex gap-6 items-start">
                      <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-5 flex-shrink-0 mt-1 hover:border-primary/60 transition-all duration-300">
                        <MapPin size={28} className="text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">Manufacturing Unit</h3>
                        <p className="text-base font-light opacity-70 leading-relaxed">#8, 6th Cross,<br/>Kaval Bayasandara, RT Nagar,<br/>Bangalore 560032</p>
                      </div>
                    </div>
                    
                    {/* Phone */}
                    <div className="flex gap-6 items-start">
                      <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-5 flex-shrink-0 mt-1 hover:border-primary/60 transition-all duration-300">
                        <Phone size={28} className="text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">Phone</h3>
                        <p className="text-base font-light opacity-70"><a href="tel:+919886877178" className="hover:text-primary hover:opacity-100 transition-all">+91 9353370699</a></p>
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="flex gap-6 items-start">
                      <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-5 flex-shrink-0 mt-1 hover:border-primary/60 transition-all duration-300">
                        <Mail size={28} className="text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">Email</h3>
                        <p className="text-base font-light opacity-70"><a href="mailto:info@bodhitree.com" className="hover:text-primary hover:opacity-100 transition-all">info@bodhitreedf.com</a></p>
                      </div>
                    </div>
                  </div>
               </motion.div>

               <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} className="bg-surfaceDark p-20 text-white rounded-2xl border border-white/10 shadow-xl">
                  <form className="space-y-10" onSubmit={submitContact}>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-[0.5em] text-white/50 mb-6">Inquiry Details</label>
                    </div>

                    <div className="group border-b-2 border-white/10 focus-within:border-primary transition-all duration-300 py-4 hover:border-white/30">
                      <label className="block text-[9px] font-bold uppercase tracking-[0.5em] text-white/40 group-focus-within:text-white mb-2">Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-transparent border-none text-lg outline-none placeholder-white/30"
                      />
                      {contactErrors.name && (<p className="mt-2 text-sm text-red-400">{contactErrors.name}</p>)}
                    </div>

                    <div className="group border-b-2 border-white/10 focus-within:border-primary transition-all duration-300 py-4 hover:border-white/30">
                      <label className="block text-[9px] font-bold uppercase tracking-[0.5em] text-white/40 group-focus-within:text-white mb-2">Email</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-transparent border-none text-lg outline-none placeholder-white/30"
                      />
                      {contactErrors.email && (<p className="mt-2 text-sm text-red-400">{contactErrors.email}</p>)}
                    </div>

                    <div className="group border-b-2 border-white/10 focus-within:border-primary transition-all duration-300 py-4 hover:border-white/30">
                      <label className="block text-[9px] font-bold uppercase tracking-[0.5em] text-white/40 group-focus-within:text-white mb-2">Phone</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full bg-transparent border-none text-lg outline-none placeholder-white/30"
                      />
                      {contactErrors.phone && (<p className="mt-2 text-sm text-red-400">{contactErrors.phone}</p>)}
                    </div>

                    <div className="group border-b-2 border-white/10 focus-within:border-primary transition-all duration-300 py-4 hover:border-white/30">
                      <label className="block text-[9px] font-bold uppercase tracking-[0.5em] text-white/40 group-focus-within:text-white mb-2">Inquiry</label>
                      <textarea
                        rows={5}
                        placeholder="..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full bg-transparent border-none text-lg outline-none resize-none placeholder-white/30"
                      />
                      {contactErrors.message && (<p className="mt-2 text-sm text-red-400">{contactErrors.message}</p>)}
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={contactStatus !== 'idle'}
                        className={`flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.5em] py-4 px-8 w-full justify-center rounded-lg shadow-lg transition-all duration-300 ${contactStatus === 'idle' ? 'bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary hover:shadow-xl hover:scale-[1.02]' : 'bg-white/10 text-white cursor-not-allowed'}`}
                      >
                        {contactStatus === 'sending' ? 'Sending...' : contactStatus === 'sent' ? 'Sent' : 'Submit'} <ArrowUpRight size={18} />
                      </button>
                      {contactStatus === 'sent' && (
                        <p className="mt-4 text-center text-sm text-white/70">Thank you. We’ll get back to you shortly.</p>
                      )}
                    </div>
                  </form>
               </motion.div>
            </div>
          </div>
        )}

        {/* SERVICES SECTION */}
        {activeSection === 'services' && (
          <div className="pt-[220px] pb-32 bg-gradient-to-b from-background to-surfaceLight/40">
            <div className="max-w-[1400px] mx-auto px-12 space-y-16">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary/60">What we deliver</p>
                <h2 className="text-7xl font-serif font-bold tracking-tighter">Services.</h2>
                <p className="text-lg font-light opacity-70 max-w-3xl">
                  End-to-end support for designers, architects, and clients—from concept to installation. Precision craftsmanship, reliable timelines, and seamless coordination.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {[
                  {
                    title: 'Custom Furniture',
                    detail: 'We design and build pieces that fit your space perfectly—size, finish, and materials your way.',
                    tag: 'Bespoke',
                    icon: <Hammer size={24} />,
                    theme: 'from-amber-500/15 to-white/60',
                    iconBg: 'bg-amber-500/15 text-amber-600'
                  },
                  {
                    title: 'Turnkey Fit-Outs',
                    detail: 'We handle layout, build, and installation for full spaces—so you get a ready-to-use interior.',
                    tag: 'End-to-end',
                    icon: <Layout size={24} />,
                    theme: 'from-blue-500/15 to-white/60',
                    iconBg: 'bg-blue-500/15 text-blue-600'
                  },
                  {
                    title: 'Design Collaboration',
                    detail: 'Sit with our designers for samples, mockups, and detailing—we refine it together until it’s right.',
                    tag: 'Collab',
                    icon: <Ruler size={24} />,
                    theme: 'from-purple-500/15 to-white/60',
                    iconBg: 'bg-purple-500/15 text-purple-600'
                  },
                  {
                    title: 'Web Development',
                    detail: 'Full-stack web projects: brand sites, product catalogs, landing pages, hosting, and lightweight portals with responsive, fast, and secure builds.',
                    tag: 'Web',
                    icon: <Code size={24} />,
                    theme: 'from-sky-500/15 to-white/60',
                    iconBg: 'bg-sky-500/15 text-sky-600'
                  },
                  {
                    title: 'Modular Install & Dismantle',
                    detail: 'On-site installation, reconfiguration, and dismantling of modular furniture with minimal downtime and clean exits.',
                    tag: 'Install',
                    icon: <Wrench size={24} />,
                    theme: 'from-emerald-500/15 to-white/60',
                    iconBg: 'bg-emerald-500/15 text-emerald-600'
                  },
                  {
                    title: 'Custom Design & Manufacturing',
                    detail: 'Tailor-made furniture solutions designed specifically for your space and requirements.',
                    tag: 'Design',
                    icon: <Box size={24} />,
                    theme: 'from-orange-500/15 to-white/60',
                    iconBg: 'bg-orange-500/15 text-orange-600'
                  },
                  {
                    title: 'Interior Consultation',
                    detail: 'Professional interior design advice to help you create the perfect space.',
                    tag: 'Consult',
                    icon: <HomeIcon size={24} />,
                    theme: 'from-rose-500/15 to-white/60',
                    iconBg: 'bg-rose-500/15 text-rose-600'
                  },
                  {
                    title: 'Space Planning',
                    detail: 'Optimize layouts for maximum functionality and aesthetics across your spaces.',
                    tag: 'Plan',
                    icon: <Layout size={24} />,
                    theme: 'from-indigo-500/15 to-white/60',
                    iconBg: 'bg-indigo-500/15 text-indigo-600'
                  },
                  {
                    title: 'Installation & Setup',
                    detail: 'Professional installation and setup services for all our furniture pieces.',
                    tag: 'Setup',
                    icon: <Wrench size={24} />,
                    theme: 'from-lime-500/15 to-white/60',
                    iconBg: 'bg-lime-500/15 text-lime-700'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx }}
                    className={`relative overflow-hidden rounded-2xl border border-primary/10 bg-white/60 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.theme}`} />
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                    <div className="relative space-y-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.iconBg}`}>
                        {item.icon}
                      </div>
                      <span className="inline-flex text-[10px] font-bold uppercase tracking-[0.4em] bg-primary/10 text-primary px-3 py-1 rounded-full">{item.tag}</span>
                      <h3 className="text-2xl font-serif font-bold">{item.title}</h3>
                      <p className="text-sm font-light opacity-70 leading-relaxed">{item.detail}</p>
                      {item.tag === 'Web' && (
                        <div className="space-y-1 text-[12px] font-semibold text-primary/80 pt-2">
                          <p>Call: 8197408904</p>
                          <p>Call: 9353370699</p>
                          <p>Email: cyberwebdev655@gmail.com</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-6">
                <div className="space-y-2 text-sm font-light opacity-70 max-w-2xl">
                  <p>Need specs, lead times, a web project estimate, or a custom build? Share your requirements and our team will respond within one business day.</p>
                </div>
                <button
                  onClick={() => {
                    setActiveSection('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-3 px-10 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-500 font-bold uppercase tracking-wider text-[11px]"
                >
                  Talk to Us
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* DOWNLOADS SECTION */}
        {activeSection === 'downloads' && (
          <div className="pt-[260px] pb-40 bg-gradient-to-b from-background to-surfaceDark/20">
            <div className="max-w-[1600px] mx-auto px-12">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="space-y-24">
                <div className="space-y-6 text-center max-w-3xl mx-auto">
                  <h1 className="text-9xl font-serif font-bold tracking-tighter">Downloads.</h1>
                  <p className="text-lg font-light opacity-70">
                    Access our comprehensive catalogs, technical specifications, and design portfolios. Download resources to explore every detail of our collections.
                  </p>
                </div>

                {/* Horizontal Download Cards */}
                <div className="space-y-12">
                  {[
                    {
                      title: 'Company Catalog',
                      subtitle: '2025 EDITION',
                      description: 'Complete product collection featuring all our designs, dimensions, and detailed specifications for every furniture piece.',
                      file: 'catalogs/company-catalog.pdf',
                      size: '8.4 MB',
                      image: '/about us/ROYAL.png',
                      accent: 'from-blue-500/20',
                      base: 'bg-blue-50/60'
                    },
                    {
                      title: 'Materials Guide',
                      subtitle: 'TECHNICAL SPECIFICATIONS',
                      description: 'Comprehensive guide covering sustainable materials, finishes, durability standards, and care instructions for all our furniture.',
                      file: 'catalogs/materials-guide.pdf',
                      size: '6.2 MB',
                      image: '/about us/ROYAL.png',
                      accent: 'from-amber-500/20',
                      base: 'bg-amber-50/60'
                    },
                    {
                      title: 'Design Portfolio',
                      subtitle: 'AWARD-WINNING PROJECTS',
                      description: 'Showcase of our international design projects, installations, and creative approach to contemporary furniture design.',
                      file: 'catalogs/design-portfolio.pdf',
                      size: '12.8 MB',
                      image: '/about us/ROYAL.png',
                      accent: 'from-purple-500/20',
                      base: 'bg-purple-50/60'
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.15 }}
                      className="group relative"
                    >
                      <div className={`relative rounded-xl p-12 border border-primary/15 hover:border-primary/30 transition-all duration-700 shadow-lg hover:shadow-2xl bg-gradient-to-r ${item.accent} to-surfaceLight/80 hover:to-surfaceLight ${item.base || ''}`}>
                        {/* Background accent */}
                        <div className="absolute -right-32 -top-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700" />
                        
                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                        {/* Left Content */}
                        <div className="flex-1 space-y-6">
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-2">{item.subtitle}</p>
                            <h3 className="text-4xl font-serif font-bold tracking-tight">{item.title}</h3>
                          </div>
                          <p className="text-base font-light opacity-70 leading-relaxed max-w-xl">
                            {item.description}
                          </p>
                          <div className="flex items-center gap-8 pt-4">
                            <span className="text-[12px] font-bold uppercase tracking-[0.3em] opacity-50">PDF FORMAT</span>
                            <span className="text-[12px] font-bold uppercase tracking-[0.3em] opacity-50">{item.size}</span>
                          </div>
                        </div>

                        {/* Right Button */}
                        <div className="flex flex-col items-center gap-6">
                          <a
                            href={item.file}
                            download={item.file.split('/').pop()}
                            className="group/btn px-12 py-5 bg-primary text-white font-bold uppercase tracking-wider text-[11px] hover:bg-primary/90 transition-all duration-500 hover:scale-105 active:scale-95 whitespace-nowrap flex items-center gap-3"
                          >
                            <Download size={20} className="group-hover/btn:translate-y-1 transition-transform" />
                            Download
                          </a>
                          <span className="text-[10px] opacity-40 uppercase tracking-widest">Click to download</span>
                        </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 pt-16 border-t border-primary/10">
                  <div className="text-center space-y-8">
                    <h3 className="text-4xl font-serif font-bold">Need More Information?</h3>
                    <p className="text-lg font-light opacity-70 max-w-2xl mx-auto">
                      Contact our team for custom catalogs, volume pricing, technical consultations, or material samples.
                    </p>
                    <button
                      onClick={() => {
                        setActiveSection('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-3 px-10 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-500 font-bold uppercase tracking-wider text-[11px]"
                    >
                      Get In Touch
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

      </main>

      {/* Modern Minimalist Footer */}
      <footer className="bg-surfaceDark text-white py-32 mt-40">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="grid md:grid-cols-4 gap-24 mb-32">
             <div className="col-span-2">
                <div className="mb-10">
                  <Logo light />
                </div>
                <p className="max-w-md text-sm font-light leading-relaxed opacity-40">
                  Manufacturer of premium architectural furniture. Defining commercial and residential environments through structural purity and bespoke craftsmanship.
                </p>
             </div>
             <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-30 mb-10">navigation</h4>
                <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest opacity-60">
                   {navItems.map(item => (
                     <li key={item.id}><button className="hover:opacity-100 hover:translate-x-1 transition-all" onClick={() => setActiveSection(item.id as any)}>{item.label}</button></li>
                   ))}
                </ul>
             </div>
             <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-30 mb-10">follow</h4>
                <div className="flex gap-8 opacity-40">
                  <Instagram size={24} className="hover:opacity-100 cursor-pointer" />
                  <Facebook size={24} className="hover:opacity-100 cursor-pointer" />
                  <Linkedin size={24} className="hover:opacity-100 cursor-pointer" />
                </div>
             </div>
          </div>
          
          {/* Privacy policy block removed per request */}

            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-bold uppercase tracking-[0.5em] opacity-20">
            <span>© 2025 BODHITREE DESIGNER'S FURNITURE. ALL RIGHTS RESERVED.</span>
            <div className="flex gap-12">
              <button onClick={() => setShowPrivacy(true)} className="hover:opacity-60 transition-opacity">privacy policy</button>
              <button onClick={() => setShowTerms(true)} className="hover:opacity-60 transition-opacity">terms of sale</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPrivacy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/30 backdrop-blur-sm px-4"
            onClick={() => setShowPrivacy(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="max-w-2xl w-full bg-white text-black rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-black/5 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-8 py-6 border-b border-slate-200">
                <h3 className="text-xl font-serif font-bold text-slate-900">Privacy Policy</h3>
                <button onClick={() => setShowPrivacy(false)} className="text-sm uppercase tracking-[0.2em] text-slate-600 hover:text-slate-800">Close</button>
              </div>
              <div className="px-8 py-6 space-y-4 text-base leading-relaxed text-slate-800">
                <p className="font-medium text-slate-900"><span className="font-semibold">What we collect:</span> name, email, phone and your message when you contact us.</p>
                <p><span className="font-semibold text-slate-900">How we use it:</span> to respond to inquiries, provide quotes, and manage projects. We do not sell your data.</p>
                <p><span className="font-semibold text-slate-900">Sharing:</span> messages are delivered via our email provider (EmailJS) solely for sending your request to us.</p>
                <p><span className="font-semibold text-slate-900">Retention:</span> we keep information only as long as needed for these purposes, then delete it.</p>
                <p><span className="font-semibold text-slate-900">Your choices:</span> request access, correction, or deletion anytime at <a className="text-primary hover:underline" href="mailto:info@bodhitreedf.com">info@bodhitreedf.com</a>.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terms of Sale Modal */}
      <AnimatePresence>
        {showTerms && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/30 backdrop-blur-sm px-4"
            onClick={() => setShowTerms(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="max-w-2xl w-full bg-white text-black rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-black/5 overflow-hidden max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-8 py-6 border-b border-slate-200 sticky top-0 bg-white z-10">
                <h3 className="text-xl font-serif font-bold text-slate-900">Terms of Sale</h3>
                <button onClick={() => setShowTerms(false)} className="text-sm uppercase tracking-[0.2em] text-slate-600 hover:text-slate-800">Close</button>
              </div>
              <div className="px-8 py-6 space-y-5 text-base leading-relaxed text-slate-800">
                <div>
                  <p className="font-semibold text-slate-900 mb-2">1. Product Description</p>
                  <p>All furniture products are as described and shown in our catalogs and website. We provide detailed specifications, dimensions, and materials for each item.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">2. Pricing & Payment</p>
                  <p>Prices are in INR unless stated otherwise. Quotes are valid for 30 days. We accept bank transfers, credit cards, and digital payments. Payment must be received before production or delivery.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">3. Customization & Lead Time</p>
                  <p>Custom furniture requires 4–8 weeks depending on complexity. Any design changes after confirmation may incur additional costs. Timelines are estimated and not guaranteed.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">4. Delivery & Installation</p>
                  <p>Delivery is arranged upon final payment. Installation is available for an additional fee. Customer is responsible for site access and any structural requirements.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">5. Returns & Warranty</p>
                  <p>Defective items may be replaced or refunded within 7 days of delivery. Custom orders are non-refundable unless defective. We provide a 1-year warranty against manufacturing defects.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">6. Liability</p>
                  <p>Bodhitree Designers Furniture LLP is not liable for indirect or consequential damages. Our liability is limited to the purchase price of the item.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">7. Governing Law</p>
                  <p>These terms are governed by the laws of India. Any disputes shall be resolved through mutual negotiation or legal proceedings in the appropriate jurisdiction.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">8. Contact</p>
                  <p>For questions, contact us at <a className="text-primary hover:underline" href="mailto:info@bodhitreedf.com">info@bodhitreedf.com</a> or call <a className="text-primary hover:underline" href="tel:+918197408904">+91 8197408904</a>.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {activeSection !== 'home' && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-12 right-12 z-[100] w-12 h-12 bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform"
        >
          <ArrowUpRight size={20} className="-rotate-45" />
        </button>
      )}

    </div>
  );
};

export default App;
