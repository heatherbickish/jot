import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js";

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
  }




}






export const jotService = new JotSevice



