import Banner from '@/components/features/home/Banner';
import HospitalList from '@/components/features/home/HospitalList';
import KaKaoMap from '@/components/features/home/KaKaoMap';
import SearchBar from '@/components/features/home/SearchBar';

export default function Home() {
  return (
    <div className='relative flex w-full flex-col items-center gap-20 px-20 text-xl'>
      <Banner />
      <SearchBar />
      <div className='flex w-full gap-10'>
        <KaKaoMap />
        <HospitalList />
      </div>
    </div>
  );
}
