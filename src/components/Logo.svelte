<script>
  import horizontal from "../icons/logo/horizontal.svelte";
  import horizontalLight from "../icons/logo/horizontal_light.svelte";
  import ball from "../icons/logo/ball.svelte";
  import ballText from "../icons/logo/ball_text.svelte";

  export let type = "horizontal";

  export const types = {
    horizontal,
    horizontalLight,
    ball,
    ballText
  };
</script>

<style>
  .logo > :global(svg) {
    height: 100%;
  }
</style>

<figure class="logo">
  <svelte:component this={types[type]} class="logo" />
  <slot />
</figure>
