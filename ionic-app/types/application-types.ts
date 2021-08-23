export type IIcon = {
  id: string;
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: { [key: string]: unknown };
  hash: string;
  ext?: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: { [key: string]: unknown };
  related?: string;
  created_by?: string;
  updated_by?: string;
};

export type Override<T1, T2> = Omit<T1, keyof T2> & T2;

