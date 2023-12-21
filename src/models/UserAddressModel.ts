export type AddressResponse = UserAddressApiResponse | undefined;

interface UserAddressApiResponse {
  address: AddressDeatils;
}

export interface AddressDeatils {
  city: string;
  country: string;
  state: string;
  street: string;
  zip: string;
}
