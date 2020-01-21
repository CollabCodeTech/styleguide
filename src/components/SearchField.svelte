<script>
  import search from ""

  export let placeholder = "The placeholder property is not defined";
  export let style;
</script>

<style>
  .search-field {
    --height: 50px;
    background-color: var(--color-platinum);
    border: none;
    height: var(--height);
    border-radius: calc(var(--height) / 2);
    padding-left: var(--gap-small);
    padding-right: var(--gap-small);
  }
</style>

<div class="wrapper-search-field">
  <input type="search" class="search-field _subtitle2" {placeholder} {style} />
  input[type=image src=""]
</div>