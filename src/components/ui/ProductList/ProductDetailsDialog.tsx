import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import type { Product } from '../../../types/product';

const ProductDetailsDialog = ({ product }: { product: Product }) => {
  return (
    <section>
      <div className='h-40 flex-center bg-gray-50 rounded-xl mb-4'>
        <img
          src={product.image}
          className='h-32 object-contain'
          alt={product.title}
        />
      </div>

      <div className='flex flex-col gap-2 grow'>
        <span
          className='text-[10px] uppercase tracking-wider text-[#4338CA] bg-[#E0E7FF] w-fit py-2 px-2.5 rounded-full
         font-bold'
        >
          {product.category}
        </span>
        <h3 className='text-mainText font-bold text-sm line-clamp-2 mt-1'>
          {product.title}
        </h3>

        <p className='text-secondText text-[14px]'>{product.description}</p>

        <div className='flex-between mt-auto'>
          <p className='text-lg font-extrabold text-darkNavy'>
            ${product.price}
          </p>
          <div className='flex-center gap-2'>
            <Rating
              value={product.rating.rate}
              readOnly
              sx={{ fontSize: '19px' }}
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
              }
            />
            <span className='text-[10px] text-gray-400 font-medium'>
              ({product.rating.count} reviews)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsDialog;
