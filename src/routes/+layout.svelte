<script lang="ts">
    import "./layout.css"
    let { children } = $props();
</script>

<svelte:head>
    <title>sosial_link</title>
    <meta name="description" content="A social media platform built with SvelteKit and Supabase" />
    <link rel="icon" href="src/lib/assets/favicon.ico" type="image/x-icon" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" >
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</svelte:head>

{@render children()}
