<script lang="ts">
	import "@fontsource/montserrat/600.css";
</script>

<svelte:head>
	<title>Kirjat</title>
</svelte:head>

<slot />

<style global>
	html {
		font-family: Montserrat, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
			Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		color-scheme: dark;

		background-color: #1c1c1c;
	}
	* {
		margin: 0;
	}

	h1.logo {
		color: #41b883;
	}
	h1.logo a {
		color: #41b883;
		text-decoration: none;
	}
</style>
