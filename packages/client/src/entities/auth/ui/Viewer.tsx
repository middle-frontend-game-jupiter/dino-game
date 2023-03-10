import React, { useEffect } from "react";
import { useMeMutation } from "@/services/auth";
import { Navigate } from "react-router";
import { CircularProgress } from "@mui/material";
import { useAppSelector } from "@/app/hooks/redux";
import { isAuthUserSelector } from "../model/authSlice";

interface OwnProps {
  children: JSX.Element;
}

export const Viewer = ({ children }: OwnProps): JSX.Element | React.ReactElement => {
  const [userQuery, { isError, isLoading }] = useMeMutation()

  const isAuth = useAppSelector(isAuthUserSelector)

  useEffect(() => {
    if(!isAuth) {
      userQuery({})
    }
  }, [isAuth])

  if(isLoading) {
    return <CircularProgress />
  }

  if(isError) {
    return <Navigate to="/auth" replace={true} />
  }

  return children
}