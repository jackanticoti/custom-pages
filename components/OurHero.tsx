import React from 'react';

export default function OurHero() {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="relative w-full sm:overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
              alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
          </div>
          <div className="relative w-full px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl">
              <span className="block text-white">Become a</span>
              <span className="block text-indigo-200">Cloud Connect Expert!</span>
            </h1>
            <p className="max-w-lg mx-auto mt-6 text-xl text-center text-indigo-200 sm:max-w-3xl">
              Transform the way you communicate with your customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
