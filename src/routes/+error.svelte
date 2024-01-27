<script lang="ts">
  import { page } from "$app/stores";
  import { currentPage, defaultImage, host } from "$lib/store";

  const title = `Error ${$page.status}`;

  $currentPage = {
    canonical: host,
    description: `Default error page - status ${$page.status}.`,
    image: defaultImage,
    metaTitle: title,
    noindex: true,
    title,
  };
</script>

<div class="container mb-8 pt-10">
  <h1 class="mb-6 title uppercase">Looks Like You're Lost!</h1>

  <div class="font-content leading-normal mb-10">
    <p>
      We apologize for the inconvenience, but it seems you've stumbled upon an
      uncharted digital territory. The page you were looking for appears to have
      taken a detour or decided to play hide-and-seek. Don't worry, though - the
      internet is vast, and there's always another virtual adventure awaiting.
    </p>
    <p>
      Why not retreat back to our <a href="/" rel="home">homepage</a> and start your
      journey anew? There's a world of recipes just a click away.
    </p>
  </div>

  <img
    class="block h-auto max-w-full mx-auto rounded-3xl shadow-xl"
    src="/images/error.webp"
    alt="A cartoon of a piece of bread with a wrench and hard hat."
    height="700"
    width="700"
    loading="lazy"
    decoding="async"
    aria-hidden="true"
  />
</div>
