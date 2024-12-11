import React, { useState, useEffect } from "react";
import { Admin } from "../../types";

interface AdminModalProps {
  admin?: Admin;
  onClose: () => void;
  onSave: (admin: Omit<Admin, "id">) => void;
}

export function AdminModal({ admin, onClose, onSave }: AdminModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "regular" as Admin["role"],
  });

  useEffect(() => {
    if (admin) {
      setFormData({
        name: admin.name,
        email: admin.email,
        role: admin.role,
      });
    }
  }, [admin]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="page-title">{admin ? "Edit Admin" : "Add Admin"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              className="form-input"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Role</label>
            <select
              className="form-select"
              value={formData.role}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  role: e.target.value as Admin["role"],
                })
              }
              required
            >
              <option value="regular">Regular</option>
              <option value="super">Super</option>
            </select>
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
