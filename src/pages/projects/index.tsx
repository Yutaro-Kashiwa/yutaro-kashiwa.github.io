import { NextPageWithLayout } from "@/types/next_page_with_layout";
import {
  AspectRatio,
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Link,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Fragment, ReactElement, memo, useEffect } from "react";
import { CommonPageLayout } from "@/components/layouts/common_page_layout";
import NextLink from "next/link";
import TitleBackgroundRect from "@/images/title_background_rect.svg";
import { ArrowDown } from "@/components/icons/arrow_down";
import { GetServerSideProps } from "next";
// import NextImage from "next/image";
import { motion } from "framer-motion";
import { Project, mockProjectsList } from "./[project_name]";
import { useRouter } from "next/router";
import { ubuntuFont, interFont } from "@/config/next_fonts";
import "@splidejs/react-splide/css/core";

const ProjectSummaryCard = memo<
  Project & { shouldReverseImagePlacement: boolean }
>(({ title, name, summary, pictureURL, shouldReverseImagePlacement }) => (
  <Grid
    templateRows="auto"
    templateColumns="auto"
    templateAreas={{
      base: `
        "projectTitle"
        "picture"
        "projectSummary"
        "detailLink"
      `,
      lg: shouldReverseImagePlacement
        ? `
        "picture projectTitle projectTitle"
        "picture projectSummary projectSummary"
        "picture detailLink detailLink"
      `
        : `
        "projectTitle projectTitle picture"
        "projectSummary projectSummary picture"
        "detailLink detailLink detailLink"
      `,
    }}
    justifyItems={{ base: "start", lg: "unset" }}
    rowGap="20px"
    columnGap={{ lg: "60px" }}
  >
    <GridItem area="projectTitle">
      <Heading
        as="h3"
        // fontFamily={interFont.style.fontFamily}
        fontFamily={ubuntuFont.style.fontFamily}
        fontWeight={400}
        fontSize={{
          base: "calc(1.25rem + ((1vw - 3.75px) * 0.3756))",
          lg: 24,
        }}
        sx={{
          display: "-webkit-box",
          "-webkit-line-clamp": "2",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
        }}
      >
        {title}
      </Heading>
    </GridItem>

    <GridItem area="projectSummary">
      <Text
        fontSize={{
          base: "calc(0.9375rem + ((1vw - 3.75px) * 0.0939))",
          lg: 16,
        }}
        sx={{
          display: "-webkit-box",
          "-webkit-line-clamp": "3",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
        }}
      >
        {summary}
      </Text>
    </GridItem>

    <GridItem
      area="detailLink"
      position="relative"
      justifySelf="start"
      minH="64px"
    >
      <Link
        as={NextLink}
        href={`/projects/${name}`}
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="main"
        h="fit-content"
        w="fit-content"
        pl={{ base: "12px", lg: "20px" }}
        pr={{ base: "24px", lg: "28px" }}
        py={{ base: "4px", lg: "8px" }}
        _hover={{
          textDecoration: "none",
          backgroundColor: "#F2F947",
          pl: "28px",
          pr: "40px",
          py: "12px",
        }}
        transition="ease-out 0.3s"
      >
        <Text
          as="p"
          fontWeight="400"
          fontSize={{
            base: "calc(0.875rem + ((1vw - 3.75px) * 0.1878))",
            lg: "16px",
          }}
          color="main"
          whiteSpace="nowrap"
        >
          詳しくはこちら
        </Text>

        <Box position="absolute" w="fit-content" h="100%" top="40%" right="8px">
          <ArrowDown h="100%" color="main" />
        </Box>
      </Link>
    </GridItem>

    <GridItem area="picture">
      <Image
        // as={NextImage}
        src={pictureURL}
        alt=""
        fallback={
          <Box
            as="img"
            float="right"
            minW="320px"
            minH="180px"
            backgroundColor="#d9d9d9"
          />
        }
      />
    </GridItem>
  </Grid>
));

ProjectSummaryCard.displayName = "ProjectCard";

type PageProps = {
  refererPath: string | null;
  projects?: Project[];
};

export const ProjectsPage: NextPageWithLayout<PageProps> = ({
  refererPath,
  projects,
}) => {
  const { asPath } = useRouter();

  return (
    <>
      <motion.div
        initial={
          !!refererPath?.match(/\/projects\/[^\s].*/)
            ? { y: "-100vh" }
            : { opacity: 0 }
        }
        animate={
          !!refererPath?.match(/\/projects\/[^\s].*/)
            ? { y: 0 }
            : { opacity: 1 }
        }
        exit={
          !!asPath.match(/\/projects\/[^\s].*/)
            ? { y: "-100vh" }
            : { opacity: 0 }
        }
        transition={{
          duration: !!refererPath?.match(/\/projects\/[^\s].*/) ? 0.5 : 1,
        }}
        style={{
          height: "100%",
        }}
      >
        <Container
          maxW="1280px"
          mt="5vh"
          mb="20vh"
          overflowX="visible"
          overflowY="visible"
        >
          <VStack
            justifyContent="space-around"
            alignItems="flex-start"
            rowGap="72px"
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
                  projects
                </Heading>
              </HStack>
            </Show>

            <VStack justifyContent="space-evenly" rowGap="44px">
              {!!projects &&
                projects.map(
                  ({ title, name, body, summary, pictureURL }, index) => (
                    <Fragment
                      key={`${title}${name}${summary}${pictureURL}${index}`}
                    >
                      <ProjectSummaryCard
                        title={title}
                        name={name}
                        summary={summary}
                        body={body}
                        pictureURL={pictureURL}
                        shouldReverseImagePlacement={index % 2 > 0}
                      />
                    </Fragment>
                  )
                )}
            </VStack>
          </VStack>
        </Container>
      </motion.div>
    </>
  );
};

ProjectsPage.getLayout = (page: ReactElement) => (
  <CommonPageLayout title="projects">{page}</CommonPageLayout>
);

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const referer = context.req.headers.referer;

  // API取得の代わり
  const projects: Project[] = [...mockProjectsList];

  if (!referer) {
    return {
      props: {
        refererPath: null,
        projects,
      },
    };
  }

  const refererURL: URL = new URL(referer);
  const refererPath = refererURL.pathname;

  return {
    props: {
      refererPath,
      projects,
    },
  };
};

export default ProjectsPage;
