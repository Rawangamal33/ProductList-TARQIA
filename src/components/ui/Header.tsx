import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export interface HeaderProps {
  setSearchedItem: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ setSearchedItem }: HeaderProps) => {
  return (
    <header className='bg-white shadow-generalShadow'>
      <div className='bg-darkNavy py-2.5 text-center sm:text-[15px] text-white text-[13px] px-9'>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </div>
      <nav className='max-w-350 mx-auto flex-between gap-8 px-6 py-4'>
        <h1 className='sm:text-[27px] text-2xl text-darkNavy font-bold'>
          Basket
        </h1>

        <div className='relative w-full max-w-75' aria-label='Search'>
          <SearchRoundedIcon
            fontSize='small'
            className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
          />

          <input
            type='search'
            onChange={(e) => setSearchedItem(e.target.value)}
            placeholder='What are you looking for?'
            className='w-full bg-[#F5F5F5] rounded-lg sm:py-2.5 py-2 sm:pl-10 pl-9 pr-4 outline-none text-sm sm:placeholder:text-[14px] placeholder:text-[13px] focus:border focus:border-gray-400'
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
