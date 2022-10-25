import { createTheme } from '@material-ui/core/styles'
import { COLORS } from './index'

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    '2xl': true
  }
}

export const theme = createTheme({
  breakpoints: { // same as tailwind default breakpoint
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536
    }
  },
  typography: {
    fontFamily: '\'SF Pro Display\', \'Open Sans\', sans-serif'
  },
  palette: {
    primary: COLORS.primary,
    secondary: COLORS.tertiary
  },
  props: {
    MuiPaper: {
      variant: 'outlined'
    },
    MuiStepContent: {
      TransitionProps: {
        unmountOnExit: false,
        mountOnEnter: false
      }
    },
    MuiCheckbox: {
      disableRipple: true,
      disableFocusRipple: true,
      disableTouchRipple: true
    },
    MuiSelect: {
      variant: 'outlined',
      fullWidth: true,
      margin: 'dense'
    },
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true,
      margin: 'dense'
    },
    MuiButton: {
      variant: 'contained',
      color: 'primary'
    },
    MuiTabs: {
      indicatorColor: 'primary'
    },
  }
})

export default theme
