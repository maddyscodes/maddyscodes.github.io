<script lang="ts">
  import { base } from "$app/paths"

  export let item: any;
</script>

<section class="projectCard">
  {#if item.image}
    <img class="projectCard_image" src="{base}/assets/{item.image}" alt={item.imageAlt}>
  {/if}
  <h3 class="projectCard_heading">{item.title}</h3>
  <span class="projectCard_period"><time>{item.startDate}</time> 〜 {#if item.endDate}<time>{item.endDate}</time>{/if}</span>
  <ul class="projectCard_list">
    {#each item.skills as skill}
      <li class="projectCard_listItem">{skill}</li>
    {/each}
  </ul>
  <p class="projectCard_body">{item.description}</p>
  {#if item.url}
    <a href={item.url}>{item.urlText}</a>
  {/if}
</section>


<style lang="scss">
.projectCard {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px dashed var(--color-primary);

  &_image {
    display: block;
    max-width: 200px;
    margin-bottom: 1rem;
  }

  &_heading {
    margin: 0 0 .5rem;
    line-height: 1.2em;
    text-decoration: underline;
    text-decoration-color: var(--color-secondary);
  }

  &_period {
    display: block;
    margin-bottom: .5rem;
    font-size: .8em;
  }

  &_list {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    color: var(--color-black);
    font-size: .8em;
    list-style: none;
    gap: 5px;

    &Item {
      padding: 0 5px;
      border-radius: 8px;
      background-color: var(--color-primary);
    }
  }

  &_body {
    max-width: 700px;
    margin-bottom: 0;
  }
}
</style>
