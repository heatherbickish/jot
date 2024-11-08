import { AppState } from "../AppState.js";
import { jotService } from "../services/JotService.js";


export class JotController {
  constructor() {
    console.log('🖋️');
    this.drawJotList()
    AppState.on('activeJot', this.drawActiveJot)
    AppState.on('jots', this.drawJotList)
  }

  drawJotList() {
    const jotListElm = document.getElementById('jot-list')
    jotListElm.innerHTML = ''
    AppState.jots.forEach(jotCard => jotListElm.innerHTML += jotCard.jotListTemplate)

  }

  drawActiveJot() {
    const activeJotListElm = document.getElementById('active-jot-list')
    activeJotListElm.innerHTML = AppState.activeJot.activeJotListTemplate
  }

  selectActiveJotList(jotId) {
    jotService.selectActiveJotList(jotId)
  }

  createJot() {
    event.preventDefault()
    const formElm = event.target
    const formData = {
      title: formElm.title.value,
      // color: formElm.color.value,
      // createdAt: formElm.createdAt.value
    }
    jotService.createJot(formData)
    // this.drawJotList()

  }

}