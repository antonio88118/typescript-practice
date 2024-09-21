import "./style/index.scss";
import GameContorl from "./modules/gameControl";

let gc: GameContorl;
document.addEventListener("keydown", startGame);

function startGame(event: KeyboardEvent): void {
  if (event.code === "Enter") {
    if (!gc) {
      gc = new GameContorl();
    } else {
      if (!gc.isAlive) {
        location.reload();
      }
    }
  }
}
