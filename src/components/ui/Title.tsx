/**
 * 제목 컴포넌트입니다. font-bold 속성이 기본 설정되어 있습니다.
 *
 * @example
 * <Title tag='h1' size='xl' margin='md' align='center' color='main'>
 *   제목 컴포넌트입니다.
 * </Title>
 *
 * @component
 *
 * @prop {tag} tag - 태그 종류  ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6')
 * @prop {size} [size] - 글자 크기 ('xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl')
 * @prop {margin} [margin] - 마진 크기 ('sm' | 'md' | 'lg')
 * @prop {align} [align] - 정렬 위치 ('left' | 'center' | 'right')
 * @prop {color} [color] - 색상 ('main' | 'main-hover' | 'sub' | 'sub-hover' | 'black01' | 'black02' | 'gray01' | 'gray02' | 'gray03' | 'red' | 'deep-blue')
 */

export interface TitleProps {
  children: React.ReactNode;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  margin?: 'sm' | 'md' | 'lg';
  align: 'left' | 'center' | 'right';
  color:
    | 'main'
    | 'main-hover'
    | 'sub'
    | 'sub-hover'
    | 'black01'
    | 'black02'
    | 'gray01'
    | 'gray02'
    | 'gray03'
    | 'red'
    | 'deep-blue';
}

const Title = ({ tag, size, margin, align, color, children }: TitleProps) => {
  const Tag = tag;

  const sizeStyles: Record<TitleProps['size'], string> = {
    xs: 'text-sm md:text-md lg:text-lg',
    sm: 'text-md md:text-lg lg:text-xl',
    md: 'text-lg md:text-xl lg:text-2xl',
    lg: 'text-xl md:text-2xl lg:text-3xl',
    xl: 'text-2xl md:text-3xl lg:text-4xl',
    '2xl': 'text-3xl md:text-4xl lg:text-5xl',
    '3xl': 'text-4xl md:text-5xl lg:text-6xl',
    '4xl': 'text-5xl md:6xl lg:text-7xl',
  };

  const marginStyles: Record<NonNullable<TitleProps['margin']>, string> = {
    sm: 'm-1 lg:m-2',
    md: 'm-2 md:m-3 lg:m-4',
    lg: 'm-4 md:m-5 lg:m-6',
  };

  const colorStyles: Record<TitleProps['color'], string> = {
    main: 'text-main',
    'main-hover': 'text-main-hover',
    sub: 'text-sub',
    'sub-hover': 'text-hover',
    black01: 'text-black01',
    black02: 'text-black02',
    gray01: 'text-gray01',
    gray02: 'text-gray02',
    gray03: 'text-gray03',
    red: 'text-red',
    'deep-blue': 'text-deep-blue',
  };

  const alignStyles: string = `text-${align}`;

  const baseStyles: string = 'font-bold justify-items-center';

  const styles: string = `${baseStyles} ${sizeStyles[size]} ${margin ? marginStyles[margin] : ''} ${colorStyles[color]} ${alignStyles}`;

  return <Tag className={styles}>{children}</Tag>;
};

export default Title;
