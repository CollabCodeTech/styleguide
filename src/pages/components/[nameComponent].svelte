<script>
  import Components from "../../components/config.js";

  export let nameComponent = "";

  const capitalize = word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  const current = Components[nameComponent];
  const currentComponent = current.component;
  const currentComponentProps = current.props || {};
  const currentComponentTypes = currentComponentProps.types || [];
</script>

<h1>{currentComponent.name}</h1>

{#if currentComponentTypes.length}
  {#each currentComponentProps.types as type}
    <h2>{type}</h2>
    <svelte:component
      this={currentComponent}
      {...currentComponentProps}
      {type} />
  {/each}
{:else}
  <svelte:component this={currentComponent} {...currentComponentProps} />
{/if}
