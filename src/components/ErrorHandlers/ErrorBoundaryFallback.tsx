import type { FallbackProps } from 'react-error-boundary';
import type { AppError } from '../../types/error';
import { Button } from '@mui/material';

const ErrorBoundaryFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  const errMsg =
    (error as AppError)?.message || 'Something went wrong. Please try again.';
  const errStatus = (error as AppError)?.status;
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-white text-black'>
      <div className='text-center'>
        <div className='flex items-center justify-center'>
          <h1 className='inline-block m-0 mr-5 pr-6 text-2xl font-medium leading-12.25 border-r border-black/30'>
            {errStatus}
          </h1>
          <div className='inline-block'>
            <h2 className='text-red-600 font-normal leading-12.25 m-0'>
              {errMsg}
            </h2>
          </div>
        </div>

        <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center'>
          <Button
            sx={{
              border: '1px solid #ddd',
              borderRadius: '6px',
              background: 'white',
            }}
            onClick={resetErrorBoundary}
          >
            Retry
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundaryFallback;
