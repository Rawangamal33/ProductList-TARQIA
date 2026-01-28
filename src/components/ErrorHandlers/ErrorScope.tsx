import { Button } from '@mui/material';
import type { AppError } from '../../types/error';

const ErrorScope = ({ error }: { error: AppError }) => {
  return (
    <div className='text-center'>
      <div className='flex-center'>
        <h1 className='inline-block m-0 mr-5 pr-6 text-2xl font-medium leading-12.25 border-r border-black/30'>
          {error.status}
        </h1>
        <div className='inline-block'>
          <h2 className='text-base text-red-600 font-normal leading-12.25 m-0'>
            {error.message || 'Something went wrong. Please try again.'}
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
          onClick={() => window.location.reload()}
        >
          Retry
        </Button>
      </div>
    </div>
  );
};

export default ErrorScope;
