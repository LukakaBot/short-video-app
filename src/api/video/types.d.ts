export type VideoDetail = {
  /** 无水印视频地址 */
  url: string;
  /** 带水印视频地址 */
  url_with_water_maskstring: string;
  /** 视频封面 */
  cover: string;
  /** 动态封面 */
  dynamic_cover: string;
  /** 封面原图 */
  cover_original: string;
};

export type VideoInfo = {
  /** 视频详情 */
  video: VideoDetail;
  /** 视频标题 */
  title: string;
};