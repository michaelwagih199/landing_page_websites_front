export interface AppResponse<T> {
  statusCode: number
  message: string
  data: T
}
