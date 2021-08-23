import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

type IProps = {
  className?: string;
  percentage: number;
};

const ProgressBar: React.FC<IProps> = ({ className, percentage }): JSX.Element => {
  return (
    <Box className={className} display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" value={percentage} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(percentage)}%`}</Typography>
      </Box>
    </Box>
  );
};
export default ProgressBar;
