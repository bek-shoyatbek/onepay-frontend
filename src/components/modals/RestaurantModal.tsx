import React, { useState, useEffect } from "react";
import { Restaurant } from "../../types";

interface RestaurantModalProps {
  restaurant?: Restaurant;
  onClose: () => void;
  onSave: (
    restaurant: Omit<Restaurant, "id" | "createdAt" | "updatedAt">
  ) => void;
}

export function RestaurantModal({
  restaurant,
  onClose,
  onSave,
}: RestaurantModalProps) {
  const [formData, setFormData] = useState<
    Omit<Restaurant, "id" | "createdAt" | "updatedAt">
  >({} as Omit<Restaurant, "id">);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (restaurant) {
      setFormData({
        title: restaurant.title,
        location: restaurant.location,
        image: restaurant.image,
      });

      // Handle different types of images
      if (typeof restaurant.image === "string") {
        // If it's a string URL, set it directly
        setImagePreview(restaurant.image);
      } else if (restaurant.image instanceof File) {
        // If it's a File, create a URL for preview
        const reader = new FileReader();
        reader.onloadend = () => {
          // Type assertion to ensure it's a string
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(restaurant.image);
      }
    }
  }, [restaurant]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create a preview of the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setFormData((prev) => ({
          ...prev,
          image: file, // Store the file object
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // If you're using FormData to send to an API
    const submitData: Omit<Restaurant, "id" | "createdAt" | "updatedAt"> = {
      ...formData,
      // If image is a File, you might want to convert it to FormData
      image: formData.image instanceof File ? formData.image : formData.image,
    };

    onSave(submitData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="page-title">
          {restaurant ? "Edit Restaurant" : "Add Restaurant"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Title</label>
            <input
              className="form-input"
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Location</label>
            <input
              className="form-input"
              type="text"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Image</label>
            <input
              className="form-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required={!restaurant}
            />
            {imagePreview && (
              <div
                className="image-preview"
                style={{
                  marginTop: "10px",
                  maxWidth: "200px",
                  maxHeight: "200px",
                }}
              >
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              justifyContent: "flex-end",
            }}
          >
            <button
              type="button"
              className="button button-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="button button-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
