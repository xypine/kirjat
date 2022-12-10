<script lang="ts">
	type condition = {
		name: string;
		price: {
			euro_cents: number;
		};
		available: boolean;
	};
	type Source =
		| "https://www.suomalainen.com/"
		| "https://tuotteet.sanomapro.fi/"
		| "https://otava.kauppakv.fi"
		| string;
	let logomap = {
		"https://www.suomalainen.com/": "",
		"https://tuotteet.sanomapro.fi/": "",
		"https://otava.kauppakv.fi": ""
	};
	export let id: string;
	export let source: Source;
	export let name: string;
	export let conditions: condition[];
	export let links: { buy: string; image: string };
</script>

<main id={`book-${id}`}>
	<div
		class="img"
		class:sanoma={source === "https://tuotteet.sanomapro.fi/"}
		style="--src:url({links.image});"
	/>
	<div class="description">
		<a target="_blank" rel="noreferrer" href={links.buy}><h2>{name}</h2></a>
		<ul>
			{#each conditions as condition}
				<li>{condition.name}: {condition.price.euro_cents / 100.0}€</li>
			{/each}
		</ul>
	</div>
</main>

<style>
	main {
		display: flex;
		padding: 0.75em;
		gap: 0.5em;
	}
	h2 {
		font-size: 1em;
	}
	.img {
		min-height: 5em;
		min-width: 5em;

		background-image: var(--src);
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}
	.img.sanoma {
		background-size: cover;
		min-width: 3.9em;
		margin-inline: calc(calc(5em - 3.9em) / 2);
	}
	ul {
		font-size: 0.75em;
	}
	.description {
		display: flex;
		flex-direction: column;
	}
</style>
