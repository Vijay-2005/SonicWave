import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductFilters from './ProductFilters';
import ProductGrid from './ProductGrid';
import ProductControls from './ProductControls';
import { CartContext } from '../../contexts/CartContext';
import products from '../../data/products';
import '../../styles/ProductCatalog.css';

const ProductCatalog = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { addToCart } = useContext(CartContext);
  const [filters, setFilters] = useState({
    categories: {
      headphones: true,
      speakers: true,
      earbuds: true,
      accessories: true
    },
    priceRange: 1000,
    features: {
      wireless: false,
      noiseCancelling: false,
      highRes: false,
      waterproof: false
    }
  });
  const [sortOption, setSortOption] = useState('featured');
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize category filters based on URL parameter
  useEffect(() => {
    if (categoryName) {
      setFilters(prev => ({
        ...prev,
        categories: {
          headphones: categoryName === 'headphones',
          speakers: categoryName === 'speakers',
          earbuds: categoryName === 'earbuds',
          accessories: categoryName === 'accessories'
        }
      }));
    }
  }, [categoryName]);
  
  useEffect(() => {
    // Simulate loading for better UX
    setIsLoading(true);
    
    // Filter products based on selected filters
    let result = products.filter(product => {
      // Category filter
      if (!filters.categories[product.category]) return false;
      
      // Price filter
      if (product.price > filters.priceRange) return false;
      
      // Features filter
      const activeFeatures = Object.entries(filters.features)
        .filter(([_, isActive]) => isActive)
        .map(([feature]) => feature);
      
      if (activeFeatures.length > 0) {
        if (!activeFeatures.some(feature => product.features.includes(feature))) {
          return false;
        }
      }
      
      return true;
    });
    
    // Sort products
    switch(sortOption) {
      case 'newest':
        result = [...result].sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'priceAsc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      default: // featured - no sorting needed
        break;
    }
    
    // Add a small delay to show loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    setFilteredProducts(result);
  }, [filters, sortOption]);
  
  const handleCategoryChange = (category, checked) => {
    setFilters(prev => ({
      ...prev,
      categories: {
        ...prev.categories,
        [category]: checked
      }
    }));
  };
  
  const handlePriceChange = (value) => {
    setFilters(prev => ({
      ...prev,
      priceRange: value
    }));
  };
  
  const handleFeatureChange = (feature, checked) => {
    setFilters(prev => ({
      ...prev,
      features: {
        ...prev.features,
        [feature]: checked
      }
    }));
  };
  
  const handleSortChange = (option) => {
    setSortOption(option);
  };
  
  const resetFilters = () => {
    setFilters({
      categories: {
        headphones: true,
        speakers: true,
        earbuds: true,
        accessories: true
      },
      priceRange: 1000,
      features: {
        wireless: false,
        noiseCancelling: false,
        highRes: false,
        waterproof: false
      }
    });
    setSortOption('featured');
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    // Show a toast notification
    showNotification(`${product.name} added to cart!`);
  };
  
  const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.className = 'toast-notification';
    notification.innerText = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
      setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 2000);
    }, 100);
  };

  return (
    <section id="products" className="product-catalog">
      <div className="container">
        <h2 className="section-title">
          {categoryName ? `${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}` : 'Our Products'}
        </h2>
        
        <div className="catalog-layout">
          <ProductFilters 
            filters={filters}
            onCategoryChange={handleCategoryChange}
            onPriceChange={handlePriceChange}
            onFeatureChange={handleFeatureChange}
            onReset={resetFilters}
          />
          
          <div className="product-display">
            <ProductControls 
              productCount={filteredProducts.length}
              totalCount={products.length}
              sortOption={sortOption}
              onSortChange={handleSortChange}
            />
            
            {isLoading ? (
              <div className="loading-spinner">
                <div className="spinner"></div>
                <p>Loading products...</p>
              </div>
            ) : (
              <ProductGrid 
                products={filteredProducts} 
                onAddToCart={handleAddToCart}
              />
            )}
            
            {filteredProducts.length === 0 && !isLoading && (
              <div className="no-products-found">
                <h3>No products match your filters</h3>
                <button className="btn-primary" onClick={resetFilters}>
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
