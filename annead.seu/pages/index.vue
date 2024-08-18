<script lang="ts">
import { USelectMenu } from '#build/components';
let langU = false;
const lang =[{id:1 ,name:"EN"},{id:2,name:"CAT/VAL"}];
let uiLang = ref(lang[1].id);
if (uiLang ===ref(1)){
    langU =true;
}else{
    langU = false;
};
</script>
<template>
    <USelectMenu v-model="uiLang" :options="lang"></USelectMenu>
    <UCard class="mt-20" align="left" style="align-items:left;">
      <article>
        <div v-if="langU">
            Our new digital headquarters
        </div>
        <div v-else>
        La Nostra nova seu</div>
      </article>
    </UCard>
</template>
