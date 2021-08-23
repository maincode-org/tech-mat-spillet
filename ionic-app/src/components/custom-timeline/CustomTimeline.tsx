import { IonImg } from '@ionic/react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import styles from './custom-timeline.module.css';
import { useRecoilValue } from 'recoil';
import { roundIndexInEpisodeState } from '../../recoil/atoms/progressionAtoms';
import { IRoundData } from '../../../types/application-types';

type IProps = {
  roundsData: IRoundData[] | undefined;
};

const CustomTimeline: React.FC<IProps> = ({ roundsData }) => {
  const roundIndexInEpisode = useRecoilValue(roundIndexInEpisodeState);

  const shouldDotBeColored = (index: number) => roundIndexInEpisode === index + 1 || roundIndexInEpisode > index + 1;

  return (
    <Timeline className={styles.timelineContainer} align="alternate">
      {roundsData &&
        roundsData.map((round, i) => {
          return (
            <TimelineItem key={i}>
              <TimelineSeparator>
                <TimelineDot className={`${roundIndexInEpisode > i + 1 && styles.opacity} ${!shouldDotBeColored(i) && 'bright'}`} color={shouldDotBeColored(i) ? 'primary' : 'grey'}>
                  {<IonImg className={`${styles.icon} ${!shouldDotBeColored(i) && 'hidden'}`} src={round.icon.url} />}
                </TimelineDot>
                {i < roundsData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>{renderPaperOrSkeleton(roundIndexInEpisode, i, round.title, round.subtitle)}</TimelineContent>
            </TimelineItem>
          );
        })}
    </Timeline>
  );
};
export default CustomTimeline;

const renderPaperOrSkeleton = (currentRound: number, index: number, title: string, description: string) => {
  return (
    <Paper elevation={3} className={`${styles.paperContainer} ${currentRound > index + 1 && styles.opacity}`}>
      {currentRound >= index + 1 ? (
        <>
          <Typography component="h6">{title}</Typography>
          <Typography variant="caption">{description}</Typography>
        </>
      ) : (
        <>
          <Skeleton variant="text" component="h1" animation={false} />
          <Skeleton variant="text" component="h4" animation={false} />
          <Skeleton variant="text" component="h4" animation={false} />
          <Skeleton variant="text" component="h4" animation={false} />
        </>
      )}
    </Paper>
  );
};
