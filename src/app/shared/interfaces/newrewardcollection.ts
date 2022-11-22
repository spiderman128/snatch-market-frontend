export interface NewRewardCollection {
    id?:               number;
    title?:            string;
    drawFee?:          number;
    merchantImageUrl?: string;
    artImageUrl?:      string;
    rewardsLeft?:      number;
}
// Converts JSON strings to/from your types
export class NewRewardCollectionConvert {
    public static toNewRewardCollection(json: string): NewRewardCollection {
        return JSON.parse(json);
    }

    public static newRewardCollectionToJson(value: NewRewardCollection): string {
        return JSON.stringify(value);
    }
}