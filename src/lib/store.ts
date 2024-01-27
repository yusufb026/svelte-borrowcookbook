import {writable} from 'svelte/store' // mistä tulee
import type {MetaTags} from '$lib/types'

export const currentPage = writable<MetaTags | null>(null)

export const siteName = 'Borrowed Cookbook'
export const host = 'https://borrowedcookbook.com/'
export const api = 'https://api.borrowedcookbook.com/'
export const defaultImage = `${host}images/pork-ribs-borrowedcookbook.webp`

export const slugify = (value: string): string => {
  return value.toLowerCase().replace(/[^a-z0-9-]/gi, '')
}

export const getHeaders = (): RequestInit => {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'cache-control': 'max-age=43200'
    }
  }
}
