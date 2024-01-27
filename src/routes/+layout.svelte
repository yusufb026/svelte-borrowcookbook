<script lang="ts">
  import { page } from '$app/stores'
  import { currentPage, defaultImage, siteName } from '$lib/store'
  import '$lib/app.css'

  let menuOpen = false
  $: ldjson = ''

  $: if ($currentPage?.breadcrumb) {
    ldjson = `<script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":${JSON.stringify($currentPage.breadcrumb)}}${'<'}/script>`
  }

  const menuLinks = [
    { id: 1, name: 'Home', slug: '' },
    { id: 1018, name: 'Breakfast', slug: 'breakfast' },
    { id: 1020, name: 'Main Dishes', slug: 'main' },
    { id: 1021, name: 'Desserts', slug: 'desserts' },
    { id: 1022, name: 'Snacks', slug: 'snacks' },
  ]
</script>

<svelte:head>
  {#if $currentPage?.title}
    <title>{$currentPage.metaTitle ?? $currentPage.title}</title>
    <meta name="description" content={$currentPage.description} />
    <meta name="twitter:title" property="og:title" content={$currentPage.title} />
    <meta name="twitter:description" property="og:description" content={$currentPage.description} />
    <meta name="canonical" property="og:url" content={$currentPage.canonical} />
    <meta name="twitter:image" property="og:image" content={$currentPage.image ?? defaultImage} />
    {#if $currentPage.created}
      <meta content={$currentPage.created} name="pubdate" property="og:pubdate" />
      <meta content={$currentPage.created} property="article:published_time" />
      <meta content={$currentPage.updated} name="revised" property="article:modified_time" />
    {/if}
    {#if ldjson}
      {@html ldjson}
    {/if}
    {#if $currentPage.noindex}
      <meta name="robots" content="noindex" />
    {/if}
  {/if}
</svelte:head>

<header id="head" class="bg-primary fixed left-0 top-0 w-screen z-50">
  <a class="inline-block px-6 py-4" href="/" rel="home" title={siteName} aria-label="Back to Home">
    <img src="/images/borrowed-cookbook-logo.webp" alt={`${siteName} logo`} height="38" width="156" decoding="async" loading="eager" aria-hidden="true" />
  </a>

  <button on:click={() => (menuOpen = !menuOpen)} id="menuToggler" aria-label="Open and close the main navigation" aria-controls="menu" aria-haspopup="true" aria-expanded={menuOpen} class="absolute bg-transparent border-0 h-full max-h-14 p-0 right-4 top-0 w-14">
    <svg clip-rule="evenodd" fill="#fff" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Menu</title>
      <path d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z" fill-rule="nonzero" />
    </svg>
  </button>

  <nav id="menu" class:open={menuOpen}>
    <ul class="font-title leading-tight m-0 p-0 uppercase" role="menu">
      {#each menuLinks as category}
        <li role="menuitem">
          <a on:click={() => (menuOpen = false)} class:active={$page.url.pathname.split('/').pop() === category.slug} href={`/${category.slug}`}>{category.name}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<div class="flex flex-col min-h-screen">
  <main id="content" class="block grow">
    <slot />
  </main>

  <footer class="bg-black font-content leading-normal px-6 py-2 text-center text-gray-300">
    <small>
      All credits and copyrights belong to the original publishers of the recipes.<br />
      Created by <a class="text-gray-300" href="https://timoanttila.com/" title="Full Stack Web Developer Timo Anttila" hreflang="en">Timo Anttila</a>,
      <a class="text-gray-300" href="https://tuspe.com/en" hreflang="en">Tuspe Design Oy</a>
    </small>
  </footer>
</div>
