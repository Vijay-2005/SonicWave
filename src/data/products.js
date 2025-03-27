const products = [
  {
    id: 1,
    name: "SonicPro Wireless Headphones",
    category: "headphones",
    price: 299.99,
    rating: 4.8,
    date: "2023-05-15",
    features: ["wireless", "noiseCancelling", "highRes"],
    colors: ["Black", "Silver", "Blue"],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Premium wireless headphones with active noise cancellation and Hi-Res audio certification. Experience studio-quality sound with 40 hours of battery life."
  },
  {
    id: 2,
    name: "BassDrop Bluetooth Speaker",
    category: "speakers",
    price: 199.99,
    rating: 4.5,
    date: "2023-06-20",
    features: ["wireless", "waterproof"],
    colors: ["Black", "Red", "Green"],
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Powerful portable speaker with deep bass and 360° sound. Waterproof design makes it perfect for outdoor adventures."
  },
  {
    id: 3,
    name: "AirBuds Pro",
    category: "earbuds",
    price: 149.99,
    rating: 4.7,
    date: "2023-07-10",
    features: ["wireless", "noiseCancelling", "waterproof"],
    colors: ["White", "Black", "Pink"],
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "True wireless earbuds with active noise cancellation and sweat resistance. Designed for comfort during long listening sessions."
  },
  {
    id: 4,
    name: "Audiophile DAC",
    category: "accessories",
    price: 129.99,
    rating: 4.6,
    date: "2023-04-05",
    features: ["highRes"],
    colors: ["Silver", "Black"],
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "High-resolution digital-to-analog converter for audiophiles. Unveil details in your music that you've never heard before."
  },
  {
    id: 5,
    name: "SoundSphere 360",
    category: "speakers",
    price: 399.99,
    rating: 4.9,
    date: "2023-03-15",
    features: ["wireless", "highRes"],
    colors: ["Black", "White"],
    image: "https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Revolutionary spherical speaker with 360° sound projection. Advanced room acoustics adjustment technology for perfectly balanced sound."
  },
  {
    id: 6,
    name: "BassLine In-Ear Monitors",
    category: "earbuds",
    price: 249.99,
    rating: 4.7,
    date: "2023-01-20",
    features: ["highRes", "noiseCancelling"],
    colors: ["Clear", "Blue", "Black"],
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Professional in-ear monitors with custom-tuned drivers. Detachable cable system allows for wireless or wired use."
  }
];

export default products;
