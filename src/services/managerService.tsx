import React from "react";
import http from "../API/api";

export type Category = {
  category_id: string;
  category_name: string;
};

export type getAllService = {
  Category: Category;
  service_id: string;
  category_id: string;
  service_name: string;
  price: number;
  status: number;
  createdAt: string;
  updatedAt: string;
};
export const managerServiceServices = {
  getAllService: () => http.get(`service/all`),
  getOneService: (id: getAllService["category_id"]) =>
    http.get(`category/${id}`),
  //   createDoctor: (payload: getAllService) => http.post(`doctor/create`, payload),
};
