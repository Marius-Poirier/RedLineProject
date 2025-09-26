import { UserDto } from "./user-dto"

export interface AppStateInterface {
    currentUser: UserDto|null
    currentFestivalId: number|null
}
