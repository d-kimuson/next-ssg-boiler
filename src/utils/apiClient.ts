import axios from "axios"
import aspida from "@aspida/axios"
import api from "~/api/$api"

export const apiClient = api(
  aspida(axios, {
    baseURL:
      process.env.NODE_ENV === "production"
        ? "https://example.com"
        : "http://127.0.0.1:8000",
  })
)
