
import React from 'react';
import { 
  Armchair, 
  Table, 
  Coffee, 
  Users,
  Layout,
  UtensilsCrossed,
  Sofa
} from 'lucide-react';
import { Category, Product, Project } from './types';

export const CATEGORY_CONFIG: Record<Category, { label: string; icon: React.ReactNode; subCategories?: { id: string; label: string }[] }> = {
  sofas: { 
    label: "Sofas", 
    icon: <Sofa />,
  },
  chairs: { 
    label: "Chairs", 
    icon: <Armchair />, 
    subCategories: [
      { id: 'lounge', label: 'Lounge Chairs' },
      { id: 'cafe', label: 'Cafe Chairs' }
    ]
  },
  coffee_table: { label: "Coffee Table", icon: <Coffee /> },
  conference_table: { label: "Conference Table", icon: <Users /> },
  high_table: { label: "High Table", icon: <Layout /> },
  cafe_table: { label: "Cafe Table", icon: <UtensilsCrossed /> },
  bar_stools: { label: "Bar Stools", icon: <Table /> },
};

export const HERO_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2800&auto=format&fit=crop",
    title: "The Art of Living",
    subtitle: "Timeless designs crafted with precision and architectural integrity."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2800&auto=format&fit=crop",
    title: "Architectural Precision",
    subtitle: "Redefining commercial and residential spaces with bespoke craftsmanship."
  }
];

export const GALLERY_PROJECTS: Project[] = [
  {
      name: "The Pavilion Office",
      description: "A minimalist workspace focusing on natural light and open collaboration.",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop"
  },
  {
      name: "Modernist Villa",
      description: "Full residential fit-out with custom lounge chairs and coffee tables.",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop"
  }
];

