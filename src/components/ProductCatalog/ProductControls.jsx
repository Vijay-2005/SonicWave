import React from 'react';
import { motion } from 'framer-motion';

const ProductControls = ({ productCount, totalCount, sortOption, onSortChange }) => {
  return (
    <motion.div 
      className="product-controls"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="showing-results">
        <span id="resultCount">
          {productCount === totalCount 
            ? 'Showing all products' 
            : `Showing ${productCount} of ${totalCount} products`}
        </span>
      </div>
      <div className="sorting">
        <label htmlFor="sortOptions">Sort by:</label>
        <select 
          id="sortOptions"
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="rating">Customer Rating</option>
        </select>
      </div>
    </motion.div>
  );
};

export default ProductControls;
