import { computed, ref } from "vue";

export const useCounter = (initialValue: number = 7) => {


  const counter = ref(initialValue);
  const squareCounter = computed(() => {
    return counter.value * counter.value
  })

  return {
    counter,
    squareCounter
  }
}