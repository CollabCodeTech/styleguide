<script>
  import { HeaderComponents } from "../../index.js";
</script>

<style>
  .components {
    box-sizing: border-box;
    padding-right: calc(var(--gap-menu-right) + var(--gap-smaller));
  }

  @media(max-width: 1000px) {
    .components {
      padding-right: var(--gap-smaller);
    }
  }
</style>

<HeaderComponents menuRightActive={true} />

<main class="components _with-header _center-h-inner">
  <slot />
</main>
