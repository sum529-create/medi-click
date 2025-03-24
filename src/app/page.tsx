import Banner from '@/components/features/home/Banner';
import HospitalList from '@/components/features/home/HospitalList';
import KaKaoMap from '@/components/features/home/KaKaoMap';
import SearchBar from '@/components/features/home/SearchBar';

export default function Home() {
  return (
    <div className='flex w-full flex-col items-center gap-5 px-6 pb-10 text-xl md:px-20 md:pt-5'>
      <Banner />
      <SearchBar />
      <div className='flex w-full flex-col gap-5 md:flex-row'>
        <KaKaoMap />
        <HospitalList />
      </div>
    </div>
  );
}
