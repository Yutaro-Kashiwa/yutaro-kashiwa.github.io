import {
  ReactElement,
  memo,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AspectRatio,
  Box,
  Center,
  HStack,
  Heading,
  List,
  Show,
  VStack,
  Text,
  IconButton,
  Container,
  Stack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useSize } from "@chakra-ui/react-use-size";
import {
  Splide,
  SplideProps,
  SplideSlide,
  SplideTrack,
} from "@splidejs/react-splide";
import { motion } from "framer-motion";
import { NextPageWithLayout } from "@/types/next_page_with_layout";
import { CommonPageLayout } from "@/components/layouts/common_page_layout";
import TitleBackgroundRect from "@/images/title_background_rect.svg";
import { ChevronDown } from "@/components/icons/chevron_down";
import { ChevronUp } from "@/components/icons/chevron_up";
import { ubuntuFont } from "@/config/next_fonts";
import "@splidejs/react-splide/css/core";

type Award = {
  id: string;
  awardedDate: string;
  awardeeName: string;
  awardName: string;
  awarderOrganization: string;
};

const LIST_ITEM_GAP = 72;

const LIST_CARD_HEIGHT = 64;

const awardedHistoriesList: Award[] = [
  {
    id: "8d463553-b4da-46bf-b8e4-69870d19a0bd",
    awardedDate: "2022.7",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    id: "0e611141-f93b-4967-8a14-0ae52e35644a",
    awardedDate: "2022.9",
    awardeeName: "奈良 太郎",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization:
      "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
  },
  {
    id: "56d84aaa-3ff9-4ae2-aa9c-e8595e7517f9",
    awardedDate: "2021.12",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    id: "20148c86-18f5-41c0-be6a-0dd3d996ea6c",
    awardedDate: "2021.5",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    id: "1282650e-aee6-4a82-873c-71ee7a183fde",
    awardedDate: "2021.5",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    id: "8352b01f-4861-456c-a645-175fa970c2b3",
    awardedDate: "2021.5",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    id: "4b93ab61-df30-4bb7-992c-35d1560bcf08",
    awardedDate: "2021.5",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    id: "8b1b67f1-280a-4db6-89d9-c531fc539ade",
    awardedDate: "2021.5",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    id: "9ad239ea-91ac-44d0-81c4-801588818b8e",
    awardedDate: "2021.5",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    id: "b0492ba7-ac8e-4a97-be81-4a28510685be",
    awardedDate: "2021.5",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    id: "70083091-fc37-4132-a05b-ac72434f6fca",
    awardedDate: "2021.5",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
];

const AwardsListCard = memo<Omit<Award, "id">>(
  ({ awardedDate, awardeeName, awardName, awarderOrganization }) => (
    <Grid
      templateRows="repeat(auto-fit, 1fr)"
      templateColumns={{
        base: " 120px 3fr",
        lg: "120px 360px 2fr",
      }}
      templateAreas={{
        base: `
                              "awardedDate awardeeName"
                              "awardDetail awardDetail"
                            `,
        lg: `
                              "awardedDate awardeeName awardDetail"
                              "awardedDate awardeeName awardDetail"
                            `,
      }}
      alignItems="baseline"
      justifyItems={{
        base: "start",
        lg: "unset",
      }}
      rowGap={{}}
      columnGap={{
        base: "16px",
        lg: "unset",
      }}
    >
      <GridItem area="awardedDate">
        <Text
          minW={{ lg: "140px" }}
          fontFamily={ubuntuFont.style.fontFamily}
          fontWeight={700}
          fontSize={{
            base: "calc(1.125rem + ((1vw - 3.75px) * 1.3146))",
            lg: 32,
          }}
          lineHeight="0.84em"
          color="main"
          opacity="0.6"
        >
          {awardedDate}
        </Text>
      </GridItem>

      <GridItem area="awardeeName">
        <Text
          fontWeight={400}
          fontSize={{
            base: "calc(0.8125rem + ((1vw - 3.75px) * 0.6573))",
            lg: 20,
          }}
          lineHeight="1.5"
          textAlign="center"
        >
          {awardeeName}
        </Text>
      </GridItem>

      <GridItem area="awardDetail">
        <VStack alignSelf="flex-start" alignItems="flex-start" spacing="2px">
          <Text
            fontWeight={400}
            fontSize={{
              base: "calc(0.9375rem + ((1vw - 3.75px) * 0.4695))",
              lg: 20,
            }}
            sx={{
              display: "-webkit-box",
              "-webkit-line-clamp": "2",
              "-webkit-box-orient": "vertical",
              overflow: "hidden",
            }}
          >
            {awardName}
          </Text>

          <Text
            fontWeight={400}
            fontSize={{
              base: "calc(0.75rem + ((1vw - 3.75px) * 0.5634))",
              lg: 18,
            }}
            color="#484848"
            sx={{
              display: "-webkit-box",
              "-webkit-line-clamp": "2",
              "-webkit-box-orient": "vertical",
              overflow: "hidden",
            }}
          >
            {awarderOrganization}
          </Text>
        </VStack>
      </GridItem>
    </Grid>
  )
);

AwardsListCard.displayName = "AwardsListCard";

export const AwardsPage: NextPageWithLayout = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null);

  const [numberOfPages, setNumberOfPages] = useState<number>(0);

  const contentContainerSize = useSize(contentContainerRef);

  const numberOfSlidesPerPage = !!contentContainerSize
    ? Math.floor(
        contentContainerSize.height / (LIST_CARD_HEIGHT + LIST_ITEM_GAP)
      )
    : 5;

  const updateInitialNumberOfPages = useCallback<
    Exclude<SplideProps["onPaginationMounted"], undefined>
  >((_, paginationData) => {
    setNumberOfPages(paginationData.items.length);
  }, []);

  const updateNumberOfPages = useCallback<
    Exclude<SplideProps["onPaginationUpdated"], undefined>
  >((_, paginationData) => {
    setNumberOfPages(paginationData.items.length);
  }, []);

  return (
    <>
      <style jsx global>
        {`
          #__next {
            overflow: hidden;
          }
        `}
      </style>

      {/* global を付けないと splide に認識されない */}
      <style jsx global>
        {`
          /* https://codepen.io/junpei-sugiyama/pen/rNZGJLx */

          /* ページネーションに番号を表示 */
          .splide__pagination {
            counter-reset: pagination-num;
          }

          .splide__pagination__page:before {
            content: counter(pagination-num);
            counter-increment: pagination-num;
          }

          .news-pagination {
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            gap: 20px;
            overflow: hidden;
          }

          /* ページネーションのスタイル */
          .news-pagination-page {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            vertical-align: middle;
            padding: 8px;
            width: 40px;
            height: 40px;
            font-family: ${ubuntuFont.style.fontFamily};
            font-weight: 400;
            font-size: 24px;
            background-color: transparent;
            color: #0168b7;
            transform: rotate(90deg);
            border-radius: 100%;
          }

          @media screen and (max-width: 991px) {
            .news-pagination-page {
              width: 24px;
              height: 24px;
              font-size: 12px;
            }
          }

          /* 現在表示されているページネーションのスタイル */
          .news-pagination-page.is-active {
            background-color: #f2f947;
          }
        `}
      </style>

      <style jsx global>
        {`
          .splide:not(.is-overflow) .splide__list {
            justify-content: center;
          }

          .splide:not(.is-overflow) .splide__list:first-child {
            margin-bottom: 76px !important;
          }

          .splide:not(.is-overflow) .splide__slide:last-child {
            margin: 0 !important;
          }
        `}
      </style>

      <style jsx global>
        {`
          .splide__track {
            width: 100%;
          }
        `}
      </style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
        }}
      >
        <Container
          ref={contentContainerRef}
          maxW="1280px"
          mt="5vh"
          overflowX="auto"
          overflowY="hidden"
        >
          <Show above="lg">
            <HStack position="relative" w="fit-content" mb="5vh">
              <Box
                position="absolute"
                right="-20px"
                bottom="-16px"
                w="199px"
                zIndex={-1}
              >
                <AspectRatio w="100%" ratio={199 / 44}>
                  <TitleBackgroundRect />
                </AspectRatio>
              </Box>

              <Heading
                as="h2"
                fontFamily={ubuntuFont.style.fontFamily}
                fontWeight={400}
                color="main"
                textTransform="uppercase"
              >
                awards
              </Heading>
            </HStack>
          </Show>
          <Splide
            onPaginationMounted={updateInitialNumberOfPages}
            onPaginationUpdated={updateNumberOfPages}
            hasTrack={false}
            options={{
              direction: "ttb",
              wheel: true,
              waitForTransition: true,
              height: "65vh",
              width: "100vw",
              classes: {
                pagination: "splide__pagination news-pagination",
                page: "splide__pagination__page news-pagination-page",
              },
              perPage: numberOfSlidesPerPage,
              mediaQuery: "min",
              breakpoints: {
                992: {
                  height: "70vh",
                },
              },
            }}
          >
            <VStack align="center" w="100%">
              <HStack
                alignItems="flex-start"
                h="62vh"
                w="100%"
                spacing={{ base: "12px", lg: "84px" }}
              >
                <SplideTrack>
                  {awardedHistoriesList.map(
                    ({
                      id,
                      awardedDate,
                      awardeeName,
                      awardName,
                      awarderOrganization,
                    }) => (
                      <SplideSlide key={id}>
                        <AwardsListCard
                          awardedDate={awardedDate}
                          awardeeName={awardeeName}
                          awardName={awardName}
                          awarderOrganization={awarderOrganization}
                        />
                      </SplideSlide>
                    )
                  )}
                </SplideTrack>

                <VStack
                  visibility={numberOfPages > 1 ? "visible" : "hidden"}
                  justifyContent="space-evenly"
                  alignItems="center"
                  h="64vh"
                  pt="10vh"
                >
                  <List
                    className="splide__pagination news-pagination"
                    display="flex"
                    flexFlow="column nowrap"
                    justifyContent="space-between"
                  />

                  <VStack
                    justifyContent="space-between"
                    alignItems="center"
                    rowGap="16px"
                    cursor="default"
                  >
                    <Box mr="30%" w="1px" h="88px" bg="main" />

                    <Text
                      fontFamily={ubuntuFont.style.fontFamily}
                      fontWeight={400}
                      fontSize={{ base: 12, lg: 20 }}
                      sx={{ writingMode: "vertical-lr" }}
                      color="main"
                      userSelect="none"
                    >
                      scroll
                    </Text>
                  </VStack>
                </VStack>
              </HStack>

              <HStack
                className="splide__arrows"
                spacing={{ base: "8px", lg: "44px" }}
              >
                {/* onClick は Splide が勝手に注入するので不要 */}
                <IconButton
                  className="splide__arrow splide__arrow--next"
                  // alia-label は Splide が勝手に設定してくれるので、ここでは空にする
                  aria-label=""
                  variant="ghost"
                  color="#adadad"
                  _hover={{
                    bg: "unset",
                    ":not(:disabled)": {
                      color: "#cecece",
                    },
                  }}
                  _disabled={{
                    opacity: 0.3,
                  }}
                  icon={
                    <ChevronDown w={{ base: "20px", lg: "32px" }} h="auto" />
                  }
                />

                <IconButton
                  className="splide__arrow splide__arrow--prev"
                  // alia-label は Splide が勝手に設定してくれるので、ここでは空にする
                  aria-label=""
                  variant="ghost"
                  color="#adadad"
                  w={{ base: "20px", lg: "32px" }}
                  h={{ base: "20px", lg: "32px" }}
                  p={0}
                  _hover={{
                    bg: "unset",
                    ":not(:disabled)": {
                      color: "#cecece",
                    },
                  }}
                  _disabled={{
                    opacity: 0.3,
                  }}
                  icon={<ChevronUp w={{ base: "20px", lg: "32px" }} h="auto" />}
                />
              </HStack>
            </VStack>
          </Splide>
        </Container>
      </motion.div>
    </>
  );
};

AwardsPage.getLayout = (page: ReactElement) => (
  <CommonPageLayout title="awards">{page}</CommonPageLayout>
);

export default AwardsPage;
