import React from "react";
import http from "../API/api";

export type getAllCategory = {
  category_id: string;
  category_name: string;
  status: number;
  description: string;
  createdAt: string;
  updatedAt: string;
};
export const managerCategoryServices = {
  getAllCategory: () => http.get(`category/all`),
  getOneCategory: (id: getAllCategory["category_id"]) =>
    http.get(`category/${id}`),
  // createDoctor: (payload: getAllCategory) => http.post(`doctor/create`, payload),
};
