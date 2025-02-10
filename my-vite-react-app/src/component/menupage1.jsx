import React from "react";
import "./Categories.css";

const categories = [
  { name: "Restaurants", icon: "🍽️" },
  { name: "Hotels", icon: "🏨" },
  { name: "Beauty Spa", icon: "💆" },
  { name: "Home Decor", icon: "🛋️" },
  { name: "Wedding Planning", icon: "💒", special: true },
  { name: "Education", icon: "🎓" },
  { name: "Rent & Hire", icon: "🔧" },
  { name: "Hospitals", icon: "🏥" },
  { name: "Contractors", icon: "👷" },
  { name: "Pet Shops", icon: "🏡" },
  { name: "PG/Hostels", icon: "🛏️" },
  { name: "Estate Agent", icon: "👨‍💼" },
  { name: "Dentists", icon: "🦷" },
  { name: "Gym", icon: "🏋️" },
  { name: "Loans", icon: "💰" },
  { name: "Event Organisers", icon: "🎉" },
  { name: "Driving Schools", icon: "🚗" },
  { name: "Packers & Movers", icon: "🚛" },
  { name: "Courier Service", icon: "📦" },
  { name: "Popular Categories", icon: "☰", highlight: true },
];

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`category-item ${category.special ? "highlight" : ""} ${category.highlight ? "bordered" : ""}`}
        >
          <div className="icon">{category.icon}</div>
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
