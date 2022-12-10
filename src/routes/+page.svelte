<script lang="ts">
	import SearchBar from "$lib/components/SearchBar.svelte";
	import type { LayoutServerData } from "./$types";
	export let data: LayoutServerData;
</script>

<main>
	<div class="content">
		<h1 class="logo">Kirjat</h1>
		<SearchBar />
	</div>
	<div class="footer">
		<p>
			{#if data.meta}
				{data.meta.app_version || "unknown version"}
			{:else}
				error fetching server metadata
			{/if}
		</p>
		<p>
			created by <a target="_blank" rel="noreferrer" href="https://eliaseskelinen.fi"
				>elias eskelinen</a
			>
		</p>
	</div>
</main>

<style>
	main {
		min-height: 100vh;

		display: grid;
		place-items: center;
		grid-template-rows: 1fr auto;
	}
	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 0.5em;
	}
	.footer {
		box-sizing: border-box;
		width: 100vw;
		padding: 1em;
		align-self: end;
		opacity: 0.75;
		transition: opacity 200ms;

		display: flex;
		flex-wrap: wrap;
		gap: 1em;
	}
	.footer:hover {
		opacity: 1;
	}
</style>
