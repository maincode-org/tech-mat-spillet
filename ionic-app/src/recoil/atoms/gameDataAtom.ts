import { atom } from 'recoil';
import { IEpisode, IRound, ITVShow } from '../../../types/application-types';

export const tvShowDataState = atom<ITVShow | undefined>({
  key: 'tvShowState',
  default: undefined,
});

export const episodesDataState = atom<IEpisode[] | never[]>({
  key: 'episodesDataState',
  default: [],
});

export const currentRoundDataState = atom<IRound | undefined>({
  key: 'roundsDataState',
  default: undefined,
});
