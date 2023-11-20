import { Draw } from '../draw/Draw'
// import WordCountWorker from './works/wordCount?worker&inline'
// import CatalogWorker from './works/catalog?worker&inline'
//import GroupWorker from './works/group?worker&inline' 
// import WordCountWorker from './works/wordCount.worker?worker'
// import CatalogWorker from './works/catalog.worker'
// import GroupWorker from './works/group.worker'
// var WordCountWorker = './works/wordCount.worker'
// var CatalogWorker = './works/catalog.worker'
// var GroupWorker = './works/group.worker'
import { ICatalog } from '../../interface/Catalog'

export class WorkerManager {
  private draw: Draw
  private wordCountWorker: Worker
  private catalogWorker: Worker
  private groupWorker: Worker

  constructor(draw: Draw) {
    this.draw = draw
    this.wordCountWorker = new Worker('./works/wordCount.ts')
    this.catalogWorker = new Worker('./works/catalog.ts')
    this.groupWorker = new Worker('./works/group.ts')
  }

  public getWordCount(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.wordCountWorker.onmessage = evt => {
        resolve(evt.data)
      }

      this.wordCountWorker.onerror = evt => {
        reject(evt)
      }

      const elementList = this.draw.getOriginalMainElementList()
      this.wordCountWorker.postMessage(elementList)
    })
  }

  public getCatalog(): Promise<ICatalog | null> {
    return new Promise((resolve, reject) => {
      this.catalogWorker.onmessage = evt => {
        resolve(evt.data)
      }

      this.catalogWorker.onerror = evt => {
        reject(evt)
      }

      const elementList = this.draw.getOriginalMainElementList()
      this.catalogWorker.postMessage(elementList)
    })
  }

  public getGroupIds(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      this.groupWorker.onmessage = evt => {
        resolve(evt.data)
      }

      this.groupWorker.onerror = evt => {
        reject(evt)
      }

      const elementList = this.draw.getOriginalMainElementList()
      this.groupWorker.postMessage(elementList)
    })
  }
}
