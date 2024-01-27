<script lang="ts">
  import type { Image } from "$lib/types";
  export let image: Image;
  export let title: string;
</script>

<figure class="block m-0 w-full">
  <img
    class="aspect-square object-cover object-top rounded-3xl shadow-md w-full"
    src={image.w282.url}
    srcset={`${image.w360.url} 282w, ${image.w360.url} 360w`}
    sizes="(max-width:359px) 360px, (min-width:360px) 282px"
    alt={`Image of dish ${title}`}
    decoding="async"
    height="282"
    loading="lazy"
    width="282"
  />
  <figcaption class="block mt-2">{title}</figcaption>
</figure>
