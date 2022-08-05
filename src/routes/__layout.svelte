<script lang="ts">
	import '../app.css';
</script>

<main>
	<slot />

	<footer class="flex items-center text-lg gap-4 text-gray-600">
		<a href="/api" target="_blank">API</a>
		<a href="https://github.com/narze/deploydeemai.today" target="_blank">GitHub</a>
	</footer>
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		height: 100vh;
		/* max-width: 1024px; */
		margin: 0 auto;
		box-sizing: border-box;
		align-items: center;
		justify-content: center;
	}
</style>
