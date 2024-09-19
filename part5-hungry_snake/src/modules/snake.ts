// 許多功能邏輯是綁在蛇頭上，例如：碰到食物、撞牆
class Snake {
  // --------------------------------- 屬性 ---------------------------------
  // 比較：querySelectorAll vs getElementByXX
  // querySelectorAll 取得的 NodeList 長度是固定的
  // getElementByXX 系列取得的 HTMLCollection 會變動 => 符合「蛇身體會變長」的需求
  snakeElm: HTMLElement; // 存取蛇的容器
  head: HTMLElement;
  body: HTMLCollection;
  constructor() {
    this.snakeElm = document.getElementById("snake")!;
    this.head = document.querySelector("#snake > div")!;
    this.body = this.snakeElm.getElementsByTagName("div");
  }
  // --------------------------------- 方法 ---------------------------------
  // 取得蛇頭座標
  get x() {
    return this.head.offsetLeft;
  }
  get y() {
    return this.head.offsetTop;
  }

  // 設定蛇頭座標
  set x(value: number) {
    // 蛇每次只會在 X 或 Y 軸改變方向（簡單來說，不會走斜線），方向沒變化的時候不用改值
    if (this.x === value) {
      return;
    }
    // 可移動的範圍在 0 ~ 290px 之間
    if (value < 0 || value > 290) {
      // 因為蛇的存活屬性 isAlive 在 gameControl，用拋出錯誤的方式傳遞死亡訊息給 gameControl
      throw new Error("遊戲結束");
    }
    this.head.style.left = `${value}px`;
  }
  set y(value: number) {
    if (this.y === value) {
      return;
    }
    if (value < 0 || value > 290) {
      throw new Error("遊戲結束");
    }
    this.head.style.top = `${value}px`;
  }

  // 增加一節身體
  addBody() {
    // innerHTML 會重新解析原有元素 & 重新渲染，影響之前抓取的 DOM 物件
    // 實驗會發現，蛇吃到食物增加一節後會停下來
    // this.snakeElm.innerHTML += `<div></div>`;
    this.snakeElm.insertAdjacentHTML("beforeend", "<div></div>");
  }

  moveBody() {}
}

export default Snake;
