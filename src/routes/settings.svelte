<script context="module">
  export async function preload() {
    console.log(this);
    console.log('settings preload');
  }
  // utiliser this.fetch() au lieu de fetch() (inconnu si executé côté serveur
</script>

<script>
  console.log('settings');
  let isDarkMode = false;
  let moninput;
</script>

<svelte:head>
  <title>Settings</title>
  {#if isDarkMode}
    <!-- load CSS in HEAD -->
    <link rel="stylesheet" href="dark-theme.css" />
  {/if}
</svelte:head>
<h1>settings</h1>
<input type="text" bind:this={moninput} />
<br />
<button
  on:click={() => {
    moninput.focus();
    isDarkMode = !isDarkMode;
  }}>dark mode</button>
