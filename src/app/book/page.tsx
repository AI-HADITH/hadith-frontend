import React from 'react';

export default function BookPage() {
  return (
    <div className="min-h-screen bg-special-color p-8">
      <div className="flex">
        <div className="w-1/3">
          <img src="/path/to/book-cover.jpg" alt="Book Cover" className="w-full h-auto" />
        </div>
        <div className="w-2/3 pl-8">
          <h2 className="text-2xl font-semibold mb-4">Book Title</h2>
          <p className="text-lg">Author: John Doe</p>
          <p className="text-lg">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
      </div>
    </div>
  );
}