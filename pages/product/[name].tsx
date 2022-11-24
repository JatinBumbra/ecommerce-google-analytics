import React from 'react';
import { useRouter } from 'next/router';
import data, { Product } from '../../data';

const ProductScreen = ({ product }: { product: Product }) => {
  const router = useRouter();

  return (
    <main style={{ maxWidth: 1000 }} className='mx-auto py-4 px-6'>
      <div className='sticky top-0 z-10 bg-white border-b '>
        <div className='bg-white my-3 inline-block p-3 cursor-pointer rounded transition-all hover:bg-neutral-200'>
          <p onClick={() => router.back()}>Back</p>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-6 my-3'>
        <div>
          <img src={product.image} alt='' className='rounded-xl' />
        </div>
        <div>
          <h1 className='text-2xl font-bold'>{product.name}</h1>
          <p className='text-2xl font-medium my-3'>Rs. {product.price}</p>
          <ul className='list-disc ml-4 mb-8'>
            {product.description.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <button className='bg-gradient-to-r from-slate-700 to-black text-white px-12 font-bold transition-all w-full p-4 rounded-lg hover:opacity-80'>
            Buy Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductScreen;

export async function getStaticPaths() {
  return {
    paths: data.map((pd) => ({ params: { name: pd.name } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product: Product = data.filter((pd) =>
    pd.name.toLowerCase().includes(params.name.toLowerCase()!)
  )[0];
  return { props: { product } };
}
