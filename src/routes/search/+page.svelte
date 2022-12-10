<script lang="ts">
	import { page } from '$app/stores';
	import SearchResult from '$lib/components/SearchResult.svelte';
	let result = $page.data.result;
</script>

<main>
	{#each result as [bookname, data]}
		{@const error = data.error}
		{@const results = data.results}
		<details open>
			<summary><h2>{bookname}</h2></summary>
			{#if error}
				<p>{error}</p>
			{:else}
				{#each results as book}
					<SearchResult {...book} />
				{/each}
			{/if}
		</details>
	{/each}
</main>

<style>
	main {
		gap: 0.25em;

		max-width: 70ch;
		margin: 0 auto;
	}
	summary {
		cursor: pointer;
	}
	summary h2 {
		display: inline;
	}
</style>
