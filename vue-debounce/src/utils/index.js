function debounce(fn,wait,immediate=true) {
    let timer;
    return function () {
        let that = this;
        let args = arguments;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(that, args)
        }, wait);
    }
}
export default debounce;