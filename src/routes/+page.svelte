<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
	import { sosial_link } from '$lib';
	import Icon from '@iconify/svelte';
	import CircleRightIcon from '@iconify-svelte/fa6-solid/circle-right';

	gsap.registerPlugin(ScrambleTextPlugin);

	onMount(() => {
		const welcome = document.getElementById('welcome');
		const sosialLink = document.getElementById('sosialLink');

		const tl = gsap.timeline({ delay: 0 });

		tl.to(welcome, {
			duration: 2,
			scrambleText: {
				text: 'Sosial',
				chars: 'upperCase',
				revealDelay: 0
			},
			ease: 'power2.inOut'
		}).to(
			sosialLink,
			{
				duration: 2,
				scrambleText: {
					text: 'Link!',
					chars: 'upperCase',
					revealDelay: 0
				},
				ease: 'power2.in'
			},
			'<'
		);

		gsap.from('ul > li', {
			duration: 1,
			opacity: 0,
			y: 20,
			stagger: 0.2,
			delay: 2
		});
	});
</script>

<main class="flex h-dvh w-dvw flex-col items-center justify-center">
	<h1 class="my-3 flex gap-2 text-4xl font-bold">
		<div id="welcome" class="text-gray-400">load..</div>
		<div id="sosialLink" class="text-gray-700">load..</div>
	</h1>
	<ul class="flex flex-col gap-2 px-7">
		{#each sosial_link as link}
			<li class="flex group gap-2 items-center bg-gray-100 rounded-lg px-4 py-2 hover:bg-gray-200 transition-colors duration-300">
				<span class="font-extrabold text-gray-600">{link.name}</span>
				<a href={link.link} class="text-gray-500 hover:underline flex items-center gap-1" target="_blank" rel="noreferrer">
					{link.username} <CircleRightIcon class="w-4 h-4 -rotate-45 group-hover:text-amber-600" />
				</a>
			</li>
		{/each}
	</ul>
</main>

<style>
</style>
