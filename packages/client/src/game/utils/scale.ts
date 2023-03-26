import { GAME_WIDTH, GAME_HEIGHT } from './constants'

export function getScaleRatio(container: HTMLDivElement) {
  const screenHeight = Math.min(window.innerHeight, container.clientHeight)

  const screenWidth = Math.min(window.innerWidth, container.clientWidth)

  if (screenWidth / screenHeight < GAME_WIDTH / GAME_HEIGHT) {
    return screenWidth / GAME_WIDTH
  } else {
    return screenHeight / GAME_HEIGHT
  }
}
