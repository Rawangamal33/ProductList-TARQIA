import { WithDialogContext } from '../../../context/DialogProvider';
import type { Product } from '../../../types/product';
import DialogTrigger from '../../Dialogs/DialogTrigger';
import ProductDetailsDialog from './ProductDetailsDialog';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <DialogTrigger
      trigger={
        <article className='flex flex-col bg-white h-80 p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 cursor-pointer'>
          <div className='h-40 flex-center bg-gray-50 rounded-xl mb-4'>
            <img
              src={product.image}
              className='h-32 object-contain'
              alt={product.title}
            />
          </div>

          <div className='flex flex-col grow'>
            <h3 className='text-mainText font-bold text-sm mb-2 line-clamp-2'>
              {product.title}
            </h3>

            <p className='text-lg font-extrabold text-darkNavy mt-auto'>
              ${product.price}
            </p>
          </div>
        </article>
      }
      ariaLabel='Produt Details'
      showCloseIcon={true}
      maxWidth='xs'
    >
      <ProductDetailsDialog product={product} />
    </DialogTrigger>
  );
};

export default WithDialogContext(ProductCard);
