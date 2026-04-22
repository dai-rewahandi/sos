<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
	import Icon from '@iconify/svelte';

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
	<h1 class="flex gap-2 text-4xl font-bold">
		<div id="welcome" class="text-gray-400">load..</div>
		<div id="sosialLink">load..</div>
	</h1>
	<ul
		class="mt-10 flex w-[300px] flex-col flex-wrap gap-2 [&>li>a]:bg-gray-200 [&>li>a]:hover:bg-gray-100"
	>
		<li>
			<a href="https://instagram.com/dai.rewahandi" class="flex items-center gap-2 rounded-md p-2" target="_blank">
				<Icon icon="lineicons:instagram" width="24" height="24" />
				instagram
			</a>
		</li>
		<li>
			<a href="https://x.com/dai_rewahandi" class="flex items-center gap-2 rounded-md p-2" target="_blank">
				<Icon icon="lineicons:x" width="24" height="24" />
				x
			</a>
		</li>
		<li>
			<a href="https://facebook.com/dai.rewahandi" class="flex items-center gap-2 rounded-md p-2" target="_blank">
				<Icon icon="lineicons:facebook" width="24" height="24" />
				facebook
			</a>
		</li>
		<li>
			<a href="https://github.com/dai-rewahandi" class="flex items-center gap-2 rounded-md p-2" target="_blank">
				<Icon icon="lineicons:github" width="24" height="24" />
				github
			</a>
		</li>
		<li>
			<a href="https://me.dairewahandi.or.id" class="flex items-center gap-2 rounded-md p-2" target="_blank">
				<Icon icon="lineicons:globe-1" width="24" height="24" />
				me.dairewahandi.or.id
			</a>
		</li>
		<li>
			<a href="https://gallery.dairewahandi.or.id" class="flex items-center gap-2 rounded-md p-2" target="_blank">
				<Icon icon="lineicons:globe-1" width="24" height="24" />
				gallery.dairewahandi.or.id
			</a>
		</li>
	</ul>
</main>
