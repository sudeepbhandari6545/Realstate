import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '8a1e1f890emsh55a44cae62af8b6p1ee8bdjsnaefb3c87f22c',
    },
  })

  return data
}
