export interface RewardCollection {
    id: number | undefined;
    artistId: number;
    displayName: string;
    description: string;
    launchDate: string;
    collectionType: number;
    collectionArtworkTypeId: number;
    price?: number;
    artTemplateId: number;
    characterTemplateId: number;
    mainColor?: string;
    borderColor?: string;
    logo?: string;
    drawAmount: number;
    dateCreated: Date;
    dateModified: Date;
}
