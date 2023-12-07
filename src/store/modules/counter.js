import { defineStore } from 'pinia'

export const useCountStore = defineStore('counter', {
  state: () => ({
    count: 1,
  }),
  getters: {
    double: state => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
