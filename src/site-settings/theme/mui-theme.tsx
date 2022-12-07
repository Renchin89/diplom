import { createTheme } from "@material-ui/core/styles";
import { COLORS } from "./index";

declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    "2xl": true;
  }
}

export const theme = createTheme({
  breakpoints: {
    // same as tailwind default breakpoint
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },
  typography: {
    fontFamily: "'SF Pro Display', 'Open Sans', sans-serif",
  },
  palette: {
    primary: COLORS.primary,
    secondary: COLORS.tertiary,
  },
  props: {
    MuiPaper: {
      variant: "outlined",
    },
    // MuiStepContent: {
    //   TransitionProps: {
    //     unmountOnExit: false,
    //     mountOnEnter: false
    //   }
    // },
    // MuiCheckbox: {
    //   disableRipple: true,
    //   disableFocusRipple: true,
    //   disableTouchRipple: true
    // },
    // MuiSelect: {
    //   variant: 'outlined',
    // },
    // MuiTextField: {
    //   variant: 'outlined',
    // },
    MuiButton: {
      variant: "contained",
      color: "primary",
    },
    MuiTabs: {
      indicatorColor: "secondary",
    },
  },
  overrides: {
    MuiTab: {
      wrapper: {
        flexDirection: "row",
        justifyContent: "start",

        "& :first-child": {
          marginBottom: "0 !important",
        },
      },
      labelIcon: {
        minHeight: "4rem",
      },
    },
  },
});

export default theme;
