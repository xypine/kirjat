<script lang="ts">
	import { scale, fade } from "svelte/transition";

	export let value: string = "";
	let input_width;
	$: split = value.split(",").map((name) => name.trim());
	$: show_tip = !value || split.length < 2;
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
		<div class="multiple" style="--input-width:{input_width}px;">
			{#if show_tip}
				<p in:fade={{ duration: 1000 }} class="tip">erota useampi haku pilkulla</p>
			{:else}
				{#each split as term, index}
					<span in:scale={{ delay: index * 50 }} class="search-term">{term}</span>
				{/each}
			{/if}
		</div>
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
		border: 1px solid transparent;
		padding-block: 0.2em;
	}
	.search-term {
		border-radius: 999px;
		border-color: #41b88399;
		background-color: #41b88322;
		padding-inline: 0.5em;
	}
	.tip {
		opacity: 0.333;
	}
</style>
