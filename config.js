export const CONFIG = {
  // GitHub Releases 직링크는 CORS 문제가 없어 가장 빠르고 안정적입니다.
  modelUrl: "https://github.com/nicedaddy/design_review/releases/download/v1.0.0/AMR-S250A_R3_MG.PLY",

  getModelUrl() {
    return this.modelUrl;
  }
};
