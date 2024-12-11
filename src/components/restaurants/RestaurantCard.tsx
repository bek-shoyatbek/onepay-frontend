import { Pencil, Trash2 } from "lucide-react";
import { Restaurant } from "../../types";

interface RestaurantCardProps {
  restaurant: Restaurant;
  onDelete: (id: string) => void;
  onEdit: (restaurant: Restaurant) => void;
}

export function RestaurantCard({
  restaurant,
  onDelete,
  onEdit,
}: RestaurantCardProps) {
  return (
    <div className="card">
      <img
        src={restaurant.image as string}
        alt={restaurant.title}
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">{restaurant.title}</h3>
        <p className="card-location">{restaurant.location}</p>
        <div className="card-actions">
          <button
            className="button button-secondary button-sm"
            onClick={() => onEdit(restaurant)}
          >
            <Pencil size={16} />
          </button>
          <button
            className="button button-danger button-sm"
            onClick={() => onDelete(restaurant.id)}
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
