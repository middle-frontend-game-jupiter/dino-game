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

    const handleFullScreenChange = () => {
      if (document.fullscreenElement) {
        // если пользователь включил полноэкранный режим
        console.log('Fullscreen mode enabled');
      } else {
        // если пользователь выключил полноэкранный режим
        console.log('Fullscreen mode disabled');
      }
    };

    const handleDoubleClick = () => {
      if (container.current) {
        container.current.requestFullscreen();
      }
    };

    const handleEscPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && document.fullscreenElement) {
        document.exitFullscreen();
      }
    };

    container.current?.addEventListener('dblclick', handleDoubleClick);
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('keydown', handleEscPress);

    return () => {
      container.current?.removeEventListener('dblclick', handleDoubleClick);
      document.removeEventListener(
        'fullscreenchange',
        handleFullScreenChange
      );
      document.removeEventListener('keydown', handleEscPress);
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
