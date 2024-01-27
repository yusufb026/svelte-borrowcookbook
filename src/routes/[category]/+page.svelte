<script lang="ts">
  import { currentPage, host, siteName } from '$lib/store'
  import type { CategoryData } from '$lib/types'
  import RecipeList from '$lib/RecipeList.svelte'

  interface Props {
    canonical: string
    category: CategoryData
  }

  export let data: Props

  $: if (data.canonical) {
    const breadcrumb = [
        {
          name: 'Home',
          item: host,
          position: '1',
        },
        {
          name: data.category.title,
          item: data.canonical,
          position: '2',
        },
      ],
      description = `Discover, prepare, and relish a diverse collection of recipes that embody culinary excellence.`

    $currentPage = {
      canonical: data.canonical,
      description: `Step into the flavorful realm of our ${data.category.title} category. ${description}`,
      image: (data.category.image as string) ?? `${host}images/pork-ribs-borrowedcookbook.webp`,
      breadcrumb,
      metaTitle: `${data.category.title} | ${siteName}`,
      title: data.category.title,
    }
  }
</script>

<div class="max-w-screen-xl mx-auto py-10 px-4">
  <h1 class="mb-6 title uppercase">{data.category.title}</h1>

  <div class="font-content leading-normal max-w-xl mb-10 mx-auto text-center">
    {@html data.category.content}
  </div>

  <RecipeList order="asc" pageId={data.category.id} sort="title" />
</div>
