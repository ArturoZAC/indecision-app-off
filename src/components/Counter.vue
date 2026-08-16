<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from './composables/useCounter';

  interface Props {
    value: number;
  }

  const props = defineProps<Props>();

  const { counter,squareCounter} = useCounter(props.value);

  // import { computed, ref } from 'vue';

  // const props = defineProps({
    // value: {
      // type: Number,
      // required: true
    // }
  // })

  // interface Props {
  //   value: number;
  //   text: string;
  // }

  // const props = defineProps<Props>();

  // const counter = ref(props.value);
  // const squareCounter = computed(() => {
  //   return counter.value * counter.value
  // })
</script>