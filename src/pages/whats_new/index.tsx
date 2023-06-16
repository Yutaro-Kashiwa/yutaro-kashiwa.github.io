import {
  ReactElement,
  memo,
  useRef,
} from "react";
import { Ubuntu } from "next/font/google";
import NextLink from "next/link";
import {
  Center,
  Container,
  HStack,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Box,
  Spacer,
  AspectRatio,
  Show,
  List,
  LinkBox,
  LinkOverlay,
  Divider,
  useMediaQuery,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSize } from "@chakra-ui/react-use-size";
import {
  Splide,
  SplideSlide,
  SplideTrack,
  Options as SplideOptions,
} from "@splidejs/react-splide";
import { Grid as SplideGridExtension } from "@splidejs/splide-extension-grid";
import "@splidejs/react-splide/css/core";
import { CommonPageLayout } from "@/components/layouts/common_page_layout";
import type { NextPageWithLayout } from "@/types/next_page_with_layout";
import { format, formatISO, parseISO } from "date-fns";
import { motion } from "framer-motion";
import TitleBackgroundRect from "@/images/title_background_rect.svg";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const ubuntuFont = Ubuntu({
  weight: ["400"],
  subsets: ["latin"],
});

export type NewsSummary = {
  id: string;
  title: string;
  createdAt: string;
};

const WhatsNewGridCard = memo<Omit<NewsSummary, "id">>(
  ({ title, createdAt }) => (
    <VStack maxW="240px" alignItems="flex-start" spacing="16px">
      <Box w="240px" h="135px" backgroundColor="gray"></Box>

      <VStack alignItems="inherit" spacing="8px">
        <Text
          as="time"
          dateTime={formatISO(parseISO(createdAt))}
          fontFamily={ubuntuFont.style.fontFamily}
          fontWeight={400}
          fontSize="16px"
        >
          {format(parseISO(createdAt), "yyyy . MM . dd")}
        </Text>

        <Text
          fontSize="18px"
          sx={{
            display: "-webkit-box",
            "-webkit-line-clamp": "2",
            "-webkit-box-orient": "vertical",
            overflow: "hidden"
          }}
        >
          {title}
        </Text>
      </VStack>
    </VStack>
  )
);

WhatsNewGridCard.displayName = "WhatsNewGridCard";

const WhatsNewListCard = memo<Omit<NewsSummary, "id">>(
  ({ title, createdAt }) => (
    <HStack flexWrap="nowrap" align="baseline" h="fit-content" spacing="20px">
      <Text
        as="time"
        dateTime={formatISO(parseISO(createdAt))}
        fontFamily={ubuntuFont.style.fontFamily}
        fontWeight={400}
        fontSize="14px"
      >
        {format(parseISO(createdAt), "yyyy . MM . dd")}
      </Text>

      <Text fontSize="16px">{title}</Text>
    </HStack>
  )
);

WhatsNewListCard.displayName = "WhatsNewListCard";

