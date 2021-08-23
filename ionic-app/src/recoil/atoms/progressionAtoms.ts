import { atom } from 'recoil';

export const tvShowIdState = atom({
  key: 'tvShowId',
  default: 1,
});

export const indexInShowState = atom({
  key: 'indexInShowState',
  default: 1,
});

export const roundIndexInEpisodeState = atom({
  key: 'roundIndexInEpisode',
  default: 1,
});
