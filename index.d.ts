export interface TokenIcon {
  title: string;
  slug: string;
  svg: string;
  path: string;
  source: string;
  hex: string;
  guidelines?: string | undefined;
  license?:
    | {
        type: string;
        url: string;
      }
    | undefined;
}

declare const icons: Record<string, TokenIcon> & {
  
  Get(name: string): TokenIcon;
};

export default icons;
