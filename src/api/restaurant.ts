import { api } from "../configs";
import { Restaurant } from "../types";

export const getRestaurants = async () => {
    try {
        const response = await api.get<{ data: Restaurant[] }>(`/restaurants`);
        return response.data.data;
    } catch (err) {
        console.error("Error while getting restaurants:\n", err);
        throw err;
    }
};

export const createRestaurant = async (data: Omit<Restaurant, "id" | "createdAt" | "updatedAt">) => {
    try {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("location", data.location);
        formData.append("image", data.image);

        const response = await api.post<{ data: Restaurant }>(`/restaurants`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (err) {
        console.error("Error while creating restaurant:\n", err);
        throw err;
    }
};

export const getRestaurant = async (id: string) => {
    try {
        const response = await api.get<{ data: Restaurant }>(`/restaurants/${id}`);
        return response.data;
    } catch (err) {
        console.error("Error while getting restaurant:\n", err);
        throw err;
    }
};

export const updateRestaurant = async (id: string, data: Partial<Omit<Restaurant, "id" | "createdAt" | "updatedAt">>) => {
    try {
        const formData = new FormData();
        if (data.title) formData.append("title", data.title);
        if (data.location) formData.append("location", data.location);
        if (data.image) formData.append("image", data.image);

        const response = await api.put<{ data: Restaurant }>(`/restaurants/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (err) {
        console.error("Error while updating restaurant:\n", err);
        throw err;
    }
};