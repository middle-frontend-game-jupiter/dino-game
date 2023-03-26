import { Theme } from "@mui/material";

export const style = {
  drawer: {
    width: '10%',
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: { width: '10%', boxSizing: 'border-box' },
  },

  appbar: {
    zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
  },

  toolbar: {
    display: 'flex', 
    justifyContent: 'space-between', 
  },

  content: { flexGrow: 1, p: 3 },

  container: {width: '100%', height: '400px' }
}