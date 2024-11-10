import { generateId } from "../utils/GenerateId.js";



export class Jot {
  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.color = data.color
    this.body = data.body || ''
    this.createdAt = data.createdAt == undefined ? new Date() : new Date(data.createdAt)
    this.updatedAt = data.updatedAt == undefined ? new Date() : new Date(data.updatedAt)

  }

  get JotListTemplate() {
    return `
        <div onclick="app.JotController.selectActiveJotList('${this.id}')" role="button" class="selectable border-start border-dark p-1 mb-3">
          <h4 style="color: ${this.color}" class="mdi mdi-circle">${this.title}       <small class="fs-6 text-primary fw-bold">${this.CreatedAtDate}</small></h4>
          
        </div>
    `
  }

  get ActiveJotListTemplate() {
    return `
    <div>
      <h2 style="color: ${this.color}">${this.title}</h2>
      <p>Created at: ${this.CreatedAtDate}</p>
      <span>Updated at: ${this.UpdatedAtDate}</span>
      <span><button class="btn btn-primary mb-3" type="submit" title="Save ${this.title}">Save</button></span>
      <span> <button onclick="app.JotController.deleteJot()" type="button" class="btn btn-danger mb-3" title="Delete ${this.title}">Delete</button></span>
      <textarea name="body" class="form-control bg-white" rows="20">${this.body}</textarea>
    </div>
    
    `
  }

  get CreatedAtDate() {
    return this.createdAt.toLocaleDateString('en-us', { year: '2-digit', day: '2-digit', month: '2-digit' })
  }

  get UpdatedAtDate() {
    return this.updatedAt.toLocaleDateString('en-us', { hour: '2-digit', minute: '2-digit', second: '2-digit', year: 'numeric', day: '2-digit', month: 'short' })
  }



}