<template>
    <div class="mt-8 max-w-sm mx-auto text-center card">
        <p class="mt-8 text-7xl font-bold">{{ error?.statusCode }}</p>
        <p class="mt-8 text-5xl">Ooops.</p>
        <p class="mt-8 ">{{ error?.message }}</p>
        <button class="mt-8 btn" @click="goBackHome">Go back</button>
    </div>
</template>

<script setup>
    defineProps(['error'])

    const router = useRouter()

    const goBackHome = () => {
        clearError()
        router.go(-1)
    }

</script>

<style lang="scss" scoped>

</style>