<script>
  import { Logo, Title, Menu, MenuRight } from "../index.js";
</script>

<style>
  .header-top {
    background-color: var(--color-pomp-and-power);
    height: 6vh;
    min-height: 56px;
    margin-bottom: var(--gap-v-medium);

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-top :global(::selection) {
    background-color: var(--color-floral-white);
    color: var(--color-arsenic);
  }

  .header-top > :global(.logo) {
    height: 80%;

    display: flex;
    align-items: center;
  }

  .header-top :global(.title) {
    margin-left: var(--gap-h-small);
    color: var(--color-platinum);
  }

  .header-top > :global(.menu) {
    height: 90%;
    fill: var(--color-platinum);
  }
</style>

<header class="header-top _center-h-inner _box-shadow-light-bottom">
  <Logo type="ball">
    <Title content="UI Style Guide" />
  </Logo>

  <Menu />
  <MenuRight />
</header>
