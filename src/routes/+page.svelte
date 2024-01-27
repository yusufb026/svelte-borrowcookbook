<script lang="ts">
  import { currentPage, defaultImage, host, siteName } from '$lib/store'
  const description = 'A website created as a personal recipe book that will hopefully bring joy to others as well. Everyone can be a top chef in their own life.'

  $currentPage = {
    canonical: host,
    description,
    image: defaultImage,
    breadcrumb: [{ name: 'Home', item: host, position: '1' }],
    metaTitle: `${siteName} | The best recipes on the internet`,
    title: siteName,
  }
</script>

<div id="hero" class="relative">
  <img class="block h-full object-cover w-full" src={defaultImage} height="654" width="1502" alt="A plate of food with a variety of ingredients. The main dish is grilled steak, which has been cooked to perfection and is surrounded by an array of vegetables. On the left side of the plate there is a bowl filled with brown sauce, adding flavor to the meal. To the right side are two potatoes - one stuffed with cheese and bacon, and another that appears plain." />

  <div id="captionGradient" class="absolute h-full left-0 top-0 w-full">
    <div id="caption" class="absolute bottom-10 left-0 w-full">
      <div class="max-w-screen-md mx-auto px-6 text-center">
        <h1 class="font-how font-light leading-tight mb-4 mt-0 px-6 text-6xl text-white">{siteName}</h1>
      </div>
    </div>
  </div>
</div>

<div class="max-w-screen-xl mx-auto px-4 py-10 text-center">
  <h2 class="mb-10 title uppercase">Newest recipies</h2>
  {#await import('$lib/RecipeList.svelte') then Module}
    <Module.default limit={8} order="desc" sort="created" pageId={1} />
  {/await}
</div>
