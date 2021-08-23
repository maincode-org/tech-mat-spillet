import { components } from './api-types';
export type ITVShow = components['schemas']['Tv-show'];
export type IEpisode = components['schemas']['Episode'];
export type IRound = components['schemas']['Round'];
export type IQuestion = components['schemas']['Question'];
export type IFunFact = components['schemas']['Funfact'];
export type IAnswerOption = components['schemas']['Question']['answerOptions'][0];

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

export type IRoundData = Override<IRound, { icon: IIcon }>;
