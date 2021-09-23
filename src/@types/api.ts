import { AxiosResponse } from "axios"

export type RequestResponse<T> = Promise<AxiosResponse<T>>

export type Band = {
   country: string
   genreCode: string
   id: number
   members: { name: string }[]
   name: string
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
