"use client";

import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import Image from "next/image";

interface City {
  name: string;
  address: string[];
  phone: string;
  buttonText?: string;
  image: string;
}

interface Region {
  title: string;
  cities: City[];
}

export default function Accordion({ regions }: { regions: Region[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 space-y-12">
      {regions.map((region, i) => {
        const isOpen = openIndex === i;

        return (
          <div key={i} className="border-b pb-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-serif text-green-900">{region.title}</h2>

              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="p-3 border rounded-full hover:bg-gray-100 transition"
              >
                {isOpen ? (
                  <IoRemove size={22} className="text-green-700" />
                ) : (
                  <IoAdd size={22} className="text-green-700" />
                )}
              </button>
            </div>

            {/* Expanded content */}
            {isOpen && (
              <div className="mt-10 grid grid-cols-12 gap-10">

                {/* LEFT COLUMN — list of cities */}
                <div className="col-span-3 flex flex-col space-y-4 text-lg">
                  {region.cities.map((city, idx) => {
                    const active = idx === selectedCityIndex;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedCityIndex(idx)}
                        className={`text-left hover:text-green-700 transition ${
                          active ? "text-green-800 font-semibold" : "text-gray-600"
                        }`}
                      >
                        {city.name}
                      </button>
                    );
                  })}
                </div>

                {/* MIDDLE COLUMN — city details */}
                <div className="col-span-4">
                  <h3 className="text-3xl font-serif text-green-900 mb-6">
                    {region.cities[selectedCityIndex].name}
                  </h3>

                  <div className="mb-6">
                    <p className="uppercase text-gray-500 tracking-wide text-sm">
                      Location
                    </p>
                    {region.cities[selectedCityIndex].address.map((line, l) => (
                      <p key={l} className="text-gray-700">{line}</p>
                    ))}
                  </div>

                  <div className="mb-6">
                    <p className="uppercase text-gray-500 tracking-wide text-sm">
                      Contact
                    </p>
                    <a
                      href={`tel:${region.cities[selectedCityIndex].phone}`}
                      className="text-green-700 underline"
                    >
                      {region.cities[selectedCityIndex].phone}
                    </a>
                  </div>


                  {region.cities[selectedCityIndex].buttonText &&
                  <button className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-900 transition">
                    {region.cities[selectedCityIndex].buttonText}
                  </button>
                  }
                </div>

                {/* RIGHT COLUMN — image */}
                <div className="col-span-5">
                  <div className="w-full h-[420px] relative rounded-lg overflow-hidden">
                    <Image
                      src={region.cities[selectedCityIndex].image}
                      alt="city"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
