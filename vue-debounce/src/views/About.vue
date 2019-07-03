<template>
      <div id="app">
          <Debounce :time="1000" events="click">
              <button @click="onClick($event, 1)">按钮{{value}}</button>
          </Debounce>
      </div>
</template>
<script>
export default {
    data () {
        return {
            value: 0
        }
    },
    methods: {
        onClick ($ev, val) {
            this.value += value
        }
    }
}
</script>


