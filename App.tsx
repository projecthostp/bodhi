
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
  Mail
} from 'lucide-react';
import { PRODUCTS_DATA, CATEGORY_CONFIG, HERO_SLIDES, GALLERY_PROJECTS, ALL_COLLECTION_PRODUCTS } from './constants';
import { ProductCard } from './components/ProductCard';
import { ProjectCard } from './components/ProjectCard';
import { Category, SubCategory } from './types';

const Logo = ({ light = false }: { light?: boolean }) => (
  <div className="flex items-center gap-4 group cursor-pointer">
    {/* The Square BT Logo Mark - Using uploaded logo */}
    <img src="/logo/umesh.jpeg" alt="Bodhitree Logo" className="w-12 h-12 transition-transform duration-700 group-hover:rotate-12 object-contain" />
    
    <div className="flex flex-col justify-center">
      <div className="flex items-center leading-none">
        <span className={`font-serif text-2xl font-light tracking-tighter ${light ? 'text-white' : 'text-primary'} group-hover:italic transition-all`}>bodhi</span>
        <span className={`font-serif text-2xl font-bold tracking-tighter ${light ? 'text-white' : 'text-primary'}`}>tree</span>
      </div>
      <span className={`text-[7px] uppercase font-bold tracking-[0.5em] mt-1.5 ${light ? 'text-white/40' : 'text-primary/40'}`}>
        designers furniture
      </span>
    </div>
  </div>
);

const App = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'products' | 'gallery' | 'about' | 'contact'>('home');
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory>('none');
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
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

  const submitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateContact()) return;
    setContactStatus('sending');
    setTimeout(() => {
      setContactStatus('sent');
    }, 1200);
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
                <img src="/about us/ROYAL.png" className="w-full h-auto object-contain" alt="Bodhitree Design Heritage" />
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
                        <p className="text-base font-light opacity-70 leading-relaxed">#8, 5th Cross, Muninagappa Layout,<br/>Kaval Bayasandara, RT Nagar,<br/>Bangalore 560032</p>
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
                        <p className="text-base font-light opacity-70"><a href="mailto:info@bodhitree.com" className="hover:text-primary hover:opacity-100 transition-all">umeshchintu6279@gmail.com</a></p>
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
          
          <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-bold uppercase tracking-[0.5em] opacity-20">
            <span>© 2025 BODHITREE DESIGNERS FURNITURE. ALL RIGHTS RESERVED.</span>
            <div className="flex gap-12">
              <span>privacy policy</span>
              <span>terms of sale</span>
            </div>
          </div>
        </div>
      </footer>

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
