import { InputProps } from '@pp/ui';

export interface TextProps {
  type: 'body' | 'subheading'
  level?: 1 | 2 | 3 | 4;
  as: 'p' | 'span'
}

export default function Text({ label, error, ...props }: TextProps) {

}