export default eventHandler(async (event)=>{

    const { code } = event.context.params
    const { currencyApiKey } = useRuntimeConfig()
    console.log('code: ', code);
    console.log('currencyApiKey: ', currencyApiKey);

    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyApiKey}`

    const { data } = await $fetch(uri)

    return data
})