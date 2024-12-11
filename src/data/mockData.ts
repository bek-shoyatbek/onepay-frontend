import { Admin, Restaurant } from '../types';

export const mockAdmins: Admin[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'super' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'regular' },
];

export const mockRestaurants: Restaurant[] = [
    {
        id: '1',
        title: 'The Golden Plate',
        location: 'Manhattan, NY',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60',
        createdAt: '2022-01-01T00:00:00.000Z',
        updatedAt: '2022-01-01T00:00:00.000Z',
    },
    {
        id: '2',
        title: 'Pasta Paradise',
        location: 'Brooklyn, NY',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&auto=format&fit=crop&q=60',
        createdAt: '2022-01-01T00:00:00.000Z',
        updatedAt: '2022-01-01T00:00:00.000Z',
    },
];