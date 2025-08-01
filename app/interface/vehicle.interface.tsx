export interface Vehicle {
    id: number;
    documentId: string;
    Title: string;
    Description: string;
    Url: string;
    Image: {
        url: string;
        alternativeText?: string | null;
        width: number;
        height: number;
        formats: {
            thumbnail: {
                url: string;
                name: string;
                hash: string;
                ext: string;
                width: number;
                height: number;
            };
        };
    };
}
