import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, BookOpen, User, Users, ShoppingCart, Search, Menu, X, 
  ChevronDown, Globe, LogIn, LayoutDashboard, Heart,
  Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin,
  Plus, Trash2, Edit2, CheckCircle2, TrendingUp, Settings
} from 'lucide-react';
import { 
  Book 
} from './constants';
import logoImage from './logo.jpeg';

// --- Types ---
type Language = 'en' | 'hi';
type View = 'home' | 'bed' | 'deled' | 'admin' | 'login' | 'cart' | 'about' | 'contact' | 'terms' | 'privacy' | 'refund' | 'cookie';

// --- Components ---

const Navbar = ({ 
  currentView, 
  setView, 
  lang, 
  setLang, 
  user, 
  cartCount 
}: { 
  currentView: View, 
  setView: (v: View) => void, 
  lang: Language, 
  setLang: (l: Language) => void,
  user: any,
  cartCount: number
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBEdOpen, setIsBEdOpen] = useState(false);
  const [isDElEdOpen, setIsDElEdOpen] = useState(false);

  const t = {
    en: {
      home: 'Home',
      bed: 'B.Ed Books',
      deled: 'D.El.Ed Books',
      admin: 'Admin',
      login: 'Login',
      about: 'About Us',
      contact: 'Contact',
      theory: 'Theory Books',
      practical: 'Practical Books'
    },
    hi: {
      home: 'होम',
      bed: 'बी.एड. पुस्तकें',
      deled: 'डी.एल.एड. पुस्तकें',
      admin: 'एडमिन',
      login: 'लॉगिन',
      about: 'हमारे बारे में',
      contact: 'संपर्क',
      theory: 'सैद्धांतिक पुस्तकें',
      practical: 'प्रायोगिक पुस्तकें'
    }
  };

  return (
    <nav className="relative top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-full bg-brand-dark/80 backdrop-blur-2xl border border-white/10 border-b-4 border-b-pink-500 rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-40 md:h-48">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => setView('home')}>
      <motion.div 
        whileHover={{ rotateY: 15, rotateX: -15, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center mr-4 p-1 shadow-lg shadow-pink-500/20 overflow-hidden border-4 border-pink-500"
      >
        <img 
          src={logoImage} 
          alt="Adarsh Publication Logo" 
          className="w-full h-full rounded-full object-cover" 
        />
      </motion.div>
      
      <div>
        <h1 className="text-3xl md:text-5xl font-black text-white">ADARSH</h1>
        <p className="text-xs md:text-sm font-bold text-pink-500 tracking-widest uppercase">Research & Publication</p>
      </div>
    </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-12">
            <button onClick={() => setView('home')} className={`text-base uppercase tracking-widest font-bold transition-colors ${currentView === 'home' ? 'text-pink-500' : 'text-white hover:text-pink-500'}`}>
              {t[lang].home}
            </button>
            
            {/* B.Ed Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center text-base uppercase tracking-widest font-bold transition-colors ${currentView === 'bed' ? 'text-pink-500' : 'text-white hover:text-pink-500'}`}
                onMouseEnter={() => setIsBEdOpen(true)}
                onMouseLeave={() => setIsBEdOpen(false)}
              >
                {t[lang].bed} <ChevronDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {isBEdOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 py-4 glass-card mt-2 border-t-4 border-pink-500"
                    onMouseEnter={() => setIsBEdOpen(true)}
                    onMouseLeave={() => setIsBEdOpen(false)}
                  >
                    <button onClick={() => { setView('bed'); setIsBEdOpen(false); }} className="w-full text-left px-8 py-4 hover:bg-pink-500/10 hover:text-pink-500 transition-colors text-sm font-bold">{t[lang].theory}</button>
                    <button onClick={() => { setView('bed'); setIsBEdOpen(false); }} className="w-full text-left px-8 py-4 hover:bg-pink-500/10 hover:text-pink-500 transition-colors text-sm font-bold">{t[lang].practical}</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* D.El.Ed Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center text-base uppercase tracking-widest font-bold transition-colors ${currentView === 'deled' ? 'text-pink-500' : 'text-white hover:text-pink-500'}`}
                onMouseEnter={() => setIsDElEdOpen(true)}
                onMouseLeave={() => setIsDElEdOpen(false)}
              >
                {t[lang].deled} <ChevronDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {isDElEdOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 py-4 glass-card mt-2 border-t-4 border-pink-500"
                    onMouseEnter={() => setIsDElEdOpen(true)}
                    onMouseLeave={() => setIsDElEdOpen(false)}
                  >
                    <button onClick={() => { setView('deled'); setIsDElEdOpen(false); }} className="w-full text-left px-8 py-4 hover:bg-pink-500/10 hover:text-pink-500 transition-colors text-sm font-bold">{t[lang].theory}</button>
                    <button onClick={() => { setView('deled'); setIsDElEdOpen(false); }} className="w-full text-left px-8 py-4 hover:bg-pink-500/10 hover:text-pink-500 transition-colors text-sm font-bold">{t[lang].practical}</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {user?.role === 'admin' && (
              <button onClick={() => setView('admin')} className={`text-base uppercase tracking-widest font-bold transition-colors ${currentView === 'admin' ? 'text-pink-500' : 'text-white hover:text-pink-500'}`}>
                {t[lang].admin}
              </button>
            )}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="px-6 py-3 hover:bg-pink-500/10 hover:text-pink-500 rounded-full transition-colors flex items-center text-sm font-black tracking-tighter border border-white/10"
            >
              <Globe size={18} className="mr-2 text-pink-500" /> {lang === 'en' ? 'हिन्दी' : 'ENGLISH'}
            </button>
            <button onClick={() => setView('cart')} className="p-4 hover:bg-pink-500/10 rounded-full transition-colors relative group">
              <ShoppingCart size={28} className="text-white group-hover:text-pink-500 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-pink-500 text-white text-[10px] w-6 h-6 rounded-full flex items-center justify-center font-bold animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
            {!user ? (
              <button onClick={() => setView('login')} className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-black text-sm transition-all flex items-center">
                <LogIn size={20} className="mr-2" /> {t[lang].login}
              </button>
            ) : (
              <button onClick={() => setView('admin')} className="w-16 h-16 rounded-full border-4 border-pink-500 p-1 hover:scale-110 transition-transform">
                <img src="https://picsum.photos/seed/admin/100/100" className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-accent-teal">
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 top-0 bg-brand-dark z-50 lg:hidden p-8 pt-32"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 p-2 text-accent-teal"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col space-y-6">
              <button onClick={() => { setView('home'); setIsMenuOpen(false); }} className="text-2xl font-black border-b border-white/10 pb-4">{t[lang].home}</button>
              <button onClick={() => { setView('bed'); setIsMenuOpen(false); }} className="text-2xl font-black border-b border-white/10 pb-4">{t[lang].bed}</button>
              <button onClick={() => { setView('deled'); setIsMenuOpen(false); }} className="text-2xl font-black border-b border-white/10 pb-4">{t[lang].deled}</button>
              <button onClick={() => { setLang(lang === 'en' ? 'hi' : 'en'); setIsMenuOpen(false); }} className="text-xl font-bold text-accent-teal">
                {lang === 'en' ? 'हिन्दी' : 'English'}
              </button>
              {!user ? (
                <button onClick={() => { setView('login'); setIsMenuOpen(false); }} className="btn-primary w-full py-4 text-xl">{t[lang].login}</button>
              ) : (
                <button onClick={() => { setView('admin'); setIsMenuOpen(false); }} className="btn-secondary w-full py-4 text-xl">{t[lang].admin}</button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
const TermsView = () => (
  <div className="max-w-4xl mx-auto py-12 px-4 text-white/80 leading-relaxed">
    <div className="glass-card p-8 md:p-12">
      <h1 className="text-3xl font-black mb-2 text-white">TERMS AND CONDITIONS</h1>
      <p className="text-sm text-pink-500 font-bold mb-8">Last Updated: 04/03/2026</p>

      <p className="mb-6">Welcome to Adarsh Research and Publication House. By accessing our website and purchasing our educational resources, you agree to be bound by the following Terms and Conditions. Please read them carefully.</p>

      <h2 className="text-xl font-bold text-accent-teal mt-8 mb-4">1. General Overview</h2>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>This website is operated by Adarsh Research and Publication House. Throughout the site, the terms "we", "us", and "our" refer to Adarsh Research and Publication House.</li>
        <li>By visiting our site or purchasing something from us, you engage in our "Service" and agree to be bound by these terms.</li>
        <li>These terms apply to all users of the site, including without limitation students, educators, authors, and casual browsers.</li>
      </ul>

      <h2 className="text-xl font-bold text-accent-teal mt-8 mb-4">2. Products and Pricing</h2>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Product Descriptions:</strong> We make every effort to display the colors, covers, and content of our B.Ed and D.El.Ed theory and practical books as accurately as possible.</li>
        <li><strong>Modifications:</strong> Prices for our books and materials are subject to change without notice.</li>
        <li><strong>Availability:</strong> All orders are subject to product availability.</li>
      </ul>

      <h2 className="text-xl font-bold text-accent-teal mt-8 mb-4">3. Payments and Billing</h2>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Accuracy:</strong> You agree to provide current, complete, and accurate purchase and account information.</li>
        <li><strong>Payment Methods:</strong> We accept payments via standard digital channels including UPI, Net Banking, Credit/Debit Cards, and Cash on Delivery.</li>
        <li><strong>Transaction Reference:</strong> For manual UPI payments, users must provide a valid 12-digit UTR/Transaction ID.</li>
      </ul>

      <h2 className="text-xl font-bold text-accent-teal mt-8 mb-4">4. Shipping and Delivery</h2>
      <p className="mb-6">Shipping timelines and costs will be calculated and displayed at checkout. We are not responsible for delays caused by third-party shipping carriers, natural disasters, or incorrect delivery addresses.</p>

      <h2 className="text-xl font-bold text-accent-teal mt-8 mb-4">5. Contact Information</h2>
      <p>Questions about the Terms and Conditions should be sent to us at:</p>
      <p className="font-bold text-white mt-2">Email: soe.bkt1980@gmail.com</p>
      <p className="font-bold text-white">Phone: +91 98765 43210</p>
    </div>
  </div>
);

const AboutView = () => (
  <div className="max-w-4xl mx-auto py-12 px-4 text-white/80 leading-relaxed">
    <div className="glass-card p-8 md:p-12">
      <h1 className="text-3xl font-black mb-6 text-white uppercase">About Adarsh Publication</h1>
      
      <p className="mb-6 text-lg">
        Welcome to <strong className="text-pink-500">Adarsh Research and Publication House</strong>, a premier educational publishing platform dedicated to shaping the future of teachers across India.
      </p>

      <h2 className="text-xl font-bold text-accent-teal mt-8 mb-4">Our Mission</h2>
      <p className="mb-6">
        Our mission is to provide high-quality, comprehensive, and accessible academic resources for B.Ed and D.El.Ed students. We believe that well-equipped teachers are the foundation of a strong educational system, and we strive to create materials that make complex concepts easy to understand and apply.
      </p>

      <h2 className="text-xl font-bold text-accent-teal mt-8 mb-4">What We Offer</h2>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Expert-Authored Content:</strong> Books written and reviewed by experienced educators and academic directors.</li>
        <li><strong>Comprehensive Coverage:</strong> Theory and practical books covering all semesters of B.Ed and D.El.Ed curriculums.</li>
        <li><strong>Practical Resources:</strong> Specialized manuals for micro-teaching, lesson planning, and action research.</li>
      </ul>

      <h2 className="text-xl font-bold text-accent-teal mt-8 mb-4">Our Leadership</h2>
      <p>
        Guided by the visionary leadership of our Chief Editor, Dr. Brijesh Kumar Tiwari, and our dedicated Directors, we continuously research and update our publications to align with the latest educational standards and pedagogical advancements.
      </p>
    </div>
  </div>
);

const ContactView = () => (
  <div className="max-w-4xl mx-auto py-12 px-4 text-white/80 leading-relaxed">
    <div className="glass-card p-8 md:p-12">
      <h1 className="text-3xl font-black mb-6 text-white uppercase">Contact Us</h1>
      
      <p className="mb-8">We are here to help! Whether you have a question about a book, need help with an order, or want to request a manual cancellation, please reach out to us using the details below.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <Phone className="text-pink-500 mb-4" size={32} />
          <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
          <p className="font-mono text-xl">+91 98765 43210</p>
          <p className="text-xs text-white/50 mt-2">Mon - Sat, 10:00 AM - 6:00 PM</p>
        </div>

        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <Mail className="text-accent-teal mb-4" size={32} />
          <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
          <p className="font-mono">soe.bkt1980@gmail.com</p>
          <p className="text-xs text-white/50 mt-2">We reply within 24 hours</p>
        </div>
      </div>

      <div className="bg-pink-500/10 border border-pink-500/30 p-6 rounded-2xl">
        <h3 className="text-lg font-bold text-pink-500 mb-2 flex items-center">
          <ShoppingCart className="mr-2" size={20} /> Need to Cancel an Order?
        </h3>
        <p className="text-sm">Because we process orders quickly, we do not have an automated cancellation button. If you placed an order by mistake, please <strong>call us immediately</strong> or send an email with your <strong>Order ID</strong>. Orders can only be cancelled before they are dispatched.</p>
      </div>
    </div>
  </div>
);

const CookieView = () => (
  <div className="max-w-4xl mx-auto py-12 px-4 text-white/80 leading-relaxed">
    <div className="glass-card p-8 md:p-12">
      <h1 className="text-3xl font-black mb-2 text-white uppercase">Cookie Policy</h1>
      <p className="text-sm text-pink-500 font-bold mb-8">Last Updated: 04/03/2026</p>

      <p className="mb-6">This Cookie Policy explains how Adarsh Research and Publication House uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>

      <h2 className="text-xl font-bold text-accent-teal mt-8 mb-4">1. What are cookies?</h2>
      <p className="mb-6">Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>

      <h2 className="text-xl font-bold text-accent-teal mt-8 mb-4">2. Why do we use cookies?</h2>
      <p className="mb-4">We use first-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate. We refer to these as "essential" or "strictly necessary" cookies. Specifically, we use them to:</p>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Remember the items you have placed in your Shopping Cart.</li>
        <li>Keep you logged securely into the Admin Panel.</li>
        <li>Remember your language preference (English/Hindi).</li>
      </ul>

      <h2 className="text-xl font-bold text-accent-teal mt-8 mb-4">3. Do we use tracking or advertising cookies?</h2>
      <p className="mb-6">Currently, we only use strictly necessary technical cookies to ensure the website functions correctly. We do not use third-party advertising cookies to track your browsing habits across other websites.</p>

      <h2 className="text-xl font-bold text-accent-teal mt-8 mb-4">4. How can I control cookies?</h2>
      <p className="mb-6">You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website (like the Shopping Cart) may be restricted.</p>
    </div>
  </div>
);

const PrivacyView = () => (
  <div className="max-w-4xl mx-auto py-12 px-4 text-white/80 leading-relaxed">
    <div className="glass-card p-8 md:p-12">
      <h1 className="text-3xl font-black mb-2 text-white">PRIVACY POLICY</h1>
      <p className="text-sm text-pink-500 font-bold mb-8">Last Updated: 04/03/2026</p>

      <p className="mb-6">Adarsh Research and Publication House ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information.</p>

      <h2 className="text-xl font-bold text-accent-teal mt-8 mb-4">1. Information We Collect</h2>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Personal Information:</strong> Your name, billing address, shipping address, email address, and phone number.</li>
        <li><strong>Payment Information:</strong> For UPI/Direct payments, we collect UTR/Transaction IDs. We do not store sensitive credit card details on our servers; these are handled securely by PhonePe.</li>
      </ul>

      <h2 className="text-xl font-bold text-accent-teal mt-8 mb-4">2. How We Use Your Information</h2>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Process your payments and arrange for shipping.</li>
        <li>Provide you with invoices and/or order confirmations.</li>
        <li>Communicate with you regarding your order status.</li>
      </ul>

      <h2 className="text-xl font-bold text-accent-teal mt-8 mb-4">3. Sharing Your Personal Information</h2>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Payment Gateways:</strong> Such as PhonePe, to process transactions securely.</li>
        <li><strong>Delivery Partners:</strong> Courier services to deliver physical books.</li>
        <li><strong>Legal Compliance:</strong> To comply with applicable Indian laws and regulations.</li>
      </ul>

      <h2 className="text-xl font-bold text-accent-teal mt-8 mb-4">4. Contact Us</h2>
      <p>For more information about our privacy practices, please contact us by e-mail at <strong>soe.bkt1980@gmail.com</strong> or by phone at <strong>+91 98765 43210</strong>.</p>
    </div>
  </div>
);
const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { title: 'Micro Teaching', img: 'https://picsum.photos/seed/micro/1200/500' },
    { title: 'Lesson Plan', img: 'https://picsum.photos/seed/lesson/1200/500' },
    { title: 'Action Research', img: 'https://picsum.photos/seed/action/1200/500' },
    { title: 'Psychological Test', img: 'https://picsum.photos/seed/psych/1200/500' },
    { title: 'Community Works', img: 'https://picsum.photos/seed/community/1200/500' },
    { title: 'School Diary', img: 'https://picsum.photos/seed/diary/1200/500' },
    { title: 'Educational Technology', img: 'https://picsum.photos/seed/tech/1200/500' },
    { title: 'Inclusive Education', img: 'https://picsum.photos/seed/inclusive/1200/500' },
    { title: 'Child Development', img: 'https://picsum.photos/seed/child/1200/500' },
    { title: 'Pedagogy of School Subject', img: 'https://picsum.photos/seed/pedagogy/1200/500' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl border-2 md:border-4 border-white/10 group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img 
            src={slides[currentIndex].img} 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-[80%] md:max-w-2xl">
            <motion.h3 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-2xl md:text-4xl font-black text-white tracking-tighter drop-shadow-2xl mb-1 md:mb-2 uppercase"
            >
              {slides[currentIndex].title}
            </motion.h3>
            <p className="text-accent-teal font-black text-xs md:text-lg tracking-widest uppercase opacity-80">
              ADARSH PRACTICAL BOOKS SERIES
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Indicators */}
      <div className="absolute bottom-4 right-6 md:bottom-6 md:right-10 flex space-x-2 md:space-x-3">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-10 bg-accent-teal' : 'w-2 bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

const GoverningBodies = ({ members }: { members: any[] }) => {
  return (
    <section className="py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="max-w-full mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4"
          >
            Our <span className="text-pink-500">Governing</span> Bodies
          </motion.h2>
          <p className="text-white/40 font-bold tracking-widest uppercase text-[10px] md:text-xs">The Visionaries Behind Adarsh Publication</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {members.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
              viewport={{ once: true }}
              className="glass-card p-6 md:p-10 text-center group card-3d relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${member.color}`}></div>
              <div className="relative mb-8">
                <motion.div 
                  whileHover={{ rotateY: 20, rotateX: -10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className={`w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-br ${member.color} shadow-2xl cursor-pointer`}
                >
                  <img src={member.img} className="w-full h-full rounded-full object-cover border-4 border-brand-dark" referrerPolicy="no-referrer" />
                </motion.div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-brand-dark border border-white/10 px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase text-accent-teal">
                  Verified
                </div>
              </div>
              <h3 className="text-2xl font-black mb-3 tracking-tight group-hover:text-pink-500 transition-colors">{member.name}</h3>
              <p className={`font-black uppercase tracking-widest text-xs mb-6 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                {member.role}
              </p>
              <p className="text-sm text-white/50 leading-relaxed italic">"{member.bio}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { label: 'Books Published', value: '500+', icon: <BookOpen className="text-accent-pink" /> },
    { label: 'Happy Authors', value: '200+', icon: <Users className="text-accent-teal" /> },
    { label: 'Years Excellence', value: '15+', icon: <Globe className="text-accent-orange" /> },
    { label: 'Global Reach', value: '10+', icon: <MapPin className="text-accent-purple" /> },
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-12 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 glass-card flex items-center justify-center rounded-xl md:rounded-2xl shadow-lg">
              {stat.icon}
            </div>
            <p className="text-3xl md:text-4xl font-black mb-1 md:mb-2 tracking-tighter">{stat.value}</p>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white/30">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const QuickNav = ({ setView, setBedSubView, setDeledSubView }: any) => {
  return (
    <section className="max-w-full mx-auto px-4 md:px-8 lg:px-12 mb-8 md:mb-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <motion.button 
          whileHover={{ y: -5, scale: 1.02, borderColor: '#ec4899', color: '#ec4899' }}
          whileTap={{ scale: 0.98, backgroundColor: '#ec4899', color: '#ffffff' }}
          onClick={() => { setView('bed'); setBedSubView('theory'); }}
          className="glass-card p-4 md:p-8 text-center transition-all group border-white/20 card-3d text-white"
        >
          <div className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-6 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:text-pink-500 group-hover:bg-pink-500/10 transition-transform">
            <BookOpen size={24} className="md:w-8 md:h-8" />
          </div>
          <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.1em] md:tracking-[0.2em] block">B.Ed Theory</span>
        </motion.button>

        <motion.button 
          whileHover={{ y: -5, scale: 1.02, borderColor: '#ec4899', color: '#ec4899' }}
          whileTap={{ scale: 0.98, backgroundColor: '#ec4899', color: '#ffffff' }}
          onClick={() => { setView('bed'); setBedSubView('practical'); }}
          className="glass-card p-4 md:p-8 text-center transition-all group border-white/20 card-3d text-white"
        >
          <div className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-6 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:text-pink-500 group-hover:bg-pink-500/10 transition-transform">
            <LayoutDashboard size={24} className="md:w-8 md:h-8" />
          </div>
          <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.1em] md:tracking-[0.2em] block">B.Ed Practical</span>
        </motion.button>

        <motion.button 
          whileHover={{ y: -5, scale: 1.02, borderColor: '#ec4899', color: '#ec4899' }}
          whileTap={{ scale: 0.98, backgroundColor: '#ec4899', color: '#ffffff' }}
          onClick={() => { setView('deled'); setDeledSubView('theory'); }}
          className="glass-card p-4 md:p-8 text-center transition-all group border-white/20 card-3d text-white"
        >
          <div className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-6 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:text-pink-500 group-hover:bg-pink-500/10 transition-transform">
            <Users size={24} className="md:w-8 md:h-8" />
          </div>
          <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.1em] md:tracking-[0.2em] block">D.El.Ed Theory</span>
        </motion.button>

        <motion.button 
          whileHover={{ y: -5, scale: 1.02, borderColor: '#ec4899', color: '#ec4899' }}
          whileTap={{ scale: 0.98, backgroundColor: '#ec4899', color: '#ffffff' }}
          onClick={() => { setView('deled'); setDeledSubView('practical'); }}
          className="glass-card p-4 md:p-8 text-center transition-all group border-white/20 card-3d text-white"
        >
          <div className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-6 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:text-pink-500 group-hover:bg-pink-500/10 transition-transform">
            <Globe size={24} className="md:w-8 md:h-8" />
          </div>
          <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.1em] md:tracking-[0.2em] block">D.El.Ed Practical</span>
        </motion.button>
      </div>
    </section>
  );
};

const BookCard = ({ book, onAddToCart, onOrderNow }: { book: Book, onAddToCart: (b: Book) => void, onOrderNow: (b: Book) => void, key?: any }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card overflow-hidden flex flex-col h-full card-3d"
    >
      <div className="aspect-[3/4] bg-white/10 relative overflow-hidden group">
        <img 
          src={book.image || `https://picsum.photos/seed/${book.id}/400/600`} 
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
          <button 
            onClick={() => onAddToCart(book)}
            className="btn-primary scale-90 group-hover:scale-100 transition-transform w-32 py-2 text-xs"
          >
            Add to Cart
          </button>
          <button 
            onClick={() => onOrderNow(book)}
            className="bg-white text-brand-dark hover:bg-pink-500 hover:text-white px-4 py-2 rounded-full font-black text-[10px] scale-90 group-hover:scale-100 transition-transform w-32 uppercase tracking-widest"
          >
            Order Now
          </button>
        </div>
        {book.code && (
          <div className="absolute top-2 left-2 bg-brand-dark/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono tracking-wider">
            {book.code}
          </div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <span className="text-[10px] uppercase tracking-widest text-white/50">{book.semester || book.year || book.type}</span>
          <button className="text-white/30 hover:text-red-400 transition-colors">
            <Heart size={16} />
          </button>
        </div>
        <h3 className="text-sm font-semibold leading-tight mb-2 line-clamp-2">{book.title}</h3>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-lg font-bold">₹{book.price}</span>
          <button onClick={() => onAddToCart(book)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Notice we added { setView } here!
const Footer = ({ setView }: { setView: (v: View) => void }) => {
  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-pink/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center mr-3">
                <BookOpen className="text-brand-dark" size={18} />
              </div>
              <h2 className="text-lg font-bold tracking-tight">ADARSH</h2>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Dedicated to excellence in research and educational publishing. Providing high-quality resources for B.Ed and D.El.Ed students across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li><button onClick={() => setView('bed')} className="hover:text-white transition-colors">B.Ed Books</button></li>
              <li><button onClick={() => setView('deled')} className="hover:text-white transition-colors">D.El.Ed Books</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Support</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li><button onClick={() => setView('about')} className="hover:text-white transition-colors text-left">About Us</button></li>
              <li><button onClick={() => setView('contact')} className="hover:text-white transition-colors text-left">Contact Us</button></li>
              <li><button onClick={() => setView('privacy')} className="hover:text-white transition-colors text-left">Privacy Policy</button></li>
            </ul>
          </div>
          

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-0.5 flex-shrink-0" />
                <span>Jharkhand, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0" />
                <span>soe.bkt1980@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© 2026 Adarsh Research and Publication House. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => setView('terms')} className="hover:text-white transition-colors">Terms of Service</button>
            <button onClick={() => setView('cookie')} className="hover:text-white transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CheckoutView = ({ cart, onComplete, upiId }: { cart: Book[], onComplete: (data: any) => void, upiId: string }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', whatsapp: '', address: '', landmark: '',
    district: '', state: '', pincode: '', paymentMethod: '', subject: '',
    utr: '' // <--- Added UTR to state
  });

  const hasSpecialBooks = cart.some(item => 
    item.title.toLowerCase().includes('lesson plan') || 
    item.title.toLowerCase().includes('micro teaching')
  );

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (formData.paymentMethod === 'upi') {
        setStep(3);
      } else {
        onComplete(formData);
      }
    } else {
      // Validate UTR on final step
      if (formData.paymentMethod === 'upi' && formData.utr.length !== 12) {
        alert("Please enter a valid 12-digit UTR / Transaction ID.");
        return;
      }
      onComplete(formData);
    }
  };

  const upiString = `upi://pay?pa=${upiId}&pn=Adarsh%20Publication&am=${total}&cu=INR`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiString)}`;

  return (
    <div className="max-w-4xl mx-auto py-8 md:py-12 px-4">
      <div className="glass-card p-6 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12 gap-6">
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter">SECURE CHECKOUT</h2>
          <div className="flex items-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 1 ? 'vibrant-gradient' : 'bg-white/10'}`}>1</div>
            <div className="w-8 md:w-12 h-1 bg-white/10"></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 2 ? 'vibrant-gradient' : 'bg-white/10'}`}>2</div>
            <div className="w-8 md:w-12 h-1 bg-white/10"></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 3 ? 'vibrant-gradient' : 'bg-white/10'}`}>3</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Order Summary Column */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-6 text-accent-teal">Order Summary</h3>
            <div className="space-y-4 mb-8 max-h-[250px] md:max-h-[300px] overflow-y-auto pr-4">
              {cart.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-white/5">
                  <div className="flex items-center">
                    <div className="w-10 h-14 md:w-12 md:h-16 bg-white/10 rounded mr-3 md:mr-4 overflow-hidden">
                      <img src={item.image || `https://picsum.photos/seed/${item.id}/100/150`} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-bold line-clamp-1">{item.title}</p>
                      <p className="text-[9px] md:text-[10px] text-white/40 uppercase">{item.category}</p>
                    </div>
                  </div>
                  <span className="text-sm md:text-base font-bold">₹{item.price}</span>
                </div>
              ))}
            </div>
            <div className="p-4 md:p-6 bg-white/5 rounded-2xl">
              <div className="flex justify-between mb-2 text-white/60 text-sm md:text-base">
                <span>Subtotal</span><span>₹{total}</span>
              </div>
              <div className="flex justify-between mb-4 text-white/60 text-sm md:text-base">
                <span>Shipping</span><span className="text-accent-teal">FREE</span>
              </div>
              <div className="flex justify-between text-lg md:text-xl font-black border-t border-white/10 pt-4">
                <span>Total</span><span className="text-accent-orange">₹{total}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <>
                <h3 className="text-xl font-bold mb-6">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent-teal transition-colors" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  <input required type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent-teal transition-colors" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  <input required type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent-teal transition-colors" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  <input type="tel" placeholder="WhatsApp (Optional)" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent-teal transition-colors" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} />
                  <div className="md:col-span-2">
                    <textarea required placeholder="Full Delivery Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent-teal transition-colors h-32 resize-none" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
                  </div>
                  <input type="text" placeholder="Landmark" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent-teal transition-colors" value={formData.landmark} onChange={e => setFormData({...formData, landmark: e.target.value})} />
                  <input required type="text" placeholder="District" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent-teal transition-colors" value={formData.district} onChange={e => setFormData({...formData, district: e.target.value})} />
                  <input required type="text" placeholder="State" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent-teal transition-colors" value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})} />
                  <input required type="text" placeholder="PIN Code" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent-teal transition-colors" value={formData.pincode} onChange={e => setFormData({...formData, pincode: e.target.value})} />
                  {hasSpecialBooks && (
                    <div className="md:col-span-2">
                      <input required type="text" placeholder="Mention Subject (Required for Lesson Plan/Micro Teaching)" className="w-full bg-white/5 border border-accent-teal rounded-xl px-4 py-4 focus:border-green-500 outline-none transition-colors font-bold text-accent-teal" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} />
                    </div>
                  )}
                </div>
                <button type="submit" className="btn-primary w-full py-5 text-lg mt-8">CONTINUE TO PAYMENT</button>
              </>
            )}

            {step === 2 && (
              <>
                <h3 className="text-xl font-bold mb-6">Payment Method</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: 'upi', name: 'UPI / PhonePe', icon: '📱' },
                    { id: 'cod', name: 'Cash on Delivery', icon: '🚚' }
                  ].map(method => (
                    <button key={method.id} type="button" onClick={() => setFormData({...formData, paymentMethod: method.id})} className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center justify-center space-y-2 ${formData.paymentMethod === method.id ? 'border-accent-teal bg-accent-teal/10' : 'border-white/10 hover:border-white/30'}`}>
                      <span className="text-3xl">{method.icon}</span>
                      <span className="text-xs font-bold">{method.name}</span>
                    </button>
                  ))}
                </div>
                <div className="flex space-x-4 mt-8">
                  <button type="button" onClick={() => setStep(1)} className="btn-secondary flex-1">Back</button>
                  <button type="submit" disabled={!formData.paymentMethod} className="btn-primary flex-[2] disabled:opacity-50">Proceed</button>
                </div>
              </>
            )}

            {step === 3 && (
              <div className="text-center animate-in fade-in zoom-in duration-500">
                <h3 className="text-2xl font-black mb-2 text-accent-teal">Scan to Pay ₹{total}</h3>
                <p className="text-sm text-white/60 mb-8">Open any UPI app (GPay, PhonePe, Paytm) to scan this code.</p>
                
                <div className="w-64 h-64 mx-auto bg-white p-4 rounded-3xl mb-8 shadow-2xl shadow-accent-teal/20">
                  <img src={qrUrl} alt="UPI Payment QR Code" className="w-full h-full object-contain" />
                </div>
                <p className="text-xs text-white/40 mb-8 font-mono">Paying to UPI ID: {upiId || 'Not Configured'}</p>
                
                {/* --- THE NEW UTR INPUT FIELD --- */}
                <div className="mb-8 text-left">
                  <label className="block text-sm font-bold text-white/60 uppercase tracking-widest mb-2">Enter 12-Digit UTR / Ref. Number</label>
                  <input 
                    type="text" 
                    required 
                    maxLength={12}
                    value={formData.utr}
                    onChange={(e) => setFormData({...formData, utr: e.target.value.replace(/\D/g, '')})}
                    className="w-full bg-white/5 border border-pink-500 rounded-xl px-4 py-4 outline-none focus:border-white transition-colors text-center text-xl tracking-widest font-mono text-white"
                    placeholder="e.g. 312456789012"
                  />
                  <p className="text-[10px] text-white/40 mt-2 text-center">Found in your UPI app's payment history.</p>
                </div>

                <button type="submit" className="btn-primary w-full py-5 text-lg shadow-lg shadow-pink-500/50 flex items-center justify-center">
                  <CheckCircle2 className="mr-2" /> VERIFY PAYMENT & PLACE ORDER
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
// --- Main App ---

export default function App() {
  const [view, setView] = useState<View>('home');
  const [lang, setLang] = useState<Language>('hi');
  const [user, setUser] = useState<any>(null);
  const [cart, setCart] = useState<Book[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [bedSubView, setBedSubView] = useState<'theory' | 'practical' | null>(null);
  const [deledSubView, setDeledSubView] = useState<'theory' | 'practical' | null>(null);
  
  // Admin Tabs includes 'settings' now
  const [adminTab, setAdminTab] = useState<'orders' | 'books' | 'governing' | 'settings'>('orders');

  // App Data State
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [upiId, setUpiId] = useState<string>(''); // Store UPI ID
  const [isLoading, setIsLoading] = useState(true);

  // Modal States for UI Replacement of prompt()
  const [bookModal, setBookModal] = useState({ isOpen: false, mode: 'add', data: { id: '', title: '', price: 180, category: 'B.Ed', type: 'Theory', image: '' } });
  const [memberModal, setMemberModal] = useState({ isOpen: false, data: { name: '', role: 'Director', bio: '', img: '' } });

  // Fetch initial Database data (Books + Settings)
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [booksRes, settingsRes] = await Promise.all([
          fetch('/api/books').catch(() => null),
          fetch('/api/settings').catch(() => null)
        ]);
        
        if (booksRes && booksRes.ok) setAllBooks(await booksRes.json());
        
        if (settingsRes && settingsRes.ok) {
          const settingsData = await settingsRes.json();
          if (settingsData.upi_id) setUpiId(settingsData.upi_id);
        }
      } catch (error) {
        console.error("Failed to fetch initial data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInitialData();
  }, []);

  // Fetch Orders from Cloudflare API when Admin logs in
  useEffect(() => {
    if (user?.role === 'admin') {
      const fetchOrders = async () => {
        try {
          const response = await fetch('/api/orders');
          if (response.ok) {
            const data = await response.json();
            setOrders(data);
          }
        } catch (error) {
          console.error("Failed to fetch orders:", error);
        }
      };
      fetchOrders();
    }
  }, [user, view]); // Re-run when view changes (e.g. going back to admin panel)

  // Dynamically filter books for UI
  const bedTheoryBooks = allBooks.filter(b => b.category === 'B.Ed' && b.type === 'Theory');
  const bedPracticalBooks = allBooks.filter(b => b.category === 'B.Ed' && b.type === 'Practical');
  const deledTheoryBooks = allBooks.filter(b => b.category === 'D.El.Ed' && b.type === 'Theory');
  const deledPracticalBooks = allBooks.filter(b => b.category === 'D.El.Ed' && b.type === 'Practical');
  
  const [governingMembers, setGoverningMembers] = useState<any[]>([
    { 
      name: 'Dr. Brijesh Kumar Tiwari', 
      role: 'Chief Editor', 
      img: 'https://picsum.photos/seed/brijesh/300/300',
      color: 'from-pink-500 to-purple-500',
      bio: 'Expert in Educational Research & Academic Publications.'
    },
    { 
      name: 'Dr. Rajaram Beniwal', 
      role: 'Director', 
      img: 'https://picsum.photos/seed/raja/300/300',
      color: 'from-pink-500 to-purple-500',
      bio: 'Visionary leader driving institutional excellence.'
    },
    { 
      name: 'Dr. Ratnesh Kumar Tripathi', 
      role: 'Director', 
      img: 'https://picsum.photos/seed/ratnesh/300/300',
      color: 'from-pink-500 to-purple-500',
      bio: 'Specialist in Teacher Training & Curriculum Development.'
    },
  ]);

  // Modals Actions (Replaces Prompts)
  const openAddBookModal = (category: string, type: string) => {
    setBookModal({ isOpen: true, mode: 'add', data: { id: '', title: '', price: 180, category, type, image: '' } });
  };

  const openEditBookModal = (book: Book) => {
    setBookModal({ isOpen: true, mode: 'edit', data: { id: book.id, title: book.title, price: book.price, category: book.category, type: book.type, image: book.image || '' } });
  };

  const handleSaveBook = async () => {
    const { mode, data } = bookModal;
    if (!data.title) { alert('Title is required'); return; }

    if (mode === 'add') {
      const newBookPayload = {
        title: data.title,
        category: data.category,
        type: data.type,
        price: data.price,
        image: data.image || undefined,
        year: data.category === 'D.El.Ed' ? 'प्रथम वर्ष' : 'प्रथम सेमेस्टर'
      };

      try {
        const response = await fetch('/api/books', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newBookPayload)
        });
        
        if (response.ok) {
          const { id } = await response.json();
          setAllBooks(prev => [{ ...newBookPayload, id, created_at: new Date().toISOString() } as Book, ...prev]);
        }
      } catch (error) {
        console.error("Error adding book", error);
      }
    } else {
      const updatePayload = { title: data.title, price: data.price, image: data.image || undefined };
      try {
        const response = await fetch(`/api/books/${data.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatePayload)
        });

        if (response.ok) {
          setAllBooks(prevBooks => prevBooks.map(b => b.id === data.id ? { ...b, ...updatePayload } : b));
        }
      } catch (error) { console.error("Error updating book:", error); }
    }
    setBookModal({ ...bookModal, isOpen: false }); // Close modal
  };

  const handleRemoveBook = async (id: string) => {
    if (!confirm('Are you sure you want to completely remove this book from the database? This action cannot be undone.')) return;
    try {
      const response = await fetch(`/api/books/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setAllBooks(prevBooks => prevBooks.filter(b => b.id !== id));
      }
    } catch (error) { console.error("Error deleting book:", error); }
  };

  // UI Modal approach to adding members
  const openAddMemberModal = () => {
    setMemberModal({ isOpen: true, data: { name: '', role: 'Director', bio: '', img: '' } });
  };

  const handleSaveMember = () => {
    const { data } = memberModal;
    if (!data.name) { alert('Name is required'); return; }
    
    const newMember = {
      name: data.name,
      role: data.role || 'Director',
      bio: data.bio,
      img: data.img || `https://picsum.photos/seed/${Math.random()}/300/300`,
      color: 'from-pink-500 to-purple-500'
    };
    
    // Spread operator ensures immediate re-rendering
    setGoverningMembers(prevMembers => [...prevMembers, newMember]);
    setMemberModal({ ...memberModal, isOpen: false }); // Close modal
  };

  const handleRemoveMember = (name: string) => {
    if (!confirm('Remove this member?')) return;
    setGoverningMembers(prevMembers => prevMembers.filter(m => m.name !== name));
  };

  const addToCart = (book: Book) => setCart([...cart, book]);
  const orderNow = (book: Book) => { setCart([...cart, book]); setView('cart'); };

  const handleCheckoutComplete = async (customerData: any) => {
    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
    const orderPayload = { customer: customerData, items: cart, total: totalAmount };

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload)
      });

      if (response.ok) {
        const result = await response.json();
        setCart([]);
        setView('home');
        alert(`Order placed successfully! Your Order ID is ${result.orderId}`);
      } else {
        alert('There was a problem processing your order. Please try again.');
      }
    } catch (error) {
      alert('Failed to connect to the server.');
    }
  };
  const handleProcessOrder = async (orderId: string) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: 'PUT'
      });

      if (response.ok) {
        // Update the local state so the UI reflects the change instantly
        setOrders(prevOrders => 
          prevOrders.map(o => o.id === orderId ? { ...o, status: 'Processed' } : o)
        );
        alert('Order marked as Processed!');
      } else {
        alert('Failed to update order status.');
      }
    } catch (error) {
      console.error("Error processing order:", error);
    }
  };
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const email = (e.target as any).email.value;
    const password = (e.target as any).password.value;
    
    if (email === 'soe.bkt1980@gmail.com' && password === 'brijesh@1980') {
      setUser({ email, role: 'admin' });
      setView('admin');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#001F3F]">
      <Navbar 
        currentView={view} 
        setView={setView} 
        lang={lang} 
        setLang={setLang} 
        user={user}
        cartCount={cart.length}
      />

      {/* Reduced distance from Top to main content container  */}
      <main className="flex-grow pt-40 md:pt-48">
        {view !== 'admin' && view !== 'login' && (
          <QuickNav setView={setView} setBedSubView={setBedSubView} setDeledSubView={setDeledSubView} />
        )}
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <section className="px-4 sm:px-8 lg:px-12 mb-12">
                <HeroBanner />
              </section>

              <GoverningBodies members={governingMembers} />

              <section className="py-16 md:py-32 bg-white/[0.01]">
                <div className="max-w-full mx-auto px-4 md:px-8 lg:px-12">
                  <div className="flex items-end justify-between mb-10 md:mb-16">
                    <div>
                      <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                        {lang === 'en' ? 'TRENDING NOW' : 'अभी ट्रेंडिंग में'}
                      </h2>
                      <div className="h-1.5 md:h-2 w-16 md:w-24 vibrant-gradient rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
                    {bedTheoryBooks.slice(0, 5).map(book => (
                      <BookCard key={book.id} book={book} onAddToCart={addToCart} onOrderNow={orderNow} />
                    ))}
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {view === 'bed' && (
            <motion.div key="bed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-12">
              <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-8">{lang === 'en' ? 'B.Ed Books' : 'बी.एड. पुस्तकें'}</h2>
                
                {!bedSubView ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <button onClick={() => setBedSubView('theory')} className="glass-card p-8 md:p-12 text-center hover:bg-white/10 transition-all group">
                      <BookOpen size={40} className="md:w-12 md:h-12 mx-auto mb-4 md:mb-6 text-white/50 group-hover:text-white transition-colors" />
                      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{lang === 'en' ? 'Theory Books' : 'सैद्धांतिक पुस्तकें'}</h3>
                      <p className="text-sm text-white/60">Comprehensive theory books for all semesters.</p>
                    </button>
                    <button onClick={() => setBedSubView('practical')} className="glass-card p-8 md:p-12 text-center hover:bg-white/10 transition-all group">
                      <LayoutDashboard size={40} className="md:w-12 md:h-12 mx-auto mb-4 md:mb-6 text-white/50 group-hover:text-white transition-colors" />
                      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{lang === 'en' ? 'Practical Books' : 'प्रायोगिक पुस्तकें'}</h3>
                      <p className="text-sm text-white/60">Practical manuals and lesson plans.</p>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => setBedSubView(null)} className="mb-8 text-white/50 hover:text-white flex items-center">
                      <ChevronDown className="rotate-90 mr-2" size={16} /> Back to Options
                    </button>
                    
                    {bedSubView === 'theory' ? (
                      <div className="space-y-12">
                        {['प्रथम सेमेस्टर', 'द्वितीय सेमेस्टर', 'तृतीय सेमेस्टर', 'चतुर्थ सेमेस्टर'].map(sem => (
                          <div key={sem}>
                            <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-2">{sem}</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                              {bedTheoryBooks.filter(b => b.semester === sem).map(book => (
                                <BookCard key={book.id} book={book} onAddToCart={addToCart} onOrderNow={orderNow} />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {bedPracticalBooks.map(book => (
                          <BookCard key={book.id} book={book} onAddToCart={addToCart} onOrderNow={orderNow} />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {view === 'deled' && (
            <motion.div key="deled" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-12">
              <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-8">{lang === 'en' ? 'D.El.Ed Books' : 'डी.एल.एड. पुस्तकें'}</h2>
                
                {!deledSubView ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <button onClick={() => setDeledSubView('theory')} className="glass-card p-8 md:p-12 text-center hover:bg-white/10 transition-all group">
                      <BookOpen size={40} className="md:w-12 md:h-12 mx-auto mb-4 md:mb-6 text-white/50 group-hover:text-white transition-colors" />
                      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{lang === 'en' ? 'Theory Books' : 'सैद्धांतिक पुस्तकें'}</h3>
                      <p className="text-sm text-white/60">Theory books for D.El.Ed first and second year.</p>
                    </button>
                    <button onClick={() => setDeledSubView('practical')} className="glass-card p-8 md:p-12 text-center hover:bg-white/10 transition-all group">
                      <LayoutDashboard size={40} className="md:w-12 md:h-12 mx-auto mb-4 md:mb-6 text-white/50 group-hover:text-white transition-colors" />
                      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{lang === 'en' ? 'Practical Books' : 'प्रायोगिक पुस्तकें'}</h3>
                      <p className="text-sm text-white/60">Practical books and community work manuals.</p>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => setDeledSubView(null)} className="mb-8 text-white/50 hover:text-white flex items-center">
                      <ChevronDown className="rotate-90 mr-2" size={16} /> Back to Options
                    </button>
                    
                    {deledSubView === 'theory' ? (
                      <div className="space-y-12">
                        {['प्रथम वर्ष', 'द्वितीय वर्ष'].map(year => (
                          <div key={year}>
                            <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-2">{year}</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                              {deledTheoryBooks.filter(b => b.year === year).map(book => (
                                <BookCard key={book.id} book={book} onAddToCart={addToCart} onOrderNow={orderNow} />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {deledPracticalBooks.map(book => (
                          <BookCard key={book.id} book={book} onAddToCart={addToCart} onOrderNow={orderNow} />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {view === 'login' && (
            <motion.div key="login" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="py-24 flex items-center justify-center">
              <div className="glass-card p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login to Adarsh</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">Email Address</label>
                    <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">Password</label>
                    <input type="password" name="password" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition-colors" placeholder="••••••••" />
                  </div>
                  <button type="submit" className="btn-primary w-full py-3">Sign In</button>
                </form>
              </div>
            </motion.div>
          )}

          {view === 'admin' && user?.role === 'admin' && (
            <motion.div key="admin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-12">
              <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <h2 className="text-4xl font-black tracking-tighter">ADMIN COMMAND CENTER</h2>
                    <p className="text-pink-500 font-bold uppercase tracking-widest text-xs mt-2">Managing Adarsh Publication Ecosystem</p>
                  </div>
                  <button onClick={() => setUser(null)} className="btn-secondary py-2 px-6">LOGOUT</button>
                </div>

                <div className="flex space-x-4 mb-8 border-b border-white/10 overflow-x-auto">
                  <button onClick={() => setAdminTab('orders')} className={`pb-4 px-4 text-sm font-black uppercase tracking-widest transition-colors relative whitespace-nowrap ${adminTab === 'orders' ? 'text-pink-500' : 'text-white/40 hover:text-white'}`}>
                    <ShoppingCart size={16} className="inline mr-2" /> Orders
                    {adminTab === 'orders' && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-pink-500" />}
                  </button>
                  <button onClick={() => setAdminTab('books')} className={`pb-4 px-4 text-sm font-black uppercase tracking-widest transition-colors relative whitespace-nowrap ${adminTab === 'books' ? 'text-pink-500' : 'text-white/40 hover:text-white'}`}>
                    <BookOpen size={16} className="inline mr-2" /> Books
                    {adminTab === 'books' && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-pink-500" />}
                  </button>
                  <button onClick={() => setAdminTab('governing')} className={`pb-4 px-4 text-sm font-black uppercase tracking-widest transition-colors relative whitespace-nowrap ${adminTab === 'governing' ? 'text-pink-500' : 'text-white/40 hover:text-white'}`}>
                    <Users size={16} className="inline mr-2" /> Governing Bodies
                    {adminTab === 'governing' && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-pink-500" />}
                  </button>
                  <button onClick={() => setAdminTab('settings')} className={`pb-4 px-4 text-sm font-black uppercase tracking-widest transition-colors relative whitespace-nowrap ${adminTab === 'settings' ? 'text-pink-500' : 'text-white/40 hover:text-white'}`}>
                    <Settings size={16} className="inline mr-2" /> Settings
                    {adminTab === 'settings' && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-pink-500" />}
                  </button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  {adminTab !== 'settings' && (
                    <div className="lg:col-span-1 space-y-6">
                      <div className="glass-card p-8 bg-pink-500/10 border-pink-500/20">
                        <h3 className="text-sm font-black uppercase tracking-widest mb-2 text-pink-500">Total Revenue</h3>
                        <p className="text-4xl font-black">₹{orders.reduce((acc, o) => acc + o.items.reduce((sum: number, item: any) => sum + item.price, 0), 0)}</p>
                      </div>
                      <div className="glass-card p-8">
                        <h3 className="text-sm font-black uppercase tracking-widest mb-2 text-white/40">Total Orders</h3>
                        <p className="text-4xl font-black">{orders.length}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className={`glass-card p-8 ${adminTab === 'settings' ? 'lg:col-span-4 max-w-4xl' : 'lg:col-span-3'}`}>
                    
                    {adminTab === 'settings' && (
                      <div className="space-y-8">
                        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                          <h3 className="text-2xl font-black flex items-center"><Settings className="mr-4 text-pink-500" /> SYSTEM SETTINGS</h3>
                        </div>
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                          <h4 className="text-lg font-bold mb-2 text-accent-teal">Payment Configuration</h4>
                          <p className="text-sm text-white/50 mb-6">Set the primary UPI ID used to generate QR codes for customer checkout. (e.g. adarsh@ybl)</p>
                          <div className="flex space-x-4">
                            <input 
                              type="text" 
                              value={upiId} 
                              onChange={(e) => setUpiId(e.target.value)}
                              className="flex-grow bg-brand-dark border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-accent-teal font-mono"
                              placeholder="Enter Admin UPI ID"
                            />
                            <button 
                              onClick={async () => {
                                try {
                                  const res = await fetch('/api/settings', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ key: 'upi_id', value: upiId })
                                  });
                                  if (res.ok) alert('UPI ID updated successfully!');
                                } catch (err) {}
                              }}
                              className="btn-primary py-3 px-8 text-sm whitespace-nowrap"
                            >
                              Save Settings
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {adminTab === 'orders' && (
                      <>
                        <h3 className="text-2xl font-black mb-8 flex items-center">
                          <ShoppingCart className="mr-4 text-pink-500" /> ORDER MANAGEMENT
                        </h3>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left">
                            <thead>
                              <tr className="border-b border-white/10 text-white/40 text-xs uppercase tracking-widest">
                                <th className="pb-4">Order ID</th>
                                <th className="pb-4">Customer</th>
                                <th className="pb-4">Items</th>
                                <th className="pb-4">Subject</th>
                                <th className="pb-4">Total</th>
                                <th className="pb-4">Action</th>
                              </tr>
                            </thead>
                            <tbody className="text-sm">
                              {orders.map(order => (
                                <tr key={order.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                  <td className="py-6 font-mono font-bold text-pink-500">{order.id}</td>
                                  <td className="py-6">
                                    <p className="font-bold">{order.customer.name}</p>
                                    <p className="text-xs text-white/40">{order.customer.phone}</p>
                                  </td>
                                  <td className="py-6">{order.items.length} Books</td>
                                  <td className="py-6 text-pink-500 font-bold">{order.customer.subject || 'N/A'}</td>
                                  <td className="py-6 font-bold">
                                      ₹{order.items.reduce((sum: number, item: any) => sum + item.price, 0)}
                                      {order.utr && (
                                        <div className="mt-1">
                                          <span className="text-[10px] bg-accent-teal/20 text-accent-teal px-2 py-1 rounded font-mono tracking-widest">
                                            UTR: {order.utr}
                                          </span>
                                        </div>
                                      )}
                                    </td>
                                  <td className="py-6">
                                        {order.status === 'Pending' ? (
                                      <button 
                                      onClick={() => handleProcessOrder(order.id)}
                                        className="text-accent-teal hover:text-white border border-accent-teal hover:bg-accent-teal/20 px-3 py-1 rounded text-xs font-bold transition-colors"
                                >
                                        Process
                                                  </button>
                                                ) : (
                                                      <span className="text-pink-500 font-bold flex items-center text-xs">
                                                          <CheckCircle2 size={14} className="mr-1" /> Processed
                                                      </span>
                                                  )}
                                                </td>
                                </tr>
                              ))}
                              {orders.length === 0 && (
                                <tr>
                                  <td colSpan={6} className="py-20 text-center text-white/20 font-black text-2xl uppercase">No Orders Yet</td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )}

                    {adminTab === 'books' && (
                      <div className="space-y-12">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-black flex items-center">
                            <BookOpen className="mr-4 text-pink-500" /> BOOK MANAGEMENT
                          </h3>
                          <div className="flex flex-wrap gap-4">
                            <button onClick={() => openAddBookModal('B.Ed', 'Theory')} className="btn-primary py-2 px-4 text-xs"><Plus size={14} className="inline mr-1" /> Add B.Ed Theory</button>
                            <button onClick={() => openAddBookModal('B.Ed', 'Practical')} className="btn-primary py-2 px-4 text-xs"><Plus size={14} className="inline mr-1" /> Add B.Ed Practical</button>
                            <button onClick={() => openAddBookModal('D.El.Ed', 'Theory')} className="btn-primary py-2 px-4 text-xs"><Plus size={14} className="inline mr-1" /> Add D.El.Ed Theory</button>
                            <button onClick={() => openAddBookModal('D.El.Ed', 'Practical')} className="btn-primary py-2 px-4 text-xs"><Plus size={14} className="inline mr-1" /> Add D.El.Ed Practical</button>
                          </div>
                        </div>

                        <div className="space-y-8">
                          {/* Rendering the Book lists UI. Since it repeats, we use mapping over the arrays as you defined */}
                          <div>
                            <h4 className="text-lg font-bold mb-4 text-pink-500">B.Ed Theory Books</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {bedTheoryBooks.map(book => (
                                <div key={book.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                                  <div>
                                    <p className="font-bold text-sm">{book.title}</p>
                                    <p className="text-[10px] text-white/40 uppercase tracking-widest">{book.semester}</p>
                                    <p className="text-[10px] text-pink-500 font-bold">₹{book.price}</p>
                                  </div>
                                  <div className="flex space-x-2">
                                    <button onClick={() => openEditBookModal(book)} className="text-white/20 hover:text-pink-500 transition-colors"><Edit2 size={16} /></button>
                                    <button onClick={() => handleRemoveBook(book.id)} className="text-white/20 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold mb-4 text-pink-500">B.Ed Practical Books</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {bedPracticalBooks.map(book => (
                                <div key={book.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                                  <div>
                                    <p className="font-bold text-sm">{book.title}</p>
                                    <p className="text-[10px] text-pink-500 font-bold">₹{book.price}</p>
                                  </div>
                                  <div className="flex space-x-2">
                                    <button onClick={() => openEditBookModal(book)} className="text-white/20 hover:text-pink-500 transition-colors"><Edit2 size={16} /></button>
                                    <button onClick={() => handleRemoveBook(book.id)} className="text-white/20 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-bold mb-4 text-pink-500">D.El.Ed Theory Books</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {deledTheoryBooks.map(book => (
                                <div key={book.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                                  <div>
                                    <p className="font-bold text-sm">{book.title}</p>
                                    <p className="text-[10px] text-white/40 uppercase tracking-widest">{book.year}</p>
                                    <p className="text-[10px] text-pink-500 font-bold">₹{book.price}</p>
                                  </div>
                                  <div className="flex space-x-2">
                                    <button onClick={() => openEditBookModal(book)} className="text-white/20 hover:text-pink-500 transition-colors"><Edit2 size={16} /></button>
                                    <button onClick={() => handleRemoveBook(book.id)} className="text-white/20 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold mb-4 text-pink-500">D.El.Ed Practical Books</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {deledPracticalBooks.map(book => (
                                <div key={book.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                                  <div>
                                    <p className="font-bold text-sm">{book.title}</p>
                                    <p className="text-[10px] text-pink-500 font-bold">₹{book.price}</p>
                                  </div>
                                  <div className="flex space-x-2">
                                    <button onClick={() => openEditBookModal(book)} className="text-white/20 hover:text-pink-500 transition-colors"><Edit2 size={16} /></button>
                                    <button onClick={() => handleRemoveBook(book.id)} className="text-white/20 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {adminTab === 'governing' && (
                      <div className="space-y-8">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-black flex items-center">
                            <Users className="mr-4 text-pink-500" /> GOVERNING BODIES MANAGEMENT
                          </h3>
                          <button onClick={openAddMemberModal} className="btn-primary py-2 px-4 text-xs"><Plus size={14} className="inline mr-1" /> Add Member</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {governingMembers.map((member, idx) => (
                            <div key={idx} className="glass-card p-6 flex items-center justify-between border border-white/10">
                              <div className="flex items-center">
                                <img src={member.img} className="w-12 h-12 rounded-full mr-4 object-cover" referrerPolicy="no-referrer" />
                                <div>
                                  <p className="font-bold">{member.name}</p>
                                  <p className="text-xs text-pink-500 uppercase font-black">{member.role}</p>
                                </div>
                              </div>
                              <button onClick={() => handleRemoveMember(member.name)} className="text-white/20 hover:text-red-500 transition-colors">
                                <Trash2 size={18} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {view === 'cart' && (
            <motion.div key="cart" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-12">
              {cart.length === 0 ? (
                <div className="max-w-7xl mx-auto px-4 text-center py-20">
                  <ShoppingCart size={80} className="mx-auto mb-8 text-white/10" />
                  <h2 className="text-4xl font-black mb-4">YOUR CART IS EMPTY</h2>
                  <button onClick={() => setView('home')} className="btn-primary">START SHOPPING</button>
                </div>
              ) : (
                <CheckoutView cart={cart} onComplete={handleCheckoutComplete} upiId={upiId} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
        {view === 'terms' && (
            <motion.div key="terms" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <TermsView />
            </motion.div>
          )}

          {view === 'privacy' && (
            <motion.div key="privacy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <PrivacyView />
            </motion.div>
          )}
          {view === 'about' && (
            <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <AboutView />
            </motion.div>
          )}

          {view === 'contact' && (
            <motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ContactView />
            </motion.div>
          )}

          {view === 'cookie' && (
            <motion.div key="cookie" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <CookieView />
            </motion.div>
          )}
      </main>

      {/* --- UI Modals Overlay (Replaces the ugly window.prompt boxes) --- */}
      <AnimatePresence>
        {bookModal.isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="glass-card p-8 w-full max-w-md bg-brand-dark border-white/20 shadow-2xl">
              <h2 className="text-2xl font-black mb-6 text-accent-teal uppercase tracking-tight">{bookModal.mode === 'add' ? 'Add New Book' : 'Edit Book Details'}</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Title</label>
                  <input type="text" value={bookModal.data.title} onChange={e => setBookModal({...bookModal, data: {...bookModal.data, title: e.target.value}})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-teal text-sm font-bold" placeholder="Enter Book Title"/>
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Price (₹)</label>
                  <input type="number" value={bookModal.data.price} onChange={e => setBookModal({...bookModal, data: {...bookModal.data, price: Number(e.target.value)}})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-teal text-sm font-bold" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Image URL (Optional)</label>
                  <input type="text" value={bookModal.data.image || ''} onChange={e => setBookModal({...bookModal, data: {...bookModal.data, image: e.target.value}})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-teal text-sm font-mono text-white/50" placeholder="https://..." />
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <button onClick={() => setBookModal({...bookModal, isOpen: false})} className="btn-secondary flex-1 py-3 text-sm">Cancel</button>
                <button onClick={handleSaveBook} className="btn-primary flex-1 py-3 text-sm">Save Book</button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {memberModal.isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="glass-card p-8 w-full max-w-md bg-brand-dark border-white/20 shadow-2xl">
              <h2 className="text-2xl font-black mb-6 text-pink-500 uppercase tracking-tight">Add Governing Member</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Name</label>
                  <input type="text" value={memberModal.data.name} onChange={e => setMemberModal({...memberModal, data: {...memberModal.data, name: e.target.value}})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-pink-500 text-sm font-bold" placeholder="e.g. Dr. Ramesh" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Role</label>
                  <input type="text" value={memberModal.data.role} onChange={e => setMemberModal({...memberModal, data: {...memberModal.data, role: e.target.value}})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-pink-500 text-sm font-bold" placeholder="e.g. Director" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Bio (Short Description)</label>
                  <textarea value={memberModal.data.bio} onChange={e => setMemberModal({...memberModal, data: {...memberModal.data, bio: e.target.value}})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-pink-500 text-sm h-24 resize-none" placeholder="Enter a brief description..." />
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Image URL (Optional)</label>
                  <input type="text" value={memberModal.data.img || ''} onChange={e => setMemberModal({...memberModal, data: {...memberModal.data, img: e.target.value}})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-pink-500 text-sm font-mono text-white/50" placeholder="Leave empty for random avatar" />
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <button onClick={() => setMemberModal({...memberModal, isOpen: false})} className="btn-secondary flex-1 py-3 text-sm">Cancel</button>
                <button onClick={handleSaveMember} className="btn-primary flex-1 py-3 text-sm">Add Member</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer setView={setView}/>
    </div>
  );
}