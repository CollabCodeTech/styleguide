<script>
  import { url, isActive } from "@sveltech/routify";

  export let contents = [
    {
      category: "Componentes",
      links: [
        {
          label: "Logo",
          path: "/components/:nameComponent",
          params: { nameComponent: "logo" }
        },
        {
          label: "Menu",
          path: "/components/:nameComponent",
          params: { nameComponent: "menu" }
        },
        {
          label: "Title",
          path: "/components/:nameComponent",
          params: { nameComponent: "title" }
        }
      ]
    },
    {
      category: "Containers",
      links: [
        {
          label: "HeaderTop",
          path: "/components/:nameComponent",
          params: { nameComponent: "header-top" }
        },
        {
          label: "MenuRight",
          path: "/components/:nameComponent",
          params: { nameComponent: "menu-right" }
        }
      ]
    }
  ];
</script>

<style>

</style>

<nav class="menu-right">
  {#each contents as content}
    {#if content.category}
      <h2>{content.categoy}</h2>
    {/if}
    {#if content.links}
      <ol>
        {#each content.links as { label, path, params }}
          <li>
            <a href={$url(path, params)} target="_self">{label}</a>
          </li>
        {/each}
      </ol>
    {/if}
  {/each}
</nav>
