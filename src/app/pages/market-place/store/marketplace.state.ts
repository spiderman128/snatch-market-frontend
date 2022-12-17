import { BrandModel } from "@interfaces/brand.model";
import { RewardCollection } from "@interfaces/collection.model";
import { RewardModel } from "@interfaces/reward.model";

export interface MarketPlaceState {
    collections: RewardCollection[],
    rewards : RewardModel[],
    brands : BrandModel[],
    isFilterShow: boolean,
    isShowSearchAction: boolean
}