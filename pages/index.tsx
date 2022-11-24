import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import data, { Product } from '../data';
import Link from 'next/link';

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [renderData, setRenderData] = useState<Product[]>(data);

  const handleSearch = () => {
    if (searchTerm) {
      const matches = data.filter(
        (pd) =>
          pd.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pd.description.join().toLowerCase().includes(searchTerm.toLowerCase())
      );
      setRenderData(matches);
    } else setRenderData(data);
  };

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13) handleSearch();
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <main style={{ maxWidth: 1000 }} className='mx-auto py-4 px-6'>
        <div className='flex rounded-lg overflow-hidden bg-white'>
          <div className='p-3 flex items-center space-x-2 flex-1 border rounded-l-lg'>
            <MagnifyingGlassIcon height={24} className='text-neutral-400' />
            <input
              value={searchTerm}
              onKeyDown={handleKeyDown}
              onChange={(e) => setSearchTerm(e.target.value)}
              type='text'
              placeholder='Start typing...'
              className='outline-none w-full'
            />
          </div>
          <button
            className='bg-gradient-to-r from-slate-700 to-black text-white px-12 font-bold transition-all hover:opacity-80'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className='grid grid-cols-3 gap-4 my-6'>
          {renderData.length ? (
            renderData.map((product, i) => (
              <Link href={`/product/${product.name}`} key={i}>
                <div className='rounded-lg overflow-hidden p-2 border border-transparent cursor-pointer hover:shadow-lg hover:bg-white'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='rounded-lg h-60 object-cover w-full'
                  />
                  <h1 className='mt-1 font-bold text-sm'>{product.name}</h1>
                </div>
              </Link>
            ))
          ) : (
            <div className='my-3 text-2xl'>
              <p>No products found</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomeScreen;
