export interface Lending {
  userId: number,
  title: string,
  duedate: Date,
}

export interface User {
  id: number,
  email: string,
  password: string,
  nickName?: string,
  intraId?: number;
  slack?: string,
  penaltyEndDay?: Date,
  role: number,
  reservations?: [],
  lendings?: Lending[],
}
