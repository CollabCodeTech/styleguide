<script>
  import { MenuRight } from "./index";
  import { MainLogo, MainTitle, MainMenu} from "../index.js";

  export let menuRightActive = false;

  function active(event) {
    menuRightActive = !menuRightActive;
  }

  function inactive(event) {
    event.target.classList.contains('wrapper-menu-right') && (menuRightActive = false)
  }
</script>

<style>
  .header-top {
    background-color: var(--color-pomp-and-power);
    height: 6vh;
    min-height: 56px;
    min-width: 290px;
    margin-bottom: var(--gap-medium);

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-top.-fixed {
    position: fixed;
    width: 100vw;
    box-sizing: border-box;
  }

  .header-top :global(::selection) {
    background-color: var(--color-floral-white);
    color: var(--color-arsenic);
  }

  .header-top > :global(.main-logo) {
    height: 80%;

    display: flex;
    align-items: center;
  }

  .header-top :global(.main-title) {
    margin-left: var(--gap-small);
    color: var(--color-platinum);
  }

  .header-top > :global(.main-menu) {
    height: 90%;
    fill: var(--color-platinum);
  }

  @media(max-width: 330px) {
    .header-top :global(.main-title) {
      font-size: 1.4em;
    }
  }
</style>

<header class="header-top _center-h-inner _box-shadow-light-bottom -fixed">
  <MainLogo type="ball">
    <MainTitle content="UI Style Guide" />
  </MainLogo>

  <MainMenu click={active} />
  <MenuRight click={inactive} active={menuRightActive} />
</header>
