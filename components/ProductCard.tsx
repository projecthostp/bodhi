import React from 'react';
import { assetUrl } from '../utils/paths';
import { Product } from '../types';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // For pre-encoded paths (with %20), we need to add the base path prefix without double encoding
  const src = product.image.startsWith('/')
    ? (product.image.includes('%20')
        ? `/bodhi${product.image}`
        : assetUrl(product.image))
    : product.image;
  return (
    <div className="group cursor-pointer">
      {/* Image Container with Reveal Logic */}
      <div className="aspect-[4/5] w-full overflow-hidden bg-white/20 relative img-hover-zoom">
        <motion.img 
          src={src} 
          alt={product.name}
          className="w-full h-full object-contain" 
        />
        {/* Subtle overlay that fades on hover */}
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-1000" />
      </div>

      {/* Info Section - Highly Minimalist */}
      <div className="mt-8 space-y-3">
        <div className="flex justify-between items-baseline">
          <h3 className="text-lg font-serif italic text-primary group-hover:translate-x-1 transition-transform duration-700">
            {product.name}
          </h3>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-30">
            {product.category.replace('_', ' ')}
          </span>
        </div>
        
        <div className="h-px w-0 group-hover:w-full bg-primary/10 transition-all duration-1000 ease-expo-out" />
        
        <p className="text-[11px] text-primary/60 leading-relaxed font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-100">
          {product.description}
        </p>
      </div>
    </div>
  );
};