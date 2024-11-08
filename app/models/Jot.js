import { generateId } from "../utils/GenerateId.js";



export class Jot {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.body = data.body
    this.createdAt = ''
    this.updatedAt = ''

  }

  get jotListTemplate() {
    return `
        <div onclick="app.JotController.selectActiveJotList('${this.id}')" role="button" class="selectable">
          <p>${this.title}</p>
          <p>${this.body}</p>
        </div>
    `
  }

  get activeJotListTemplate() {
    return `
    <div>
      <h2>${this.title}</h2>
        <p>${this.body}</p>
        <p>${this.createdAt}</p>
    </div>
    
    `
  }



}