export interface Restaurant {
    id: string;
    title: string;
    location: string;
    image: string | File;
    createdAt: string;
    updatedAt: string;
}

export interface CreateRestaurantFormData {
    title: string;
    location: string;
    image: File;
}

export interface Admin {
    id: string;
    name: string;
    email: string;
    role: 'super' | 'regular';
}