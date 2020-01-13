<script>
  import horizontal from "../icons/logo/horizontal.svelte";
  import horizontalLight from "../icons/logo/horizontal_light.svelte";
  import ball from "../icons/logo/ball.svelte";
  import ballText from "../icons/logo/ball_text.svelte";

  export let type = "horizontal";

  const types = {
    horizontal,
    horizontalLight,
    ball,
    ballText
  };
</script>

<style>
  .main-logo > :global(svg) {
    height: 100%;
  }
</style>

<!--
  <MenuLogo type="horizontal|horizontalLight|ball|ballText" />
-->
<figure class="main-logo">
  <svelte:component this={types[type]} class="main-logo" />
  <slot />
</figure>
