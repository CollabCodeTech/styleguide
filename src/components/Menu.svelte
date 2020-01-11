<script>
  import { navigation } from "../index.js";

  export let href = "The href property is not defined";
</script>

<style>
  .menu > :global(svg) {
    fill: inherit;
    height: inherit;
    width: inherit;
  }
</style>

<a {href} class="menu">
  <svelte:component this={navigation.icon_menu} />
</a>
