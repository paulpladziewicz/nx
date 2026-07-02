export interface HeadingProps {
  type?: 'marketing' | 'page'
  level: 1 | 2 | 3 | 4;
}

export default function Heading({ label, error, ...props }: HeadingProps) {

}