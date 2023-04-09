const deBounce = {
    data () {
        return {
        timeout: ""
        }
    },
    methods: {
        deBounce(func, wait=1000) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(func, wait)
        }
    }
}

export default deBounce