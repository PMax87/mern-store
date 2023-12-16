import { IoCartSharp } from "react-icons/io5";
import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Spacer,
  useDisclosure,
  DrawerFooter,
  DrawerBody,
  DrawerHeader,
} from "@chakra-ui/react";
import { CustomIconButton } from "../components/Commons";

const CartPage = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();

  const prodcuts = [
    {
      title: "Fjallraven - Foldsack No.  Backpack, Fits 15 Laptops3",
      productno: "1",
      desc: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      img: "https://res.cloudinary.com/dofvasjfs/image/upload/v1680329966/63ad8a701dabfffea0990732.jpg",
      categories: ["clotiong", "men's clothing"],
      size: ["L", "M", "XL", "XXL"],
      color: ["#6F8FAF", "#989eb0"],
      price: 109.95,
      createdAt: "2022-12-29T12:39:12.552Z",
      updatedAt: "2023-07-02T10:59:09.000Z",
      __v: 0,
      purchasedCount: 25,
      ratingsAverage: 2.8,
      ratingsQuantity: 4,
      quantity: 5,
    },
    {
      title: "Fjallraven - Foldsack No.  Backpack, Fits 15 Laptops3",
      productno: "1",
      desc: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      img: "https://res.cloudinary.com/dofvasjfs/image/upload/v1680329966/63ad8a701dabfffea0990732.jpg",
      categories: ["clotiong", "men's clothing"],
      size: ["L", "M", "XL", "XXL"],
      color: ["#6F8FAF", "#989eb0"],
      price: 109.95,
      createdAt: "2022-12-29T12:39:12.552Z",
      updatedAt: "2023-07-02T10:59:09.000Z",
      __v: 0,
      purchasedCount: 25,
      ratingsAverage: 2.8,
      ratingsQuantity: 4,
      quantity: 5,
    },
    {
      title: "Fjallraven - Foldsack No.  Backpack, Fits 15 Laptops3",
      productno: "1",
      desc: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      img: "https://res.cloudinary.com/dofvasjfs/image/upload/v1680329966/63ad8a701dabfffea0990732.jpg",
      categories: ["clotiong", "men's clothing"],
      size: ["L", "M", "XL", "XXL"],
      color: ["#6F8FAF", "#989eb0"],
      price: 109.95,
      createdAt: "2022-12-29T12:39:12.552Z",
      updatedAt: "2023-07-02T10:59:09.000Z",
      __v: 0,
      purchasedCount: 25,
      ratingsAverage: 2.8,
      ratingsQuantity: 4,
      quantity: 5,
    },
    {
      title: "Fjallraven - Foldsack No.  Backpack, Fits 15 Laptops3",
      productno: "1",
      desc: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      img: "https://res.cloudinary.com/dofvasjfs/image/upload/v1680329966/63ad8a701dabfffea0990732.jpg",
      categories: ["clotiong", "men's clothing"],
      size: ["L", "M", "XL", "XXL"],
      color: ["#6F8FAF", "#989eb0"],
      price: 109.95,
      createdAt: "2022-12-29T12:39:12.552Z",
      updatedAt: "2023-07-02T10:59:09.000Z",
      __v: 0,
      purchasedCount: 25,
      ratingsAverage: 2.8,
      ratingsQuantity: 4,
      quantity: 5,
    },
    {
      title: "Fjallraven - Foldsack No.  Backpack, Fits 15 Laptops3",
      productno: "1",
      desc: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      img: "https://res.cloudinary.com/dofvasjfs/image/upload/v1680329966/63ad8a701dabfffea0990732.jpg",
      categories: ["clotiong", "men's clothing"],
      size: ["L", "M", "XL", "XXL"],
      color: ["#6F8FAF", "#989eb0"],
      price: 109.95,
      createdAt: "2022-12-29T12:39:12.552Z",
      updatedAt: "2023-07-02T10:59:09.000Z",
      __v: 0,
      purchasedCount: 25,
      ratingsAverage: 2.8,
      ratingsQuantity: 4,
      quantity: 5,
    },
    {
      title: "Fjallraven - Foldsack No.  Backpack, Fits 15 Laptops3",
      productno: "1",
      desc: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      img: "https://res.cloudinary.com/dofvasjfs/image/upload/v1680329966/63ad8a701dabfffea0990732.jpg",
      categories: ["clotiong", "men's clothing"],
      size: ["L", "M", "XL", "XXL"],
      color: ["#6F8FAF", "#989eb0"],
      price: 109.95,
      createdAt: "2022-12-29T12:39:12.552Z",
      updatedAt: "2023-07-02T10:59:09.000Z",
      __v: 0,
      purchasedCount: 25,
      ratingsAverage: 2.8,
      ratingsQuantity: 4,
      quantity: 5,
    },
    {
      title: "Fjallraven - Foldsack No.  Backpack, Fits 15 Laptops3",
      productno: "1",
      desc: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      img: "https://res.cloudinary.com/dofvasjfs/image/upload/v1680329966/63ad8a701dabfffea0990732.jpg",
      categories: ["clotiong", "men's clothing"],
      size: ["L", "M", "XL", "XXL"],
      color: ["#6F8FAF", "#989eb0"],
      price: 109.95,
      createdAt: "2022-12-29T12:39:12.552Z",
      updatedAt: "2023-07-02T10:59:09.000Z",
      __v: 0,
      purchasedCount: 25,
      ratingsAverage: 2.8,
      ratingsQuantity: 4,
      quantity: 5,
    },
    {
      title: "Fjallraven - Foldsack No.  Backpack, Fits 15 Laptops3",
      productno: "1",
      desc: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      img: "https://res.cloudinary.com/dofvasjfs/image/upload/v1680329966/63ad8a701dabfffea0990732.jpg",
      categories: ["clotiong", "men's clothing"],
      size: ["L", "M", "XL", "XXL"],
      color: ["#6F8FAF", "#989eb0"],
      price: 109.95,
      createdAt: "2022-12-29T12:39:12.552Z",
      updatedAt: "2023-07-02T10:59:09.000Z",
      __v: 0,
      purchasedCount: 25,
      ratingsAverage: 2.8,
      ratingsQuantity: 4,
      quantity: 5,
    },
    {
      title: "Fjallraven - Foldsack No.  Backpack, Fits 15 Laptops3",
      productno: "1",
      desc: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      img: "https://res.cloudinary.com/dofvasjfs/image/upload/v1680329966/63ad8a701dabfffea0990732.jpg",
      categories: ["clotiong", "men's clothing"],
      size: ["L", "M", "XL", "XXL"],
      color: ["#6F8FAF", "#989eb0"],
      price: 109.95,
      createdAt: "2022-12-29T12:39:12.552Z",
      updatedAt: "2023-07-02T10:59:09.000Z",
      __v: 0,
      purchasedCount: 25,
      ratingsAverage: 2.8,
      ratingsQuantity: 4,
      quantity: 5,
    },
  ];

  return (
    <>
      <CustomIconButton onClick={onToggle} popoverTrigger={false}>
        <IoCartSharp className="md:text-3xl text-xl fill-white" />
      </CustomIconButton>
      <Drawer
        placement="right"
        isOpen={isOpen}
        size={"md"}
        onClose={onClose}
        isFullHeight={true}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              Your Cart
            </Text>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"space-between"} overflowY={"auto"}>
              {prodcuts.map((product, index) => {
                return (
                  <Flex alignItems={"center"} marginTop={5} key={index}>
                    <Flex w="80px" h="80px">
                      <Image src={`${product.img}`} objectFit={"contain"} />
                    </Flex>
                    <VStack align={"left"}>
                      <Text size={"xs"} wordBreak={"break-word"}>
                        {product.title.substring(0, 15)}
                      </Text>
                      <Flex alignItems={"center"} gap={2}>
                        <Button>+</Button>
                        <Text>1</Text>
                        <Button>-</Button>
                      </Flex>
                    </VStack>
                    <Spacer />
                    <VStack>
                      <Text>{product.price} EUR</Text>
                      <Button>Remove</Button>
                    </VStack>
                  </Flex>
                );
              })}
            </VStack>
          </DrawerBody>
          <DrawerFooter display={"block"} paddingY={10}>
            <Flex>
              <Text fontWeight={"normal"} fontSize="xl">
                Subtotal
              </Text>
              <Spacer />
              <Text fontSize="xl" fontWeight={"normal"}>
                1596,00 EUR
              </Text>
            </Flex>
            <Box mt={5}>
              <Button
                width={"100%"}
                bgColor={"black"}
                color={"white"}
                size={"lg"}
              >
                Checkout
              </Button>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartPage;
