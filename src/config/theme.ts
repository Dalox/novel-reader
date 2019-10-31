import { createMuiTheme, responsiveFontSizes, Theme } from '@material-ui/core/styles';

/**
 * Tema de la aplicación
 * @see https://material-ui.com/es/customization/theming/
 */

const defaultTheme: Theme = createMuiTheme();

const theme: Theme = createMuiTheme({
  ...defaultTheme,
  palette: {
    primary: {
      main: '#263238',
      light: '#4f5b62',
      dark: '#000a12',
    },
    secondary: {
      main: '#01579b',
      light: '#4f83cc',
      dark: '##002f6c',
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: ['Roboto'].join(','),
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export { theme as default, responsiveTheme };
