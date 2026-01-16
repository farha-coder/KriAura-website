import * as THREE from 'three';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, 
  BarChart3, 
  Search, 
  UserPlus, 
  Briefcase, 
  Code, 
  Trophy, 
  GraduationCap, 
  LineChart, 
  Video, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Menu, 
  X,
  Target,
  Compass,
  Lightbulb,
  Zap,
  Layers,
  ShieldCheck,
  Cpu,
  Rocket,
  Users,
  Activity,
  Award,
  PieChart,
  Monitor
} from 'lucide-react';

// --- Three.js Background Component ---
const AuraBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, globe;
    let frameId;

    const init = () => {
      

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      const geometry = new THREE.IcosahedronGeometry(2, 5);
      const material = new THREE.MeshPhongMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.2,
      });
      globe = new THREE.Mesh(geometry, material);
      scene.add(globe);

      const light = new THREE.PointLight(0xffffff, 1, 100);
      light.position.set(10, 10, 10);
      scene.add(light);
      
      const ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);

      const animate = () => {
        frameId = requestAnimationFrame(animate);
        if (globe) {
          globe.rotation.y += 0.001;
          globe.rotation.x += 0.0005;
        }
        if (renderer && scene && camera) {
          renderer.render(scene, camera);
        }
      };
      animate();
    };

    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    init();


    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (mountRef.current && renderer && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      if (renderer) renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10 bg-slate-950" />;
};

// --- Data Models ---
const services = [
  { id: 'web-dev', title: 'Website Design & Development', icon: <Globe size={32} />, description: 'Professional, responsive, and performance-driven websites tailored to your brand and business goals.', details: 'We build modern web applications using React, Next.js, and Tailwind CSS with a focus on UX and speed.', features: ['Responsive Design', 'SEO Optimization', 'E-commerce Solutions', 'Custom Web Apps'] },
  { id: 'data-viz', title: 'Data Visualization & Analytics', icon: <BarChart3 size={32} />, description: 'Transforming raw and complex data into meaningful insights through dashboards, charts, and analytical reports.', details: 'Interactive storytelling through data. We turn complex numbers into actionable business insights.', features: ['PowerBI/Tableau Dashboards', 'Custom Analytics', 'Predictive Modeling', 'Real-time Reporting'] },
  { id: 'rd-support', title: 'Research & Development Support', icon: <Search size={32} />, description: 'End-to-end support for academic and industrial research projects, from ideation to implementation and documentation.', details: 'We help bridge the gap between abstract ideas and practical implementation.', features: ['Literature Review', 'Proof of Concept', 'Algorithm Design', 'Technical Documentation'] },
  { id: 'mentorship', title: 'Project Guidance & Mentorship', icon: <UserPlus size={32} />, description: 'Structured mentorship for students and professionals working on technical projects, final-year submissions, and innovative solutions.', details: 'Expert guidance through every stage of your project lifecycle to ensure success.', features: ['Project Planning', 'Technical Reviews', 'Code Mentoring', 'Submission Prep'] },
  { id: 'business-setup', title: 'Business Setup & Financial Planning', icon: <Briefcase size={32} />, description: 'Guidance for startups and entrepreneurs in business planning, financial structuring, and strategic roadmaps.', details: 'Get your venture off the ground with solid financial and strategic foundations.', features: ['Registration Support', 'Cash Flow Analysis', 'Pitch Deck Creation', 'Market Analysis'] },
  { id: 'hackathon', title: 'Hackathon Preparation', icon: <Code size={32} />, description: 'Complete hackathon support including idea generation, prototype development, technical mentoring, and presentation design.', details: 'Turn your idea into a winner with expert prototyping support.', features: ['Ideation Workshops', 'MVP Development', 'Pitching Techniques', 'Graphic Assets'] },
  { id: 'workshops', title: 'Workshops & Seminars', icon: <Trophy size={32} />, description: 'Professional workshops and seminars focused on technical skills, career development, and industry readiness.', details: 'Hands-on learning experiences led by industry veterans across various domains.', features: ['Skill-based Training', 'Corporate Seminars', 'Certificates Provided', 'Live Coding'] },
  { id: 'career-guide', title: 'Career Guidance', icon: <GraduationCap size={32} />, description: 'Personalized career guidance for students and job seekers to help them navigate career paths with confidence.', details: 'Customized roadmaps, resume building, and interview preparation.', features: ['Resume Review', 'Interview Prep', 'Skill Gap Analysis', 'Job Search Strategy'] },
  { id: 'smo', title: 'Social Media Optimization', icon: <LineChart size={32} />, description: 'Strategic planning and optimization of social media presence to improve visibility, engagement, and branding.', details: 'Grow your digital footprint and reach the right audience effectively.', features: ['Algorithm Optimization', 'Profile Audits', 'Engagement Strategy', 'Analytics Tracking'] },
  { id: 'content-creation', title: 'Reels Editing & Content Creation', icon: <Video size={32} />, description: 'Creative digital content including reels, promotional videos, presentations, and branding materials.', details: 'Visual storytelling that captures attention in the modern short-form era.', features: ['High-quality Editing', 'Script Writing', 'Visual Effects', 'Thumbnail Design'] }
];

