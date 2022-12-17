export interface NewRewardCollection {
    id?:               number;
    title?:            string;
    drawFee?:          number;
    merchantImageUrl?: string;
    rewardsLeft?:      number;
}

export interface NewRewardDropped {
    id: number;
    title: string;
    drawFee: number;
    imageUrl: string;
    rewardLeft: number;
}