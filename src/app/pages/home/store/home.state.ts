import { NewRewardCollection } from "@interfaces/newrewardcollection"
import { NewRewardDropped } from "@interfaces/newrewardcollection"

export interface HomeStates {
    newRewardCollections: NewRewardCollection[],
    newRewardDropped: NewRewardDropped[]
}