class Component {
  $state
  $target

  constructor($target) {
    this.$target = $target
    this.setup()
    this.render()
  }

  setup() {
  }

  template() {
    return ''
  }

  render() {
    this.$target.innerHTML = this.template()
  }

  setState(newState) {
    this.$state = {...this.$state, ...newState}
    this.render()
  }

  setEvent() {
  }
}

export default Component
