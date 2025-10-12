<template>
    <button class="btn" :class="{ 'btn--active': active }">
        <slot />
    </button>
</template>
<script>
export default { name: 'BaseButton', props: { active: { type: Boolean, default: false } } };
</script>