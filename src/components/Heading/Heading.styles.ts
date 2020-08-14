import { createUseStyles } from 'react-jss';
import { ITheme } from 'theme/types';
import { IHeadingProps } from './Heading';

const useStyles = createUseStyles((theme: ITheme) => ({
  heading: (props: IHeadingProps) => ({
    marginTop: 0,
    fontSize: theme.fontSizes[props.size],
    marginBottom: theme.spacing.xxlarge,
  }),
}));

export default useStyles;
