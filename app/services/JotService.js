import { AppState } from "../AppState.js";

class JotSevice {
  selectActiveJotList(jotId) {
    console.log('service');
    const selectedJotList = AppState.jot.find(jot => jotId = jot.id)
    console.log(selectedJotList);
    AppState.activeJotList = selectedJotList

  }
}




export const jotService = new JotSevice