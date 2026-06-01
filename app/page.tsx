"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Leaf,
  Droplets,
  Heart,
  Recycle,
  ChevronLeft,
  ChevronRight,
  Star,
  Menu,
  X,
  Send,
  ArrowRight,
  Shield,
  Zap,
  Users,
  Globe,
  CheckCircle2,
  Package,
  Coffee,
  Pill,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

/* ───────────────────────────────────────────────────────────────
   DAMUBOOST LANDING PAGE — Complete Production-Ready Component
   Next.js App Router | React | TypeScript | Tailwind CSS
   ─────────────────────────────────────────────────────────────── */

/* ── Color Palette (extracted from brand logo) ──
   Primary/Accent: Deep Blood Red (#B30000 → #D62828)
   Secondary: Organic Green (#2D6A4F → #40916C)
   Neutral Dark: Charcoal (#1A1A1A)
   Neutral Light: Soft Cream (#FDFBF7 / #F4F1EA)
   ─────────────────────────────────────────────── */

/* ═══════════════════════════════════════════════════════════════
   SECTION 1: NAVIGATION BAR — Glassmorphism Fixed Header
   ═══════════════════════════════════════════════════════════════ */

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Products", href: "#products" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-nav shadow-lg shadow-black/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto section-padding flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/damu-boost-logo.png"
              alt="DAMUBOOST Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-bold text-lg md:text-xl tracking-tight text-damu-charcoal">
            DAMU<span className="text-damu-red">BOOST</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-damu-charcoal/70 hover:text-damu-red-dark transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-damu-red transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#products" className="btn-primary text-sm">
            Order Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-damu-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-xl transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-damu-charcoal/80 hover:text-damu-red-dark py-2 border-b border-gray-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary text-center text-sm mt-2"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 2: HERO — Split-Screen with Graphical Composition
   ═══════════════════════════════════════════════════════════════ */

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] gradient-radial-red opacity-60" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] gradient-radial-green opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-damu-red/5 to-damu-green/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto section-padding w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Side — Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-damu-red/10 border border-damu-red/20 text-damu-red-dark text-sm font-medium">
              <Sparkles size={16} />
              <span>Premium Organic Food Supplement</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-damu-charcoal">Nature.</span>
              <br />
              <span className="text-gradient-red">Strength.</span>
              <br />
              <span className="text-damu-charcoal">You.</span>
            </h1>

            <p className="text-lg md:text-xl text-damu-charcoal/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              An innovative, eco-conscious organic food supplement crafted from
              locally sourced natural ingredients to support healthy hemoglobin
              levels and fight fatigue naturally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#products" className="btn-primary flex items-center justify-center gap-2">
                Shop Products
                <ArrowRight size={18} />
              </a>
              <a href="#features" className="btn-secondary flex items-center justify-center gap-2">
                Learn Our Story
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 text-sm text-damu-charcoal/60">
                <Shield size={18} className="text-damu-green" />
                <span>100% Organic</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-damu-charcoal/60">
                <Leaf size={18} className="text-damu-green" />
                <span>Locally Sourced</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-damu-charcoal/60">
                <Heart size={18} className="text-damu-red" />
                <span>Clinically Tested</span>
              </div>
            </div>
          </div>

          {/* Right Side — Graphical Product Composition */}
          <div className="relative h-[400px] md:h-[600px] lg:h-[700px] w-full flex items-center justify-center">
            {/* Abstract geometric background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-full h-full max-w-lg mx-auto">
                {/* Large red circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-damu-red/20 to-damu-red/5 blur-xl" />
                {/* Green accent ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full border border-damu-green/20" />
              </div>
            </div>

            {/* Actual Hero Image */}
            <div className="relative z-10 w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 animate-float">
              <Image 
                src="/images/hero-bg.png" 
                alt="Damuboost Product Display" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm font-bold uppercase tracking-wider mb-1 opacity-90">100% Organic</p>
                <p className="text-xl font-display font-bold">Natural Vitality Boost</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-damu-charcoal/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-damu-charcoal/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 3: FEATURES & BENEFITS — Visual Grid with Icons
   ═══════════════════════════════════════════════════════════════ */

