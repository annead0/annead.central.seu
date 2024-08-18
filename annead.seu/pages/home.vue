<script lang="ts">
import { USelectMenu } from '#build/components';

</script>
<template>
    <USelectMenu v-model="uiLang" :options="lang"></USelectMenu>
    <UCard class="mt-20" align="left" style="align-items:left;">
      <article>
       
        <div >
        Our new digital headquarters.</div>
      </article>
    </UCard>
</template>