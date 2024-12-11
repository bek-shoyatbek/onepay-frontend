import { useState } from "react";
import { Pencil, Trash2, UserPlus } from "lucide-react";
import { Admin } from "../../types";
import { mockAdmins } from "../../data/mockData";
import { AdminModal } from "../modals/AdminModal";

export function AdminList() {
  const [admins, setAdmins] = useState<Admin[]>(mockAdmins);
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = () => {
    setSelectedAdmin(undefined);
    setIsModalOpen(true);
  };

  const handleEdit = (admin: Admin) => {
    setSelectedAdmin(admin);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setAdmins(admins.filter((admin) => admin.id !== id));
  };

  const handleSave = (adminData: Omit<Admin, "id">) => {
    if (selectedAdmin) {
      setAdmins(
        admins.map((admin) =>
          admin.id === selectedAdmin.id ? { ...admin, ...adminData } : admin
        )
      );
    } else {
      const newAdmin: Admin = {
        ...adminData,
        id: Date.now().toString(),
      };
      setAdmins([...admins, newAdmin]);
    }
  };

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
        <h2 className="page-title">Admins</h2>
        <button className="button button-primary" onClick={handleAdd}>
          <UserPlus size={18} />
          Add Admin
        </button>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "0.75rem" }}>Name</th>
            <th style={{ textAlign: "left", padding: "0.75rem" }}>Email</th>
            <th style={{ textAlign: "left", padding: "0.75rem" }}>Role</th>
            <th style={{ textAlign: "right", padding: "0.75rem" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.id}>
              <td style={{ padding: "0.75rem" }}>{admin.name}</td>
              <td style={{ padding: "0.75rem" }}>{admin.email}</td>
              <td style={{ padding: "0.75rem" }}>{admin.role}</td>
              <td style={{ padding: "0.75rem", textAlign: "right" }}>
                <button
                  className="button button-secondary button-sm"
                  onClick={() => handleEdit(admin)}
                  style={{ marginRight: "0.5rem" }}
                >
                  <Pencil size={16} />
                </button>
                <button
                  className="button button-danger button-sm"
                  onClick={() => handleDelete(admin.id)}
                >
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <AdminModal
          admin={selectedAdmin}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
