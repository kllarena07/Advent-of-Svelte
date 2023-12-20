<script lang="ts">
	import { fly } from "svelte/transition";

  let numbOfCookiesEaten = 0;

  const addCookie = () => {
    ++numbOfCookiesEaten
  }

  const removeCookie = () => {
    if(numbOfCookiesEaten > 0) --numbOfCookiesEaten
  }
  const resetCookies = () => {
    numbOfCookiesEaten = 0
  }

</script>

<main>
  <h1>Cookie Counter</h1>
  <p>Number of cookies eaten:
    <span style="width: 1rem; position: relative;">
      {#key numbOfCookiesEaten}
        <div in:fly={{duration: 300, y: -100}} out:fly={{duration:300, y: 100}} style="position: absolute;">{numbOfCookiesEaten}</div>
      {/key}
    </span>
  </p>
  <button on:click={addCookie}>Add</button>
  <button on:click={removeCookie}>Remove</button>
  <button on:click={resetCookies}>Reset</button>
</main>