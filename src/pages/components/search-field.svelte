<script>
  import { SearchField, ActionTop } from "../../index.js";
  import Prism from "svelte-prism";
  import * as animateScroll from "svelte-scrollto";

  const {scrollto} = animateScroll;

  animateScroll.setGlobalOptions({offset: -110});
</script>

<style>
  .component-page > .title {
    text-align: center;
    margin-bottom: var(--gap-biggest);
  }

  .component-page > .subtitle {
    margin-bottom: var(--gap-small);
  }

  .component-page .description {
    display: block;
    margin-bottom: var(--gap-medium);
  }
  
  .component-page .description.-big-line {
    line-height: 1.8em;
  }

  .component-page .name {
    font-weight: bold;
    color: var(--color-floral-white);
    background-color: var(--color-fiery-rose);
    padding: calc(var(--gap-smaller) / 2) var(--gap-smaller);
  }

  .component-page .props {
    font-weight: bold;
    color: var(--color-floral-white);
    background-color: var(--color-purple-navy);
    padding: calc(var(--gap-smaller) / 2) var(--gap-smaller);
  }

  .menu-component {
    list-style: disc;
    padding-left: var(--gap-medium);
    margin-bottom: var(--gap-biggest);
  }

  .menu-component > .item {
    margin-bottom: var(--gap-smaller);
  }

  .section-component {
    margin-bottom: var(--gap-biggest);
    padding-bottom: var(--gap-biggest);
  }

  .section-component:not(:last-of-type) {
    border-bottom: var(--line-main);
  }

  .section-component > .title {
    display: block;
    margin-bottom: var(--gap-medium);
  }

  .section-component > .code {
    margin-bottom: var(--gap-small);
  }

  .section-component > .component {
    margin-bottom: var(--gap-biggest);
  }

  .section-component > .component.-medium-h {
    width: 40%;
  }

  .section-component > .component.-small-h {
    width: 20%;
  }

  @media(max-width: 1000px) {
    .section-component > .component.-medium-h {
      width: 60%;
    }

    .section-component > .component.-small-h {
      width: 40%;
    }
  }

  @media(max-width: 600px) {
    .section-component > .component.-medium-h, 
    .section-component > .component.-small-h {
      width: 90%;
    }
  }

  :global(.search-field) {
    width: 100%;
    height: 50px;
  }
</style>

<article id="top" class="component-page">
  <h1 class="title _headline3">SearchField</h1>
  <p class="description _body1 -big-line">
    O component <code class="name">SearchField</code> é usado no momento que você precisa de uma entrada de busca para o seu usuário.
  </p>

  <h2 class="subtitle _headline4">Exemplos</h2>
  <ol class="menu-component _body1">
    <li class="item">
      <a use:scrollto={'#default'} href="#horizontal" class="action">Padrão</a>
    </li>
    <li class="item">
      <a use:scrollto={'#height'} href="#horizontalLight" class="action">Alterar altura</a>
    </li>
  </ol>

  <section id="default" class="section-component"> 
    <h3 class="title _headline5">Padrão</h3>
    <div class="code _body1">
      <Prism language="html" source={`
  <script>
    import { SearchField } from '@collabcode/styleguide';
  </script>

  <SearchField placeholder="Busca" />
  `} />
    </div> 
    <SearchField placeholder="Busca" />
  </section>

  <section id="height" class="section-component">
    <h3 class="title _headline5">Alterar altura</h3>
    <p class="description _body1 -big-line">Por favor, se for definir uma altura diferente para este componente, altere a variável de CSS chanada <code class="props">--height</code>. Como no exemplo a seguir:</p>
    <div class="code _body1">
      <Prism language="html" source={`
  <script>
    import { SearchField } from '@collabcode/styleguide';
  </script>

  <style>
    :global(.search-field) {
      --height: 100px;
    }
  </style>

  <SearchField placeholder="Busca" />
  `} />
    </div>
    <SearchField placeholder="Busca" style="--height: 100px"/>
  </section>

  <ActionTop withMenuRight={true} />
</article>

