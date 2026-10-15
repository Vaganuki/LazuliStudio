import type {AssetColor} from "./colors";

export interface PricingItem{
    content: string;
    price: string;
    description? : string;
}

export interface PricingGroup {
    title: string;
    items: PricingItem[];
    headerColor:  AssetColor;
}