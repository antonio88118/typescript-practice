// 資訊面板
class Info {
  // --------------------------------- 屬性 ---------------------------------
  // 得分 & 等級
  private _score: number;
  private _level: number;
  // 等級上限 & 升級條件設定
  private _maxLevel: number;
  private _scorePerLevel: number;
  // 得分 & 等級對應的 DOM 元素
  private _scoreElm: HTMLElement;
  private _levelElm: HTMLElement;
  // 遊戲訊息 DOM 元素（升級、死亡等）
  private _messageElm: HTMLElement;
  // 沒傳參數的話，預設等級上限 10
  constructor(_maxLevel: number = 10, _scorePerLevel: number = 5) {
    this._score = 0;
    this._level = 1;
    this._maxLevel = _maxLevel;
    this._scorePerLevel = _scorePerLevel;
    this._scoreElm = document.querySelector("#score > span")!;
    this._levelElm = document.querySelector("#level > span")!;
    this._messageElm = document.querySelector("#message > span")!;
  }
  // --------------------------------- 方法 ---------------------------------
  // 1. 取得等級，用於移動速度調整
  get level() {
    return this._level;
  }

  // 2. 遊戲訊息設定
  set message(messageText: string) {
    this._messageElm.textContent = messageText;
  }

  // 3.加分
  addScore() {
    this._scoreElm.innerText = `${++this._score}`;
    // 設定分數對應升級的級距 => x分 / 1級
    if (this._score % this._scorePerLevel === 0) {
      this.levelUp();
    }
  }

  // 4.提升等級
  levelUp() {
    if (this._level < this._maxLevel) {
      this._levelElm.innerText = `${++this._level}`;
      this.message = "LEVEL UP!!";
      setTimeout(() => {
        this.message = "";
      }, 2000);
    }
  }
}

export default Info;
