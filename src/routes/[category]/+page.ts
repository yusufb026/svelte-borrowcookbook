import {api, getHeaders, slugify} from '$lib/store'

export const load: import('@sveltejs/kit').Load = async ({fetch, params, url}) => {
  const slug = params.category as string
  const category = await fetch(`${api}categories/${slugify(slug)}`, getHeaders()).then(res => res.json())
  return {canonical: url.href, category}
}
