import React from 'react';
import type { FeaturedContentContentItem } from '@thoughtindustries/featured-content';

export default function OurFeaturedContent({
  contentItem
}: {
  contentItem: FeaturedContentContentItem;
}) {
  return (
    <div key={contentItem.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <img className="object-cover w-full h-48" src={contentItem.asset} alt="" />
      </div>
      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
        <div className="flex-1">
          <a href={contentItem.href} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{contentItem.title}</p>
            <p className="mt-3 text-base text-gray-500">
              {contentItem.description?.slice(0, 170)}&hellip;
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
