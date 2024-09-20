export const getNews = ()=>{
    const url = 'https://swa-2024-dev.up.railway.app/api/media-center/news';
    const newsList = async()=>{
        const { data, status } = await useFetch(url);
    return {data,status}
    }
    const newsDetails = async(id)=>{
        const {data,status} =  await useFetch(`${url}/${id}`);
        return {data,status}
    }
    return{
        newsList,newsDetails
    }
}