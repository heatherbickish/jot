import { AppState } from "../AppState.js";
import { jotService } from "../services/JotService.js";


export class JotController {
  constructor() {
    AppState.on('activeJot', this.drawActiveJot)
    AppState.on('jots', this.drawJotList)
    jotService.loadJot()
    this.drawJotList()
  }

  drawJotList() {
    const jotListElm = document.getElementById('jot-list')
    jotListElm.innerHTML = ''
    AppState.jots.forEach(jotCard => jotListElm.innerHTML += jotCard.JotListTemplate)
    const jotCountElm = document.getElementById('jot-count')
    jotCountElm.innerHTML = AppState.jots.length.toString()

  }

  drawActiveJot() {
    const activeJotListElm = document.getElementById('active-jot-list')
    activeJotListElm.innerHTML = AppState.activeJot.ActiveJotListTemplate
  }

  selectActiveJotList(jotId) {
    jotService.selectActiveJotList(jotId)
  }

  createJot() {
    event.preventDefault()
    const formElm = event.target
    const formData = {
      title: formElm.title.value,
      color: formElm.color.value,
      // createdAt: formElm.createdAt.value
    }
    jotService.createJot(formData)
  }

  saveActiveJot() {
    event.preventDefault()
    const formElm = event.target
    let newText = formElm.body.value
    jotService.selectActiveJotList(newText)
  }

  deleteJot(jotId) {
    const confirmed = confirm('Are you sure want to delete?')
    if (!confirmed) return
    const reallySure = prompt('Please type "Yessum I meant it" to confirm this action')
    if (reallySure != 'Yessum I meant it') return
    console.log('deleting')
    jotService.deleteJot(jotId)
  }

}