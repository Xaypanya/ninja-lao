export default  defineEventHandler(async (event)=>{

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_cbIDGRVG7mCWcqayq79Jgxe0bpPx2CgWDgbAsQVw')

    return data
})