"use client";

import { useEffect, useRef } from "react";

// Declare Google Maps types
declare global {
  interface Window {
    google: typeof google;
  }
}

interface OfficeLocation {
  name: string;
  region: string;
  lat: number;
  lng: number;
  address: string;
  type: "head" | "branch" | "manufacturing";
}

interface OfficeMapProps {
  apiKey: string;
}

const OfficeMap = ({ apiKey }: OfficeMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  const officeLocations: OfficeLocation[] = [
    // Head Office
    {
      name: "Head Office",
      region: "Gurugram (DLF Cyber City)",
      lat: 28.4946,
      lng: 77.0888,
      address:
        "DLF Epitome Tower, Building No. 5, 18 Floor, Tower-B, DLF Cyber City, Phase III, Gurugram, Haryana – 122002",
      type: "head",
    },
    // Northern Region Branches
    {
      name: "Chandigarh",
      region: "Northern Region",
      lat: 30.639,
      lng: 76.8229,
      address: "Pabhat, Zirakpur",
      type: "branch",
    },
    {
      name: "Ludhiana",
      region: "Northern Region",
      lat: 30.8884,
      lng: 75.7973,
      address: "Ferozpur Road, Gurudev Nagar",
      type: "branch",
    },
    {
      name: "Jaipur",
      region: "Northern Region",
      lat: 26.9132,
      lng: 75.8106,
      address: "Ganpati Plaza, M.I. Road",
      type: "branch",
    },
    {
      name: "Lucknow",
      region: "Northern Region",
      lat: 26.7874,
      lng: 80.889,
      address: "Transport Nagar",
      type: "branch",
    },
    {
      name: "Budgam, Jammu & Kashmir",
      region: "Northern Region",
      lat: 34.004,
      lng: 74.7449,
      address: "Nowgam Wanpora Road",
      type: "branch",
    },
    // Eastern Region Branches
    {
      name: "Kolkata",
      region: "Eastern Region",
      lat: 22.5676,
      lng: 88.3473,
      address: "Radha Bazar Lane",
      type: "branch",
    },
    {
      name: "Guwahati",
      region: "Eastern Region",
      lat: 26.1158,
      lng: 91.7921,
      address: "Basistha, Kamrup M",
      type: "branch",
    },
    {
      name: "Raipur, Chhattisgarh",
      region: "Eastern Region",
      lat: 21.2514,
      lng: 81.6296,
      address: "Ganj Para, New Raipur",
      type: "branch",
    },
    // Southern Region Branches
    {
      name: "Kochi",
      region: "Southern Region",
      lat: 10.005,
      lng: 76.3066,
      address: "Palarivattom",
      type: "branch",
    },
    {
      name: "Secunderabad, Hyderabad",
      region: "Southern Region",
      lat: 17.4735,
      lng: 78.503,
      address: "Karkhana, Gunrock Enclave",
      type: "branch",
    },
    {
      name: "Pune",
      region: "Southern Region",
      lat: 18.48,
      lng: 73.8567,
      address: "Parvati Area",
      type: "branch",
    },
    // Western Region Branch
    {
      name: "Rajkot",
      region: "Western Region",
      lat: 22.2734,
      lng: 70.7513,
      address: "Raiya Road, Sadguru Park",
      type: "branch",
    },
    // Manufacturing Units
    {
      name: "Plant 1 - RIICO Industrial Area",
      region: "Manufacturing Units",
      lat: 28.2055,
      lng: 76.8606,
      address:
        "A-115, RIICO Industrial Area, Phase-1, Bhiwadi – 301019, District Alwar",
      type: "manufacturing",
    },
    {
      name: "Plant 2 - Kaharani Industrial Area",
      region: "Manufacturing Units",
      lat: 28.1887,
      lng: 76.8464,
      address:
        "A-6A, Kaharani Industrial Area, Bhiwadi – 301019, District Alwar",
      type: "manufacturing",
    },
    {
      name: "Plant 3 - Salarpur Industrial Area",
      region: "Manufacturing Units",
      lat: 28.1815,
      lng: 76.843,
      address:
        "SP4-134, Industrial Area, Salarpur, Bhiwadi – 301019, District Alwar",
      type: "manufacturing",
    },
  ];

  const getMarkerIcon = (type: string) => {
    const baseIcon = {
      url:
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(`
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" fill="${
            type === "head"
              ? "#2563eb"
              : type === "manufacturing"
              ? "#dc2626"
              : "#059669"
          }" stroke="white" stroke-width="2"/>
          <text x="20" y="25" text-anchor="middle" fill="white" font-family="Arial" font-size="16" font-weight="bold">${
            type === "head" ? "H" : type === "manufacturing" ? "M" : "B"
          }</text>
        </svg>
      `),
      scaledSize: new google.maps.Size(40, 40),
      anchor: new google.maps.Point(20, 20),
    };
    return baseIcon;
  };

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return;

      const map = new google.maps.Map(mapRef.current, {
        zoom: 5,
        center: { lat: 25.0, lng: 77.0 }, // Center of India
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#333333" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
          },
        ],
      });

      mapInstanceRef.current = map;

      // Create markers for each office
      officeLocations.forEach((office) => {
        const marker = new google.maps.Marker({
          position: { lat: office.lat, lng: office.lng },
          map: map,
          title: office.name,
          icon: getMarkerIcon(office.type),
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 20px; max-width: 250px;">
              <h3 style="margin: -20px 0 8px 0; color: #1f2937; font-weight: bold; font-size: 16px;">
                ${office.name}
              </h3>
              <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 12px; font-weight: 500;">
                ${office.region}
              </p>
              <p style="margin: 0 0 8px 0; color: #374151; font-size: 14px; line-height: 1.4;">
                ${office.address}
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=${office.lat},${office.lng}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn"
                style="margin-bottom: 8px !important; "
                onmouseover="this.style.backgroundColor='#1d4ed8'"
                onmouseout="this.style.backgroundColor='#2563eb'"
              >
                View on Google Maps
              </a>
            </div>
          `,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      });

      // Fit map to show all markers
      const bounds = new google.maps.LatLngBounds();
      officeLocations.forEach((office) => {
        bounds.extend(new google.maps.LatLng(office.lat, office.lng));
      });
      map.fitBounds(bounds);
    };

    // Load Google Maps script if not already loaded
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, [ apiKey , officeLocations ]);

  return (
    <div className="w-full h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default OfficeMap;
