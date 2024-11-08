import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js";
import { loadState, saveState } from "../utils/Store.js";

class JotSevice {
  selectActiveJotList(jotId) {
    const selectedJotList = AppState.jots.find(jot => jotId == jot.id)
    AppState.activeJot = selectedJotList
  }

  createJot(formData) {
    const createdJot = new Jot(formData)
    AppState.jots.push(createdJot)
    // AppState.activeJot = ''
    console.log(AppState.jots);
    this.saveJot()
  }


  saveJot() {
    saveState('jots', AppState.jots)
  }

  loadJot() {
    AppState.jots = loadState('jots', [Jot])
  }

}






export const jotService = new JotSevice



