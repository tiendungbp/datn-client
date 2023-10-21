import React from "react";
import http from "../API/api";

export type getAllDoctorCategory = {
  doctor_category_id: number;
  doctor_id: string;
  category_id: string;
  createdAt: string;
  updatedAt: string;
};
export const managerServiceServices = {
  getAllService: () => http.get(``),
  //   createDoctor: (payload: getAllService) => http.post(`doctor/create`, payload),
};
