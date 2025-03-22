import { PuffLoader } from 'react-spinners';

/**
 * 데이터를 불러오면서 로딩이 발생할 때 사용하는 로딩 컴포넌트입니다.
 * ex) useQuery의 isPending에서 사용
 * @param {Number} size 스피너 크기 (ex.100)
 * @returns JSX
 */

interface LoadingProps {
  size: number;
}

const Loading = ({ size }: LoadingProps) => {
  const SPINNER_SIZE = size;
  const SPINNER_COLOR = '#71C4EF';

  return (
    <div className='flex h-full items-center justify-center'>
      <PuffLoader size={SPINNER_SIZE} color={SPINNER_COLOR} />
    </div>
  );
};

export default Loading;
