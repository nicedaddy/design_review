
export const CONFIG = {
  // 생성하신 GitHub Release 다운로드 URL
  rawReleaseUrl: "https://github.com/nicedaddy/design_review/releases/download/v1.0.0/AMR-S250A_R3_MG.PLY",

  getModelUrl() {
    // GitHub Release의 302 리다이렉트와 CORS를 우회해 대용량 바이너리를 전달하는 프록시
    return `https://proxy.corsfix.com/?${this.rawReleaseUrl}`;
  }
};
