import cactusVerOne from '../images/cactus_1.png'
import cactusVerTwo from '../images/cactus_2.png'
import cactusVerThree from '../images/cactus_3.png'

export const GAME_SPEED_START = 1 
export const GAME_WIDTH = 800
export const GAME_HEIGHT = 200
export const PLAYER_WIDTH = 88 / 1.5 
export const PLAYER_HEIGHT = 94 / 1.5
export const MAX_JUMP_HEIGHT = GAME_HEIGHT
export const MIN_JUMP_HEIGHT = 150
export const GROUND_WIDTH = 2400
export const GROUND_HEIGHT = 24
export const GROUND_AND_CACTUS_SPEED = 0.5
export const GAME_SPEED_INCREMENT = 0.00001


export const CACTI_CONFIG = [
  { width: 48 / 1.5, height: 100 / 1.5, image: cactusVerOne },
  { width: 98 / 1.5, height: 100 / 1.5, image: cactusVerTwo },
  { width: 68 / 1.5, height: 70 / 1.5, image: cactusVerThree },
]