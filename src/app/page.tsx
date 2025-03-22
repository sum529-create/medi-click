import Banner from '@/components/features/home/Banner';
import HospitalList from '@/components/features/home/HospitalList';
import KaKaoMap from '@/components/features/home/KaKaoMap';
import SearchBar from '@/components/features/home/SearchBar';

export default function Home() {
  return (
    <div className='flex w-full flex-col items-center gap-5 px-20 pb-10 pt-5 text-xl'>
      <Banner />
      <SearchBar />
      <div className='flex w-full gap-5'>
        <KaKaoMap />
        <HospitalList />
      </div>
    </div>
  );
}
