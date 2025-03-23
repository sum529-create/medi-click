import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ImageProps {
  src: string;
  size: string;
}

const ProfileImage = ({ src, size }: ImageProps) => {
  return (
    <Avatar className={`size-[${size}]`}>
      <AvatarImage src={src} />
      <AvatarFallback>
        <div
          className={`size-[${size}] rounded-full border-2 border-main-hover bg-sub`}
        />
      </AvatarFallback>
    </Avatar>
  );
};

export default ProfileImage;
