import { Theme } from "@mui/material"

export const style = {
  appbar: {
    zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
  },
  
  toolbar: {
    display: 'flex', 
    justifyContent: 'space-between', 
  },
}