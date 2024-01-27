export interface HeroData {
  alt: string
  description?: string
  pages?: {name: string; url: string}[]
  image: string
  title: string
}

export interface Basic {
  content: string
  description: string
  id: number
  title: string
  slug: string
  image: string | number
  created: string
  updated: string
}

interface BreadcrumbItem {
  item: string
  name: string
  position: string
}

export interface CategoryData extends Basic {
  menu: string
  recipes: RecipeListItem[]
}

export interface Image {
  original: ImageItem
  w282: ImageItem
  w360: ImageItem
  w768: ImageItem
  w920: ImageItem
}

interface ImageItem {
  height: number
  url: string
  width: number
}

export interface MetaTags {
  canonical: string
  created?: string
  description: string
  image: string
  breadcrumb?: BreadcrumbItem[]
  metaTitle: string
  noindex?: boolean
  title: string
  updated?: string
}

export interface RecipeData extends Basic {
  authorId: string
  authorName: string
  authorWebsite: string
  canonical: string
  categories: {
    id: number
    title: string
    slug: string
  }[]
  cookingTime?: string
  guide: string
  ingredients: string
  sauceGuide?: string
  sauceIngredients?: string
  youtubeId: string
  images: Image[]
}

export interface RecipeQuery {
  data: RecipeListItem
  query: {
    limit: number
    page: number
    total: number
    pages: number
  }
}

export interface ResultData {
  message?: string
  error?: string
}

interface RecipeListItem {
  id: number
  image: Image
  slug: string
  title: string
}
