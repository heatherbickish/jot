import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js";
import { loadState, saveState } from "../utils/Store.js";

class JotSevice {
  saveActiveJotList(newText) {
    const jot = AppState.activeJot
    jot.body = newText
    AppState.emit('activeJot')
    this.saveJot()
  }
  selectActiveJotList(jotId) {
    const selectedJotList = AppState.jots.find(jot => jotId == jot.id)
    AppState.activeJot = selectedJotList
  }

  createJot(formData) {
    const createdJot = new Jot(formData)
    AppState.jots.push(createdJot)
    // AppState.activeJot = ''
    this.saveJot()
  }


  saveJot() {
    let stringData = JSON.stringify(AppState.jots)
    localStorage.setItem('jot_jots', stringData)
  }

  loadJot() {
    let stringData = localStorage.getItem('jot_jots')
    let jotsData = JSON.parse(stringData)
    if (!jotsData) return
    const jots = jotsData.map(jotData => new Jot(jotData))
    AppState.jots = jots
  }

  deleteJot(jotId) {
    const jotToDelete = AppState.jots.find(jot => jot.id == jotId)
    const indexToRemove = AppState.jots.indexOf(jotToDelete)
    AppState.jots.splice(indexToRemove, 1)
    this.saveJot()
  }


}






export const jotService = new JotSevice()



