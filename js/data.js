const MOCK_CARS = [
  {
    id: 1,
    make: "Tesla",
    model: "Model 3 Long Range",
    year: 2023,
    price: 45900,
    mileage: 12500,
    fuel: "Electric",
    transmission: "Automatic",
    location: "Berlin, DE",
    sellerType: "Dealer",
    sellerName: "EV Autohouse Berlin",
    sellerRating: 4.8,
    image: "../assets/listing_car.png",
    images: ["../assets/listing_car.png"],
    features: ["Autopilot", "Premium Audio", "Heated Seats", "Panorama Roof"],
    badge: "Great Price"
  },
  {
    id: 2,
    make: "BMW",
    model: "X5 xDrive40i",
    year: 2021,
    price: 58500,
    mileage: 42000,
    fuel: "Gasoline",
    transmission: "Automatic",
    location: "Munich, DE",
    sellerType: "Private",
    sellerName: "Michael S.",
    sellerRating: 5.0,
    image: "../assets/listing_car.png",
    images: ["../assets/listing_car.png"],
    features: ["M-Sport Package", "Laser Lights", "Head-Up Display"],
    badge: "Top Seller"
  },
  {
    id: 3,
    make: "Audi",
    model: "A6 Avant 50 TDI",
    year: 2020,
    price: 39800,
    mileage: 78000,
    fuel: "Diesel",
    transmission: "Automatic",
    location: "Hamburg, DE",
    sellerType: "Dealer",
    sellerName: "Audi Zentrum Hamburg",
    sellerRating: 4.9,
    image: "../assets/listing_car.png",
    images: ["../assets/listing_car.png"],
    features: ["S-Line", "Matrix LED", "Tow Hitch", "Bang & Olufsen"],
    badge: null
  },
  {
    id: 4,
    make: "Volkswagen",
    model: "Golf VIII 1.5 eTSI",
    year: 2022,
    price: 24500,
    mileage: 21000,
    fuel: "Hybrid",
    transmission: "Automatic",
    location: "Frankfurt, DE",
    sellerType: "Dealer",
    sellerName: "Autohaus Schmidt",
    sellerRating: 4.5,
    image: "../assets/listing_car.png",
    images: ["../assets/listing_car.png"],
    features: ["Navigation", "IQ.Light", "Virtual Cockpit"],
    badge: "New Arrival"
  },
  {
    id: 5,
    make: "Mercedes-Benz",
    model: "C-Class C220d",
    year: 2021,
    price: 41200,
    mileage: 35000,
    fuel: "Diesel",
    transmission: "Automatic",
    location: "Stuttgart, DE",
    sellerType: "Private",
    sellerName: "Sarah M.",
    sellerRating: 4.7,
    image: "../assets/listing_car.png",
    images: ["../assets/listing_car.png"],
    features: ["AMG Line", "MBUX", "Burmester Surround", "Ambient Lighting"],
    badge: "Low Mileage"
  },
  {
    id: 6,
    make: "Porsche",
    model: "911 Carrera 4S",
    year: 2020,
    price: 118000,
    mileage: 18000,
    fuel: "Gasoline",
    transmission: "Automatic",
    location: "Düsseldorf, DE",
    sellerType: "Dealer",
    sellerName: "Premium Cars NRW",
    sellerRating: 4.9,
    image: "../assets/listing_car.png",
    images: ["../assets/listing_car.png"],
    features: ["Sport Chrono", "Sport Exhaust", "PASM", "Bose Audio"],
    badge: "Certified Pre-Owned"
  }
];

// Helper to format currency
const formatPrice = (price) => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price);
};

// Helper to format numbers like mileage
const formatNumber = (num) => {
  return new Intl.NumberFormat('de-DE').format(num);
};

// Export to window if not using modules directly in some places
window.db = {
  cars: MOCK_CARS,
  formatPrice,
  formatNumber
};
