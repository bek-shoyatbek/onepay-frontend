import { useEffect, useState } from "react";
import { UtensilsCrossed } from "lucide-react";
import { CreateRestaurantFormData, Restaurant } from "../../types";
import { mockRestaurants } from "../../data/mockData";
import { RestaurantCard } from "./RestaurantCard";
import { RestaurantModal } from "../modals/RestaurantModal";
import {
  createRestaurant,
  getRestaurants,
  updateRestaurant,
} from "../../api/restaurant";

export function RestaurantList() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(mockRestaurants);
  const [selectedRestaurant, setSelectedRestaurant] = useState<
    Restaurant | undefined
  >();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = () => {
    setSelectedRestaurant(undefined);
    setIsModalOpen(true);
  };

  const handleEdit = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
  };

  const handleSave = async (
    restaurantData: Omit<Restaurant, "id" | "createdAt" | "updatedAt">
  ) => {
    if (selectedRestaurant) {
      await updateRestaurant(selectedRestaurant.id, restaurantData);
    } else {
      await createRestaurant(restaurantData);
    }
  };

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getRestaurants();

        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h2 className="page-title">Restaurants</h2>
        <button className="button button-primary" onClick={handleAdd}>
          <UtensilsCrossed size={18} />
          Add Restaurant
        </button>
      </div>

      <div className="grid">
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>

      {isModalOpen && (
        <RestaurantModal
          restaurant={selectedRestaurant}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
