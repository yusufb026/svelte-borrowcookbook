<script lang="ts">
  import type { Image } from "$lib/types";
  export let image: Image;
  export let title: string;
  export let mt: boolean = false;
</script>

<img
  class="rounded-3xl shadow-md w-full"
  class:mt-4={mt}
  src={image.original.url}
  srcset={`${image.w282.url} 282w, ${image.w360.url} 360w, ${image.w768.url} 768w, ${image.w920.url} 920w`}
  sizes="(max-width:282px) 282px, (max-width:360px) 360px, (max-width:768px) 768px, 992px"
  alt={`Image of dish ${title}`}
  decoding="async"
  loading="lazy"
  width="992"
  height="558"
/>
