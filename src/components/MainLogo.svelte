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

  function modifyinigClass(type) {
    return `${type.name.toLowerCase().replace(/_/, "-")}`;
  }
</script>

<style>
  .main-logo > :global(svg) {
    height: 100%;
  }
</style>

<figure class={`main-logo ${modifyinigClass(types[type])}`}>
  <svelte:component this={types[type]} />
  <slot />
</figure>
