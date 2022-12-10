<script lang="ts">
	import { slide } from 'svelte/transition';

	export let value: string | null = null;
	let input_width;
</script>

<main>
	<form action="/search/">
		<div bind:clientWidth={input_width}>
			<input
				name="names"
				placeholder="Hae"
				autocomplete="off"
				bind:value
				autofocus={value == null}
			/>
		</div>
		{#if value}
			{@const split = value.split(',').map((name) => name.trim())}
			{#if split.length > 1}
				<div transition:slide|local class="multiple" style="--input-width:{input_width}px;">
					<p>→</p>
					{#each split as term}
						<span class="search-term">{term}</span>
					{/each}
				</div>
			{/if}
		{/if}
	</form>
</main>

<style>
	input {
		border-radius: 999em;
		padding: 0.5em 1.25em;
		border: none;

		border: 1px solid #2c2c2c;
		background-color: #1c1c1c;
		outline: none;

		font-size: 1em;
	}
	input:focus {
		background-color: #1f1f1f;
	}
	.multiple {
		box-sizing: border-box;
		padding: 0.5em 1.25em;
		display: flex;
		flex-wrap: wrap;
		gap: 0.25em;

		max-width: var(--input-width, 274px);
	}
	.multiple > * {
		padding-block: 0.2em;
	}
	.search-term {
		border-radius: 999px;
		border: 1px solid #41b88399;
		background-color: #41b88322;
		padding-inline: 0.5em;
	}
</style>
