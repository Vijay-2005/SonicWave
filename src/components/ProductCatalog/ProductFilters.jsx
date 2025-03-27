import React from 'react';
import { motion } from 'framer-motion';

const ProductFilters = ({ filters, onCategoryChange, onPriceChange, onFeatureChange, onReset }) => {
  return (
    <motion.aside 
      className="filters"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="filter-section">
        <h3>Categories</h3>
        <ul className="category-filters">
          <li>
            <input 
              type="checkbox" 
              id="headphones" 
              name="category" 
              value="headphones"
              checked={filters.categories.headphones}
              onChange={(e) => onCategoryChange('headphones', e.target.checked)}
            />
            <label htmlFor="headphones">Headphones</label>
          </li>
          <li>
            <input 
              type="checkbox" 
              id="speakers" 
              name="category" 
              value="speakers"
              checked={filters.categories.speakers}
              onChange={(e) => onCategoryChange('speakers', e.target.checked)}
            />
            <label htmlFor="speakers">Speakers</label>
          </li>
          <li>
            <input 
              type="checkbox" 
              id="earbuds" 
              name="category" 
              value="earbuds"
              checked={filters.categories.earbuds}
              onChange={(e) => onCategoryChange('earbuds', e.target.checked)}
            />
            <label htmlFor="earbuds">Earbuds</label>
          </li>
          <li>
            <input 
              type="checkbox" 
              id="accessories" 
              name="category" 
              value="accessories"
              checked={filters.categories.accessories}
              onChange={(e) => onCategoryChange('accessories', e.target.checked)}
            />
            <label htmlFor="accessories">Accessories</label>
          </li>
        </ul>
      </div>

      <div className="filter-section">
        <h3>Price Range</h3>
        <div className="price-slider">
          <input 
            type="range" 
            min="0" 
            max="1000" 
            value={filters.priceRange} 
            className="slider" 
            id="priceRange"
            onChange={(e) => onPriceChange(parseInt(e.target.value))}
          />
          <div className="price-values">
            <span>$0</span>
            <span id="priceValue">${filters.priceRange === 1000 ? '1000+' : filters.priceRange}</span>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h3>Features</h3>
        <ul className="feature-filters">
          <li>
            <input 
              type="checkbox" 
              id="wireless" 
              name="feature" 
              value="wireless"
              checked={filters.features.wireless}
              onChange={(e) => onFeatureChange('wireless', e.target.checked)}
            />
            <label htmlFor="wireless">Wireless</label>
          </li>
          <li>
            <input 
              type="checkbox" 
              id="noiseCancelling" 
              name="feature" 
              value="noiseCancelling"
              checked={filters.features.noiseCancelling}
              onChange={(e) => onFeatureChange('noiseCancelling', e.target.checked)}
            />
            <label htmlFor="noiseCancelling">Noise Cancelling</label>
          </li>
          <li>
            <input 
              type="checkbox" 
              id="highRes" 
              name="feature" 
              value="highRes"
              checked={filters.features.highRes}
              onChange={(e) => onFeatureChange('highRes', e.target.checked)}
            />
            <label htmlFor="highRes">Hi-Res Audio</label>
          </li>
          <li>
            <input 
              type="checkbox" 
              id="waterproof" 
              name="feature" 
              value="waterproof"
              checked={filters.features.waterproof}
              onChange={(e) => onFeatureChange('waterproof', e.target.checked)}
            />
            <label htmlFor="waterproof">Waterproof</label>
          </li>
        </ul>
      </div>

      <button id="resetFilters" className="btn secondary-btn" onClick={onReset}>
        Reset Filters
      </button>
    </motion.aside>
  );
};

export default ProductFilters;
