import type { AppError } from '../../../types/error';
import type { Product } from '../../../types/product';
import ErrorScope from '../../ErrorHandlers/ErrorScope';
import CircularProgress from '../../Loaders/CircularProgress';
import ProductCard from './ProductCard';

export interface ProductListProps {
  products: Product[];
  isLoading: boolean;
  error: AppError | null;
}

const ProductList = ({ products, isLoading, error }: ProductListProps) => {
  if (isLoading) {
    return (
      <div className='flex-center min-h-80'>
        <CircularProgress />
      </div>
    );
  }
  if (error) {
    return (
      <div className='flex-center min-h-80'>
        <ErrorScope error={error} />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className='flex-center flex-col min-h-80 space-y-2'>
        <h3 className='text-xl font-medium text-darkNavy'>No Products Found</h3>
        <p className='text-gray-500'>Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      {products?.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
