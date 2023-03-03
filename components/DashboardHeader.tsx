import React from 'react';
import Weather from './Weather';
import type { CurrentUser } from '../types';
import type { GlobalTypes } from '@thoughtindustries/content'; 

export default function DashboardHeader({
  currentUser,
  items,
  hasCertification
}: {
  currentUser: CurrentUser;
  items: GlobalTypes.Content[];
  hasCertification: boolean;
}) {
  const completedCourseCount = items.filter(item => item.availabilityStatus === 'completed').length;
  const startedCourseCount = items.filter(item => item.availabilityStatus === 'started').length;
  const notStartedCourseCount = items.filter(
    item => item.availabilityStatus === 'not-started'
  ).length;

  return (
    <div className="relative py-8 bg-white">
      <div className="mx-auto bg-indigo-600 max-w-7xl lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 hidden lg:block lg:col-start-2 lg:row-start-1 lg:col-span-4 lg:py-12 lg:bg-transparent">
            <div className="px-4 mx-auto max-w-16 sm:px-6 lg:p-0">
              <img className="h-48 shadow-2xl rounded-3xl" src={currentUser.asset} alt="" />
            </div>
          </div>

          <div className="relative bg-blue-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
            {hasCertification && (
              <div
                className="absolute bottom-0 right-0 hidden px-5 py-3 overflow-hidden text-blue-100 lg:block"
                aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Administer Certified
              </div>
            )}
            <div
              className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
              aria-hidden="true">
              <svg
                className="absolute transform bottom-full left-full translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                width={404}
                height={80}
                fill="none"
                viewBox="0 0 404 60"
                aria-hidden="true">
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse">
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-blue-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width={404} height={80} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
              <svg
                className="absolute transform top-full -translate-y-1/3 -translate-x-1/3 c"
                width={404}
                height={60}
                fill="none"
                viewBox="0 0 404 60"
                aria-hidden="true">
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse">
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-blue-500"
                      fill="currentColor"
                    />
                  </pattern> 
                </defs>
                <rect width={404} height={60} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
            </div>
            <div className="relative max-w-md px-4 py-12 mx-auto space-y-6 lg:-ml-24 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
              <h2 className="text-3xl font-extrabold text-white" id="join-heading">
                Hey {currentUser.firstName}!
                {currentUser.zipCode && <Weather zipCode={currentUser.zipCode} />}
              </h2>

              <dl className="mt-10 sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                <div className="flex flex-col">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
                    Completed Course{completedCourseCount === 1 ? '' : 's'}
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-white">
                    {completedCourseCount}
                  </dd>
                </div>
                <div className="flex flex-col mt-10 sm:mt-0">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
                    Started Course{startedCourseCount === 1 ? '' : 's'}
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-white">
                    {startedCourseCount}
                  </dd>
                </div>
                <div className="flex flex-col mt-10 sm:mt-0">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
                    Available Course{notStartedCourseCount === 1 ? '' : 's'}
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-white">
                    {notStartedCourseCount}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
