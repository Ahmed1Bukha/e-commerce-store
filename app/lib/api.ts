import { config } from "@/app/config/config";
import { Product } from "./types";

export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public statusText?: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(`${config.apiUrl}${endpoint}`, options);
    if (!response.ok) {
      throw new ApiError(
        `HTTP error! status: ${response.status}`,
        response.status,
        response.statusText
      );
    }
    const data = await response.json();
    return data as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    // Handle network errors
    if (error instanceof TypeError) {
      throw new ApiError("Network error: Please check your connection");
    }

    throw new ApiError("An unexpected error occurred");
  }
}

export async function getProducts(): Promise<Product[]> {
  const endpoint = "/products";
  return fetchAPI<Product[]>(endpoint);
}

export async function getProduct(id: string): Promise<Product> {
  const endpoint = `/products/${id}`;
  return fetchAPI<Product>(endpoint);
}
