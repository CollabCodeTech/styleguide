<script>
  import { url } from "@sveltech/routify";

  export let title = "Menu";
  export let active = true;
  export let click = () => console.log("The click property is not defined");
  export let fixed = false;

  const content = [
    {
      category: "Components",
      links: [
        {
          label: "Main Logo",
          path: "/components/main-logo"
        },
        {
          label: "Main Menu",
          path: "/components/main-menu"
        },
        {
          label: "Main Title",
          path: "/components/main-title"
        }
      ]
    },
    {
      category: "Containers",
      links: [
        {
          label: "Header Top",
          path: "/components/header-top"
        },
        {
          label: "Menu Right",
          path: "/components/menu-right"
        }
      ]
    }
  ];
</script>

<style>
  .wrapper-menu-right {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;

    transition: z-index 50ms 100ms linear;
  }
  .wrapper-menu-right.active {
    z-index: 1;
  }

  .menu-right {
    box-sizing: border-box;
    position: fixed;
    right: 0;
    top: 0;
    width: var(--gap-menu-right);
    height: 100vh;
    transform: translateX(100%);

    background-color: var(--color-floral-white);
    padding: var(--gap-smaller) var(--gap-small);
    overflow-y: scroll;

    transition: transform 200ms linear;
  }

  .menu-right.active {
    transform: translateX(0);
  }

  .menu-right > .title {
    text-align: center;
    padding-bottom: var(--gap-smaller);
    border-bottom: var(--line-main);
    margin-bottom: var(--gap-small);
  }

  .menu-right > .subtitle {
    display: block;
    line-height: 2;
    cursor: default;
  }

  .menu-right > .list {
    overflow: hidden;
    padding-bottom: var(--gap-smaller);
    margin-bottom: var(--gap-small);

    transition: all 200ms linear;
  }

  .menu-right .item {
    padding-left: var(--gap-smaller);
    line-height: 1.4em;

    transition: background-color 200ms linear, color 200ms linear;
  }

  .menu-right .item:hover {
    background-color: var(--color-pomp-and-power);
    color: var(--color-platinum);
  }

  .menu-right .action {
    display: block;
    color: inherit;
    text-decoration: none;

    transition: transform 100ms linear;
  }

  .menu-right .item:hover .action {
    transform: translateX(var(--gap-smaller));
  }
</style>

{#if fixed}
  <nav class={`menu-right _box-shadow-light-left ${active ? 'active' : ''}`}>
    <h2 class="title _headline5">{title}</h2>
    {#each content as { category, links }}
      {#if category}
        <a class="subtitle _subtitle1" href={`#${category}`}>{category}</a>
      {/if}
      {#if links}
        <ol id={category} class="list _body2">
          {#each links as { label, path, params }}
            <li class="item">
              <a class="action" href={$url(path, params)} target="_self">
                {label}
              </a>
            </li>
          {/each}
        </ol>
      {/if}
    {/each}
  </nav>
{:else}
  <div class={`wrapper-menu-right ${active ? 'active' : ''}`} on:click={click}>
    <nav class={`menu-right _box-shadow-light-left ${active ? 'active' : ''}`}>
      <h2 class="title _headline5">{title}</h2>
      {#each content as { category, links }}
        {#if category}
          <a class="subtitle _subtitle1" href={`#${category}`}>{category}</a>
        {/if}
        {#if links}
          <ol id={category} class="list _body2">
            {#each links as { label, path, params }}
              <li class="item">
                <a class="action" href={$url(path, params)} target="_self">
                  {label}
                </a>
              </li>
            {/each}
          </ol>
        {/if}
      {/each}
    </nav>
  </div>
{/if}