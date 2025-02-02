"use client";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Using `next/navigation` for proper client-side routing in Next.js 13+

const API_KEY = "23e25f5edec8";
const API_SECRET = "9cd6f1ccb0";

export default function VINSearch() {
  const [vin, setVin] = useState("");
  const [vinDetails, setVinDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isClient, setIsClient] = useState(false); // State to check if it's running client-side

  const router = useRouter(); // Initialize router for redirection

  useEffect(() => {
    setIsClient(true); // Update the flag to true once client-side rendering is confirmed
    // Check if the user has already searched for a VIN (using localStorage)
    if (localStorage.getItem("vinSearched") === "true") {
      setHasSearched(true);
      // Redirect to the contact page if they've already searched
      router.push("/contact");
    }
  }, [router]);

  const handleVINSearch = async () => {
    if (!vin) {
      setError("Please enter a VIN number.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.vindecoder.com/v1/decode?api_key=${API_KEY}&vin=${vin}&secret=${API_SECRET}`
      );
      const data = await response.json();

      if (data.error) {
        setError("Error fetching VIN details.");
      } else {
        setVinDetails(data);
        // Mark that the user has searched
        localStorage.setItem("vinSearched", "true");
        setHasSearched(true);
      }
    } catch (err) {
      setError("Failed to fetch VIN details.");
    } finally {
      setLoading(false);
    }
  };

  if (!isClient) {
    return null; // Prevent rendering while checking for client-side rendering
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-6 bg-transparent">
      {!hasSearched ? (
        <>
          <div className="flex flex-col md:flex-row items-center bg-transparent p-4 rounded-lg shadow-lg w-full max-w-lg -mt-8">
            <div className="flex items-center w-full h-1md:w-auto mb-4 md:mb-0 mx-2 ">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                value={vin}
                onChange={(e) => setVin(e.target.value)}
                placeholder="Enter VIN number"
                className="flex-grow px-4 py-2 rounded-md focus:outline-none  border border-transparent text-sm w-full"
              />
            </div>
            <button
              onClick={handleVINSearch}
              className="ml-0 md:ml-4 px-6 py-2 bg-red-700 text-white font-bold rounded-lg transition-all duration-300 hover:bg-red-800 w-full md:w-auto"
            >
              Search
            </button>
          </div>

          {loading && <p className="mt-4 text-gray-500">Loading...</p>}
          {error && <p className="mt-4 text-red-500">{error}</p>}

          {vinDetails && (
            <div className="mt-6 bg-transparent border rounded-lg shadow-lg p-4 w-full max-w-lg">
              <h3 className="text-xl font-bold mb-2">VIN Details:</h3>
              <pre className="text-gray-700">
                {JSON.stringify(vinDetails, null, 2)}
              </pre>
            </div>
          )}
        </>
      ) : (
        <div className="text-gray-500">
          You have already searched for a VIN. Redirecting to the contact page...
        </div>
      )}
    </div>
  );
}
