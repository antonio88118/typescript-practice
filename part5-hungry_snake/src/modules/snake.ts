// 許多功能邏輯是綁在蛇頭上，例如：碰到食物、撞牆
class Snake {
  // --------------------------------- 屬性 ---------------------------------
  // 比較：querySelectorAll vs getElementByXX
  // querySelectorAll 取得的 NodeList 長度是固定的
  // getElementByXX 系列取得的 HTMLCollection 會變動 => 符合「蛇身體會變長」的需求
  snakeElm: HTMLElement; // 存取蛇的容器
  head: HTMLElement; // 頭
  body: HTMLCollection; // 全身含頭
  constructor() {
    this.snakeElm = document.getElementById("snake")!;
    this.head = document.querySelector("#snake > div")!;
    this.body = this.snakeElm.getElementsByTagName("div");
  }
  // --------------------------------- 方法 ---------------------------------
  // 1. 取得蛇頭座標
  get x() {
    return this.head.offsetLeft;
  }
  get y() {
    return this.head.offsetTop;
  }

  // 2. 設定蛇頭座標
  set x(value: number) {
    // 判斷1. 轉向，蛇每次只會在 X 或 Y 軸改變方向（不會走斜線），方向沒變化的時候不用改值
    if (this.x === value) {
      return;
    }
    // 判斷2. 撞牆，可移動的範圍在 0 ~ 280px 之間
    if (value < 0 || value > 280) {
      // 2. 因為蛇的存活屬性 isAlive 在 gameControl，用拋出錯誤的方式傳遞死亡訊息給 gameControl
      throw new Error("Press enter to try again");
    }
    // 判斷3. 掉頭 => 頭是否想移到第二節（body[1）的位置
    if (this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value) {
      // 當蛇想掉頭，讓它往反方向（原本移動的方向）繼續移動
      if (this.x > value) {
        // 向左掉頭 => 繼續向右
        value = this.x + 20;
      } else {
        // 向右掉頭 => 繼續向左
        value = this.x - 20;
      }
    }

    this.moveBody();
    this.head.style.left = `${value}px`;
    this.checkHitBody();
  }

  set y(value: number) {
    if (this.y === value) {
      return;
    }
    if (value < 0 || value > 280) {
      throw new Error("Press enter to try again");
    }

    if (this.body[1] && (this.body[1] as HTMLElement).offsetTop === value) {
      if (this.y > value) {
        value = this.y + 20;
      } else {
        value = this.y - 20;
      }
    }

    this.moveBody();
    this.head.style.top = `${value}px`;
    this.checkHitBody();
  }

  // 3. 增加一節身體
  addBody() {
    // innerHTML 會重新解析原有元素 & 重新渲染，影響之前抓取的 DOM 物件
    // 實驗會發現，蛇吃到食物增加一節後會停下來
    // this.snakeElm.innerHTML += `<div></div>`;
    this.snakeElm.insertAdjacentHTML("beforeend", "<div></div>");
  }

  // 4. 身體移動
  moveBody() {
    // 移動邏輯：後面一節移到前面一節的位置
    // 後面要參照前面的位置，所以要「由後往前改」，因為前面先被改掉，後面就沒得參照了
    // i > 0 是去掉蛇頭 i == 0 ，因為已經有別的方法控制頭了
    for (let i = this.body.length - 1; i > 0; i--) {
      // 1. 取得前一節身體的座標
      // as 斷言，告訴編譯器我們確定 body[index] 是 HTMLElement
      let prevX = (this.body[i - 1] as HTMLElement).offsetLeft;
      let prevY = (this.body[i - 1] as HTMLElement).offsetTop;
      // 2. 把座標設定到後一節身體
      (this.body[i] as HTMLElement).style.left = `${prevX}px`;
      (this.body[i] as HTMLElement).style.top = `${prevY}px`;
    }
  }

  // 5. 身體碰撞判斷
  checkHitBody() {
    for (let i = 1; i < this.body.length; i++) {
      let bd = this.body[i] as HTMLElement;
      // 若頭的位置跟身體任一節的位置一樣，表示碰撞
      if (this.x === bd.offsetLeft && this.y === bd.offsetTop) {
        throw new Error("Press enter to try again");
      }
    }
  }
}

export default Snake;
