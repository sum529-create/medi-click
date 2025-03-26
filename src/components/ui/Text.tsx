import { TitleProps } from './Title';
/**
 * 텍스트 컴포넌트입니다. <p> 태그로 기본 설정되어있습니다.
 *
 * @example
 * <Text size='md' align='center' color='main'>
 *   본문 컴포넌트입니다.
 * </Text>
 *
 * @component
 * @prop {size} [size] - 글자 크기 ('xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl')
 * @prop {align} [align] - 정렬 위치 ('left' | 'center' | 'right')
 * @prop {color} [color] - 색상 ('main' | 'main-hover' | 'sub' | 'sub-hover' | 'black01' | 'black02' | 'gray01' | 'gray02' | 'gray03' | 'red' | 'deep-blue')
 */

type TextProps = Omit<TitleProps, 'tag'> & { isBold?: boolean };

const Text = ({
  size = 'md',
  align = 'left',
  color = 'black02',
  children,
  isBold,
}: TextProps) => {
  const sizeStyles: Record<NonNullable<TextProps['size']>, string> = {
    xs: 'text-xs',
    sm: 'text-xs lg:text-sm',
    md: 'text-sm lg:text-md',
    lg: 'text-md lg:text-lg',
    xl: 'text-md md:text-lg lg:text-xl',
    '2xl': 'text-lg md:text-xl lg:text-2xl',
    '3xl': 'text-xl md:text-2xl lg:text-3xl',
    '4xl': 'text-2xl md:text-3xl lg:text-4xl',
  };

  const colorStyles: Record<NonNullable<TitleProps['color']>, string> = {
    main: 'text-main',
    'main-hover': 'text-main-hover',
    sub: 'text-sub',
    'sub-hover': 'text-hover',
    black01: 'text-black01',
    black02: 'text-black02',
    gray01: 'text-gray01',
    gray02: 'text-gray02',
    gray03: 'text-gray03',
    gray04: 'text-gray04',
    red: 'text-red',
    'deep-blue': 'text-deep-blue',
    white: 'text-white',
  };

  const alignStyles: string = `text-${align}`;
  const boldStyles: string = isBold ? 'font-bold' : '';

  const styles = `${sizeStyles[size]} ${colorStyles[color]} ${alignStyles} ${boldStyles}`;
  return <p className={styles}>{children}</p>;
};

export default Text;
