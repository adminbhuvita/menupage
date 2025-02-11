import React from "react";
import "./CategoryPage.css";

import beautySpa from "./images/beauty-spa.png";
import contractors from "./images/contractors.png";
import courierService from "./images/courier-service.png";
import dentists from "./images/dentists.png";
import drivingSchools from "./images/driving-schools.png";
import education from "./images/education.png";
import estateAgent from "./images/estate-agent.png";
import eventOrganisers from "./images/event-oranisers.png";
import gym from "./images/gym.png";
import homeDecor from "./images/home-decor.png";
import hospitals from "./images/hospitals.png";
import hotels from "./images/hotels.png";
import loans from "./images/loans.png";
import packersMovers from "./images/packers-moves.png";
import petShops from "./images/pet-shops.png";
import pgHostels from "./images/pg-hostels.png";
import pop from "./images/pop.png";
import rentHire from "./images/rent-hire.png";
import restaurants from "./images/restaurants.png";
import weddingPlanning from "./images/wedding-planning.png";

const categories = [
  { name: "Restaurants", image: restaurants },
  { name: "Hotels", image: hotels },
  { name: "Beauty Spa", image: beautySpa },
  { name: "Home Decor", image: homeDecor },
  { name: "Wedding Planning", image: weddingPlanning },
  { name: "Education", image: education },
  { name: "Rent & Hire", image: rentHire },
  { name: "Hospitals", image: hospitals },
  { name: "Contractors", image: contractors },
  { name: "Pet Shops", image: petShops },
  { name: "PG/Hostels", image: pgHostels },
  { name: "Estate Agent", image: estateAgent },
  { name: "Dentists", image: dentists },
  { name: "Gym", image: gym },
  { name: "Loans", image: loans },
  { name: "Event Organisers", image: eventOrganisers },
  { name: "Driving Schools", image: drivingSchools },
  { name: "Packers & Movers", image: packersMovers },
  { name: "Courier Service", image: courierService },
  { name: "Popular Categories", image: pop },
];

const CategoryPage = () => {
  return (
    <div>
      <div className="category-container">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category ${
              category.name === "Popular Categories" ? "popular-category" : ""
            }`}
          >
            <img
              src={category.image}
              alt={category.name}
              className={
                category.name === "Popular Categories" ? "popular-img" : ""
              }
            />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;