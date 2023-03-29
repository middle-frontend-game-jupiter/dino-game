import React, { useCallback, useMemo } from "react"

import { useAppSelector } from "@/app/hooks/redux"
import { Avatar, Box } from "@mui/material"
import { useNavigate } from "react-router"
import { authModel } from ".."
import { style } from "./style"

export const UserViewer = (): JSX.Element | null => {
  const navigate = useNavigate()
  const user = useAppSelector(authModel.selectors.getUserSelector)

  const fullName = useMemo(
    () => user ? `${user.firstName} ${user.secondName}`: '', [user]
  )

  const onChangeRoute = useCallback(() => navigate('/profile'), [])

  if(!user) return null;

  return (
    <Box sx={style.root}>
      <Avatar></Avatar>
      <Box 
        sx={style.user}
        onClick={onChangeRoute}
      >
        {fullName}
      </Box>
    </Box>
  )
}