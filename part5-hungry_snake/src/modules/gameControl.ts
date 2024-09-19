// 遊戲控制器，控制所有類別中的功能
import Food from "./food";
import Info from "./info";
import Snake from "./snake";
class GameControl {
  // --------------------------------- 屬性 ---------------------------------
  // 定義三個屬性，對應三個功能模組
  snake: Snake;
  food: Food;
  info: Info;
  // 蛇移動的方向
  direction: string;
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.info = new Info();
    this.direction = '';
    this.init(); // 複習：new 一個實體之後，會執行 constructor 的內容
  }
  // --------------------------------- 方法 ---------------------------------
  // 功能初始化
  init() {
    // 綁定鍵盤事件
    // 注意！！this 指向的對象是「執行函式的物件」，this.keydownHandler 是透過 addEventListener 執行，所以會指向 document
    // 但我們想改變的屬性存在 GameControl 中，所以需要使用 bind 函式綁定當下的 this，也就是用 new 實例化的 GameControl 類物件
    // 用 bind 綁定後的 this 不會再變化
    document.addEventListener("keydown", this.keydownHandler.bind(this));
  }
  // 鍵盤事件的處理函式
  keydownHandler(event: KeyboardEvent) {
    // code 屬性不受語言影響，對應物理上的按鍵，名稱都是固定的
    // ArrowUp ArrowDown ArrowLeft ArrowRight
    if(event.code)
    this.direction = event.code;
  }
}

export default GameControl;
