import { FaExclamationTriangle } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/Utils";
import { useDispatch } from "react-redux";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Container,
  Grid,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { toaster } from "../ui/toaster";
import { ProductsContent } from "../ProductsContent";
import { useState } from "react";

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const dispatch = useDispatch();
  const [sortOption, setSortOption] = useState<string>("featured");
  const [limitOption, setLimitOption] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  // Fetch products
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", sortOption, limitOption, currentPage],
    queryFn: () =>
      getProducts({ sort: sortOption, limit: limitOption, page: currentPage }),
  });

  if (isLoading) {
    return (
      <Box bg="#fdfcfb" minH="100vh" py={8}>
        <Container maxW="container.xl" px={4}>
          <Flex justify="space-between" align="center" mb={8}>
            <Skeleton height="32px" width="192px" borderRadius="md" />
            <Skeleton height="32px" width="128px" borderRadius="md" />
          </Flex>
          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={6}
          >
            {[...Array(8)].map((_, i) => (
              <Box
                key={i}
                bg="white"
                borderRadius="xl"
                p={4}
                boxShadow="sm"
                border="1px solid"
                borderColor="blackAlpha.100"
              >
                <Skeleton height="192px" borderRadius="lg" mb={4} />
                <SkeletonText noOfLines={2} />
              </Box>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  }

  if (error) {
    return (
      <Flex minH="100vh" align="center" justify="center" bg="#fdfcfb">
        <Box textAlign="center" p={8} maxW="md">
          <Box
            fontSize="5xl"
            color="#206bc4"
            mb={4}
            display="flex"
            justifyContent="center"
          >
            <FaExclamationTriangle />
          </Box>
          <Heading as="h2" size="lg" color="#1d273b" mb={2}>
            Oops! Something went wrong
          </Heading>
          <Text color="blackAlpha.700" mb={6}>
            We couldn't load the products. Please try again later.
          </Text>
          <Button
            onClick={() => window.location.reload()}
            bg="#206bc4"
            color="white"
            px={6}
            py={2}
            borderRadius="md"
            _hover={{ bg: "blue.700" }}
            boxShadow="lg"
            transition="colors 0.2s"
          >
            Retry
          </Button>
        </Box>
      </Flex>
    );
  }

  return (
    <ProductsContent
      showLimit={true}
      data={data}
      viewMode={viewMode}
      setViewMode={setViewMode}
      dispatch={dispatch}
      toaster={toaster}
      sortOption={sortOption}
      setSortOption={setSortOption}
      limitOption={limitOption}
      setLimitOption={setLimitOption}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default ProductsPage;
