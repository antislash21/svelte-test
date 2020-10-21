<script>
  import { transition_in } from 'svelte/internal';

  let title;
  let slug;
  let html;

  function string_to_slug(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    var to = 'aaaaeeeeiiiioooouuuunc------';
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

    return str;
  }

  //   $: if (title) {
  //     slug = string_to_slug(title);
  //   }

  const handleSubmit = async () => {
    if (title && html) {
      slug = string_to_slug(title);
      console.log(title, slug, html);
      const blogPost = { title, slug, html };
      const res = await fetch('blog.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogPost),
      });
      const allPosts = await res.json();
      console.log(allPosts);
    }
  };
</script>

<style>
  form {
    max-width: 500px;
    margin: 40px auto;
    text-align: center;
  }
  h1 {
    text-align: center;
  }
  input,
  textarea {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px auto;
  }
</style>

<h1>Créer un blog post</h1>
<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="Titre" bind:value={title} />
  <textarea bind:value={html} placeholder="Contenu" cols="30" rows="10" />
  <button>Créer</button>
</form>
