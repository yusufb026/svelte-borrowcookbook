<script lang="ts">
  import { currentPage, defaultImage, host, siteName } from "$lib/store";
  import type {  RecipeQuery } from "$lib/types";

  export let data: { recipes: RecipeQuery | null };

  $currentPage = {
    canonical: `${host}recipes`,
    description:
      "Latest recipes added to the website. We update recipes almost every month.",
    image: defaultImage,
    breadcrumb:  [{ name: "Recipes", item: host, position: "2" }],
    metaTitle: `Latest recipes | ${siteName}`,
    noindex: true,
    title: "Latest recipes",
  };
</script>

<div class="container mb-8 pt-10">
  <h1 class="mb-6 title uppercase">Newest recipies</h1>

  <div class="max-w-screen-xl mx-auto px-4 py-10">
    {#if Array.isArray(data.recipes?.data)}
      <div class="text-center">
        {#await import("$lib/RecipeList.svelte") then Module}
          <Module.default order="desc" sort="created" pageId={1} />
        {/await}
      </div>
    {/if}
  </div>
</div>
