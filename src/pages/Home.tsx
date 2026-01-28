import { useMemo, useState } from 'react';
import Header from '../components/ui/Header';
import ProductList from '../components/ui/ProductList/ProductList';
import useProducts from '../hooks/useProducts';
import { useDebounce } from '../hooks/useDebounce';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryFallback from '../components/ErrorHandlers/ErrorBoundaryFallback';

const Home = () => {
  const { products, isLoading, error } = useProducts();
  const [searchedItem, setSearchedItem] = useState('');

  const debouncedSearchValue = useDebounce(searchedItem, 500);

  const filteredProducts = useMemo(
    () =>
      products?.filter((product) =>
        product.title
          .toLowerCase()
          .includes(debouncedSearchValue.toLowerCase()),
      ),
    [products, debouncedSearchValue],
  );

  return (
    <div className='bg-[#F1F5F9] min-h-screen'>
      <Header setSearchedItem={setSearchedItem} />
      <main className='max-w-350 px-6 mx-auto'>
        <section className='py-8 space-y-7'>
          <h2 className='text-mainText font-semibold text-xl'>
            Product List Dashboard
          </h2>
          <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
            <ProductList
              products={filteredProducts}
              isLoading={isLoading}
              error={error}
            />
          </ErrorBoundary>
        </section>
      </main>
    </div>
  );
};

export default Home;

// kkkkk
