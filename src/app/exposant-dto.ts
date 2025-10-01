export interface ExposantDTO {
    id: number;
    name: string;
    type: 'editor' | 'distributor' | 'partner' | 'editor service' | 'shop';
    email: string;
}
