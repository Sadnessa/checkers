<template>
    <div class="ch-container">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.ch-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 900px;
    background: white;
}
</style>