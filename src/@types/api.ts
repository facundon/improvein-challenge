import { AxiosResponse } from "axios"

export type RequestResponse<T> = Promise<AxiosResponse<T>>

type BaseBand = {
   country: string
   id: number
   name: string
   year: number
}

export type BandResponse = BaseBand & {
   genreCode: string
   members: { name: string }[]
}

export type Band = BaseBand & {
   genre: string
   members: string[]
   albums: Album[] | null
}

export type Genre = {
   code: string
   name: string
}

export type Album = {
   id: number
   bandId?: number
   name: string
   year: number
}

export type Sort = keyof BandResponse
export type SortOrder = "asc" | "desc"
