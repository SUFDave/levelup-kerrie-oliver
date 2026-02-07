import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const content = (
    <div className="group relative flex items-center p-3 sm:p-4 md:p-[18px] bg-white/5 backdrop-blur-md border border-white/10 rounded-[22px] sm:rounded-[24px] shadow-xl hover:shadow-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:border-cyan-300/60 hover:ring-1 hover:ring-cyan-400/40 hover:shadow-cyan-500/30 overflow-hidden">
      {/* Left Thumbnail */}
      <div className="relative flex-shrink-0 w-[70px] h-[70px] sm:w-[86px] sm:h-[86px] md:w-[92px] md:h-[92px] overflow-hidden rounded-2xl bg-slate-950 border border-slate-800/30">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
        />
        {product.badge && (
          <div className="absolute top-1.5 left-1.5 bg-cyan-600 text-white text-[8px] font-black px-2 py-0.5 rounded-md shadow-lg uppercase tracking-widest leading-none z-10">
            {product.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-grow ml-3 sm:ml-4 mr-2">
        <h3 className="text-[14px] sm:text-[16px] md:text-[17px] font-bold text-white leading-tight mb-1 group-hover:text-cyan-300 transition-colors">
          {product.title}
        </h3>
        <p className="text-[11px] sm:text-[13px] text-slate-300 line-clamp-2 leading-snug font-medium opacity-80">
          {product.subtitle}
        </p>
      </div>

      {/* Price / Arrow */}
      <div className="flex flex-col items-end justify-center gap-2 flex-shrink-0 min-w-[55px]">
        {product.price ? (
          <span className="text-[12px] sm:text-[13px] md:text-[14px] font-black text-cyan-100 bg-cyan-400/20 px-3 sm:px-3.5 py-1.5 rounded-xl border border-cyan-300/30 shadow-inner">
            {product.price}
          </span>
        ) : (
          <div className="w-8 h-8 rounded-full bg-slate-800/40 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all">
            <ChevronRight className="text-slate-500 group-hover:text-cyan-300 transition-colors transform group-hover:translate-x-0.5" size={18} />
          </div>
        )}
      </div>
    </div>
  );

  if (product.linkType === 'internal') {
    return (
      <Link to={product.link} className="block">
        {content}
      </Link>
    );
  }

  return (
    <a href={product.link} className="block" target="_blank" rel="noreferrer">
      {content}
    </a>
  );
};

export default ProductCard;
