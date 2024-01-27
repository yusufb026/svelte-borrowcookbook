import {api, getHeaders} from '$lib/store'

export async function load({fetch}) {
  try {
    const recipes = await fetch(`${api}recipes`, getHeaders()).then(res => res.json())
    if (recipes) {
      return {recipes}
    }
  } catch (err) {
    console.log('Main recipes: ', err)
  }
}
