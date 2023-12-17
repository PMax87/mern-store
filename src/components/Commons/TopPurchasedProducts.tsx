import {
  Divider,
  Grid,
  Heading,
  Image,
  Flex,
  VStack,
  Box,
  ButtonGroup,
} from "@chakra-ui/react";
import { CustomButton } from ".";
import { useQuery } from "@tanstack/react-query";
import { ProductsRepository } from "../../repositories/products-respository";
import { ProductsApiResponse } from "../../models/SingleProductModel";

const TopPurchasedProducts = () => {
  const { data: allProduct, isFetching } = useQuery<ProductsApiResponse>({
    queryKey: ["getAllProducts"],
    queryFn: async () => {
      const response = await ProductsRepository.getAllProducts();
      return response.data;
    },
    gcTime: 0,
  });

  console.log(allProduct);

  return (
    <div className="w-full py-12 bg-neutral-900 ">
      <div className="container ">
        <Heading as="h2" className="text-white">
          Top Purchased Products
        </Heading>
        <Grid
          templateColumns="repeat(auto-fit, minmax(360px, 1fr))"
          placeItems={"center"}
          marginTop={10}
          gap={"2.5rem"}
        >
          {!isFetching &&
            allProduct &&
            allProduct
              .map((prodcut) => {
                return (
                  <Box
                    className="rounded-lg overflow-hidden bg-white p-5"
                    key={prodcut._id}
                  >
                    <Flex justifyContent={"center"}>
                      <Image
                        src={`${prodcut.img}`}
                        objectFit="contain"
                        w="200px"
                        h="200px"
                        borderRadius={25}
                      />
                    </Flex>
                    <Divider className="my-5" colorScheme="likedin" />
                    <VStack alignItems="flex-start" gap={5}>
                      <p>{prodcut.title}</p>
                      <p className="font-bold text-xl">€ {prodcut.price}</p>
                      <ButtonGroup>
                        <div className="w-40">
                          <CustomButton
                            label="Add to cart"
                            bgColor="black"
                            hoverTextColor="black"
                            textColor="white"
                            borderColor="black"
                            hoverBgColor="white"
                            onClick={() => console.log("vado")}
                          />
                        </div>

                        <div className="w-40">
                          <CustomButton
                            label="View Details"
                            bgColor="white"
                            textColor="black"
                            borderColor="black"
                            hoverBgColor="white"
                            onClick={() => console.log("vado")}
                          />
                        </div>
                      </ButtonGroup>
                    </VStack>
                  </Box>
                );
              })
              .slice(0, 3)}
        </Grid>
      </div>
      ;
    </div>
  );
};

export default TopPurchasedProducts;
