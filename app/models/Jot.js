import { generateId } from "../utils/GenerateId.js";



export class Jot {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.body = data.body || ''
    // this.createdAt = data.createdAt == undefined ? new Date() : new Date(data.createdAt)
    // this.updatedAt = data.updatedAt == undefined ? new Date() : new Date (data.updatedAt)

  }

  get jotListTemplate() {
    return `
        <div onclick="app.JotController.selectActiveJotList('${this.id}')" role="button" class="selectable">
          <p>${this.title}</p>
          <p></p>
        </div>
    `
  }

  get activeJotListTemplate() {
    return `
    <div>
      <h2>${this.title}</h2>
      <form>
      <textarea name="body" class="form-control" rows="20">${this.body}</textarea>
      <button class="btn btn-primary">Save</button>
      </form>
        
    </div>
    
    `
  }



}