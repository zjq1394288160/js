<template>
    <component :is="routeView" />
</template>

<script>
export default {
    data () {
        return {
          routeView: null
        }
    },
    created () {
        this.hashChange = this.onHashChange.bind(this)
    },
    beforeMount () {
        window.addEventListener('hashchange', this.hashChange)
    },
    mounted () {
        this.onHashChange()
    },
    beforeDestroy() {
        window.removeEventListener('hashchange', this.hashChange)
    },
    methods: {
        onHashChange () {
            const path = location.hash.slice(1);
            let route = this.$root.$routes;
            for (const key in route) {
                if (path === route[key].path) {
                    this.routeView = route[key].component
                }
            }
        }
    }
}
</script>