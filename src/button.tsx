import BootstrapButton, {
  ButtonProps as BootstrapButtonProps,
} from 'react-bootstrap/Button';

export interface ButtonProps extends BootstrapButtonProps {
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  rel?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <BootstrapButton {...props}>Button</BootstrapButton>
  );
}
