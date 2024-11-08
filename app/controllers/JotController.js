import { AppState } from "../AppState.js";
import { jotService } from "../services/JotService.js";


export class JotController {
  constructor() {
    console.log('🖋️');
    this.drawJotList()
  }

  drawJotList() {
    console.log('🎨📃');
    const jotListElm = document.getElementById('jot-list')
    jotListElm.innerHTML = ''
    AppState.jot.forEach(jotCard => jotListElm.innerHTML += jotCard.jotListTemplate)

  }

  drawActiveJotList() {
    const activeJotListElm = document.getElementById('active-jot-list')
    activeJotListElm.innerHTML = AppState.activeJotList.activeJotListTemplate
  }

  selectActiveJotList(jotId) {
    console.log('🧠🧠🧠🧠', jotId);
    jotService.selectActiveJotList(jotId)


  }

}