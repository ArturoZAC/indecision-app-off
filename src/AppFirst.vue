<template>
  <h1>Hola</h1>

  <hr/>

  <Counter :value="9"/>
  <CounterScript :value="3"/>
  <CounterScript2 :value="5"/>
</template>

<script lang="ts" setup>
import Counter from "./components/Counter.vue"
import CounterScript from "./components/CounterScript.vue"
import CounterScript2 from  "./components/my-counter-script/CounterScript2.vue"
</script>