class Info {
  // --------------------------------- 屬性 ---------------------------------
  // 得分 & 等級
  private score: number;
  private level: number;
  // 等級上限 & 升級條件設定
  private maxLevel: number;
  private scorePerLevel: number;
  // 得分 & 等級對應的 DOM 元素
  private scoreElm: HTMLElement;
  private levelElm: HTMLElement;
  // 沒傳參數的話，預設等級上限 10
  constructor(maxLevel: number = 10, scorePerLevel: number = 10) {
    this.score = 0;
    this.level = 1;
    this.maxLevel = maxLevel;
    this.scorePerLevel = scorePerLevel;
    this.scoreElm = document.querySelector("#score > span")!;
    this.levelElm = document.querySelector("#level > span")!;
  }
  // --------------------------------- 方法 ---------------------------------
  // 加分
  addScore() {
    this.scoreElm.innerText = `${++this.score}`;
    // 設定分數對應升級的級距
    if (this.score % this.scorePerLevel === 0) {
      this.levelUp();
    }
  }
  // 提升等級
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelElm.innerText = `${++this.level}`;
    }
  }
}

export default Info;
