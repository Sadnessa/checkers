<template>
    <button :style="{background: color}">
        <slot name="left"></slot>
        <slot></slot>
        <slot name="right"></slot>
    </button>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: "",
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    display: flex;
}
</style>