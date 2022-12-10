<script lang="ts">
	import SearchBar from '$lib/components/SearchBar.svelte';
	import { page } from '$app/stores';
</script>

<div class="top-bar">
	<h1 class="logo"><a href="/">Kirjat</a></h1>
	<SearchBar value={$page.url.searchParams.get('names')} />
</div>

<slot />

<style>
	.top-bar {
		min-height: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
