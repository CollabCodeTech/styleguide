<script>
  import { navigation } from "../index.js";

  export let href = "The href property is not defined";
  export let click = "The click property is no defined";
</script>

<style>
  .main-menu > :global(svg) {
    fill: inherit;
    height: inherit;
    width: inherit;
  }
</style>

<a {href} class="main-menu" on:click|preventDefault={click}>
  <svelte:component this={navigation.icon_menu} />
</a>
