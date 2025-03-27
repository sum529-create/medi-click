import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ImageProps {
  src: string | undefined;
  size: string;
}

const ProfileImage = ({ src, size }: ImageProps) => {
  return (
    <Avatar style={{ width: size, height: size }}>
      <AvatarImage src='https://cdn-icons-png.flaticon.com/512/2184/2184899.png' />
      <AvatarFallback>
        <div
          style={{ width: size, height: size }}
          className='rounded-full border-2 border-main-hover bg-sub'
        />
      </AvatarFallback>
    </Avatar>
  );
};

export default ProfileImage;
