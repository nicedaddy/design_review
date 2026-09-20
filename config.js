/export const CONFIG = {
  // 대상 구글 드라이브 링크
  driveUrl: "https://drive.google.com/file/d/1nFgXuyb8EM1aVD_Ym_dNz_rD3vaokmRl/view?usp=sharing",

  getModelUrl() {
    const match = this.driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
    const fileId = match ? match[1] : null;

    if (!fileId) {
      console.error("유효한 Google Drive 파일 ID를 찾을 수 없습니다.");
      return null;
    }

    // 대용량 경고 우회 파라미터(confirm=t) 추가
    const directUrl = `https://drive.google.com/uc?export=download&id=${fileId}&confirm=t`;
    
    // allorigins 프록시 사용 (안정성 우수)
    return `https://api.allorigins.win/raw?url=${encodeURIComponent(directUrl)}`;
  }
};
