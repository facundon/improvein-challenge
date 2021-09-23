import { useCallback, useMemo, useState } from "react"
import { useRequest } from "."
import { Band, Sort, SortOrder } from "../@types"
import { apiServices } from "../services"
import { getUniqueValues } from "../utils/arrays"

const useBands = () => {
   const [bands, setBands] = useState<Band[] | null>(null)

   const {
      run: runBands,
      isLoading: loadingBands,
      error: bandError,
   } = useRequest(apiServices.getBands)

   const {
      run: getGenre,
      isLoading: loadingGenre,
      error: genreError,
   } = useRequest(apiServices.getGenre)

   const getBands = useCallback(
      async (sortBy?: Sort, order?: SortOrder) => {
         const bandResponse = await runBands(sortBy, order)
         if (!bandResponse) return
         const neededGenres = getUniqueValues(
            bandResponse.map(band => band.genreCode)
         )
         const genreResponse = await getGenre(neededGenres)
         if (!genreResponse) return

         const newBands = bandResponse.map(band => {
            const members = band.members.map(m => m.name)
            const genre = genreResponse.find(
               genres => genres.code === band.genreCode
            )
            return { ...band, members, genre: genre ? genre.name : "Not Found" }
         })
         setBands(newBands)
      },
      [getGenre, runBands]
   )

   return useMemo(
      () => ({
         bands,
         getBands: {
            run: getBands,
            isLoading: loadingBands || loadingGenre,
            error: bandError || genreError,
         },
      }),
      [bandError, bands, genreError, getBands, loadingBands, loadingGenre]
   )
}

export default useBands
