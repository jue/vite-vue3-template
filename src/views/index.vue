<script setup>
const countStore = useCountStore()
</script>

<template>
  <div>
    <HelloWorld />
    <button @click="countStore.increment">
      {{ countStore.count }}
    </button>
  </div>
</template>
