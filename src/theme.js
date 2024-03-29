import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  palette: {
    primary: { main: "#00AB55" },
    background: {
      default: "#fdfdfd",
    },
    // mode: "dark",
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          border: "0.3px solid rgba(0,0,0,0.05)",
          boxShadow:
            "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        },
      },


    




    },


    components: {
      MuiBox: {
          styleOverrides: {
              root: ({ ownerState, theme }) => ({
                  ...{
                      '&::-webkit-scrollbar': {
                          width: '15px',
                      },
                      '&::-webkit-scrollbar-track': {
                          backgroundColor: theme.palette.scroll.track,
                      },
                      '&::-webkit-scrollbar-thumb': {
                          backgroundColor: theme.palette.scroll.thumb,
                          borderRadius: '10px',
                      },
                      '&::-webkit-scrollbar-thumb:hover': {
                          backgroundColor: theme.palette.scroll.hover,
                      },
                  },
              }),
          },
      },
      MuiDrawer: {
          styleOverrides: {
              paper: ({ ownerState, theme }) => ({
                  ...{
                      '&::-webkit-scrollbar': {
                          width: '15px',
                      },
                      '&::-webkit-scrollbar-track': {
                          backgroundColor: theme.palette.scroll.track,
                      },
                      '&::-webkit-scrollbar-thumb': {
                          backgroundColor: theme.palette.scroll.thumb,
                          borderRadius: '10px',
                      },
                      '&::-webkit-scrollbar-thumb:hover': {
                          backgroundColor: theme.palette.scroll.hover,
                      },
                  },
              }),
          },
      },
  },



  },
});

export default theme;
