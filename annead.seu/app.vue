<template>
  <UContainer >
    <UCard class="mt-10">
      <template #header >
        <div class="moderustic title">Annead.</div>
        
      </template>
    </UCard>
  </UContainer>
  <UContainer>
    <NuxtPage/>
  </UContainer>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Moderustic:wght@300..800&display=swap');
*{
  background-color:azure;
}

.moderustic {
  font-family: "Moderustic", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
.title{
  font-size: 40px;
}
</style>