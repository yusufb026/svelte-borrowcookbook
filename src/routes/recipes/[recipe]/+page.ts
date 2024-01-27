import {api, getHeaders, slugify} from '$lib/store'

export const load: import('@sveltejs/kit').Load = async ({params, url}) => {
  const slug = params.recipe as string
  let recipe = await fetch(`${api}recipes/${slugify(slug)}`, getHeaders()).then(res => res.json())
  recipe.canonical = url.href
  return recipe
}