const featuresData = [
  { title: "Integrated Ecosystem", description: "A seamless blend of technology, strategy, and creativity under one roof.", icon: <Layers size={24} /> },
  { title: "Aura-Driven Design", description: "We don't just build; we create an 'Aura' around your brand that resonates.", icon: <Activity size={24} /> },
  { title: "Agile Innovation", description: "Rapid prototyping and execution to stay ahead in a fast-paced market.", icon: <Rocket size={24} /> },
  { title: "Trusted Security", description: "Enterprise-grade security standards for all digital assets and data.", icon: <ShieldCheck size={24} /> },
  { title: "Human-Centric Approach", description: "Solutions designed with empathy for the end-user experience.", icon: <Users size={24} /> },
  { title: "Future-Ready Tech", description: "Utilizing the latest AI, Cloud, and Web technologies for scalability.", icon: <Cpu size={24} /> }
];

// --- Sub-Components ---

const Footer = () => (
  <footer className="bg-slate-950 border-t border-white/10 py-12 relative z-10">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-slate-900 border border-white/5">
           <img 
             src="logo.png" 
             alt="Logo" 
             className="w-full h-full object-contain" 
             onError={(e) => { 
               e.target.style.display = 'none'; 
               e.target.parentNode.innerHTML = '<div class="w-full h-full bg-purple-600 flex items-center justify-center text-white text-[10px] font-bold">K</div>'; 
             }} 
           />
        </div>
        <span className="text-xl font-bold text-white uppercase tracking-tight">KriAura Integrated Technologies</span>
      </div>
      <p className="text-slate-400 mb-8 max-w-md mx-auto italic">"Where Action Meets Aura and Innovation"</p>
      <div className="text-slate-500 text-sm">© 2026 KriAura Integrated Technologies. All rights reserved.</div>
    </div>
  </footer>
);

