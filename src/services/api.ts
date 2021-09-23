import { Band } from "../@types"
import { apiRequest } from "../requests/instances"

const getBands = () => apiRequest.get<Band[]>("./bands")

const apiServices = { getBands }

export type ApiServices = typeof apiServices[keyof typeof apiServices]
export default apiServices
