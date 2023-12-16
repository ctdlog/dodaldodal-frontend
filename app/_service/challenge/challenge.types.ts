import { type Champion } from '../auth/auth.types'

export interface GetTodayStatus {
  champion: Champion
  explorationCount: number
  certificatedCount: number
}

export type Category = 'LIFE_STYLES' | 'SELF_DEVELOPMENT' | 'STUDY' | 'WORKOUT' | 'ETC'

export interface CreateChallengeParams {
  name: string
  category: Category
  authenticationMethod: string
  reward: string
}

export interface CreateChallengeResponse {
  challengeId: number
}

export interface GetUpcomingChallengeParams {
  challengeId: number
}

export interface GetUpcomingChallengeResponse {
  nickname: string
}

export type ChallengeStatus = 'WAITING' | 'PROGRESS' | 'FAILURE' | 'SUCCESS'

export interface Challenge {
  id: number
  name: string
  category: Category
  authentication_method: string
  reward: string
  challenge_status: ChallengeStatus
}

export type GetChallengesResponse = Challenge[]

export interface ChallengeDetail {
  id: number
  nickname: string
  champion: Champion
  participation_count: number
  challenge_name: string
  category: Category
  reward: string
}

export type GetChallengeDetail = ChallengeDetail[] & {
  myId: number
}
