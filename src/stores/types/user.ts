export interface IUser {
  userId: number
  telegramId: number
  role: string
  name?: string
  phone?: string
  organization: string
  show_notifications: true
}

export interface IUserState {
  user: IUser | null
}
