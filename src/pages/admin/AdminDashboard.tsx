import { useState } from "react";
import { AdminList } from "../../components/admins/AdminList";
import { RestaurantList } from "../../components/restaurants/RestaurantList";
import { Button } from "../../components/ui/Button";

export function AdminDashboard() {
  const query = location.search;
  console.log(query);
  const [activeTab, setActiveTab] = useState<"admins" | "restaurants">(
    "admins"
  );

  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ marginBottom: "2rem" }}>
        <Button
          variant={activeTab === "admins" ? "primary" : "secondary"}
          onClick={() => setActiveTab("admins")}
          style={{ marginRight: "0.5rem" }}
        >
          Manage Admins
        </Button>
        <Button
          variant={activeTab === "restaurants" ? "primary" : "secondary"}
          onClick={() => setActiveTab("restaurants")}
        >
          Manage Restaurants
        </Button>
      </div>

      {activeTab === "admins" ? <AdminList /> : <RestaurantList />}
    </div>
  );
}
