export interface ILeaderBoard {
  data: {
    dinoScore: number
    user: string
  }
  teamName: string
  ratingFieldName: string
}

export interface ILeaderBoardListRequest {
  ratingFieldName: string
  teamName: string
  cursor: number
  limit: number
}

export interface ILeaderBoardListResponse {
  data: {
    user: string
    dino_score: number
  }
}