const mockNewsList: NewsSummary[] = [
  {
    id: "7bfd6b77-ac8b-4db3-8f50-b679524f6ef8",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 9).toISOString(),
  },
  {
    id: "81112c35-ab4b-4686-8be9-876529c71eb0",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "a8878558-eabd-48eb-91c3-5d3c8bd392fe",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "85c915e6-3f4d-4d15-9725-638e0b40f0fa",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "95263426-ddfc-4334-b6cd-e5ce2b606171",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "f656dc36-5471-4421-b36f-40d6154219cc",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "5f1d75d6-5691-42b3-8528-78359b531c71",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "a13c3090-836e-41c8-a49b-79e8ded0cf62",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "dfe74649-0c54-4d99-816c-ab76ff5aa6e6",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "e50180a4-53f2-4b45-8bdb-09a5e324a09c",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "9798ed98-6daa-47ed-90dd-b89f83b03478",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "d9967c15-ccc1-4680-97b3-d43b0847de95",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "f43dc583-eece-4ae8-9567-7f218774fb1b",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "a46ea082-55d4-43ae-b336-86a2ef617116",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "42f2c586-a776-4976-bf7e-8be4c6e39d84",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "e1bd1b9c-36e1-48be-941d-81735d8356e0",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "fb91e009-932c-4bea-8fc7-2f0873e32c4e",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "77abf765-d030-46b6-85be-d235feaf391b",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "3aabb695-0cb8-44b2-adc9-ecdc0c194471",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "11a75f45-dd8b-446a-8fe5-983be6e1cdb3",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "b5c045db-08a9-419b-b1e8-8e688cfe256a",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "fdaf8a5c-9f8d-4bc5-81e6-ced362e1b3e6",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "4d37082e-444c-4290-b0e4-b283da0929e8",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "7bfd6b77-ac8b-4db3-8f50-b679524f6ef8",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 9).toISOString(),
  },
  {
    id: "81112c35-ab4b-4686-8be9-876529c71eb0",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "a8878558-eabd-48eb-91c3-5d3c8bd392fe",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "85c915e6-3f4d-4d15-9725-638e0b40f0fa",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "95263426-ddfc-4334-b6cd-e5ce2b606171",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
];

type PageProps = {
  refererPath: string | null;
  newsList?: NewsSummary[];
};

