import "./style/index.scss";
import GameContorl from "./modules/gameControl";

let gc = null;
document.addEventListener("keydown", startGame);

function startGame(event: KeyboardEvent): void {
  if (event.code === "Enter") {
    gc = new GameContorl();
    document.removeEventListener("keydown", startGame)
  }
}