export const PRODUCTS_DATA: Product[] = [
    // Sofas
    { id: 's-01', category: 'sofas', name: "Premium Sofa 1", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (1).jpg" },
    { id: 's-02', category: 'sofas', name: "Premium Sofa 2", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (2).jpg" },
    { id: 's-03', category: 'sofas', name: "Premium Sofa 3", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (3).jpg" },
    { id: 's-04', category: 'sofas', name: "Premium Sofa 4", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (4).jpg" },
    { id: 's-05', category: 'sofas', name: "Premium Sofa 5", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (5).jpg" },
    { id: 's-06', category: 'sofas', name: "Premium Sofa 6", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (6).jpg" },
    { id: 's-07', category: 'sofas', name: "Premium Sofa 7", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (7).jpg" },
    { id: 's-08', category: 'sofas', name: "Premium Sofa 8", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (8).jpg" },
    { id: 's-09', category: 'sofas', name: "Premium Sofa 9", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (9).jpg" },
    { id: 's-10', category: 'sofas', name: "Premium Sofa 10", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (10).jpg" },
    { id: 's-11', category: 'sofas', name: "Premium Sofa 11", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (11).jpg" },
    { id: 's-12', category: 'sofas', name: "Premium Sofa 12", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (12).jpg" },
    { id: 's-13', category: 'sofas', name: "Premium Sofa 13", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (13).jpg" },
    { id: 's-14', category: 'sofas', name: "Premium Sofa 14", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (14).jpg" },
    { id: 's-15', category: 'sofas', name: "Premium Sofa 15", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (15).jpg" },
    { id: 's-16', category: 'sofas', name: "Premium Sofa 16", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (16).jpg" },
    { id: 's-17', category: 'sofas', name: "Premium Sofa 17", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (17).jpg" },
    { id: 's-18', category: 'sofas', name: "Premium Sofa 18", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (18).jpg" },
    { id: 's-19', category: 'sofas', name: "Premium Sofa 19", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (19).jpg" },
    { id: 's-20', category: 'sofas', name: "Premium Sofa 20", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (20).jpg" },
    { id: 's-21', category: 'sofas', name: "Premium Sofa 21", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (21).jpg" },
    { id: 's-22', category: 'sofas', name: "Premium Sofa 22", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (22).jpg" },
    { id: 's-23', category: 'sofas', name: "Premium Sofa 23", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (23).jpg" },
    { id: 's-24', category: 'sofas', name: "Premium Sofa 24", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (24).jpg" },
    { id: 's-25', category: 'sofas', name: "Premium Sofa 25", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (25).jpg" },
    { id: 's-26', category: 'sofas', name: "Premium Sofa 26", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (26).jpg" },
    { id: 's-27', category: 'sofas', name: "Premium Sofa 27", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (27).jpg" },
    { id: 's-28', category: 'sofas', name: "Premium Sofa 28", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (28).jpg" },
    { id: 's-29', category: 'sofas', name: "Premium Sofa 29", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (29).jpg" },
    { id: 's-30', category: 'sofas', name: "Premium Sofa 30", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (30).jpg" },
    { id: 's-31', category: 'sofas', name: "Premium Sofa 31", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (31).jpg" },
    { id: 's-32', category: 'sofas', name: "Premium Sofa 32", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (32).jpg" },
    { id: 's-33', category: 'sofas', name: "Premium Sofa 33", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (33).jpg" },
    { id: 's-34', category: 'sofas', name: "Premium Sofa 34", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (34).jpg" },
    { id: 's-35', category: 'sofas', name: "Premium Sofa 35", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (35).jpg" },
    { id: 's-36', category: 'sofas', name: "Premium Sofa 36", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (36).jpg" },
    { id: 's-37', category: 'sofas', name: "Premium Sofa 37", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (37).jpg" },
    { id: 's-38', category: 'sofas', name: "Premium Sofa 38", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (38).jpg" },
    { id: 's-39', category: 'sofas', name: "Premium Sofa 39", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (39).jpg" },
    { id: 's-40', category: 'sofas', name: "Premium Sofa 40", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (40).jpg" },
    { id: 's-41', category: 'sofas', name: "Premium Sofa 41", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (41).jpg" },
    { id: 's-42', category: 'sofas', name: "Premium Sofa 42", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (42).jpg" },
    { id: 's-43', category: 'sofas', name: "Premium Sofa 43", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (43).jpg" },
    { id: 's-44', category: 'sofas', name: "Premium Sofa 44", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (44).jpg" },
    { id: 's-45', category: 'sofas', name: "Premium Sofa 45", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (45).jpg" },
    { id: 's-46', category: 'sofas', name: "Premium Sofa 46", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (46).jpg" },
    { id: 's-47', category: 'sofas', name: "Premium Sofa 47", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (47).jpg" },
    { id: 's-48', category: 'sofas', name: "Premium Sofa 48", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (48).jpg" },
    { id: 's-49', category: 'sofas', name: "Premium Sofa 49", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (49).jpg" },
    { id: 's-50', category: 'sofas', name: "Premium Sofa 50", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (50).jpg" },
    { id: 's-51', category: 'sofas', name: "Premium Sofa 51", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (51).jpg" },
    { id: 's-52', category: 'sofas', name: "Premium Sofa 52", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (52).jpg" },
    { id: 's-53', category: 'sofas', name: "Premium Sofa 53", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (53).jpg" },
    { id: 's-54', category: 'sofas', name: "Premium Sofa 54", description: "Elegant and comfortable seating for living spaces.", image: "/sofa images/sofa (54).jpg" },
    // Chairs - Lounge Subcategory
    { 
        id: 'l-01', 
        category: 'chairs', 
        subCategory: 'lounge', 
        name: "Executive Lounge Chair", 
        description: "Luxurious comfort with premium upholstery and elegant design.", 
        image: "/lounge chair images/lounge chr (1).jpg" 
    },
    { 
        id: 'l-02', 
        category: 'chairs', 
        subCategory: 'lounge', 
        name: "Contemporary Lounge", 
        description: "Modern aesthetics with exceptional comfort for any space.", 
        image: "/lounge chair images/lounge chr (2).jpg" 
    },
    { 
        id: 'l-03', 
        category: 'chairs', 
        subCategory: 'lounge', 
        name: "Classic Comfort Chair", 
        description: "Timeless design perfect for relaxation and style.", 
        image: "/lounge chair images/lounge chr (3).jpg" 
    },
    { 
        id: 'l-04', 
        category: 'chairs', 
        subCategory: 'lounge', 
        name: "Designer Lounge Seat", 
        description: "Architectural form meets supreme comfort.", 
        image: "/lounge chair images/lounge chr (4).jpg" 
    },
    { 
        id: 'l-05', 
        category: 'chairs', 
        subCategory: 'lounge', 
        name: "Premium Relaxation Chair", 
        description: "High-end materials and craftsmanship for ultimate comfort.", 
        image: "/lounge chair images/lounge chr (5).jpg" 
    },
    { 
        id: 'l-06', 
        category: 'chairs', 
        subCategory: 'lounge', 
        name: "Elegant Lounge Chair", 
        description: "Sophisticated styling for modern living spaces.", 
        image: "/lounge chair images/lounge chr (6).jpg" 
    },
    { 
        id: 'l-07', 
        category: 'chairs', 
        subCategory: 'lounge', 
        name: "Luxury Seating Chair", 
        description: "Opulent design with exceptional ergonomic support.", 
        image: "/lounge chair images/lounge chr (7).jpg" 
    },
    { 
        id: 'l-08', 
        category: 'chairs', 
        subCategory: 'lounge', 
        name: "Modern Comfort Lounge", 
        description: "Sleek lines and plush seating for contemporary interiors.", 
        image: "/lounge chair images/lounge chr (8).jpg" 
    },
    { 
        id: 'l-09', 
        category: 'chairs', 
        subCategory: 'lounge', 
        name: "Signature Lounge Chair", 
        description: "Distinctive design that makes a statement.", 
        image: "/lounge chair images/lounge chr (9).jpg" 
    },
    { 
        id: 'l-10', 
        category: 'chairs', 
        subCategory: 'lounge', 
        name: "Professional Lounge Seat", 
        description: "Perfect for offices and executive spaces.", 
        image: "/lounge chair images/lounge chr (10).jpg" 
    },
    { 
        id: 'l-11', 
        category: 'chairs', 
        subCategory: 'lounge', 
        name: "Artisan Lounge Chair", 
        description: "Handcrafted excellence with attention to detail.", 
        image: "/lounge chair images/lounge chr (11).jpg" 
    },
    { 
        id: 'l-12', 
        category: 'chairs', 
        subCategory: 'lounge', 
        name: "Minimalist Lounge", 
        description: "Clean design with maximum comfort.", 
        image: "/lounge chair images/lounge chr (12).jpg" 
    },
    { 
        id: 'l-13', 
        category: 'chairs', 
        subCategory: 'lounge', 
        name: "Upscale Lounge Chair", 
        description: "Premium seating for discerning clients.", 
        image: "/lounge chair images/lounge chr (13).jpg" 
    },
    { 
        id: 'l-14', 
        category: 'chairs', 
        subCategory: 'lounge', 
        name: "Stylish Comfort Chair", 
        description: "Fashion-forward design with ergonomic excellence.", 
        image: "/lounge chair images/lounge chr (14).jpg" 
    },
    { 
        id: 'l-15', 
        category: 'chairs', 
        subCategory: 'lounge', 
        name: "Deluxe Lounge Seat", 
        description: "First-class comfort and style combined.", 
        image: "/lounge chair images/lounge chr (15).jpg" 
    },
    { 
        id: 'l-16', 
        category: 'chairs', 
        subCategory: 'lounge', 
        name: "Elite Lounge Chair", 
        description: "Top-tier quality for prestigious spaces.", 
        image: "/lounge chair images/lounge chr (16).jpg" 
    },
    // Chairs - Cafe Subcategory
    { 
        id: 'c-02', 
        category: 'chairs', 
        subCategory: 'cafe', 
        name: "Classic Cafe Chair", 
        description: "Timeless design perfect for restaurants and cafes.", 
        image: "/cafe chair images/cafe 1 (1).jpg" 
    },
    { 
        id: 'c-03', 
        category: 'chairs', 
        subCategory: 'cafe', 
        name: "Modern Bistro Chair", 
        description: "Contemporary styling with ergonomic comfort.", 
        image: "/cafe chair images/cafe 1 (2).jpg" 
    },
    { 
        id: 'c-04', 
        category: 'chairs', 
        subCategory: 'cafe', 
        name: "Elegant Dining Chair", 
        description: "Sophisticated design for upscale dining spaces.", 
        image: "/cafe chair images/cafe 1 (3).jpg" 
    },
    { 
        id: 'c-05', 
        category: 'chairs', 
        subCategory: 'cafe', 
        name: "Industrial Cafe Seat", 
        description: "Durable metal frame with comfortable seating.", 
        image: "/cafe chair images/cafe 1 (4).jpg" 
    },
    { 
        id: 'c-06', 
        category: 'chairs', 
        subCategory: 'cafe', 
        name: "Vintage Style Chair", 
        description: "Classic charm with modern durability.", 
        image: "/cafe chair images/cafe 1 (5).jpg" 
    },
    { 
        id: 'c-07', 
        category: 'chairs', 
        subCategory: 'cafe', 
        name: "Minimalist Cafe Chair", 
        description: "Clean lines and understated elegance.", 
        image: "/cafe chair images/cafe 1 (6).jpg" 
    },
    { 
        id: 'c-08', 
        category: 'chairs', 
        subCategory: 'cafe', 
        name: "Urban Bistro Seat", 
        description: "Perfect blend of style and functionality.", 
        image: "/cafe chair images/cafe 1 (7).jpg" 
    },
    { 
        id: 'c-09', 
        category: 'chairs', 
        subCategory: 'cafe', 
        name: "Contemporary Dining Chair", 
        description: "Modern aesthetics with superior comfort.", 
        image: "/cafe chair images/cafe 1 (8).jpg" 
    },
    { 
        id: 'c-10', 
        category: 'chairs', 
        subCategory: 'cafe', 
        name: "Premium Cafe Chair", 
        description: "High-quality materials and craftsmanship.", 
        image: "/cafe chair images/cafe 1 (9).jpg" 
    },
    { 
        id: 'c-11', 
        category: 'chairs', 
        subCategory: 'cafe', 
        name: "Designer Bistro Chair", 
        description: "Architectural design for modern spaces.", 
        image: "/cafe chair images/cafe 1 (10).jpg" 
    },
    { 
        id: 'c-12', 
        category: 'chairs', 
        subCategory: 'cafe', 
        name: "Artisan Cafe Seat", 
        description: "Handcrafted quality for discerning clients.", 
        image: "/cafe chair images/cafe 1 (11).jpg" 
    },
    { 
        id: 'c-13', 
        category: 'chairs', 
        subCategory: 'cafe', 
        name: "Sleek Dining Chair", 
        description: "Streamlined design with excellent support.", 
        image: "/cafe chair images/cafe 1 (12).jpg" 
    },
    { 
        id: 'c-14', 
        category: 'chairs', 
        subCategory: 'cafe', 
        name: "Professional Cafe Chair", 
        description: "Built for commercial dining environments.", 
        image: "/cafe chair images/cafe 1 (13).jpg" 
    },
    { 
        id: 'c-15', 
        category: 'chairs', 
        subCategory: 'cafe', 
        name: "Stylish Bistro Seat", 
        description: "Fashion-forward design for trendy venues.", 
        image: "/cafe chair images/cafe 1 (14).jpg" 
    },
    { 
        id: 'c-16', 
        category: 'chairs', 
        subCategory: 'cafe', 
        name: "Luxury Dining Chair", 
        description: "Premium comfort and elegant styling.", 
        image: "/cafe chair images/cafe 1 (15).jpg" 
    },
    { 
        id: 'c-17', 
        category: 'chairs', 
        subCategory: 'cafe', 
        name: "Comfort Cafe Chair", 
        description: "Ergonomically designed for extended seating.", 
        image: "/cafe chair images/cafe 1 (16).jpg" 
    },
    { 
        id: 'c-18', 
        category: 'chairs', 
        subCategory: 'cafe', 
        name: "Signature Bistro Chair", 
        description: "Distinctive design that stands out.", 
        image: "/cafe chair images/cafe 1 (17).jpg" 
    },
    { 
        id: 'c-19', 
        category: 'chairs', 
        subCategory: 'cafe', 
        name: "Essential Cafe Seat", 
        description: "Reliable and stylish seating solution.", 
        image: "/cafe chair images/cafe 1 (18).jpg" 
    },
    { 
        id: 'c-20', 
        category: 'chairs', 
        subCategory: 'cafe', 
        name: "Elite Dining Chair", 
        description: "Top-tier quality for premium establishments.", 
        image: "/cafe chair images/cafe 1 (19).jpg" 
    },
    // Coffee Tables
    { 
        id: 'ct-01', 
        category: 'coffee_table', 
        name: "Contemporary Round Table", 
        description: "Modern round coffee table with minimalist design.", 
        image: "/coffee table images/CFFY  (1).jpg" 
    },
    { 
        id: 'ct-02', 
        category: 'coffee_table', 
        name: "Elegant White Table", 
        description: "Sleek white top with clean silhouette.", 
        image: "/coffee table images/CFFY  (2).jpg" 
    },
    { 
        id: 'ct-03', 
        category: 'coffee_table', 
        name: "Black Pedestal Table", 
        description: "Bold pedestal base with refined finish.", 
        image: "/coffee table images/CFFY  (3).jpg" 
    },
    { 
        id: 'ct-04', 
        category: 'coffee_table', 
        name: "Dual Tone Table", 
        description: "Contrasting tones for a distinctive look.", 
        image: "/coffee table images/CFFY  (4).jpg" 
    },
    { 
        id: 'ct-05', 
        category: 'coffee_table', 
        name: "Classic Round Table", 
        description: "Timeless round form for versatile interiors.", 
        image: "/coffee table images/CFFY  (5).jpg" 
    },
    { 
        id: 'ct-06', 
        category: 'coffee_table', 
        name: "Compact Bistro Table", 
        description: "Space-savvy design with sturdy base.", 
        image: "/coffee table images/CFFY  (6).jpg" 
    },
    { 
        id: 'ct-07', 
        category: 'coffee_table', 
        name: "Matte Finish Table", 
        description: "Understated matte surface with elegant lines.", 
        image: "/coffee table images/CFFY  (7).jpg" 
    },
    { 
        id: 'ct-08', 
        category: 'coffee_table', 
        name: "Premium Cafe Table", 
        description: "High-quality top with refined pedestal.", 
        image: "/coffee table images/CFFY  (8).jpg" 
    },
    // Conference Tables
    { 
        id: 'cf-01', 
        category: 'conference_table', 
        name: "Executive Conference Table", 
        description: "Premium finish with integrated cable management.", 
        image: "/conference table images/cff (1).jpg" 
    },
    { 
        id: 'cf-02', 
        category: 'conference_table', 
        name: "Modern Boardroom Table", 
        description: "Sleek profile designed for collaborative meetings.", 
        image: "/conference table images/cff (2).jpg" 
    },
    { 
        id: 'cf-03', 
        category: 'conference_table', 
        name: "Signature Conference Table", 
        description: "Distinctive base with a refined tabletop.", 
        image: "/conference table images/cff (3).jpg" 
    },
    { 
        id: 'cf-04', 
        category: 'conference_table', 
        name: "Collaborative Meeting Table", 
        description: "Durable surface optimized for daily use.", 
        image: "/conference table images/cff (4).jpg" 
    },
    { 
        id: 'cf-05', 
        category: 'conference_table', 
        name: "Premium Conference Desk", 
        description: "High-end materials and timeless design.", 
        image: "/conference table images/cff (5).jpg" 
    },
    { 
        id: 'cf-06', 
        category: 'conference_table', 
        name: "Minimal Board Table", 
        description: "Clean lines with an understated presence.", 
        image: "/conference table images/cff (6).jpg" 
    },
    { 
        id: 'cf-07', 
        category: 'conference_table', 
        name: "Contemporary Meeting Table", 
        description: "Balanced proportions for modern workspaces.", 
        image: "/conference table images/cff (7).jpg" 
    },
    { 
        id: 'cf-08', 
        category: 'conference_table', 
        name: "Professional Conference Table", 
        description: "Robust build with a sleek aesthetic.", 
        image: "/conference table images/cff (8).jpg" 
    },
    // High Tables
    { 
        id: 'ht-01', 
        category: 'high_table', 
        name: "Modern Standing Table", 
        description: "Contemporary high table for collaborative spaces and standing meetings.", 
        image: "/high table images/high tbl (1).jpg" 
    },
    { 
        id: 'ht-02', 
        category: 'high_table', 
        name: "Executive Bar Height Table", 
        description: "Premium standing table for executive areas and networking zones.", 
        image: "/high table images/high tbl (2).jpg" 
    },
    { 
        id: 'ht-03', 
        category: 'high_table', 
        name: "Sleek Counter Table", 
        description: "Elegant high-top table with minimalist design.", 
        image: "/high table images/high tbl (3).jpg" 
    },
    { 
        id: 'ht-04', 
        category: 'high_table', 
        name: "Professional Standing Desk", 
        description: "Durable high table perfect for active work environments.", 
        image: "/high table images/high tbl (4).jpg" 
    },
    { 
        id: 'ht-05', 
        category: 'high_table', 
        name: "Premium Collaboration Table", 
        description: "High-end standing table for premium corporate spaces.", 
        image: "/high table images/high tbl (5).jpg" 
    },
    // Cafe Tables
    { 
        id: 'cat-01', 
        category: 'cafe_table', 
        name: "Classic Round Cafe Table", 
        description: "Timeless design perfect for cafes and restaurants.", 
        image: "/cafe table images/cafe tbl (1).jpg" 
    },
    { 
        id: 'cat-02', 
        category: 'cafe_table', 
        name: "Modern Round Table", 
        description: "Contemporary styling for trendy cafe spaces.", 
        image: "/cafe table images/cafe tbl (2).jpg" 
    },
    { 
        id: 'cat-03', 
        category: 'cafe_table', 
        name: "Bistro Dining Table", 
        description: "Versatile cafe table suitable for any setting.", 
        image: "/cafe table images/cafe tbl (3).jpg" 
    },
    { 
        id: 'cat-04', 
        category: 'cafe_table', 
        name: "Elegant Cafe Table", 
        description: "Refined finish with a sturdy pedestal base.", 
        image: "/cafe table images/cafe tbl (4).jpg" 
    },
    { 
        id: 'cat-05', 
        category: 'cafe_table', 
        name: "Premium Bistro Table", 
        description: "High-quality construction for hospitality venues.", 
        image: "/cafe table images/cafe tbl (1).jpg" 
    },
    // Bar Stools
    { 
        id: 'bs-01', 
        category: 'bar_stools', 
        name: "Classic Metal Stool", 
        description: "Durable bar stool with vintage appeal and comfort.", 
        image: "/bar stool images/bar stool (1).jpg" 
    },
    { 
        id: 'bs-02', 
        category: 'bar_stools', 
        name: "Modern Counter Stool", 
        description: "Sleek design perfect for contemporary bars and kitchens.", 
        image: "/bar stool images/bar stool (2).jpg" 
    },
    { 
        id: 'bs-03', 
        category: 'bar_stools', 
        name: "Industrial Style Seat", 
        description: "Robust construction with timeless industrial aesthetics.", 
        image: "/bar stool images/bar stool (3).jpg" 
    },
    { 
        id: 'bs-04', 
        category: 'bar_stools', 
        name: "Premium Bar Chair", 
        description: "High-end stool with superior ergonomic support.", 
        image: "/bar stool images/bar stool (4).jpg" 
    },
    { 
        id: 'bs-05', 
        category: 'bar_stools', 
        name: "Elegant Counter Seat", 
        description: "Refined finish for upscale hospitality spaces.", 
        image: "/bar stool images/bar stool (5).jpg" 
    },
    { 
        id: 'bs-06', 
        category: 'bar_stools', 
        name: "Contemporary Loft Stool", 
        description: "Modern profile with excellent stability and comfort.", 
        image: "/bar stool images/bar stool (6).jpg" 
    },
    { 
        id: 'bs-07', 
        category: 'bar_stools', 
        name: "Professional Bar Stool", 
        description: "Commercial-grade construction for busy venues.", 
        image: "/bar stool images/bar stool (7).jpg" 
    },
    { 
        id: 'bs-08', 
        category: 'bar_stools', 
        name: "Signature Counter Stool", 
        description: "Distinctive design that complements any interior.", 
        image: "/bar stool images/bar stool (8).jpg" 
    },
    { 
        id: 'bs-09', 
        category: 'bar_stools', 
        name: "Luxury Bar Seat", 
        description: "Premium craftsmanship for discerning establishments.", 
        image: "/bar stool images/bar stool (9).jpg" 
    },
    { 
        id: 'bs-10', 
        category: 'bar_stools', 
        name: "Executive Stool", 
        description: "High-performance seating for upscale bars and lounges.", 
        image: "/bar stool images/bar stool (10).jpg" 
    }
];

export const ALL_COLLECTION_PRODUCTS: Product[] = [
    { id: 'ac-1', category: 'chairs', name: "Collection Piece 1", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (1).jpg" },
    { id: 'ac-2', category: 'chairs', name: "Collection Piece 2", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (2).jpg" },
    { id: 'ac-3', category: 'chairs', name: "Collection Piece 3", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (3).jpg" },
    { id: 'ac-4', category: 'chairs', name: "Collection Piece 4", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (4).jpg" },
    { id: 'ac-5', category: 'chairs', name: "Collection Piece 5", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (5).jpg" },
    { id: 'ac-6', category: 'chairs', name: "Collection Piece 6", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (6).jpg" },
    { id: 'ac-7', category: 'chairs', name: "Collection Piece 7", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (7).jpg" },
    { id: 'ac-8', category: 'chairs', name: "Collection Piece 8", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (8).jpg" },
    { id: 'ac-9', category: 'chairs', name: "Collection Piece 9", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (9).jpg" },
    { id: 'ac-10', category: 'chairs', name: "Collection Piece 10", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (10).jpg" },
    { id: 'ac-11', category: 'chairs', name: "Collection Piece 11", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (11).jpg" },
    { id: 'ac-12', category: 'chairs', name: "Collection Piece 12", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (12).jpg" },
    { id: 'ac-13', category: 'chairs', name: "Collection Piece 13", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (13).jpg" },
    { id: 'ac-14', category: 'chairs', name: "Collection Piece 14", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (14).jpg" },
    { id: 'ac-15', category: 'chairs', name: "Collection Piece 15", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (15).jpg" },
    { id: 'ac-16', category: 'chairs', name: "Collection Piece 16", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (16).jpg" },
    { id: 'ac-17', category: 'chairs', name: "Collection Piece 17", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (17).jpg" },
    { id: 'ac-18', category: 'chairs', name: "Collection Piece 18", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (18).jpg" },
    { id: 'ac-19', category: 'chairs', name: "Collection Piece 19", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (19).jpg" },
    { id: 'ac-20', category: 'chairs', name: "Collection Piece 20", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (20).jpg" },
    { id: 'ac-21', category: 'chairs', name: "Collection Piece 21", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (21).jpg" },
    { id: 'ac-22', category: 'chairs', name: "Collection Piece 22", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (22).jpg" },
    { id: 'ac-23', category: 'chairs', name: "Collection Piece 23", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (23).jpg" },
    { id: 'ac-24', category: 'chairs', name: "Collection Piece 24", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (24).jpg" },
    { id: 'ac-25', category: 'chairs', name: "Collection Piece 25", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (25).jpg" },
    { id: 'ac-26', category: 'chairs', name: "Collection Piece 26", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (26).jpg" },
    { id: 'ac-27', category: 'chairs', name: "Collection Piece 27", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (27).jpg" },
    { id: 'ac-28', category: 'chairs', name: "Collection Piece 28", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (28).jpg" },
    { id: 'ac-29', category: 'chairs', name: "Collection Piece 29", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (29).jpg" },
    { id: 'ac-30', category: 'chairs', name: "Collection Piece 30", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (30).jpg" },
    { id: 'ac-31', category: 'chairs', name: "Collection Piece 31", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (31).jpg" },
    { id: 'ac-32', category: 'chairs', name: "Collection Piece 32", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (32).jpg" },
    { id: 'ac-33', category: 'chairs', name: "Collection Piece 33", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (33).jpg" },
    { id: 'ac-34', category: 'chairs', name: "Collection Piece 34", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (34).jpg" },
    { id: 'ac-35', category: 'chairs', name: "Collection Piece 35", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (35).jpg" },
    { id: 'ac-36', category: 'chairs', name: "Collection Piece 36", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (36).jpg" },
    { id: 'ac-37', category: 'chairs', name: "Collection Piece 37", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (37).jpg" },
    { id: 'ac-38', category: 'chairs', name: "Collection Piece 38", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (38).jpg" },
    { id: 'ac-39', category: 'chairs', name: "Collection Piece 39", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (39).jpg" },
    { id: 'ac-40', category: 'chairs', name: "Collection Piece 40", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (40).jpg" },
    { id: 'ac-41', category: 'chairs', name: "Collection Piece 41", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (41).jpg" },
    { id: 'ac-42', category: 'chairs', name: "Collection Piece 42", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (42).jpg" },
    { id: 'ac-43', category: 'chairs', name: "Collection Piece 43", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (43).jpg" },
    { id: 'ac-44', category: 'chairs', name: "Collection Piece 44", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (44).jpg" },
    { id: 'ac-45', category: 'chairs', name: "Collection Piece 45", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (45).jpg" },
    { id: 'ac-46', category: 'chairs', name: "Collection Piece 46", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (46).jpg" },
    { id: 'ac-47', category: 'chairs', name: "Collection Piece 47", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (47).jpg" },
    { id: 'ac-48', category: 'chairs', name: "Collection Piece 48", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (48).jpg" },
    { id: 'ac-49', category: 'chairs', name: "Collection Piece 49", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (49).jpg" },
    { id: 'ac-50', category: 'chairs', name: "Collection Piece 50", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (50).jpg" },
    { id: 'ac-51', category: 'chairs', name: "Collection Piece 51", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (51).jpg" },
    { id: 'ac-52', category: 'chairs', name: "Collection Piece 52", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (52).jpg" },
    { id: 'ac-53', category: 'chairs', name: "Collection Piece 53", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (53).jpg" },
    { id: 'ac-54', category: 'chairs', name: "Collection Piece 54", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (54).jpg" },
    { id: 'ac-55', category: 'chairs', name: "Collection Piece 55", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (55).jpg" },
    { id: 'ac-56', category: 'chairs', name: "Collection Piece 56", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (56).jpg" },
    { id: 'ac-57', category: 'chairs', name: "Collection Piece 57", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (57).jpg" },
    { id: 'ac-58', category: 'chairs', name: "Collection Piece 58", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (58).jpg" },
    { id: 'ac-59', category: 'chairs', name: "Collection Piece 59", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (59).jpg" },
    { id: 'ac-60', category: 'chairs', name: "Collection Piece 60", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (60).jpg" },
    { id: 'ac-61', category: 'chairs', name: "Collection Piece 61", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (61).jpg" },
    { id: 'ac-62', category: 'chairs', name: "Collection Piece 62", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (62).jpg" },
    { id: 'ac-63', category: 'chairs', name: "Collection Piece 63", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (63).jpg" },
    { id: 'ac-64', category: 'chairs', name: "Collection Piece 64", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (64).jpg" },
    { id: 'ac-65', category: 'chairs', name: "Collection Piece 65", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (65).jpg" },
    { id: 'ac-66', category: 'chairs', name: "Collection Piece 66", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (66).jpg" },
    { id: 'ac-67', category: 'chairs', name: "Collection Piece 67", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (67).jpg" },
    { id: 'ac-68', category: 'chairs', name: "Collection Piece 68", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (68).jpg" },
    { id: 'ac-69', category: 'chairs', name: "Collection Piece 69", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (69).jpg" },
    { id: 'ac-70', category: 'chairs', name: "Collection Piece 70", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (70).jpg" },
    { id: 'ac-71', category: 'chairs', name: "Collection Piece 71", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (71).jpg" },
    { id: 'ac-72', category: 'chairs', name: "Collection Piece 72", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (72).jpg" },
    { id: 'ac-73', category: 'chairs', name: "Collection Piece 73", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (73).jpg" },
    { id: 'ac-74', category: 'chairs', name: "Collection Piece 74", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (74).jpg" },
    { id: 'ac-75', category: 'chairs', name: "Collection Piece 75", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (75).jpg" },
    { id: 'ac-76', category: 'chairs', name: "Collection Piece 76", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (76).jpg" },
    { id: 'ac-77', category: 'chairs', name: "Collection Piece 77", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (77).jpg" },
    { id: 'ac-78', category: 'chairs', name: "Collection Piece 78", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (78).jpg" },
    { id: 'ac-79', category: 'chairs', name: "Collection Piece 79", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (79).jpg" },
    { id: 'ac-80', category: 'chairs', name: "Collection Piece 80", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (80).jpg" },
    { id: 'ac-81', category: 'chairs', name: "Collection Piece 81", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (81).jpg" },
    { id: 'ac-82', category: 'chairs', name: "Collection Piece 82", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (82).jpg" },
    { id: 'ac-83', category: 'chairs', name: "Collection Piece 83", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (83).jpg" },
    { id: 'ac-84', category: 'chairs', name: "Collection Piece 84", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (84).jpg" },
    { id: 'ac-85', category: 'chairs', name: "Collection Piece 85", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (85).jpg" },
    { id: 'ac-86', category: 'chairs', name: "Collection Piece 86", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (86).jpg" },
    { id: 'ac-87', category: 'chairs', name: "Collection Piece 87", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (87).jpg" },
    { id: 'ac-88', category: 'chairs', name: "Collection Piece 88", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (88).jpg" },
    { id: 'ac-89', category: 'chairs', name: "Collection Piece 89", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (89).jpg" },
    { id: 'ac-90', category: 'chairs', name: "Collection Piece 90", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (90).jpg" },
    { id: 'ac-91', category: 'chairs', name: "Collection Piece 91", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (91).jpg" },
    { id: 'ac-92', category: 'chairs', name: "Collection Piece 92", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (92).jpg" },
    { id: 'ac-93', category: 'chairs', name: "Collection Piece 93", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (93).jpg" },
    { id: 'ac-94', category: 'chairs', name: "Collection Piece 94", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (94).jpg" },
    { id: 'ac-95', category: 'chairs', name: "Collection Piece 95", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (95).jpg" },
    { id: 'ac-96', category: 'chairs', name: "Collection Piece 96", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (96).jpg" },
    { id: 'ac-97', category: 'chairs', name: "Collection Piece 97", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (97).jpg" },
    { id: 'ac-98', category: 'chairs', name: "Collection Piece 98", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (98).jpg" },
    { id: 'ac-99', category: 'chairs', name: "Collection Piece 99", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (99).jpg" },
    { id: 'ac-100', category: 'chairs', name: "Collection Piece 100", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (100).jpg" },
    { id: 'ac-101', category: 'chairs', name: "Collection Piece 101", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (101).jpg" },
    { id: 'ac-102', category: 'chairs', name: "Collection Piece 102", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (102).jpg" },
    { id: 'ac-103', category: 'chairs', name: "Collection Piece 103", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (103).jpg" },
    { id: 'ac-104', category: 'chairs', name: "Collection Piece 104", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (104).jpg" },
    { id: 'ac-105', category: 'chairs', name: "Collection Piece 105", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (105).jpg" },
    { id: 'ac-106', category: 'chairs', name: "Collection Piece 106", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (106).jpg" },
    { id: 'ac-107', category: 'chairs', name: "Collection Piece 107", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (107).jpg" },
    { id: 'ac-108', category: 'chairs', name: "Collection Piece 108", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (108).jpg" },
    { id: 'ac-109', category: 'chairs', name: "Collection Piece 109", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (109).jpg" },
    { id: 'ac-110', category: 'chairs', name: "Collection Piece 110", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (110).jpg" },
    { id: 'ac-111', category: 'chairs', name: "Collection Piece 111", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (111).jpg" },
    { id: 'ac-112', category: 'chairs', name: "Collection Piece 112", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (112).jpg" },
    { id: 'ac-113', category: 'chairs', name: "Collection Piece 113", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (113).jpg" },
    { id: 'ac-114', category: 'chairs', name: "Collection Piece 114", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (114).jpg" },
    { id: 'ac-115', category: 'chairs', name: "Collection Piece 115", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (115).jpg" },
    { id: 'ac-116', category: 'chairs', name: "Collection Piece 116", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (116).jpg" },
    { id: 'ac-117', category: 'chairs', name: "Collection Piece 117", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (117).jpg" },
    { id: 'ac-118', category: 'chairs', name: "Collection Piece 118", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (118).jpg" },
    { id: 'ac-119', category: 'chairs', name: "Collection Piece 119", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (119).jpg" },
    { id: 'ac-120', category: 'chairs', name: "Collection Piece 120", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (120).jpg" },
    { id: 'ac-121', category: 'chairs', name: "Collection Piece 121", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (121).jpg" },
    { id: 'ac-122', category: 'chairs', name: "Collection Piece 122", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (122).jpg" },
    { id: 'ac-123', category: 'chairs', name: "Collection Piece 123", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (123).jpg" },
    { id: 'ac-124', category: 'chairs', name: "Collection Piece 124", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (124).jpg" },
    { id: 'ac-125', category: 'chairs', name: "Collection Piece 125", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (125).jpg" },
    { id: 'ac-126', category: 'chairs', name: "Collection Piece 126", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (126).jpg" },
    { id: 'ac-127', category: 'chairs', name: "Collection Piece 127", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (127).jpg" },
    { id: 'ac-128', category: 'chairs', name: "Collection Piece 128", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (128).jpg" },
    { id: 'ac-129', category: 'chairs', name: "Collection Piece 129", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (129).jpg" },
    { id: 'ac-130', category: 'chairs', name: "Collection Piece 130", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (130).jpg" },
    { id: 'ac-131', category: 'chairs', name: "Collection Piece 131", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (131).jpg" },
    { id: 'ac-132', category: 'chairs', name: "Collection Piece 132", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (132).jpg" },
    { id: 'ac-133', category: 'chairs', name: "Collection Piece 133", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (133).jpg" },
    { id: 'ac-134', category: 'chairs', name: "Collection Piece 134", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (134).jpg" },
    { id: 'ac-135', category: 'chairs', name: "Collection Piece 135", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (135).jpg" },
    { id: 'ac-136', category: 'chairs', name: "Collection Piece 136", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (136).jpg" },
    { id: 'ac-137', category: 'chairs', name: "Collection Piece 137", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (137).jpg" },
    { id: 'ac-138', category: 'chairs', name: "Collection Piece 138", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (138).jpg" },
    { id: 'ac-139', category: 'chairs', name: "Collection Piece 139", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (139).jpg" },
    { id: 'ac-140', category: 'chairs', name: "Collection Piece 140", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (140).jpg" },
    { id: 'ac-141', category: 'chairs', name: "Collection Piece 141", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (141).jpg" },
    { id: 'ac-142', category: 'chairs', name: "Collection Piece 142", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (142).jpg" },
    { id: 'ac-143', category: 'chairs', name: "Collection Piece 143", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (143).jpg" },
    { id: 'ac-144', category: 'chairs', name: "Collection Piece 144", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (144).jpg" },
    { id: 'ac-145', category: 'chairs', name: "Collection Piece 145", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (145).jpg" },
    { id: 'ac-146', category: 'chairs', name: "Collection Piece 146", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (146).jpg" },
    { id: 'ac-147', category: 'chairs', name: "Collection Piece 147", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (147).jpg" },
    { id: 'ac-148', category: 'chairs', name: "Collection Piece 148", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (148).jpg" },
    { id: 'ac-149', category: 'chairs', name: "Collection Piece 149", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (149).jpg" },
    { id: 'ac-150', category: 'chairs', name: "Collection Piece 150", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (150).jpg" },
    { id: 'ac-151', category: 'chairs', name: "Collection Piece 151", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (151).jpg" },
    { id: 'ac-152', category: 'chairs', name: "Collection Piece 152", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (152).jpg" },
    { id: 'ac-153', category: 'chairs', name: "Collection Piece 153", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (153).jpg" },
    { id: 'ac-154', category: 'chairs', name: "Collection Piece 154", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (154).jpg" },
    { id: 'ac-155', category: 'chairs', name: "Collection Piece 155", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (155).jpg" },
    { id: 'ac-156', category: 'chairs', name: "Collection Piece 156", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (156).jpg" },
    { id: 'ac-157', category: 'chairs', name: "Collection Piece 157", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (157).jpg" },
    { id: 'ac-158', category: 'chairs', name: "Collection Piece 158", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (158).jpg" },
    { id: 'ac-159', category: 'chairs', name: "Collection Piece 159", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (159).jpg" },
    { id: 'ac-160', category: 'chairs', name: "Collection Piece 160", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (160).jpg" },
    { id: 'ac-161', category: 'chairs', name: "Collection Piece 161", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (161).jpg" },
    { id: 'ac-162', category: 'chairs', name: "Collection Piece 162", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (162).jpg" },
    { id: 'ac-163', category: 'chairs', name: "Collection Piece 163", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (163).jpg" },
    { id: 'ac-164', category: 'chairs', name: "Collection Piece 164", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (164).jpg" },
    { id: 'ac-165', category: 'chairs', name: "Collection Piece 165", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (165).jpg" },
    { id: 'ac-166', category: 'chairs', name: "Collection Piece 166", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (166).jpg" },
    { id: 'ac-167', category: 'chairs', name: "Collection Piece 167", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (167).jpg" },
    { id: 'ac-168', category: 'chairs', name: "Collection Piece 168", description: "Premium furniture from our complete collection.", image: "/all collection images/all collection (168).jpg" }
];
