import { apiBaseUrl } from "../utils/costants/apiBaseUrl";
import axios from "axios";
import { AxiosResponse } from "axios";
import { ProductsApiResponse } from "../models/SingleProductModel";

export class ProductsRepository {
  static getAllProducts(): Promise<AxiosResponse<ProductsApiResponse>> {
    const url = `${apiBaseUrl}/products/allinfo?page=1&sort=toppurchased`;
    const headers = {
      "Content-Type": "application/json",
    };
    return axios.get(url, { headers });
  }
}
