import { AxiosResponse } from "axios"

export type RequestResponse<T> = Promise<AxiosResponse<T>>

export type BandResponse = {
   country: string
   genreCode: string
   id: number
   members: { name: string }[]
   name: string
   year: number
}

export type Band = Omit<BandResponse, "genreCode" | "members"> & {
   genre: string
   members: string[]
}

export type Genre = {
   code: string
   name: string
}

export type Album = {
   id: number
   bandId: number
   name: string
   year: number
}

export type Sort = keyof BandResponse
export type SortOrder = "asc" | "desc"
