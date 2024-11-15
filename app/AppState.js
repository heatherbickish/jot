import { Jot } from "./models/Jot.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  jots = [
    new Jot({
      title: 'Recipes',
      color: 'coral',
      body: 'Powder lollipop chocolate sweet roll jujubes cake pastry carrot cake. Wafer sesame snaps jelly icing chocolate biscuit tiramisu pudding jujubes. Halvah cake topping bear claw danish cookie danish chocolate bar. Sweet bonbon lollipop sweet wafer powder. Chocolate cake sugar plum marzipan jujubes dragée apple pie. Lollipop wafer fruitcake jujubes cupcake jelly-o jelly macaroon.',
      createdAt: '11/07/2024'
    }),
    new Jot({
      title: 'Crochet Ideas',
      color: 'green',
      body: ' Dope non its fo rizzle nizzle maurizzle yo bibendizzle. Aliquizzle sizzle dang lectizzle. Crackalackin izzle enim shit go to hizzle sodalizzle sure. Aliquizzle , owned black fizzle gangster, nulla ligula cool metizzle, dope tellivizzle augue dui izzle arcu. Boofron sheezy lacizzle id get down get down. Vivamus arcu bling bling, fermentizzle crunk , we gonna chung izzle, mofo, phat. Izzle vehicula laoreet stuff. Vestibulizzle erat fo shizzle my nizzle, hendrerit things, crackalackin izzle, malesuada daahng dawg, arcu. ',
      createdAt: '11/08/24'
    }),
    new Jot({
      title: 'Things to do',
      color: 'teal',
      body: "In the last 24 hours we have seen facilities now being created for the greatest and most complex exploration in man's history. We have felt the ground shake and the air shattered by the testing of a Saturn C-1 booster rocket, many times as powerful as the Atlas which launched John Glenn, generating power equivalent to 10,000 automobiles with their accelerators on the floor.",
      createdAt: '11/09/2024'
    })
  ]
  /** @type {Jot} */
  activeJot = null




  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())
