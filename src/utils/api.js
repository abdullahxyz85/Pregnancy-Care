import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const pregnancyAPI = {
  // Health check
  healthCheck: () => api.get("/"),

  // Predict pregnancy risk
  predict: (data) => api.post("/predict/", data),

  // Send WhatsApp alert
  sendAlert: (riskLevel, phoneNumber = null) =>
    api.post("/send_alert/", {
      Risk_Level: riskLevel,
      phone_number: phoneNumber,
    }),
};

export default api;
