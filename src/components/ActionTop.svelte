<script>
  import { scrolltotop } from 'svelte-scrollto';

  export let withMenuRight = false;
  let isActive = false;

  function active(event) {
    isActive = true;
  }

  document.addEventListener('scroll', active)
</script>

<style>
  .action-top {
    position: fixed;
    bottom: 2vh;
    background-color: var(--color-fiery-rose);
    color: var(--color-floral-white);
    padding: var(--gap-smaller);
    text-decoration: none;
    opacity: 0.8;

    transition: opacity 200ms linear;
  }

  .action-top:hover {
    opacity: 1;
  }

  .action-top.-with-menu-right {
    right: calc(var(--gap-menu-right) + var(--gap-smaller));
    transform: translateX(120%);
    z-index: -1;

    transition: opacity 200ms linear, transform 200ms linear, z-index 200ms linear;
  }

  .action-top.action-top.-with-menu-right.-active {
    z-index: 0;
    transform: translateX(0);
  }

</style>

<a use:scrolltotop href="#top" class={`action-top _box-shadow-light-top _body2 ${withMenuRight ? '-with-menu-right' : ''} ${isActive ? '-active' : ''}`}>Topo</a>