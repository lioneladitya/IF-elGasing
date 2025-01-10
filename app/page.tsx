// File: app/page.tsx
import React from 'react';
import DestinationCard from './components/DestinationCard';
import Destination from './components/Destination';
import Features from './components/Features';
import Hero from './components/Hero';
import Sponsor from './components/Sponsor';
import Testimonials from './components/Testimonials';
import TravelPoint from './components/TravelPoint';
import { destinationUrls } from './constants/destinationUrls';

export default function Home() {
  return (
    <>
      <Hero />
      <Sponsor />
      <DestinationCard
        img="/rift.jpg"
        place="The Great Rift Valley"
        country="Nairobi, Kenya"
        price="$550.16"
        rating="4.8"
        url={destinationUrls['The Great Rift Valley']} // Properti URL yang dibutuhkan
      />
      <TravelPoint />
      <Features />
      <Testimonials />
    </>
  );
}
