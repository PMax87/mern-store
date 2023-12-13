import { Navigate, useNavigate } from "react-router-dom";

import { CustomButton } from "../components/Commons";
import {
  Flex,
  Box,
  Stack,
  Card,
  Image,
  CardBody,
  Text,
} from "@chakra-ui/react";

const CartPage = () => {
  const navigate = useNavigate();

  const prodcuts = [
    //   {
    //   _id: "63ad8a701dabfffea0990732",
    //   title: "Fjallraven - Foldsack No.  Backpack, Fits 15 Laptops3",
    //   productno: "1",
    //   desc: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //   img: "https://res.cloudinary.com/dofvasjfs/image/upload/v1680329966/63ad8a701dabfffea0990732.jpg",
    //   categories: ["clotiong", "men's clothing"],
    //   size: ["L", "M", "XL", "XXL"],
    //   color: ["#6F8FAF", "#989eb0"],
    //   price: 109.95,
    //   createdAt: "2022-12-29T12:39:12.552Z",
    //   updatedAt: "2023-07-02T10:59:09.000Z",
    //   __v: 0,
    //   purchasedCount: 25,
    //   ratingsAverage: 2.8,
    //   ratingsQuantity: 4,
    //   quantity: 5,
    // }
  ];

  if (prodcuts.length < 1) {
    return (
      <div className="container flex flex-col items-center">
        <h3 className="mt-20 text-4xl font-bold">Your cart is empty</h3>

        <CustomButton
          onClick={() => navigate("/products")}
          label="Fill it"
          bgColor="black"
          textColor="white"
          hoverBgColor="black"
        />
      </div>
    );
  }

  return (
    <div className="container">
      <Stack direction={["column", "row"]} spacing="24px">
        <Card objectFit="cover" maxW={{ base: "100%", sm: "100px" }}>
          <Image src={prodcuts.img} />
          <Stack>
            <CardBody>
              <Text>{prodcuts.desc}</Text>
            </CardBody>
          </Stack>
        </Card>
      </Stack>
    </div>
  );
};

export default CartPage;
