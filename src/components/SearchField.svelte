<script>
  import { action } from "../index.js";

  import search from ""

  export let placeholder = "The placeholder property is not defined";
  export let style;
</script>

<style>
  .wrapper-search-field {
    --height: 50px;
    --icon-height: calc(var(--height) - var(--gap-small));
    height: var(--height);
    position: relative;
  }

  .search-field {
    background-color: rgba(235, 235, 235, 0.3 );
    color: var(--color-floral-white);
    font-size: calc(var(--height) / 3.6);
    border: none;
    height: var(--height);
    border-radius: calc(var(--height) / 2);
    padding-left: var(--gap-small);
    padding-right: calc(var(--gap-small) * 2 + var(--icon-height));
  }

  .wrapper-search-field > :global(svg) {
    position: absolute;
    top: 50%;
    right: var(--gap-small);
    transform: translateY(-50%);
    height: var(--icon-height);
    cursor: pointer;
    fill: var(--color-floral-white);
    transition: fill 150ms linear, transform 150ms linear;
  }

  .search-field:focus + :global(svg),
  .wrapper-search-field > :global(svg):hover {
    fill: var(--color-fiery-rose);
  }

  .wrapper-search-field > :global(svg):hover {
    transform: translateY(-50%) scale(1.2);
  }

  .wrapper-search-field :global(path) {
    fill: inherit;
  }
</style>

<div class="wrapper-search-field" {style}>
  <input type="search" class="search-field" {placeholder} />
  <svelte:component this={action.search} />
</div>