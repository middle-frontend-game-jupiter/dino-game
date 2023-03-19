import { FC, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetYandexOAuthTokenMutation } from '@/services/yandex-oauth'

// new URLSearchParams(window.location.search).get('code') as string

const YandexOauth: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  // const [getToken, { isLoading, isError, data }] =
  const [getToken, { data }] = useGetYandexOAuthTokenMutation()
  const code = searchParams.get('code')
  useEffect(() => {
    getToken({ code })
  }, [code])
  console.log(data)
  return null
}

export default YandexOauth
