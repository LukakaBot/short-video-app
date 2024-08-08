import request from "@/utils/request";
import type { VideoInfo } from './types';

/** 根据短视频地址获取视频信息 */
export function fetchVideoInfo(url: string): Promise<VideoInfo> {
  return request.get('/douyin/parse', { params: { url } });
};