export const CONFIG = {
  // 릴리즈 원본 직링크
  rawUrl: "https://github.com/nicedaddy/design_review/releases/download/v1.0.0/AMR-S250A_R3_MG.PLY",

  getModelUrl() {
    // CORS 차단 및 GitHub CDN 리다이렉션을 우회하기 위해 프록시 적용
    return `https://corsproxy.io/?url=${encodeURIComponent(this.rawUrl)}`;
  }
};
