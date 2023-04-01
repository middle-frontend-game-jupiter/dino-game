import React, { useCallback, useEffect, useRef } from 'react'
import { DinoGame } from '@/game'
import useStyles from './styles'
import { Canvas } from '@/shared/ui/Canvas/Canvas'
import Grid from '@mui/material/Grid'
import { useAddLeaderboardMutation } from '@/services/leaderboard'
import selector from './selector'
import { useAppSelector } from '@/app/hooks/redux'
import {
  RATING_FIELD_NAME,
  SCORE_STORAGE_KEY,
  TEAM_NAME,
} from '@/game/utils/constants'

const GamePreview: React.FC = () => {
  const styles = useStyles()

  const canvas = useRef<HTMLCanvasElement>(null)
  const container = useRef<HTMLDivElement>(null)
  const game = useRef<typeof DinoGame | null>(DinoGame)

  const [addLeaderboardQuery] = useAddLeaderboardMutation()

  const { user, score } = useAppSelector(selector)

  const onEnd = useCallback((score: number) => {
    console.log(score)
    addLeaderboardQuery({
      data: {
        dino_score: score,
        user: user?.login,
      },
      teamName: TEAM_NAME,
      ratingFieldName: RATING_FIELD_NAME,
    })
  }, [])

  const onStart = useCallback(() => {
    console.log('start')
  }, [])

  useEffect(() => {
    let instance = undefined as DinoGame | undefined

    localStorage.setItem(SCORE_STORAGE_KEY, Math.floor(score).toString())

    if (container.current && canvas.current) {
      instance = game.current?.execute(canvas.current, {
        container: container.current,
        onEnd,
        onStart,
      })

      instance?.start()
    }

    return () => {
      game.current = null
      instance = undefined
    }
  }, [])

  return (
    <Grid container component="main">
      <Grid container sx={styles.content}>
        <Canvas canvas={canvas} container={container} />
      </Grid>
    </Grid>
  )
}

export default GamePreview
