<script>
  import Prism from "svelte-prism";
  import * as animateScroll from "svelte-scrollto";
  import { MainLogo, ActionTop } from "../../index.js";

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
</style>

<article id="top" class="component-page">
  <h1 class="title _headline3">MainLogo</h1>
  <p class="description _body1 -big-line">
    O componente
    <code class="name">MainLogo</code>
    tem algumas variações, você pode escolher uma delas usando o atributo
    <code class="props">type</code>
    , esse atributo recebe os valores a seguir:
  </p>

  <h2 class="subtitle _headline4">Exemplos</h2>
  <ol class="menu-component _body1">
    <li class="item">
      <a use:scrollto={'#horizontal'} href="#horizontal" class="action">horizontal</a>
    </li>
    <li class="item">
      <a use:scrollto={'#horizontalLight'} href="#horizontalLight" class="action">HorizontalText</a>
    </li>
    <li class="item">
      <a use:scrollto={'#ball'} href="#ball" class="action">ball</a>
    </li>
    <li class="item">
      <a use:scrollto={'#ballText'} href="#ballText" class="action">ballText</a>
    </li>
  </ol>

  <section id="horizontal" class="section-component">
    <h3 class="title _headline5"><code class="props">type</code> horizontal</h3>

    <p class="description _body2 -big-line">O <code class="props">type</code> horizontal é o valor padrão, se quiser usar ele pode declarar ou não:</p>

    <div class="code _body1">
      <Prism language="html" source={`
  <script>
    import { MainMenu } from '@collabcode/styleguide';
  </script>

  <MainLogo />
  `} />
    </div>   
    <div class="component -medium-h">
      <MainLogo />
    </div>

    <div class="code _body1">
      <Prism language="html" source={`
  <script>
    import { MainMenu } from '@collabcode/styleguide';
  </script>

  <MainLogo type="horizontal" />
  `} />
    </div>
    <div class="component -medium-h">
      <MainLogo />
    </div>
     
  </section>

  <section id="horizontalLight" class="section-component">
    <h3 class="title _headline5"><code class="props">type</code> horizontalLight</h3>

    <p class="description _body2">Essa versão do logo é mais usada quando o fundo que ele está sendo aplicado é um pouco mais escuro:</p>

    <div class="code _body1">
      <Prism language="html" source={`
  <script>
    import { MainMenu } from '@collabcode/styleguide';
  </script>

  <MainLogo type="horizontalLight" />
  `} />
    </div>

    <div class="component -medium-h">
      <MainLogo type="horizontalLight" />
    </div>
  </section>

  <section id="ball" class="section-component">
    <h3 class="title _headline5"><code class="props">type</code> ball</h3>

    <p class="description _body2">Quando você não quer usar o text CollabCode essa é a melhor aplicação do logo:</p>

    <div class="code _body1">
      <Prism language="html" source={`
  <script>
    import { MainMenu } from '@collabcode/styleguide';
  </script>

  <MainLogo type="ball" />
  `} />
    </div>

    <div class="component -small-h">
      <MainLogo type="ball" />
    </div>
  </section>

  <section id="ballText" class="section-component">
    <h3 class="title _headline5"><code class="props">type</code> ballText</h3>

    <p class="description _body2">Quando tem pouco espaço horizontal mas quer manter o Gueio e o texto CollabCode, esse é a melhor versão do logo:</p>

    <div class="code _body1">
      <Prism language="html" source={`
  <script>
    import { MainMenu } from '@collabcode/styleguide';
  </script>

  <MainLogo type="ballText" />
  `} />
    </div>

    <div class="component -small-h">
      <MainLogo type="ballText" />
    </div>
  </section>

  <ActionTop withMenuRight={true} />
</article>
