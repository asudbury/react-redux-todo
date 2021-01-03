import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '2em'
      }
    }
  }
});

export default defaultTheme;
