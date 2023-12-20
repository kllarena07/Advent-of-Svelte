<script lang="ts">
	import type { PageData } from './$types'; 
	export let data : PageData;
	const { payload } = data;
	console.log(data, payload);
</script>

<main>
	<h1>Day 1 Advent of Svelte 2023</h1>
	<ul>
		{#each payload as { name, tally }}
			<li>
				<section>
					<h2>{name}</h2>
					<p>{tally}</p>
				</section>
			</li>
		{/each}
	</ul>
</main>
