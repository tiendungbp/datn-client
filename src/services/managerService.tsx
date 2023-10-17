import React from "react";
import http from "../API/api";

export type getAllService = {
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
  //   createDoctor: (payload: getAllService) => http.post(`doctor/create`, payload),
};
