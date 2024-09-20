class Food {
  // --------------------------------- 屬性 ---------------------------------
  private _element: HTMLElement; // 食物對應的 DOM 元素（div）
  constructor() {
    // 不確定要抓取的 DOM 元素是否存在，會拋出錯誤提示
    // 在尾巴加上 !，表示我們確定該元素一定存在
    this._element = document.querySelector("#food")!;
    this._element.style.opacity = "1";
    // 初始化隨機位置
    this.change();
  }

  // --------------------------------- 方法 ---------------------------------
  // 1. 取得座標
  // 如何判斷蛇碰到食物？ => 兩者座標重疊
  get x() {
    return this._element.offsetLeft; // 取得的座標是相對於父元素，而不是整個網頁
  }
  get y() {
    return this._element.offsetTop;
  }

  // 2. 變換位置
  // 碰到食物之後，食物要改變位置
  // 遊戲區域 300x300(px)，食物 20x20(px)，300 / 20 => 共 15x15 格
  // 食物和蛇與允許的座標值都是在 280px 之間（300px 要減去長寬 20px）
  change(snakeX: number = 0, snakeY: number = 0) {
    this._element.style.left = `${Math.floor(Math.random() * 15) * 20}px`;
    this._element.style.top = `${Math.floor(Math.random() * 15) * 20}px`;
  }
}

export default Food;
