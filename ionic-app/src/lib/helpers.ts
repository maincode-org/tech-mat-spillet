import axios from 'axios';
import { stringify } from 'qs';
import { IEpisode, IFunFact, IQuestion, ITVShow } from '../../types/application-types';

const baseURL = process.env.REACT_APP_BASE_URL ?? 'https://tv-apps.dk';

export const getTvShowData = async (): Promise<ITVShow[] | undefined> => {
  return await axios
    .get(`${baseURL}/tv-shows`)
    .then((res) => res.data)
    .catch(() => undefined);
};

export const getEpisodeData = async (tvShowId: number): Promise<IEpisode[] | undefined> => {
  const episodeQuery = stringify({ _where: { 'tv_show.id': tvShowId }, _sort: 'indexInTVShow' });
  return await axios
    .get(`${baseURL}/episodes?${episodeQuery}`)
    .then((res) => res.data)
    .catch(() => undefined);
};

export const getFunFactsData = async (roundId: number): Promise<IFunFact[]> => {
  const funFactQuery = stringify({ _where: { 'round.id': roundId } });
  return await axios
    .get(`${baseURL}/funfacts?${funFactQuery}`)
    .then((res) => res.data)
    .catch(() => undefined);
};

export const getQuestionsData = async (episodeData: IEpisode[], indexInTVShow: number, indexInEpisode: number): Promise<IQuestion[]> => {
  const roundId = episodeData.find((e) => e.indexInTVShow === indexInTVShow)?.rounds?.find((r) => r.indexInEpisode === indexInEpisode)?.id;

  const questionQuery = stringify({ _where: { 'round.id': roundId }, _sort: 'indexInRound' });
  return await axios
    .get(`${baseURL}/questions?${questionQuery}`)
    .then((res) => res.data)
    .catch(() => undefined);
};