const Navbar = ({ activePage, setActivePage }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'startups', label: 'Startups' },
    { id: 'mentorship', label: 'Mentorship' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActivePage('home')}>
            <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center transition-transform group-hover:scale-110 bg-slate-900 border border-white/10">
              <img 
                src="logo.png" 
                alt="Logo" 
                className="w-full h-full object-contain" 
                onError={(e) => { 
                  e.target.style.display = 'none'; 
                  e.target.parentNode.innerHTML = '<div class="w-full h-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">K</div>'; 
                }} 
              />
            </div>
            <div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 tracking-tight">KriAura</span>
              <p className="text-[10px] text-purple-400 font-medium tracking-widest uppercase leading-none">Integrated Technologies</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-6 md:gap-x-8 gap-y-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`text-[11px] font-bold uppercase tracking-widest transition-all px-1 py-1 border-b-2 ${
                  activePage === item.id 
                  ? 'text-purple-400 border-purple-500' 
                  : 'text-slate-400 border-transparent hover:text-white hover:border-white/20'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

// --- Page Sections ---

const Home = ({ setActivePage }) => (
  <div className="animate-in fade-in duration-700">
    <section className="min-h-screen flex flex-col items-center justify-center pt-28">
      <div className="text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tighter">
          KriAura <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">Integrated Technologies</span>
        </h1>
        <p className="text-2xl text-slate-300 mb-10 max-w-3xl mx-auto italic font-serif opacity-90">Where Action Meets Aura and Innovation</p>
        <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">We are a forward-thinking technology and creative solutions company dedicated to transforming ideas into impactful outcomes. At KriAura, innovation meets execution to empower students, startups, and businesses.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button onClick={() => setActivePage('services')} className="w-full sm:w-auto px-12 py-5 bg-purple-600 hover:bg-purple-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-purple-600/20">Explore Services</button>
          <button onClick={() => setActivePage('contact')} className="w-full sm:w-auto px-12 py-5 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl border border-white/20 transition-all">Contact Us</button>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="py-32 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 shadow-2xl">
            <Target className="w-16 h-16 text-purple-400 mb-8" />
            <h2 className="text-4xl font-black text-white mb-6">Our Vision</h2>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              To become a leading integrated solutions provider that empowers individuals and organizations to achieve excellence through innovation, technology, and creativity.
            </p>
          </div>
          <div className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 shadow-2xl">
            <Compass className="w-16 h-16 text-indigo-400 mb-8" />
            <h2 className="text-4xl font-black text-white mb-8">Our Mission</h2>
            <ul className="space-y-6">
              {[
                "To deliver high-quality technical and creative services with professionalism and integrity.",
                "To guide students, professionals, and startups in transforming ideas into successful outcomes.",
                "To provide innovative digital and business solutions tailored to client needs.",
                "To promote learning, creativity, and technological advancement across communities."
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-slate-300">
                  <CheckCircle2 className="w-7 h-7 text-indigo-500 shrink-0 mt-0.5" />
                  <span className="text-lg font-light leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Features Grid */}
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Core Features</h2>
        <p className="text-slate-400 max-w-xl mx-auto text-xl font-light">What makes the KriAura experience unique and powerful.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, idx) => (
          <div key={idx} className="p-12 rounded-[3rem] bg-white/[0.03] border border-white/10 hover:border-purple-500/40 transition-all group shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-10 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight uppercase">{feature.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const About = () => (
  <section className="py-32 px-4 max-w-7xl mx-auto animate-in slide-in-from-bottom-10 duration-700">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-5xl font-black text-white mb-10 tracking-tight leading-none uppercase">Who We Are</h2>
        <p className="text-xl text-slate-300 mb-12 leading-relaxed font-light">
          KriAura Integrated Technologies is a forward-thinking technology and creative solutions company operating at the intersection of innovation, strategy, and execution. We support students, professionals, startups, and businesses with practical, affordable, and high-quality solutions.
        </p>
        <h3 className="text-2xl font-bold text-white mb-8 tracking-widest uppercase border-b border-purple-500/30 pb-4 inline-block">What Sets Us Apart</h3>
        <ul className="space-y-6">
          {[
            "Client-focused and customized solutions",
            "Strong emphasis on innovation and execution",
            "Experienced mentors and industry professionals",
            "Affordable, quality-driven services",
            "Long-term partnership mindset"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-6 group">
              <div className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-150 transition-all shadow-[0_0_10px_#8b5cf6]" />
              <span className="text-xl text-slate-300 font-light">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-slate-900/50 p-12 rounded-[4rem] border border-white/10 shadow-3xl backdrop-blur-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700"><Globe size={200} /></div>
        <div className="relative z-10 space-y-12">
           <div className="p-10 bg-white/5 border border-white/10 rounded-3xl group-hover:border-purple-500/50 transition-colors">
              <h4 className="text-purple-400 font-bold text-2xl mb-2">Impact Outcomes</h4>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Transforming abstract ideas into measurable business results.</p>
           </div>
           <div className="p-10 bg-white/5 border border-white/10 rounded-3xl group-hover:border-indigo-500/50 transition-colors">
              <h4 className="text-indigo-400 font-bold text-2xl mb-2">Professional Growth</h4>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Guided by industry veterans with deep domain expertise.</p>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesGrid = ({ onSelectService }) => (
  <section className="py-32 max-w-7xl mx-auto px-4">
    <div className="text-center mb-24">
      <h2 className="text-5xl font-black text-white mb-8 uppercase tracking-tighter">Our Services</h2>
      <p className="text-slate-400 max-w-3xl mx-auto text-xl font-light leading-relaxed">
        We provide comprehensive solutions across technology, creativity, business, and mentorship. Each service is designed to deliver real-world impact and measurable results.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((service) => (
        <div 
          key={service.id}
          onClick={() => onSelectService(service)}
          className="group p-12 bg-white/[0.03] border border-white/10 rounded-[3.5rem] hover:bg-purple-600/10 hover:border-purple-500/50 transition-all cursor-pointer shadow-3xl hover:-translate-y-4"
        >
          <div className="w-20 h-20 rounded-3xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-10 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-lg">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-6 leading-tight tracking-tight uppercase">{service.title}</h3>
          <p className="text-slate-400 text-sm mb-10 leading-relaxed font-light">
            {service.description}
          </p>
          <div className="flex items-center text-purple-400 text-xs font-black uppercase tracking-[0.3em] gap-3">
            Learn Details <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Startups = () => (
  <section className="py-32 px-4 max-w-7xl mx-auto animate-in fade-in duration-700">
    <div className="text-center mb-24">
      <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-none uppercase tracking-tighter">Supporting Entrepreneurs</h2>
      <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">We assist startups and businesses in transforming ideas into scalable and sustainable ventures through technology, strategy, and execution.</p>
    </div>
    <div className="grid md:grid-cols-2 gap-10">
      {[
        { t: "Business planning and validation", d: "Strategic roadmap creation and market fit analysis.", i: <Target size={40} /> },
        { t: "Technical development", i: <Cpu size={40} />, d: "End-to-end product implementation and tech stack scaling." },
        { t: "Financial structuring", i: <Activity size={40} />, d: "Financial modeling and strategic capital planning." },
        { t: "Digital presence and branding", i: <Globe size={40} />, d: "Visual identity design and social footprint optimization." }
      ].map((item, i) => (
        <div key={i} className="p-12 bg-white/[0.04] border border-white/10 rounded-[3rem] hover:bg-white/[0.08] transition-all flex flex-col items-start shadow-3xl">
          <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-8">
             {item.i}
          </div>
          <h3 className="text-3xl font-bold text-white mb-6 tracking-tight uppercase leading-none">{item.t}</h3>
          <p className="text-slate-400 text-lg font-light leading-relaxed">{item.d}</p>
        </div>
      ))}
    </div>
  </section>
);

const Mentorship = () => (
  <section className="py-32 px-4 max-w-7xl mx-auto animate-in fade-in duration-700">
    <div className="text-center mb-24">
      <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-none uppercase tracking-tighter">Empowering The Future</h2>
      <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">Our mentorship is structured, practical, and aligned with real-world industry expectations.</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { t: "Academic and industrial projects", i: <Briefcase size={32} /> },
        { t: "Hackathons and competitions", i: <Trophy size={32} /> },
        { t: "Research and innovation initiatives", i: <Search size={32} /> },
        { t: "Career planning and skill development", i: <GraduationCap size={32} /> }
      ].map((item, i) => (
        <div key={i} className="p-12 bg-white/5 border border-white/10 rounded-[2.5rem] text-center group hover:bg-purple-600 transition-all duration-500 shadow-2xl">
          <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 mx-auto mb-10 group-hover:text-white group-hover:bg-white/20 transition-all">
            {item.i}
          </div>
          <h4 className="text-white font-bold text-xl uppercase tracking-tight leading-tight">{item.t}</h4>
        </div>
      ))}
    </div>
  </section>
);

const Workshops = () => (
  <section className="py-32 px-4 max-w-7xl mx-auto animate-in fade-in duration-700">
    <div className="text-center mb-24">
      <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-none uppercase tracking-tighter">Learning By Experience</h2>
      <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto font-light leading-relaxed">KriAura conducts workshops, training programs, and hackathon preparation sessions designed to build confidence, creativity, and technical excellence.</p>
    </div>
    <div className="grid md:grid-cols-2 gap-20 items-center">
      <div className="space-y-12">
        <h3 className="text-4xl font-black text-purple-400 uppercase tracking-widest">Core Focus:</h3>
        {[
          "Hands-on learning",
          "Real-world problem solving",
          "Team collaboration",
          "Presentation and communication skills"
        ].map((text, i) => (
          <div key={i} className="flex items-center gap-8 group">
            <div className="w-12 h-12 rounded-full border border-purple-500/50 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 transition-all">
              <CheckCircle2 className="text-purple-500" size={24} />
            </div>
            <span className="text-slate-200 text-2xl font-light">{text}</span>
          </div>
        ))}
      </div>
      <div className="aspect-square bg-gradient-to-br from-purple-600/30 to-indigo-900/50 rounded-[4rem] border border-white/10 flex items-center justify-center shadow-3xl rotate-3">
         <Award size={200} className="text-purple-500 opacity-20" />
      </div>
    </div>
  </section>
);

const ServiceDetail = ({ service, onBack }) => (
  <div className="py-32 max-w-5xl mx-auto px-4 animate-in fade-in duration-500">
    <button onClick={onBack} className="mb-12 text-slate-400 hover:text-white flex items-center gap-4 transition-colors font-black uppercase tracking-[0.4em] text-[10px]">
      <ArrowRight className="rotate-180 w-5 h-5" /> Back to Services
    </button>
    <div className="grid md:grid-cols-3 gap-16">
      <div className="md:col-span-2">
        <div className="w-24 h-24 rounded-[2rem] bg-purple-600 flex items-center justify-center text-white mb-12 shadow-3xl border border-white/20">
          {service.icon}
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-10 leading-none uppercase tracking-tighter">{service.title}</h1>
        <p className="text-2xl text-slate-300 mb-12 leading-relaxed font-light">{service.details}</p>
        <div className="bg-white/5 border border-white/10 rounded-[4rem] p-16 shadow-inner">
          <h3 className="text-3xl font-bold text-white mb-10 uppercase tracking-widest border-b border-white/10 pb-6">Core Deliverables</h3>
          <div className="grid sm:grid-cols-2 gap-10">
            {service.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-6 text-slate-300">
                <CheckCircle2 className="text-purple-500 w-8 h-8 shrink-0 shadow-lg" />
                <span className="text-xl font-light">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-12">
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-12 rounded-[4rem] text-white shadow-3xl relative overflow-hidden group">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-700" />
          <h4 className="text-3xl font-black mb-8 tracking-tight uppercase">Get Started</h4>
          <p className="text-purple-100 text-lg mb-12 leading-relaxed">Ready to transform your vision? Connect with our technical leads to discuss {service.title}.</p>
          <button className="w-full py-6 bg-white text-purple-900 font-black rounded-[2rem] hover:bg-slate-100 transition-all shadow-2xl text-lg uppercase tracking-widest">Inquire Now</button>
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <section className="py-32 px-4 max-w-5xl mx-auto text-center animate-in fade-in duration-700">
    <div className="w-24 h-24 bg-purple-600/20 rounded-[2rem] flex items-center justify-center text-purple-500 mx-auto mb-16 shadow-inner border border-white/5">
      <Mail size={48} />
    </div>
    <h2 className="text-5xl md:text-8xl font-black text-white mb-12 leading-none tracking-tighter uppercase">Let’s Build <br />Something Meaningful</h2>
    <p className="text-2xl text-slate-400 mb-20 max-w-3xl mx-auto font-light leading-relaxed italic">Turn your ideas into outcomes today. We are ready to support your journey with professionalism and integrity.</p>
    <div className="bg-white/5 border border-white/10 rounded-[5rem] p-24 shadow-3xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="relative z-10 space-y-16">
        <div>
          <p className="text-slate-500 text-xs font-black uppercase tracking-[0.6em] mb-10">Connect Via Email</p>
          <a href="mailto:kriauratech@gmail.com" className="text-2xl md:text-5xl font-black text-white hover:text-purple-400 transition-all underline decoration-purple-600 underline-offset-[24px] decoration-4 break-all tracking-tighter">
            kriauratech@gmail.com
          </a>
        </div>
        <div className="pt-20 border-t border-white/10">
          <p className="text-slate-500 text-xs font-black uppercase tracking-[0.4em] mb-4">Official Entity</p>
          <p className="text-3xl font-black text-white tracking-tight uppercase">KriAura Integrated Technologies</p>
        </div>
      </div>
    </div>
  </section>
);

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => { 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }, [activePage, selectedService]);

  const renderContent = () => {
    if (selectedService) return <ServiceDetail service={selectedService} onBack={() => setSelectedService(null)} />;
    switch (activePage) {
      case 'home': return <Home setActivePage={setActivePage} />;
      case 'about': return <About />;
      case 'services': return <ServicesGrid onSelectService={setSelectedService} />;
      case 'startups': return <Startups />;
      case 'mentorship': return <Mentorship />;
      case 'workshops': return <Workshops />;
      case 'contact': return <Contact />;
      default: return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-purple-500/30 overflow-x-hidden selection:text-white">
      <AuraBackground />
      <Navbar activePage={selectedService ? 'services' : activePage} setActivePage={p => { setSelectedService(null); setActivePage(p); }} />
      <main className="relative z-10 pt-20">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}
