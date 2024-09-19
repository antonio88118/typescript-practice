// 遊戲控制器，控制所有類別中的功能
// 最下面有疑惑點整理，可以先往下看
import Food from "./food";
import Info from "./info";
import Snake from "./snake";
class GameControl {
  // --------------------------------- 屬性 ---------------------------------
  // 定義三個屬性，對應三個功能模組
  snake: Snake;
  food: Food;
  info: Info;
  direction: string = ""; // 蛇移動的方向
  isAlive: boolean = true; // 蛇的存活狀態 => 遊戲是否結束
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.info = new Info();
    this.init(); // new GameControl 的同時，進行初始化
  }
  // --------------------------------- 方法 ---------------------------------
  // 功能初始化
  init() {
    // 綁定鍵盤事件
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    this.move();
  }

  // 鍵盤事件的處理函式
  keydownHandler(event: KeyboardEvent) {
    // code 屬性不受語言影響，對應物理上的按鍵，名稱都是固定的
    this.direction = event.code;
  }

  // 移動函式
  move() {
    // 四種移動：上 => top 減少 | 下 => top 增加 | 左 => left 減少 | 右 => left 增加
    // 取得蛇（頭）當下的座標
    let x = this.snake.x;
    let y = this.snake.y;
    // 根據按鍵判斷方向，移動一格
    switch (this.direction) {
      case "ArrowUp":
        y -= 10;
        break;
      case "ArrowDown":
        y += 10;
        break;
      case "ArrowLeft":
        x -= 10;
        break;
      case "ArrowRight":
        x += 10;
        break;
    }
    this.snake.x = x;
    this.snake.y = y;

    // 進入遞迴，每隔一段時間調用自己一次，秒數越短動越快
    // 在秒數設定上代入 level，反映「等級越高，速度越快」
    // 若蛇存活，讓蛇繼續移動
    // 下面的 && 相當於 if，因為 setTimeout 必定為 true，若 this.isAlive 也是 true，該行才會執行
    this.isAlive &&
      setTimeout(this.move.bind(this), 500 - (this.info.level - 1) * 30);
  }
}

export default GameControl;
// ---------------------------------- 整理一、為什麼要用 bind()？ ----------------------------------
// 1. this 指向「執行函式的物件」，所以會改變
// 2. 以鍵盤事件為例，this.keydownHandler 是透過 addEventListener 執行，所以會指向 document
// 3. 但我們想改變的屬性存在 GameControl 中，this 必須指向實例化的 GameControl 類物件
// 4. 用 bind 函式綁定定義時的 this，便會永遠指向同一個對象

// ---------------------------------- 整理一、為什麼要用 bind()？ ----------------------------------
