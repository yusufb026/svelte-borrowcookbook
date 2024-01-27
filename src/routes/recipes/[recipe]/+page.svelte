<script lang="ts">
  import { currentPage, host, siteName } from '$lib/store'
  import RecipeImg from '$lib/RecipeImg.svelte'
  import type { RecipeData } from '$lib/types'

  export let data: RecipeData

  $: canonical = ''

  $: if (data.canonical) {
    canonical = `${host}recipes/${data.slug}`

    const breadcrumb = [
      {
        name: 'Home',
        item: host,
        position: '1',
      },
      {
        name: data.categories[0].title,
        item: `${host}${data.categories[0].slug}`,
        position: '2',
      },
      {
        name: data.title,
        item: canonical,
        position: '3',
      },
    ]

    $currentPage = {
      canonical,
      created: data.created,
      description: data.description ?? '',
      breadcrumb,
      image: Array.isArray(data.images) && data.images.length > 0 ? data.images[0].original.url : '',
      metaTitle: `How to make ${data.title} | ${data.categories[0].title} | ${siteName}`,
      title: `How to make ${data.title}`,
      updated: data.updated,
    }
  }
</script>

<article id="recipe" class="block container mb-8 pt-10">
  <header class="block mb-6 md:mb-14 text-center">
    <div class="font-how leading-tight text-gray-600 text-xl">how to make</div>
    <div class="font-content">
      <h1 class="mb-0 title uppercase">{data.title}</h1>
      <div id="originalAuthor" class="leading-tight mt-2">
        <small>Original author: <a href={data.authorWebsite} rel="author">{@html data.authorName}</a></small>
      </div>
    </div>
  </header>

  <div class="font-content">
    {#if data.content}
      <div class="leading-normal mb-6">{@html data.content}</div>
    {/if}

    {#if Array.isArray(data.images) && data.images.length > 0}
      <div class="mb-6">
        <RecipeImg image={data.images[0]} title={data.title} />
      </div>
    {/if}

    {#if data.ingredients}
      <section>
        <h2 class="titleSub">Ingredients</h2>
        <div class="leading-normal text-neutral">{@html data.ingredients}</div>
      </section>
    {/if}

    {#if data.guide}
      <section>
        <h2 class="titleSub">Guide</h2>
        <div class="leading-normal text-neutral">{@html data.guide}</div>
      </section>
    {/if}

    {#if data.sauceIngredients}
      <section>
        <h2 class="titleSub">Sauce Ingredients</h2>
        <div class="leading-normal text-neutral">
          {@html data.sauceIngredients}
        </div>
      </section>
    {/if}

    {#if data.sauceGuide}
      <section>
        <h2 class="titleSub">Sauce Guide</h2>
        <div class="leading-normal text-neutral">{@html data.sauceGuide}</div>
      </section>
    {/if}

    {#if Array.isArray(data.images) && data.images.length > 1}
      <div class="mt-8">
        <RecipeImg image={data.images[1]} title={data.title} />
      </div>
    {/if}
  </div>
</article>

{#if data.youtubeId}
  <div class="container mb-8">
    <iframe class="aspect-video rounded-3xl shadow-md w-full" src={`https://www.youtube-nocookie.com/embed/${data.youtubeId}`} title={`Video recipe for ${data.title} made by ${data.authorName}`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" width="992" />
  </div>
{/if}
