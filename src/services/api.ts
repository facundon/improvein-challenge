import { Album, BandResponse, Genre, Sort, SortOrder } from "../@types"
import { apiRequest } from "../requests/instances"
import { parameterizeArray } from "../utils/text"

const getBands = (
   sortBy: Sort = "name",
   order: SortOrder = "asc",
   filter?: string
) =>
   apiRequest.get<BandResponse[]>(
      `./bands?_sort=${sortBy}&_order=${order}${
         filter ? "&name=" + filter : ""
      }`
   )

const getGenre = (genreCode: string[]) => {
   const params = parameterizeArray(genreCode, "code")
   return apiRequest.get<Genre[]>(`./genre?${params}`)
}

const getAlbums = (bandId: number[]) => {
   const params = parameterizeArray(bandId, "bandId")
   return apiRequest.get<Album[]>(`./albums?${params}`)
}

const apiServices = { getBands, getGenre, getAlbums }

export type ApiServices = typeof apiServices[keyof typeof apiServices]
export default apiServices
