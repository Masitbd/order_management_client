import React from "react";
import InfoCard from "./InfoCard";
import { FaTruck } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTags } from "react-icons/fa";

const Info = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-6 ">
      <InfoCard
        cardTitle={
          <span className="text-white text-2xl">SHIPING WORLDWIDE</span>
        }
        cardDescription="You will have to fulfil all kinds of requirements to be an FF Partner such as Having over 1,00,000 subscribers and more than 80% of their content should be related to Free Fire and so on."
        bgColor="bg-teal-400 "
        img={<FaTruck className="w-16 ml-8 mt-8 mr-6" />}
      />
      <InfoCard
        cardTitle={
          <span className="text-white text-2xl">PARTNERSHIP PROGRAM</span>
        }
        cardDescription="With shipping services from over 300 ports, Twill enables small and medium-sized businesses to grow, by simplifying their end-to-end logistics. "
        bgColor="bg-sky-400"
        img={<FaUser className="w-16 ml-8 mt-8 mr-6" />}
      />
      <InfoCard
        cardTitle={
          <span className="text-white text-2xl">DISCOUNTS & SALE</span>
        }
        cardDescription=" Find Quality Products & Contact Verified Suppliers! Reduce Costs With Factory Direct Sourcing. Low MOQ, OEM/ODM Available. Source Now! Trade Assurance. Logistics Service. Production Monitoring"
        bgColor="bg-yellow-500"
        img={<FaTags className="w-16 ml-8 mt-8 mr-6" />}
      />
    </div>
  );
};

export default Info;
