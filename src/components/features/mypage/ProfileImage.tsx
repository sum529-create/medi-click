import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ImageProps {
  src: string | undefined;
  size: string;
}

const ProfileImage = ({ src, size }: ImageProps) => {
  return (
    <Avatar style={{ width: size, height: size }}>
      <AvatarImage src={src} />
      <AvatarFallback>
        <div
          style={{ width: size, height: size }}
          className={`rounded-full border-2 border-main-hover bg-sub`}
        />
      </AvatarFallback>
    </Avatar>
  );
};

export default ProfileImage;
