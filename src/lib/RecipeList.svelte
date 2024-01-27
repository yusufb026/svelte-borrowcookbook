<script lang="ts">
  import { api, getHeaders } from '$lib/store'
  import Picture from '$lib/RecipeListImg.svelte'
  import type { Image } from '$lib/types'

  interface RecipeListItem {
    id: number
    image: Image
    slug: string
    title: string
  }

  interface Query {
    limit: number
    page: number
    pages: number
    total: number
  }

  interface RecipeFetch {
    data: RecipeListItem
    query: Query
  }

  export let limit = 40
  export let order: 'asc' | 'desc' = 'asc'
  export let pageId = 0
  export let sort: 'created' | 'title' | 'updated' = 'title'

  let pageNumber = 1
  $: recipes = <RecipeListItem[] | null>null
  $: query = <Query | null>null

  const fetchRecipes = async () => {
    let params = `limit=${limit}&order=${order}&page=${pageNumber}&sort=${sort}`

    if (pageId > 1) {
      params += `&pageId=${pageId}`
    }

    const result = (await fetch(`${api}recipes?${params}`, getHeaders()).then((res) => res.json())) as RecipeFetch
    if (Array.isArray(result?.data) && result.data.length > 0) {
      recipes = result.data
      query = result.query
    }
  }

  $: if (pageId) {
    pageNumber = 1
    fetchRecipes()
  }
</script>

{#if Array.isArray(recipes) && recipes.length > 0}
  <div class="font-content gap-10 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 leading-normal text-center">
    {#each recipes as recipe}
      <a class="block no-underline text-neutral" href={`/recipes/${recipe.slug}`}>
        <Picture image={recipe.image} title={recipe.title} />
      </a>
    {/each}
  </div>
{/if}
