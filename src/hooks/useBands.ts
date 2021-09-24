import { useCallback, useMemo, useState } from "react"
import { useRequest } from "."
import { Band, Sort, SortOrder } from "../@types"
import { apiServices } from "../services"
import { getUniqueValues } from "../utils/arrays"

const useBands = () => {
   const [bands, setBands] = useState<Band[] | null>(null)
   const [isLoading, setIsLoading] = useState(false)

   const { run: runBands, error: bandError } = useRequest(apiServices.getBands)

   const { run: getGenre, error: genreError } = useRequest(apiServices.getGenre)

   const { run: getAlbums, error: albumsError } = useRequest(
      apiServices.getAlbums
   )

   const getBands = useCallback(
      async (sortBy?: Sort, order?: SortOrder, filter?: string) => {
         setIsLoading(true)
         const bandResponse = await runBands(sortBy, order, filter)
         if (!bandResponse) return setIsLoading(false)
         const bandGenres = getUniqueValues(
            bandResponse.map(band => band.genreCode)
         )
         const bandsIds = bandResponse.map(band => band.id)
         const genreResponse = await getGenre(bandGenres)
         if (!genreResponse) return setIsLoading(false)

         const albumsResponse = await getAlbums(bandsIds)
         if (!albumsResponse) return setIsLoading(false)

         const newBands = bandResponse.map(band => {
            const members = band.members.map(m => m.name)
            const genre = genreResponse.find(
               genres => genres.code === band.genreCode
            )
            const albums = albumsResponse.filter(
               albums => albums.bandId === band.id
            )
            return {
               ...band,
               members,
               genre: genre ? genre.name : "Not Found",
               albums: albums ? albums : null,
            }
         })
         setBands(newBands)
         setIsLoading(false)
      },
      [getAlbums, getGenre, runBands]
   )

   return useMemo(
      () => ({
         bands,
         getBands: {
            run: getBands,
            isLoading,
            error: bandError || genreError || albumsError,
         },
      }),
      [albumsError, bandError, bands, genreError, getBands, isLoading]
   )
}

export default useBands
