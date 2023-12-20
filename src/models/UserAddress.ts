
export interface UserAddressResponse {
  address?: UserAddress;
}

interface UserAddress {
  city: string;
  country: string;
  state: string;
  street: string;
  zip: string;
}
