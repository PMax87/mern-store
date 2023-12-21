export type AddressResponse = UserAddressApiResponse | undefined;

interface UserAddressApiResponse {
  address: AddressDeatils;
}

interface AddressDeatils {
  city: string;
  country: string;
  state: string;
  street: string;
  zip: string;
}
