import React from "react";

const AdvertCard = ({ ad }) => {
  const {
    imageUrl,
    primaryText,
    headline,
    companyId: { name: companyName, url: companyUrl },
    CTA,
  } = ad;
  return (
    <div className="adv-card border border-slate-400 rounded shadow">
      <div className="img-container overflow-hidden">
        <img
          className="w-full sm:h-64 md:h-72 object-cover sm:hover:scale-110 sm:hover:brightness-90 transition-all duration-500"
          src={imageUrl}
          alt={`poster of advert of company ${companyName}`}
        />
      </div>
      <div className="adv-body p-4 flex flex-col justify-around">
        <h4 className="adv-company text-slate-400 uppercase text-sm hover:text-indigo-400">
          <a href={companyUrl} target="_blank" rel="noreferrer">
            {companyName}
          </a>
        </h4>
        <h2 className="adv-headline font-semibold mb-1">{headline}</h2>
        <h3 className="adv-primary-text font-light text-slate-600 text-sm mb-2">
          {primaryText}
        </h3>
        <a
          href={companyUrl}
          target="_blank"
          rel="noreferrer"
          className="adv-cta text-sm text-indigo-500 flex items-center justify-center border px-6 py-2 border-slate-400 rounded transition-all hover:border-slate-600"
        >
          {CTA}
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default AdvertCard;
