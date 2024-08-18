<script>
import { USelectMenu } from '#build/components';
var langU = false;
const lang =[{id:1 ,name:"EN"},{id:2,name:"CAT/VAL"}];
const uiLang = ref(lang[0].id);
if(uiLang === 1){
    langU = true;
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
