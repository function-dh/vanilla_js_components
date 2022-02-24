import Component from "../utils/Component.js";


class Items extends Component {
  setup() {
    this.$state = {
      items: ['item1', 'item2']
    }
  }

  template() {
    const {items} = this.$state
    return `
        <ul>
            ${items.map(item => `<li>${item}</li>`).join("")}
         </ul>
         <button>추가</button>
    `
  }
}


export default Items
