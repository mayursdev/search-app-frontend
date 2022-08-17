import React from "react";
import { useSelector } from "react-redux";
import AdCard from "./AdvertCard";
import NoAdvertsFound from "./NoAdvertsFound";

const AdsContainer = () => {
  const adsList = useSelector((state) => state.ads.list);
  if (adsList === null) return;

  return (
    <main className="p-4">
      <div className="container mx-auto">
        {adsList.length ? (
          <div className="adverts-container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {adsList.map((ad) => {
              return <AdCard key={ad._id} ad={ad} />;
            })}
          </div>
        ) : (
          <NoAdvertsFound />
        )}
      </div>
    </main>
  );
};

export default AdsContainer;
