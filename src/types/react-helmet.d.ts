declare module 'react-helmet' {
  import { ReactNode } from 'react';

  interface HelmetProps {
    children?: ReactNode;
    title?: string;
    meta?: Array<{ name?: string; property?: string; content: string }>;
    link?: Array<{ rel: string; href: string }>;
    script?: Array<{ src?: string; type?: string; innerHTML?: string }>;
    style?: Array<{ innerHTML: string; type?: string }>;
  }

  export class Helmet extends React.Component<HelmetProps> {
    static rewind(): { title: string; meta: string; link: string };
  }
} 