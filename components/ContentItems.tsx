import React from 'react';
import type { GlobalTypes } from '@thoughtindustries/content';

export default function ContentItems({ items }: { items: GlobalTypes.Content[] }) {
  return (
    <div id="courses" className="relative pt-16 pb-32 overflow-hidden bg-white">
      {items.map((item, i) => {
        let Component = i % 2 === 0 ? LeftItem : RightItem;

        return i > 0 ? (
          <div key={item.id} className="mt-24">
            <Component item={item} />
          </div>
        ) : (
          <Component key={item.id} item={item} />
        );
      })}
    </div>
  );
}

function LeftItem({ item }: { item: GlobalTypes.Content }) {
  return (
    <div className="relative">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
          <ContentDetails
            description={item.description!}
            status={item.availabilityStatus!}
            title={item.title!}
          />
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src={item.asset}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function RightItem({ item }: { item: GlobalTypes.Content }) {
  return (
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
        <ContentDetails
          description={item.description!}
          status={item.availabilityStatus!}
          title={item.title!}
        />
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
        <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <img
            className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
            src={item.asset}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

function ContentDetails({
  description,
  title,
  status
}: {
  description: string;
  title: string;
  status: string;
}) {
  return (
    <div>
      <div className="mt-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">{title}</h2>
        {status === 'completed' && (
          <span className="inline-flex mt-2 items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
            Completed
          </span>
        )}
        {status === 'started' && (
          <span className="inline-flex mt-2 items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            Started
          </span>
        )}
        {status === 'not-started' && (
          <span className="inline-flex mt-2 items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
            Available
          </span>
        )}
        <p className="mt-4 text-lg text-gray-500">{description}</p>
        <div className="mt-6">
          <a
            href="#"
            className="inline-flex px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">
            {status === 'started' && 'Continue'}
            {status === 'completed' && 'Restart'}
            {status === 'not-started' && 'Get Started'}
          </a>
        </div>
      </div>
    </div>
  );
}
