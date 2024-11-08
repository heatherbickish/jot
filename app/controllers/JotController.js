import { AppState } from "../AppState.js";


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





}