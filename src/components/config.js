import { Logo, Title, Menu } from "../index.js"

const logo = {
  component: Logo,
  props: {
    types: [
      'horizontal',
      'horizontalLight',
      'ball',
      'ballText'
    ]
  }
}

const title = {
  component: Title,
  props: {
    content: "Conteúdo do título"
  }
}

const menu = {
  component: Menu
}

export default {
  logo, title, menu
}