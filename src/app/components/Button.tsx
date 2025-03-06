import { twMerge } from 'tailwind-merge';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'contained' | 'outlined' | 'text';

const DEFAULT_ELEMENT = 'button';

interface ButtonProps<E extends React.ElementType = React.ElementType>
  extends React.HTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  as?: E;
}

type PropsWithElement<E extends React.ElementType> = ButtonProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonProps>;

type KeyValueMap<K extends string | number | symbol, V> = {
  [key in K]: V;
};

const buttonSizeMap: KeyValueMap<ButtonSize, string> = {
  small: 'h-8 text-sm',
  medium: 'h-9 text-sm',
  large: 'h-11 text-base',
};

const buttonVariantMap: KeyValueMap<ButtonVariant, string> = {
  contained: 'border border-gray-300 bg-[#EDEDED]',
  outlined: 'border border-gray-300',
  text: 'border-none bg-transparent p-0 text-base',
};

export default function Button<
  E extends React.ElementType = typeof DEFAULT_ELEMENT
>({
  children,
  className,
  fullWidth,
  startIcon,
  endIcon,
  variant = 'contained',
  size = 'medium',
  disabled,
  type = 'button',
  as,
  ...props
}: PropsWithElement<E>) {
  const Component = as || DEFAULT_ELEMENT;

  return (
    <Component
      type={type}
      className={twMerge(
        'flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-md py-3 px-4 font-medium',
        buttonVariantMap[variant],
        className,
        buttonSizeMap[size],
        fullWidth ? 'w-full' : '',
        disabled ? 'cursor-not-allowed opacity-40' : ''
      )}
      disabled={disabled}
      {...props}
    >
      {startIcon}
      {children}
      {endIcon}
    </Component>
  );
}
