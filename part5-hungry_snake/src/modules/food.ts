class Food {
  // --------------------------------- 屬性 ---------------------------------
  private element: HTMLElement; // 食物對應的 DOM 元素（div）
  constructor() {
    this.element = document.querySelector("#food")!;
  }
  // 因為不確定要抓取的 DOM 元素是否存在，會拋出錯誤提示
  // 在尾巴加上 !，表示我們確定該元素一定存在，提示便會消失

  // --------------------------------- 方法 ---------------------------------
  // 1. 取得座標
  // 如何判斷蛇碰到食物？ => 兩者範圍有重疊 => 計算範圍，要先取得座標原點（方形的左上角）
  // 因為我們的內容包在區塊元素 div 裡，不管視覺上長什麼樣子，它的區域必定是方形
  // 原點以外的座標點，可以由元素的長寬求得
  get x() {
    return this.element.offsetLeft; // 取得的座標是相對於父元素，而不是整個網頁
  }
  get y() {
    return this.element.offsetTop;
  }
  // 2. 變換位置
  // 碰到食物之後，食物要改變位置
  // 遊戲區域 300x300(px)，食物 10x10(px)，300 / 10 => 共 30x30 格
  change() {
    this.element.style.left = `${Math.floor(Math.random() * 30) * 10}px`;
    this.element.style.top = `${Math.floor(Math.random() * 30) * 10}px`;
  }
}

export default Food;
