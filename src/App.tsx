import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function App() {
  return (
    <main style={{ maxWidth: 1000 }} className='mx-auto py-4 px-6'>
      <div className='flex rounded-lg overflow-hidden'>
        <div className='p-3 flex items-center space-x-2 flex-1 border rounded-l-lg'>
          <MagnifyingGlassIcon height={24} className='text-neutral-400' />
          <input
            type='text'
            placeholder='Start typing...'
            className='outline-none w-full'
          />
        </div>
        <button className='bg-gradient-to-r from-slate-600 to-slate-900 text-white px-12 font-bold transition-all hover:opacity-80'>
          Search
        </button>
      </div>
      <div className='grid grid-cols-3 gap-4 my-6'>
        {Array(7)
          .fill(1)
          .map((_, i) => (
            <div
              key={i}
              className='bg-white rounded-lg overflow-hidden p-2 border border-transparent cursor-pointer hover:shadow-xl hover:border-gray-200'
            >
              <img
                src='https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg'
                alt=''
                className='rounded-lg'
              />
              <h1 className='mt-1 font-bold'>Shoes</h1>
            </div>
          ))}
      </div>
    </main>
  );
}

export default App;
