import { BrandModel } from "@interfaces/brand.model";
import { CollectionModel } from "@interfaces/collection.model";
import { RewardModel } from "@interfaces/reward.model";

export interface MarketPlaceState {
    collections: CollectionModel[],
    rewards : RewardModel[],
    brands : BrandModel[],
    isFilterShow: boolean
}