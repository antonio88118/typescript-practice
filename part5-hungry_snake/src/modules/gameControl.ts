// 遊戲控制器，控制所有類別中的功能
// 比較複雜的註解統一整理在最下面，可以先往下看
import Food from "./food";
import Info from "./info";
import Snake from "./snake";
class GameControl {
  // --------------------------------- 屬性 ---------------------------------
  // 定義三個屬性，對應三個功能模組
  snake: Snake;
  food: Food;
  info: Info;
  direction: string = "KeyS"; // 蛇移動的方向
  isAlive: boolean = true; // 蛇的存活狀態 => 遊戲是否結束
  // 遊戲結束訊息
  private _coverTextElm: HTMLElement;
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.info = new Info(10, 3);
    this._coverTextElm = document.querySelector("#cover-text")!;
    this.init(); // new GameControl 的同時，進行初始化
  }
  // --------------------------------- 方法 ---------------------------------
  // 1. 功能初始化
  init() {
    this.info.message = "";
    this._coverTextElm.textContent = "";
    // 綁定鍵盤事件 => 整理一、為什麼要用 bind()？
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    this.move();
  }

  // 2. 鍵盤事件的處理函式 => 整理二、共用移動函式
  keydownHandler(event: KeyboardEvent) {
    // code 屬性不受語言影響，對應物理上的按鍵，名稱都是固定的
    switch (event.code) {
      case "KeyW":
      case "KeyS":
      case "KeyA":
      case "KeyD":
        this.direction = event.code;
        break;
    }
  }

  // 3. 移動
  move() {
    // 四種移動：上 => top 減少 | 下 => top 增加 | 左 => left 減少 | 右 => left 增加
    // 1. 取得蛇（頭）當下的座標
    let x = this.snake.x;
    let y = this.snake.y;
    // 2. 根據按鍵判斷方向，移動一格
    switch (this.direction) {
      case "KeyW":
        y -= 20;
        break;
      case "KeyS":
        y += 20;
        break;
      case "KeyA":
        x -= 20;
        break;
      case "KeyD":
        x += 20;
        break;
    }

    // 3. 檢查是否吃到食物
    this.checkEat(x, y);

    // 4. 用 try & catch 的錯誤處理可以應對各種遊戲結束的情況
    try {
      this.snake.x = x;
      this.snake.y = y;
    } catch (error: any) {
      this.info.message = error.message;
      this.isAlive = false;
      this._coverTextElm.textContent = "GAME OVER";
    }

    // 5. 進入遞迴，每隔一段時間調用自己一次，秒數越短動越快 => 整理三、等級難度設定
    this.isAlive &&
      setTimeout(this.move.bind(this), 450 - (this.info.level - 1) * 30);
  }

  // 4. 檢查是否吃到食物 => 兩者座標是否重疊
  // 涉及各類別的功能，所以不分開寫
  checkEat(thisTimeX: number, thisTimeY: number) {
    if (thisTimeX === this.food.x && thisTimeY === this.food.y) {
      this.food.change();
      this.info.addScore();
      this.snake.addBody();
    }
  }
}

export default GameControl;
// -------------------------------- 整理一、為什麼要用 bind()？ -------------------------------
// this 指向「執行函式的物件」，所以會改變
// 以鍵盤事件為例，this.keydownHandler 是透過 addEventListener 執行，所以會指向 document
// 但我們想改變的屬性存在 GameControl 中，this 必須指向實例化的 GameControl 類物件
// 用 bind 函式綁定定義時的 this，便會永遠指向同一個對象
// ----------------------------------------------------------------------------------------

// ----------------------------------- 整理二、共用移動函式 -----------------------------------
// 鍵盤事件的處理函式非常簡單，只改變方向屬性 direction
// 為什麼不把移動函式 move() 也寫在裡面？
// => 1. 不按按鍵的時候，蛇也要動，把 move() 獨立寫在外面，就不用寫兩次一樣的程式碼
// => 2. move() 每隔一段時間會執行一次，而且執行時會參照當下的 direction
// ----------------------------------------------------------------------------------------

// ---------------------------------- 整理三、等級難度設定 ------------------------------------
// 在秒數設定上代入 level，反映「等級越高，速度越快」
// this.isAlive && setTimeout(this.move.bind(this), 500 - (this.info.level - 1) * 30);
// => 這裡的 && 相當於 if，因為 setTimeout 必定為 true，若 this.isAlive 也是 true，該行才會執行
// ----------------------------------------------------------------------------------------
