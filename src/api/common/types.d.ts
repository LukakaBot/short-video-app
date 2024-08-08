export type BaseResponseContent<T> = {
  /** 响应码 */
  code: number;
  /** 响应消息 */
  msg: string;
  /** 响应数据 */
  data: T;
};