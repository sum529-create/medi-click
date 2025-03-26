import Banner from '@/components/features/home/Banner';
import HospitalList from '@/components/features/home/HospitalList';
import KaKaoMap from '@/components/features/home/KaKaoMap';
import HomeContainer from '@/components/features/home/layout/HomeContainer';
import SearchBar from '@/components/features/home/SearchBar';

export default function Home() {
  return (
    <HomeContainer>
      <Banner />
      <SearchBar />
      <div className='flex w-full flex-col gap-5 md:flex-row'>
        <KaKaoMap />
        <HospitalList />
      </div>
    </HomeContainer>
  );
}
