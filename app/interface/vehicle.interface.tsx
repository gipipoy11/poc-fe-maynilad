// app/types/vehicle.ts

export interface VehicleImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    url: string;
    width: number;
    height: number;
}

export interface VehicleImage {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        thumbnail: VehicleImageFormat;
        small: VehicleImageFormat;
        large?: VehicleImageFormat;
        medium?: VehicleImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
}

export interface Vehicle {
    id: number; 
    documentId: string;
    Title: string; 
    Description: string; 
    Url: string; 
    createdAt: string; 
    updatedAt: string; 
    publishedAt: string;
    Image: VehicleImage;
}