// Google Drive 원본 링크 또는 파일 ID를 설정하는 파일입니다.
export const CONFIG = {
  // 사용하실 구글 드라이브 공유 링크
  driveUrl: "https://drive.google.com/file/d/1nFgXuyb8EM1aVD_Ym_dNz_rD3vaokmRl/view?usp=sharing",

  // 드라이브 링크에서 자동으로 ID를 추출해 Three.js가 읽을 수 있는 프록시 다운로드 URL로 변환하는 헬퍼 함수
  getModelUrl() {
    const match = this.driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
    const fileId = match ? match[1] : null;

    if (!fileId) {
      console.error("유효한 Google Drive 파일 ID를 찾을 수 없습니다.");
      return null;
    }

    const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    return `https://corsproxy.io/?url=${encodeURIComponent(directDownloadUrl)}`;
  }
};