export const WhatsNewPage: NextPageWithLayout<PageProps> = ({ refererPath, newsList }) => {
  const contentContainerRef = useRef<HTMLDivElement>(null);

  const contentContainerSize = useSize(contentContainerRef);

  const { asPath } = useRouter()

  const largeLayoutSplideOptions: SplideOptions | undefined =
    useBreakpointValue<SplideOptions>(
      {
        lg: {
          direction: "ttb",
          wheel: true,
          waitForTransition: true,
          grid: {
            rows: 2,
            cols: 3,
          },
          height: (contentContainerSize?.height ?? 1) * (80 / 100),
          fixedWidth: !!contentContainerSize
            ? contentContainerSize.width - 92
            : "80vw",
          arrows: false,
          classes: {
            pagination: "splide__pagination news-pagination",
            page: "splide__pagination__page news-pagination-page",
          },
        },
        xl: {
          direction: "ttb",
          wheel: true,
          waitForTransition: true,
          grid: {
            rows: 2,
            cols: 4,
          },
          height: (contentContainerSize?.height ?? 1) * (80 / 100),
          fixedWidth: !!contentContainerSize
            ? contentContainerSize.width - 92
            : "80vw",
          arrows: false,
          classes: {
            pagination: "splide__pagination news-pagination",
            page: "splide__pagination__page news-pagination-page",
          },
        },
      },
      { ssr: true, fallback: "md" }
    );

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

            transition: color 0.5s;
          }

          .news-pagination-page.smartphone {
            width: 24px;
            height: 24px;
            font-size: 12px;
          }

          .news-pagination-page:hover {
            color: rgba(1, 104, 183, 0.4);
          }

          /* 現在表示されているページネーションのスタイル */
          .news-pagination-page.is-active {
            background-color: #f2f947;
          }
        `}
      </style>

      <style jsx global>
        {`
          .splide__slide {
            list-style-type: none !important;
          }
        `}
      </style>

      {/* TODO: Splide が重すぎてスライディングアニメーションが効かない問題を修正する */}
      <motion.div
        initial={!!refererPath?.match(/\/whats_new\/[^\s].*/) ? { y: "-100%" } : { opacity: 0 }}
        animate={!!refererPath?.match(/\/whats_new\/[^\s].*/) ? { y: 0 } : { opacity: 1 }}
        exit={!!asPath.match(/\/whats_new\/[^\s].*/) ? { y: 0 } : { opacity: 0 }}
        transition={{
          duration: !!refererPath?.match(/\/whats_new\/[^\s].*/) ? 0.5 : 1,
        }}
        style={{
          height: "100%",
        }}
      >
        <Container
          ref={contentContainerRef}
          maxW="1280px"
          h="100%"
          overflow="auto"
        >
          <VStack
            w="100%"
            h="100%"
            justifyContent="space-around"
            alignItems="flex-start"
          >
            <Show above="lg">
              <HStack position="relative" w="fit-content">
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
                  {`what's new`}
                </Heading>
              </HStack>
            </Show>

            {/* スマホレイアウト */}
            <Show below="lg">
              <Splide
                hasTrack={false}
                options={{
                  direction: "ttb",
                  wheel: true,
                  waitForTransition: true,
                  height: "60vh",
                  fixedWidth: !!contentContainerSize
                    ? contentContainerSize.width - 80
                    : "80vw",
                  arrows: false,
                  classes: {
                    pagination: "splide__pagination news-pagination",
                    page: "splide__pagination__page news-pagination-page smartphone",
                  },
                  perPage: 9,
                  gap: 0,
                }}
              >
                <HStack justify="space-between" alignItems="flex-start" w="90vw" h="100%" columnGap="2%">
                  <SplideTrack>
                    {!!newsList && newsList.map(({ id, title, createdAt }) => (
                      <SplideSlide key={id}>
                        <VStack align="flex-start" maxW="70vw">
                          <LinkBox as="article">
                            <LinkOverlay as={NextLink} href={`/whats_new/${id}`}>
                              <WhatsNewListCard
                                title={title}
                                createdAt={createdAt}
                              />
                            </LinkOverlay>
                          </LinkBox>

                          <Divider orientation="horizontal" borderColor="#333333" borderWidth="0.5" />
                        </VStack>
                      </SplideSlide>
                    ))}
                  </SplideTrack>

                  <VStack
                    h="70%"
                    justifyContent="space-between"
                    alignItems="center"
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
                        fontSize={12}
                        sx={{ writingMode: "vertical-lr" }}
                        color="main"
                        userSelect="none"
                      >
                        scroll
                      </Text>
                    </VStack>
                  </VStack>
                </HStack>
              </Splide>
            </Show>

            {/* PCレイアウト */}
            <Show above="lg">
              <Splide
                hasTrack={false}
                extensions={{ SplideGridExtension }}
                options={largeLayoutSplideOptions}
              >
                <HStack alignItems="flex-start" h="100%" spacing="0">
                  <SplideTrack>
                    {!!newsList && newsList.map(({ id, title, createdAt }) => (
                      <SplideSlide key={id}>
                        <LinkBox as="article">
                          <LinkOverlay as={NextLink} href={`/whats_new/${id}`}>
                            <WhatsNewGridCard
                              title={title}
                              createdAt={createdAt}
                            />
                          </LinkOverlay>
                        </LinkBox>
                      </SplideSlide>
                    ))}
                  </SplideTrack>

                  <VStack
                    h="60%"
                    justifyContent="space-between"
                    alignItems="center"
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
                        fontSize={20}
                        sx={{ writingMode: "vertical-lr" }}
                        color="main"
                        userSelect="none"
                      >
                        scroll
                      </Text>
                    </VStack>
                  </VStack>
                </HStack>
              </Splide>
            </Show>
          </VStack>
        </Container>
      </motion.div>
    </>
  );
};

WhatsNewPage.getLayout = (page: ReactElement) => (
  <CommonPageLayout title="what's new">{page}</CommonPageLayout>
);

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const referer = context.req.headers.referer;

  const newsList: NewsSummary[] = mockNewsList;

  if (!referer) {
    return {
      props: {
        refererPath: null,
        newsList
      }
    }
  }

  const refererURL: URL = new URL(referer);
  const refererPath: string = refererURL.pathname;

  return {
    props: {
      refererPath: refererPath,
      newsList
    },
  };
};

export default WhatsNewPage;
