import React from 'react';

export default function Stats() {
  return (
    <div className="w-full pb-12 -mt-10 bg-white sm:pb-16">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
            <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
              <Stat stat="115k" label="Learners Worldwide" />
            </div>
            <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
              <Stat stat="140+" label="Training Courses" />
            </div>
            <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
              <Stat stat="50+" label="Certifications" />
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

function Stat({ stat, label }: { stat: string; label: string }) {
  return (
    <>
      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">{label}</dt>
      <dd className="order-1 text-5xl font-extrabold text-indigo-600">{stat}</dd>
    </>
  );
}
