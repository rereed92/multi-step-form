import { createUseStyles } from 'react-jss'
import { ITheme } from 'theme/types';

const useStyles = createUseStyles((theme: ITheme) => ({
  app: {
    color: theme.colors.primaryColor2.primary1,
    background: theme.colors.primaryColor1.primary2
  }
}))

export default useStyles;
