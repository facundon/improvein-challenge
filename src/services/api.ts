import { BandResponse, Genre, Sort, SortOrder } from "../@types"
import { apiRequest } from "../requests/instances"

const getBands = (sortBy: Sort = "name", order: SortOrder = "asc") =>
   apiRequest.get<BandResponse[]>(`./bands?_sort=${sortBy}&_order=${order}`)

const getGenre = (genreCode: string[]) => {
   const paramsArr = genreCode.map(g => `code=${g}&`)
   let params = paramsArr.join("")
   params = params.slice(0, params.length - 1)
   console.log(params)
   return apiRequest.get<Genre[]>(`./genre?${params}`)
}

const apiServices = { getBands, getGenre }

export type ApiServices = typeof apiServices[keyof typeof apiServices]
export default apiServices