function FeaturesSection() {
  const features = [
    {
      icon: Leaf,
      title: "100% Organic & Locally Sourced",
      description:
        "Transforming underutilized natural resources and medicinal plants into functional health support. Every ingredient is carefully selected from local organic farms.",
      color: "green",
      bgGradient: "from-damu-green/10 to-damu-green/5",
      iconColor: "text-damu-green-dark",
    },
    {
      icon: Droplets,
      title: "Supports Healthy Hb Levels",
      description:
        "Formulated specifically to fight iron deficiency, low blood levels, and nutrition-related fatigue. Our unique blend targets hemoglobin production naturally.",
      color: "red",
      bgGradient: "from-damu-red/10 to-damu-red/5",
      iconColor: "text-damu-red-dark",
    },
    {
      icon: Heart,
      title: "Empowering Reproductive Health",
      description:
        "Providing essential preventative nutritional care for women of reproductive age, adolescent girls, and blood donors. Supporting maternal health through prevention.",
      color: "green",
      bgGradient: "from-damu-green/10 to-damu-green/5",
      iconColor: "text-damu-green-dark",
    },
    {
      icon: Recycle,
      title: "Eco-Conscious & Sustainable",
      description:
        "Utilizing community-driven, affordable, and sustainable processing methods. We believe in healing both people and the planet through responsible practices.",
      color: "red",
      bgGradient: "from-damu-red/10 to-damu-red/5",
      iconColor: "text-damu-red-dark",
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-damu-green/10 text-damu-green-dark text-sm font-semibold mb-4">
            Why Choose DAMUBOOST
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-damu-charcoal mb-6">
            Nature&apos;s Power,{" "}
            <span className="text-gradient-green">Scientifically Crafted</span>
          </h2>
          <p className="text-lg text-damu-charcoal/60 leading-relaxed">
            Every DAMUBOOST product is a testament to our commitment to natural
            wellness, sustainable sourcing, and transformative health outcomes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 card-hover overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.bgGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon size={28} className={feature.iconColor} />
                </div>

                <h3 className="text-xl font-bold text-damu-charcoal mb-3 group-hover:text-damu-charcoal transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-damu-charcoal/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner accent */}
              <div
                className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br ${feature.bgGradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 4: PRODUCT SHOWCASE — Two Product Cards with Hover
   ═══════════════════════════════════════════════════════════════ */

function ProductsSection() {
  const products = [
    {
      image: "/images/product-1.png",
      icon: Coffee,
      title: "DAMUBOOST Organic Herbal Tea",
      tagline: "Supports Energy, Immunity & General Well-Being",
      bullets: [
        "100% Organic Ingredients",
        "Rich in Antioxidants",
        "Promotes General Vitality",
      ],
      color: "green",
      accentBg: "bg-damu-green/10",
      accentText: "text-damu-green-dark",
      accentBorder: "border-damu-green/20",
      buttonClass: "btn-secondary",
      price: "$24.99",
    },
    {
      image: "/images/product-2.png",
      icon: Pill,
      title: "DAMUBOOST Blood Health Capsules",
      tagline: "Dietary Supplement — 60 Capsules",
      bullets: [
        "Boosts Energy & Reduces Fatigue",
        "Strengthens Immunity",
        "Supports Healthy Blood Levels",
      ],
      color: "red",
      accentBg: "bg-damu-red/10",
      accentText: "text-damu-red-dark",
      accentBorder: "border-damu-red/20",
      buttonClass: "btn-primary",
      price: "$34.99",
    },
  ];

  return (
    <section id="products" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-damu-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-damu-red/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-damu-red/10 text-damu-red-dark text-sm font-semibold mb-4">
            Our Products
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-damu-charcoal mb-6">
            Choose Your{" "}
            <span className="text-gradient-red">Path to Wellness</span>
          </h2>
          <p className="text-lg text-damu-charcoal/60 leading-relaxed">
            Two powerful formulations, one mission: restoring your natural vitality
            through the power of organic nutrition.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-damu-cream rounded-3xl overflow-hidden border border-gray-100 card-hover"
            >
              {/* Product Image Area */}
              <div className={`relative h-64 md:h-72 ${product.accentBg} flex items-center justify-center overflow-hidden`}>
                {/* Decorative circles */}
                <div className="absolute w-48 h-48 rounded-full bg-white/40 blur-xl" />
                <div className="absolute w-32 h-32 rounded-full bg-white/60 blur-lg" />

                {/* Product visual */}
                <div className="relative z-10 w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out p-6">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border border-white/40">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Price badge */}
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                  <span className={`font-bold ${product.accentText}`}>{product.price}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-damu-charcoal mb-2">
                  {product.title}
                </h3>
                <p className={`text-sm font-medium ${product.accentText} mb-4`}>
                  {product.tagline}
                </p>

                <ul className="space-y-3 mb-8">
                  {product.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={20}
                        className={`${product.accentText} flex-shrink-0 mt-0.5`}
                      />
                      <span className="text-sm text-damu-charcoal/70">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full ${product.buttonClass} flex items-center justify-center gap-2`}>
                  Add to Cart
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 5: GALLERY — Product & Lifestyle Gallery
   ═══════════════════════════════════════════════════════════════ */

function GallerySection() {
  const images = [
    "/images/gallery-1.png",
    "/images/gallery-2.png",
    "/images/gallery-3.png",
    "/images/gallery-4.png",
    "/images/product-1.png",
    "/images/product-2.png",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-damu-cream">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-damu-green/10 text-damu-green-dark text-sm font-semibold mb-4">
            Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-damu-charcoal mb-4">
            Moments &amp; Product Shots
          </h2>
          <p className="text-damu-charcoal/60">A selection of our product photography and real-life moments with DAMUBOOST.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <button
              key={src}
              onClick={() => openModal(index)}
              className="relative overflow-hidden rounded-xl group focus:outline-none"
              aria-label={`Open image ${index + 1}`}
            >
              <div className="relative w-full h-48 md:h-56 lg:h-48">
                <Image src={src} alt={`DAMUBOOST gallery ${index + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg" />
              </div>
            </button>
          ))}
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 z-20 bg-white/90 rounded-full p-2 shadow"
                aria-label="Close gallery"
              >
                ✕
              </button>

              <div className="relative w-full h-[70vh] bg-gray-100 rounded-lg overflow-hidden">
                <Image src={images[activeIndex]} alt={`Open image ${activeIndex + 1}`} fill className="object-contain" />

                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow"
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   SECTION 6: TESTIMONIALS — Modern Slider with Reviews
   ═══════════════════════════════════════════════════════════════ */

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Mother of Two",
      avatar: "SM",
      rating: 5,
      text: "After my second pregnancy, I struggled with low energy and anemia. DAMUBOOST capsules changed everything within 6 weeks. My hemoglobin went from 9.2 to 12.8, and I finally have the energy to keep up with my kids!",
      product: "Blood Health Capsules",
    },
    {
      name: "Dr. Amina K.",
      role: "Blood Donor & Physician",
      avatar: "AK",
      rating: 5,
      text: "As a regular blood donor and a doctor, I understand the importance of maintaining healthy iron levels. DAMUBOOST has become my go-to recommendation for patients with mild anemia. The results speak for themselves.",
      product: "Blood Health Capsules",
    },
    {
      name: "Grace O.",
      role: "Adolescent Health Advocate",
      avatar: "GO",
      rating: 5,
      text: "I started the herbal tea during my teenage years when I had constant fatigue. Not only did my energy improve, but my skin cleared up too! The organic ingredients make all the difference. I recommend it to every young woman I know.",
      product: "Organic Herbal Tea",
    },
    {
      name: "Patricia N.",
      role: "Working Professional",
      avatar: "PN",
      rating: 5,
      text: "Long hours at the office left me exhausted. The DAMUBOOST tea is now part of my morning ritual. It tastes amazing, gives me sustained energy without jitters, and I love knowing it's 100% organic and locally sourced.",
      product: "Organic Herbal Tea",
    },
    {
      name: "Esther W.",
      role: "Postpartum Recovery",
      avatar: "EW",
      rating: 5,
      text: "Postpartum anemia was debilitating. My midwife recommended DAMUBOOST, and within two months, my blood levels were back to normal. I feel like myself again. This product is a blessing for new mothers.",
      product: "Blood Health Capsules",
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, testimonials.length]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prev = () => goTo((currentIndex - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((currentIndex + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-to-b from-damu-cream to-white relative">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-damu-green/10 text-damu-green-dark text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-damu-charcoal mb-6">
            Stories of{" "}
            <span className="text-gradient-green">Transformation</span>
          </h2>
          <p className="text-lg text-damu-charcoal/60">
            Real women, real results. Hear how DAMUBOOST has restored energy,
            boosted hemoglobin, and transformed lives.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/5 border border-gray-100">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 p-8 md:p-12"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-damu-red to-damu-red-dark flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {testimonial.avatar}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className="fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      <p className="text-lg md:text-xl text-damu-charcoal/80 leading-relaxed mb-6 italic">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div>
                          <p className="font-bold text-damu-charcoal">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-damu-charcoal/50">
                            {testimonial.role}
                          </p>
                        </div>
                        <div className="hidden sm:block w-px h-8 bg-gray-200" />
                        <span className="inline-block px-3 py-1 rounded-full bg-damu-green/10 text-damu-green-dark text-xs font-semibold">
                          {testimonial.product}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-damu-charcoal hover:text-damu-red-dark hover:shadow-xl transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-damu-charcoal hover:text-damu-red-dark hover:shadow-xl transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-damu-red"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 6: CONTACT FORM & FOOTER
   ═══════════════════════════════════════════════════════════════ */

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    productInterest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "", productInterest: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Contact Info */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-damu-red/10 text-damu-red-dark text-sm font-semibold mb-4">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-damu-charcoal mb-6">
              Let&apos;s Start Your{" "}
              <span className="text-gradient-red">Wellness Journey</span>
            </h2>
            <p className="text-lg text-damu-charcoal/60 mb-10 leading-relaxed">
              Have questions about our products, ingredients, or how DAMUBOOST can
              support your health goals? We&apos;d love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-damu-red/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-damu-red-dark" />
                </div>
                <div>
                  <p className="font-semibold text-damu-charcoal">Email Us</p>
                  <p className="text-damu-charcoal/60">hello@damuboost.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-damu-green/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-damu-green-dark" />
                </div>
                <div>
                  <p className="font-semibold text-damu-charcoal">Call Us</p>
                  <p className="text-damu-charcoal/60">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-damu-red/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-damu-red-dark" />
                </div>
                <div>
                  <p className="font-semibold text-damu-charcoal">Visit Us</p>
                  <p className="text-damu-charcoal/60">
                    123 Wellness Avenue, Organic District
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="bg-damu-cream rounded-3xl p-8 md:p-10 border border-gray-100 shadow-lg">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-damu-green/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-damu-green-dark" />
                </div>
                <h3 className="text-2xl font-bold text-damu-charcoal mb-2">
                  Message Sent!
                </h3>
                <p className="text-damu-charcoal/60">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-damu-charcoal mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-damu-red focus:ring-2 focus:ring-damu-red/20 outline-none transition-all duration-300"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-damu-charcoal mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-damu-red focus:ring-2 focus:ring-damu-red/20 outline-none transition-all duration-300"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="productInterest"
                    className="block text-sm font-semibold text-damu-charcoal mb-2"
                  >
                    Product Interest
                  </label>
                  <select
                    id="productInterest"
                    value={formData.productInterest}
                    onChange={(e) =>
                      setFormData({ ...formData, productInterest: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-damu-red focus:ring-2 focus:ring-damu-red/20 outline-none transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Select a product...</option>
                    <option value="herbal-tea">Organic Herbal Tea</option>
                    <option value="blood-capsules">Blood Health Capsules</option>
                    <option value="both">Both Products</option>
                    <option value="wholesale">Wholesale / Partnership</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-damu-charcoal mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-damu-red focus:ring-2 focus:ring-damu-red/20 outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 7: FOOTER
   ═══════════════════════════════════════════════════════════════ */

function Footer() {
  return (
    <footer className="bg-damu-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/damu-boost-logo.png"
                  alt="DAMUBOOST"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="font-bold text-xl">
                DAMU<span className="text-damu-red">BOOST</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Advancing maternal health through preventive healthcare rather than
              curative pathways. Nature-powered wellness for every body.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-damu-red transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-damu-red transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-damu-red transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#" },
                { label: "Features", href: "#features" },
                { label: "Products", href: "#products" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-damu-red transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#products"
                  className="text-white/60 hover:text-damu-red transition-colors duration-300 text-sm"
                >
                  Organic Herbal Tea
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-white/60 hover:text-damu-red transition-colors duration-300 text-sm"
                >
                  Blood Health Capsules
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-damu-red transition-colors duration-300 text-sm"
                >
                  Bundle Deals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-damu-red transition-colors duration-300 text-sm"
                >
                  Subscription Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-4">
              Subscribe for wellness tips, exclusive offers, and new product updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-damu-red focus:outline-none text-sm"
              />
              <button className="px-4 py-2.5 bg-damu-red rounded-lg hover:bg-damu-red-light transition-colors duration-300">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} DAMUBOOST. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Shipping Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE — Assembles All Sections
   ═══════════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
