import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ImageProps {
  src: string;
  height: string;
  width: string;
}

const ProfileImage = ({ src, height, width }: ImageProps) => {
  return (
    <Avatar className={`h-[${height}] w-[${width}]`}>
      <AvatarImage src={src} />
      <AvatarFallback>
        <div
          className={`h-[${height}] w-[${width}] rounded-full border-2 border-main-hover bg-sub`}
        />
      </AvatarFallback>
    </Avatar>
  );
};

export default ProfileImage;
