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
    this.head.style.left = `${value}px`;
  }
  set y(value: number) {
    this.head.style.top = `${value}px`;
  }
  // 增加一節身體
  addBody() {
    this.snakeElm.innerHTML += `<div></div>`;
  }
}

export default Snake;
