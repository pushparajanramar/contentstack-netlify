"use client";
import ShortBanner from "../Sitewide/ShortBanner";
import PortraitCard from "../Sitewide/PortraitCard";
import BlogCarousel from "../Sitewide/BlogCarousel";
import FAQAccordion from "../Sitewide/FAQAccordion";
import LandscapeCard from "../Sitewide/LandscapeCard";
import SectionHeading from "../Sitewide/SectionHeading";
import BannerCarousel from "../Sitewide/BannerCarousel";
import ProductCarousel from "../Sitewide/ProductCarousel";
import FullWidthBanner from "../Sitewide/FullWidthBanner";
import VideoAndTextBanner from "../Sitewide/VideoAndTextBanner";
// import SubscriptionBanner from "../Sitewide/SubscriptionBanner";
import HalfWidthBannerAndText from "../Sitewide/HalfWidthBannerAndText";

const LandingPageComponentLoop = ({ pageEntry }) => {
  // console.log("pageEntry", pageEntry);
  const sections = pageEntry ? pageEntry.modular_blocks : [];
  console.log("sections", sections);
  const section2 = [
    {
      full_width_banner: {
        variation: "block-full-height",
        banner_desktop_image_url: {
          title: "abc",
          url: "https://images.ctfassets.net/621t91s0mnkp/3J3NfiOXKGuVmjBK7BrQ5S/c87d0b9dcf3a348f0c69d50111fd3157/car-011624-winterclearance-desktop.jpg",
        },
        // _metadata: {
        //   uid: "cs01e6feaec1cba5b9",
        // },
        banner_tablet_image_url: {
          title: "abc",
          url: "https://images.ctfassets.net/621t91s0mnkp/5CIKLmVXTv49AzJf7FrazF/4ad979abaf40b7f0e3dbbf2779a925e0/car-011624-winterclearance-mobile.jpg",
        },
        banner_smartphone_image_url: {
          title: "abc",
          url: "https://images.ctfassets.net/621t91s0mnkp/5CIKLmVXTv49AzJf7FrazF/4ad979abaf40b7f0e3dbbf2779a925e0/car-011624-winterclearance-mobile.jpg",
        },
        // image_height: null,
        // padding_left: [
        //   {
        //     value: 0,
        //   },
        // ],
        // padding_top: [
        //   {
        //     value: 0,
        //   },
        // ],
        // transparency: [
        //   {
        //     value: 24,
        //   },
        // ],
        floating_box_height: [
          {
            value: 43,
          },
        ],
        // heading: "Never Short On Style",
        // inner_text:
        //   "From total comfort to quick-drying performance, our shorts supply everything you need for the course and beyond !!",
        text_color: "white",
        position: "right",
        block_background_color: "tm_neutral_800",
        text_alignment: "right",
        button: [
          {
            // title: "Shop Now",
            href: "/",
          },
        ],
        button_variants: "primary-white",
      },
    },
    {
      section_heading: {
        heading: "<h1>THE SPRING EDIT</h1>",
        _metadata: {
          uid: "cs1032251b928efc1a",
        },
        // content:
        // "<p>Lorem Ipsum dirac sit amet consectetur. Enim consectetur odio egestas senectus enim. Eget nam et metus ipsum ut quis ac ut .Eget nam et met.</p>",
        alignment: 1,
      },
    },
    {
      landscape_card: {
        columns: "4",
        image_heights: 280,
        _metadata: {
          uid: "cs3454f2b053c05cac",
        },
        wraps: true,
        card: [
          {
            image_url: {
              _version: 2,
              is_dir: false,
              uid: "blt89dbddd7b97d5834",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:03:02.832Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "17632",
              filename: "blur.jpg",
              parent_uid: "bltcbdc95076bcd1a75",
              tags: [],
              title: "Two_Column_Collection_(1).jpg",
              updated_at: "2023-11-14T12:00:32.074Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2023-11-14T12:00:40.616Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.ctfassets.net/621t91s0mnkp/5jwsYk1M495IEumxZdcNVU/90379cdbd279776aaf6484e5c7e55091/car-011624-newarrivals-sageneutral_40.jpg?fm=webp",
            },
            _metadata: {
              uid: "cs39d21a75a8ed77e3",
            },
            alt_tag: "Landscape",
            title: "SAGE & NEUTRAL ",
            // description:
            //   "Lorem ipsum dolor sit amet consectetur. In facilisis lobortis congue congue mus tortor.Lorem ipsum dolor sit amet consectetur. In facilisis lobortis congue congue mus tortor.",
            // cta: [
            //   {
            //     title: "Shop Category",
            //     href: "/",
            //   },
            //   {
            //     title: "Shop Look",
            //     href: "/",
            //   },
            // ],
          },
          {
            image_url: {
              _version: 3,
              is_dir: false,
              uid: "bltc3a13fb250a52fdf",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:03:41.412Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "14799",
              filename: "Image-866-536x354.jpeg",
              parent_uid: "bltcbdc95076bcd1a75",
              tags: [],
              title: "Test image",
              updated_at: "2023-11-10T13:06:53.164Z",
              updated_by: "blt78fe312f4dcc2750",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-04T09:31:40.057Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.ctfassets.net/621t91s0mnkp/soJXRiTCHEZvFpVvFdLoL/b6a1eb21878b16bd0c0522a23035867e/car-011624-newarrivals-vividred_40.jpg?fm=webp",
            },
            _metadata: {
              uid: "cs813fdbec4b5789c8",
            },
            alt_tag: "Golf Cap",
            title: "VIVID RED",
            // description:
            //   "Lorem ipsum dolor sit amet consectetur. In facilisis lobortis congue congue must tortor.",
            // cta: [
            //   {
            //     title: "Shop Later",
            //     href: "/",
            //   },
            // ],
          },
          {
            image_url: {
              _version: 2,
              is_dir: false,
              uid: "blt89dbddd7b97d5834",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:03:02.832Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "17632",
              filename: "blur.jpg",
              parent_uid: "bltcbdc95076bcd1a75",
              tags: [],
              title: "Two_Column_Collection_(1).jpg",
              updated_at: "2023-11-14T12:00:32.074Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2023-11-14T12:00:40.616Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.ctfassets.net/621t91s0mnkp/7oOcK3YGFAIrtcJ4YPZSTy/db9a060e93a783d06f2f702634e6b0e0/car-011624-newarrivals-cobalt_40.jpg?fm=webp",
            },
            _metadata: {
              uid: "cs9639213e6d0506dd",
            },
            alt_tag: "Landscape Card",
            title: "NEW BLUE HUES ",
            // description: "Lorem ipsum dolor sit amet consectetur.",
            // cta: [
            //   {
            //     title: "Shop Now",
            //     href: "/",
            //   },
            //   {
            //     title: "Shop The Look",
            //     href: "/",
            //   },
            // ],
          },
          {
            image_url: {
              _version: 3,
              is_dir: false,
              uid: "bltc3a13fb250a52fdf",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:03:41.412Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "14799",
              filename: "Image-866-536x354.jpeg",
              parent_uid: "bltcbdc95076bcd1a75",
              tags: [],
              title: "Test image",
              updated_at: "2023-11-10T13:06:53.164Z",
              updated_by: "blt78fe312f4dcc2750",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-04T09:31:40.057Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.ctfassets.net/621t91s0mnkp/1Je8rKukBCBKIttt8TLLPh/b04cd32857c8cef3d25dff08dd00eaf4/car-011624-newarrivals-pinkberry_40.jpg?fm=webp",
            },
            _metadata: {
              uid: "cs5553b83467156384",
            },
            alt_tag: "",
            title: "PINK & BERRY ",
            // description:
            //   "Lorem ipsum dolor sit amet consectetur. In facilisis lobortis congue congue mus tortor. ",
            // cta: [
            //   {
            //     title: "Shop Now",
            //     href: "/",
            //   },
            //   {
            //     title: "Shop Later",
            //     href: "/",
            //   },
            // ],
          },
        ],
      },
    },
    {
      portrait_card: {
        card_count_per_row: 6,
        wrap_cards: false,
        _metadata: {
          uid: "cs9a82e1020eaa912c",
        },
        image_heights: 400,
        card_box_shadow: true,
        background_color: "black_100",
        card_body_font_size: 0,
        cards: [
          {
            featured_image_url: {
              _version: 2,
              is_dir: false,
              uid: "bltff74a6aa0e04c80f",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:02:41.299Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "18008",
              filename: "blue.jpg",
              parent_uid: "blt081f2592f62fbfb2",
              tags: [],
              title: "homepage blue",
              updated_at: "2023-11-14T12:05:03.357Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-04T09:31:40.087Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.ctfassets.net/621t91s0mnkp/75AReLJea4BMhvrqb4GOQM/1c9e163ecb3cab6fd8965be954de1ad2/car-011624-CS-faces-bg.png?fm=webp",
            },
            _metadata: {
              uid: "cs5ad5123ae8e76e64",
            },
            alt_tag: "",
            heading: "Baby Girl ",
            // message:
            //   "Our most versatile quarter zip from office hours to happy(ier) hours.Our most versatile quarter zip from office hours to happy(ier) hours.",
            // cta_link: [
            //   {
            //     title: "Shop Now",
            //     href: "/",
            //   },
            //   {
            //     title: "Shop Later",
            //     href: "/",
            //   },
            // ],
          },
          {
            featured_image_url: {
              _version: 2,
              is_dir: false,
              uid: "bltc0d76954bde7754c",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:02:42.322Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "35581",
              filename: "dog.jpg",
              parent_uid: "blt081f2592f62fbfb2",
              tags: [],
              title: "homepage dog",
              updated_at: "2023-11-14T12:03:25.517Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-04T09:31:40.064Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.ctfassets.net/621t91s0mnkp/5P918A0lytB7VJQo3di3wb/51cc58926d24bff97b613c7193b44e90/car-011624-CS-faces-tg.png?fm=webp",
            },
            _metadata: {
              uid: "cs9d6be3e122bf9dab",
            },
            alt_tag: "",
            heading: "Toddler Girl",
            // message:
            //   "Our most versatile quarter zip from office hours to happy(ier) hours.Our most versatile quarter zip from office hours to happy(ier) hours.",
            // cta_link: [
            //   {
            //     title: "Shop The Category",
            //     href: "/",
            //   },
            //   {
            //     title: " Shop later",
            //     href: "/",
            //   },
            // ],
          },
          {
            featured_image_url: {
              _version: 2,
              is_dir: false,
              uid: "bltff74a6aa0e04c80f",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:02:41.299Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "18008",
              filename: "blue.jpg",
              parent_uid: "blt081f2592f62fbfb2",
              tags: [],
              title: "homepage blue",
              updated_at: "2023-11-14T12:05:03.357Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-04T09:31:40.087Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.ctfassets.net/621t91s0mnkp/6ItHKimGGyibZja3HuYJ89/aa6a162cc4ff2b7cccc22a32d0ab2ce4/car-011624-CS-faces-kg.png?fm=webp",
            },
            _metadata: {
              uid: "cse5388dc9a0b9da45",
            },
            alt_tag: "",
            heading: "Kid Girl",
            // message:
            //   "Your favorite lightweight, performance quarter zip for the course and beyond.",
            // cta_link: [
            //   {
            //     title: "Shop Now",
            //     href: "/",
            //   },
            // ],
          },
          {
            featured_image_url: {
              _version: 2,
              is_dir: false,
              uid: "bltc0d76954bde7754c",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:02:42.322Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "35581",
              filename: "dog.jpg",
              parent_uid: "blt081f2592f62fbfb2",
              tags: [],
              title: "homepage dog",
              updated_at: "2023-11-14T12:03:25.517Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-04T09:31:40.064Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.ctfassets.net/621t91s0mnkp/36TEWbAAn2YjgJxEtOfEtN/b41cea9f0ca093f33ddfff1fc6a2c6b5/car-011624-CS-faces-bb.png?fm=webp",
            },
            _metadata: {
              uid: "cs323826e2e306abaa",
            },
            alt_tag: "",
            heading: "Baby Boy",
            // message:
            //   "Your favorite lightweight, performance quarter zip for the course and beyond.",
            // cta_link: [
            //   {
            //     title: "Shop Now",
            //     href: "/",
            //   },
            // ],
          },
          {
            featured_image_url: {
              _version: 2,
              is_dir: false,
              uid: "bltff74a6aa0e04c80f",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:02:41.299Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "18008",
              filename: "blue.jpg",
              parent_uid: "blt081f2592f62fbfb2",
              tags: [],
              title: "homepage blue",
              updated_at: "2023-11-14T12:05:03.357Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-04T09:31:40.087Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.ctfassets.net/621t91s0mnkp/3o9nlGntcVgnNTc7L5lsAD/a7cbe48b3b0edde13f1fdcf5685a0288/car-011624-CS-faces-tb.png?fm=webp",
            },
            _metadata: {
              uid: "cs5c44e120c9642f3e",
            },
            alt_tag: "",
            heading: "Toddler Boy",
            // message:
            //   "Your favorite lightweight, performance quarter zip for the course and beyond.",
            // cta_link: [
            //   {
            //     title: "Shop Now",
            //     href: "/",
            //   },
            // ],
          },
          {
            featured_image_url: {
              _version: 2,
              is_dir: false,
              uid: "bltff74a6aa0e04c80f",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:02:41.299Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "18008",
              filename: "blue.jpg",
              parent_uid: "blt081f2592f62fbfb2",
              tags: [],
              title: "homepage blue",
              updated_at: "2023-11-14T12:05:03.357Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-04T09:31:40.087Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.ctfassets.net/621t91s0mnkp/4nlDFe0E1b0hEN389Ci9HW/2e17e5ba1a4db0d750c2e786eebd36b0/car-011624-CS-faces-kb.png?fm=webp",
            },
            _metadata: {
              uid: "cs5c44e120c9642f3e",
            },
            alt_tag: "",
            heading: "Kid Boy",
            // message:
            //   "Your favorite lightweight, performance quarter zip for the course and beyond.",
            // cta_link: [
            //   {
            //     title: "Shop Now",
            //     href: "/",
            //   },
            // ],
          },
          {
            featured_image_url: {
              _version: 2,
              is_dir: false,
              uid: "bltff74a6aa0e04c80f",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:02:41.299Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "18008",
              filename: "blue.jpg",
              parent_uid: "blt081f2592f62fbfb2",
              tags: [],
              title: "homepage blue",
              updated_at: "2023-11-14T12:05:03.357Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-04T09:31:40.087Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.ctfassets.net/621t91s0mnkp/1zBBigsPRWsxbXJY1zr07T/b1103b6a2e653f64622b4afcb9827257/car-112623-coins-tops-bottoms.png?fm=webp",
            },
            _metadata: {
              uid: "cs5ad5123ae8e76e64",
            },
            alt_tag: "",
            heading: "Tops & Bottoms",
            // message:
            //   "Our most versatile quarter zip from office hours to happy(ier) hours.Our most versatile quarter zip from office hours to happy(ier) hours.",
            // cta_link: [
            //   {
            //     title: "Shop Now",
            //     href: "/",
            //   },
            //   {
            //     title: "Shop Later",
            //     href: "/",
            //   },
            // ],
          },
          {
            featured_image_url: {
              _version: 2,
              is_dir: false,
              uid: "bltc0d76954bde7754c",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:02:42.322Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "35581",
              filename: "dog.jpg",
              parent_uid: "blt081f2592f62fbfb2",
              tags: [],
              title: "homepage dog",
              updated_at: "2023-11-14T12:03:25.517Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-04T09:31:40.064Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.ctfassets.net/621t91s0mnkp/3dkoioyEuNqqcDbzxJZpJy/677eaef973073dcd5738ff3f8ab5efc0/car-122623-coins-pajamas.png?fm=webp",
            },
            _metadata: {
              uid: "cs9d6be3e122bf9dab",
            },
            alt_tag: "",
            heading: "Pajamas",
            // message:
            //   "Our most versatile quarter zip from office hours to happy(ier) hours.Our most versatile quarter zip from office hours to happy(ier) hours.",
            // cta_link: [
            //   {
            //     title: "Shop The Category",
            //     href: "/",
            //   },
            //   {
            //     title: " Shop later",
            //     href: "/",
            //   },
            // ],
          },
          {
            featured_image_url: {
              _version: 2,
              is_dir: false,
              uid: "bltff74a6aa0e04c80f",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:02:41.299Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "18008",
              filename: "blue.jpg",
              parent_uid: "blt081f2592f62fbfb2",
              tags: [],
              title: "homepage blue",
              updated_at: "2023-11-14T12:05:03.357Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-04T09:31:40.087Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.ctfassets.net/621t91s0mnkp/4JSyacT75PzvDSVjq51vkQ/5d37dd8d6f1b7688881bb5372dbe8213/car-011024-coins-sets.png?fm=webp",
            },
            _metadata: {
              uid: "cse5388dc9a0b9da45",
            },
            alt_tag: "",
            heading: "Sets",
            // message:
            //   "Your favorite lightweight, performance quarter zip for the course and beyond.",
            // cta_link: [
            //   {
            //     title: "Shop Now",
            //     href: "/",
            //   },
            // ],
          },
          {
            featured_image_url: {
              _version: 2,
              is_dir: false,
              uid: "bltc0d76954bde7754c",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:02:42.322Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "35581",
              filename: "dog.jpg",
              parent_uid: "blt081f2592f62fbfb2",
              tags: [],
              title: "homepage dog",
              updated_at: "2023-11-14T12:03:25.517Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-04T09:31:40.064Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.ctfassets.net/621t91s0mnkp/5zxL4jtAtHHioWUwMfk50c/bdc168f648704d5b0f79ea646ac15903/car-013024-CScoins-swim.png?fm=webp",
            },
            _metadata: {
              uid: "cs323826e2e306abaa",
            },
            alt_tag: "",
            heading: "Swim",
            // message:
            //   "Your favorite lightweight, performance quarter zip for the course and beyond.",
            // cta_link: [
            //   {
            //     title: "Shop Now",
            //     href: "/",
            //   },
            // ],
          },
          {
            featured_image_url: {
              _version: 2,
              is_dir: false,
              uid: "bltff74a6aa0e04c80f",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:02:41.299Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "18008",
              filename: "blue.jpg",
              parent_uid: "blt081f2592f62fbfb2",
              tags: [],
              title: "homepage blue",
              updated_at: "2023-11-14T12:05:03.357Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-04T09:31:40.087Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.ctfassets.net/621t91s0mnkp/5xgYqemwlhM5yzseF19odI/79e6608ece06a868c3ab1b61d02b1fbb/car-011624-coins-shoes.png?fm=webp",
            },
            _metadata: {
              uid: "cs5c44e120c9642f3e",
            },
            alt_tag: "",
            heading: "Shoes",
            // message:
            //   "Your favorite lightweight, performance quarter zip for the course and beyond.",
            // cta_link: [
            //   {
            //     title: "Shop Now",
            //     href: "/",
            //   },
            // ],
          },
          {
            featured_image_url: {
              _version: 2,
              is_dir: false,
              uid: "bltff74a6aa0e04c80f",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:02:41.299Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "18008",
              filename: "blue.jpg",
              parent_uid: "blt081f2592f62fbfb2",
              tags: [],
              title: "homepage blue",
              updated_at: "2023-11-14T12:05:03.357Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-04T09:31:40.087Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.ctfassets.net/621t91s0mnkp/7rv1PampFydiM4qbNTTSue/9857bfcbea2b8cbe29965acfe882780c/car-102623-coins-clearance.png?fm=webp",
            },
            _metadata: {
              uid: "cs5c44e120c9642f3e",
            },
            alt_tag: "",
            heading: "Clearance",
            // message:
            //   "Your favorite lightweight, performance quarter zip for the course and beyond.",
            // cta_link: [
            //   {
            //     title: "Shop Now",
            //     href: "/",
            //   },
            // ],
          },
        ],
      },
    },

    {
      full_width_banner: {
        variation: "block-full-height",
        banner_desktop_image_url: {
          title: "abc",
          href: "https://images.ctfassets.net/621t91s0mnkp/3J3NfiOXKGuVmjBK7BrQ5S/c87d0b9dcf3a348f0c69d50111fd3157/car-011624-winterclearance-desktop.jpg",
        },
        _metadata: {
          uid: "cs01e6feaec1cba5b9",
        },
        banner_tablet_image_url: {
          title: "abc",
          href: "https://images.ctfassets.net/621t91s0mnkp/5CIKLmVXTv49AzJf7FrazF/4ad979abaf40b7f0e3dbbf2779a925e0/car-011624-winterclearance-mobile.jpg",
        },
        banner_smartphone_image_url: {
          title: "abc",
          href: "https://images.ctfassets.net/621t91s0mnkp/5CIKLmVXTv49AzJf7FrazF/4ad979abaf40b7f0e3dbbf2779a925e0/car-011624-winterclearance-mobile.jpg",
        },
        image_height: null,
        padding_left: [
          {
            value: 0,
          },
        ],
        padding_top: [
          {
            value: 0,
          },
        ],
        transparency: [
          {
            value: 24,
          },
        ],
        floating_box_height: [
          {
            value: 43,
          },
        ],
        heading: "Never Short On Style",
        inner_text:
          "From total comfort to quick-drying performance, our shorts supply everything you need for the course and beyond !!",
        text_color: "white",
        position: "right",
        block_background_color: "tm_neutral_800",
        text_alignment: "right",
        button: [
          {
            title: "Shop Now",
            href: "/",
          },
        ],
        button_variants: "primary-white",
      },
    },
    {
      short_banner: {
        promo_icon: {
          _version: 2,
          is_dir: false,
          uid: "blta7fa8e825531b58b",
          ACL: {},
          content_type: "image/svg+xml",
          created_at: "2023-11-08T16:02:46.901Z",
          created_by: "blt78fe312f4dcc2750",
          description: "",
          file_size: "4387",
          filename: "logo.svg",
          parent_uid: null,
          tags: [],
          title: "CG_Rewards_2.png",
          updated_at: "2024-01-09T05:28:45.802Z",
          updated_by: "blt5a61aa7aeee6f9ff",
          publish_details: {
            environment: "blt0cb0a00f31ca2427",
            locale: "en-us",
            time: "2024-01-09T05:29:24.490Z",
            user: "blt5a61aa7aeee6f9ff",
          },
          url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blta7fa8e825531b58b/659cd98db6f924c364be379f/logo.svg",
        },
        _metadata: {
          uid: "cs3230e30321f26f1f",
        },
        banner_title: "<h5>Earn Points on Every Purchase!</h5>",
        banner_description:
          "<p>Plus get free shipping and returns on every order, just for signing up.</p>",
        cta: {
          title: "Join Now",
          href: "/",
        },
        cta_style: "primary-black",
        alt_tag: "Short Banner Image",
        block_background_color: "cg_neutral_400",
        text_color: "white",
        min_height: 180,
      },
    },
    {
      section_heading: {
        heading: "<h1>More to Love</h1>",
        _metadata: {
          uid: "cs1032251b928efc1a",
        },
        // content:
        //   "<p>Lorem Ipsum dirac sit amet consectetur. Enim consectetur odio egestas senectus enim. Eget nam et metus ipsum ut quis ac ut .Eget nam et met.</p>",
        alignment: 1,
      },
    },
    {
      landscape_card: {
        columns: "3",
        image_heights: 280,
        _metadata: {
          uid: "cs3454f2b053c05cac",
        },
        wraps: true,
        card: [
          {
            image_url: {
              _version: 2,
              is_dir: false,
              uid: "blt89dbddd7b97d5834",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:03:02.832Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "17632",
              filename: "blur.jpg",
              parent_uid: "bltcbdc95076bcd1a75",
              tags: [],
              title: "Two_Column_Collection_(1).jpg",
              updated_at: "2023-11-14T12:00:32.074Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2023-11-14T12:00:40.616Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.ctfassets.net/621t91s0mnkp/28GcNjxgChUNoo1YpyM2s5/add75aee042f8cae8f54ab5a7fb2e142/OKBG-logo-mobile.png?fm=webp",
            },
            _metadata: {
              uid: "cs39d21a75a8ed77e3",
            },
            alt_tag: "Landscape",
            title: "Authentic, enduringly cool and rooted in iconic denim. ",
            // description:
            //   "Lorem ipsum dolor sit amet consectetur. In facilisis lobortis congue congue mus tortor.Lorem ipsum dolor sit amet consectetur. In facilisis lobortis congue congue mus tortor.",
            // cta: [
            //   {
            //     title: "Shop Category",
            //     href: "/",
            //   },
            //   {
            //     title: "Shop Look",
            //     href: "/",
            //   },
            // ],
          },
          {
            image_url: {
              _version: 3,
              is_dir: false,
              uid: "bltc3a13fb250a52fdf",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:03:41.412Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "14799",
              filename: "Image-866-536x354.jpeg",
              parent_uid: "bltcbdc95076bcd1a75",
              tags: [],
              title: "Test image",
              updated_at: "2023-11-10T13:06:53.164Z",
              updated_by: "blt78fe312f4dcc2750",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-04T09:31:40.057Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.ctfassets.net/621t91s0mnkp/6yTZfHdre5duHjO8vrLzjV/8c07489bfc374feec2ce141b42516ed8/Lp-logo-mobile.png?fm=webp",
            },
            _metadata: {
              uid: "cs813fdbec4b5789c8",
            },
            alt_tag: "Golf Cap",
            title:
              "Crafted in the purest organic fabrics & sustainable materials.",
            // description:
            //   "Lorem ipsum dolor sit amet consectetur. In facilisis lobortis congue congue must tortor.",
            // cta: [
            //   {
            //     title: "Shop Later",
            //     href: "/",
            //   },
            // ],
          },
          {
            image_url: {
              _version: 2,
              is_dir: false,
              uid: "blt89dbddd7b97d5834",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:03:02.832Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "17632",
              filename: "blur.jpg",
              parent_uid: "bltcbdc95076bcd1a75",
              tags: [],
              title: "Two_Column_Collection_(1).jpg",
              updated_at: "2023-11-14T12:00:32.074Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2023-11-14T12:00:40.616Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.ctfassets.net/621t91s0mnkp/5ve5mepGpNAzHBY9YTSlyP/0eb4fa82ea680e35db40005383b0dc53/Sp-logo-mobile.png?fm=webp",
            },
            _metadata: {
              uid: "cs9639213e6d0506dd",
            },
            alt_tag: "Landscape Card",
            title: "Award-winning baby gear that grows with them.",
            // description: "Lorem ipsum dolor sit amet consectetur.",
            // cta: [
            //   {
            //     title: "Shop Now",
            //     href: "/",
            //   },
            //   {
            //     title: "Shop The Look",
            //     href: "/",
            //   },
            // ],
          },
        ],
      },
    },
    {
      section_heading: {
        heading: "<h1>shop + share the love</h1>",
        _metadata: {
          uid: "cs1032251b928efc1a",
        },
        content: "<p>Snag @carters styles and show off yours now.</p>",
        alignment: 1,
      },
    },
    {
      landscape_card: {
        columns: "4",
        image_heights: 280,
        _metadata: {
          uid: "cs3454f2b053c05cac",
        },
        wraps: true,
        card: [
          {
            image_url: {
              _version: 2,
              is_dir: false,
              uid: "blt89dbddd7b97d5834",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:03:02.832Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "17632",
              filename: "blur.jpg",
              parent_uid: "bltcbdc95076bcd1a75",
              tags: [],
              title: "Two_Column_Collection_(1).jpg",
              updated_at: "2023-11-14T12:00:32.074Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2023-11-14T12:00:40.616Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://edge.curalate.com/v1/img/IJVjXEuROj4PYoMTHokznlnimBIivA50wWWxLoQud-E=/sc/450x450?spatialTags=0.5301949977874756:0.4600580036640167&typ=webp",
            },
            _metadata: {
              uid: "cs39d21a75a8ed77e3",
            },
            alt_tag: "Landscape",
            // title: "Lorem Ipsum Dolor ",
            // description:
            //   "Lorem ipsum dolor sit amet consectetur. In facilisis lobortis congue congue mus tortor.Lorem ipsum dolor sit amet consectetur. In facilisis lobortis congue congue mus tortor.",
            // cta: [
            //   {
            //     title: "Shop Category",
            //     href: "/",
            //   },
            //   {
            //     title: "Shop Look",
            //     href: "/",
            //   },
            // ],
          },
          {
            image_url: {
              _version: 2,
              is_dir: false,
              uid: "blt89dbddd7b97d5834",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:03:02.832Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "17632",
              filename: "blur.jpg",
              parent_uid: "bltcbdc95076bcd1a75",
              tags: [],
              title: "Two_Column_Collection_(1).jpg",
              updated_at: "2023-11-14T12:00:32.074Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2023-11-14T12:00:40.616Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://edge.curalate.com/v1/img/gG_-s0en-OLyxHOqcmbQBdx8Dm-wGzCTxUFYA2O3PA8=/sc/450x450?spatialTags=0.39945152401924133:0.43796834349632263,0.4124736189842224:0.2675837576389313&typ=webp",
            },
            _metadata: {
              uid: "cs9639213e6d0506dd",
            },
            alt_tag: "Landscape Card",
            // title: "Lorem Ipsum Dolor ",
            // description: "Lorem ipsum dolor sit amet consectetur.",
            // cta: [
            //   {
            //     title: "Shop Now",
            //     href: "/",
            //   },
            //   {
            //     title: "Shop The Look",
            //     href: "/",
            //   },
            // ],
          },
          {
            image_url: {
              _version: 3,
              is_dir: false,
              uid: "bltc3a13fb250a52fdf",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:03:41.412Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "14799",
              filename: "Image-866-536x354.jpeg",
              parent_uid: "bltcbdc95076bcd1a75",
              tags: [],
              title: "Test image",
              updated_at: "2023-11-10T13:06:53.164Z",
              updated_by: "blt78fe312f4dcc2750",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-04T09:31:40.057Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://edge.curalate.com/v1/img/bieBbeB5giAuyYy4JY_mZZihxkfwo0Q1Y8z4NIGkZhE=/sc/450x450?spatialTags=0.5520256757736206:0.5753828883171082&typ=webp",
            },
            _metadata: {
              uid: "cs813fdbec4b5789c8",
            },
            alt_tag: "Golf Cap",
            // title: "Lorem Ipsum Dolor",
            // description:
            //   "Lorem ipsum dolor sit amet consectetur. In facilisis lobortis congue congue must tortor.",
            // cta: [
            //   {
            //     title: "Shop Later",
            //     href: "/",
            //   },
            // ],
          },

          {
            image_url: {
              _version: 3,
              is_dir: false,
              uid: "bltc3a13fb250a52fdf",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:03:41.412Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "14799",
              filename: "Image-866-536x354.jpeg",
              parent_uid: "bltcbdc95076bcd1a75",
              tags: [],
              title: "Test image",
              updated_at: "2023-11-10T13:06:53.164Z",
              updated_by: "blt78fe312f4dcc2750",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-04T09:31:40.057Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://edge.curalate.com/v1/img/zfTB16GVbvr-A-ebbpdaGvjp171Tww0cpS0lH4t9OT4=/sc/450x450?spatialTags=0.3015850782394409:0.5524768233299255&typ=webp",
            },
            _metadata: {
              uid: "cs5553b83467156384",
            },
            alt_tag: "",
            // title: "Lorem Ipsum Dolor ",
            // description:
            //   "Lorem ipsum dolor sit amet consectetur. In facilisis lobortis congue congue mus tortor. ",
            // cta: [
            //   {
            //     title: "Shop Now",
            //     href: "/",
            //   },
            //   {
            //     title: "Shop Later",
            //     href: "/",
            //   },
            // ],
          },
        ],
      },
    },

    {
      product_carousel: {
        heading: "<h2>Lorem Ipsum Dolor</h2>",
        description:
          "<p>Lorem ipsum dolor sit amet consectetur. Orci ut proin enim est neque dictum imperdiet in.</p>",

        cta: {
          title: "Men's Best Sellers",
          href: "/",
        },
        product_cards: [
          {
            product_id: "1MW397_4HTQ_",
            _metadata: {
              uid: "cs3eb71a2b96115146",
            },
          },
          {
            product_id: "1MW397_9HDG_",
            _metadata: {
              uid: "cs3e117a32dc5fee88",
            },
          },
          {
            product_id: "1MY308_4DRB_",
            _metadata: {
              uid: "cs01091377f15c9924",
            },
          },
          {
            product_id: "1MX334_0BLK_",
            _metadata: {
              uid: "csb6b81bdd9681ee6d",
            },
          },
          {
            product_id: "1MY302_4HTM_",
            _metadata: {
              uid: "cs287b651ffc4120ad",
            },
          },
          {
            product_id: "1MM208_4BLN_",
            _metadata: {
              uid: "cs98d6286202f50acb",
            },
          },
          {
            product_id: "1MT435_0BLK_",
            _metadata: {
              uid: "csfc99e123fb9c9365",
            },
          },
          {
            product_id: "1MW397_9HDG_",
            _metadata: {
              uid: "csfc95e9f263a9394a",
            },
          },
          {
            product_id: "1MY302_4HTM_",
            _metadata: {
              uid: "cs5a6c1140295f92ad",
            },
          },
          {
            product_id: "1MY306_0HMC_",
            _metadata: {
              uid: "cs7ac2f6939e2af8b8",
            },
          },
          {
            product_id: "1MY307_4DRB_",
            _metadata: {
              uid: "cs554965dd557ee90a",
            },
          },
          {
            product_id: "1MW397_4HBL_",
            _metadata: {
              uid: "cs9104bac22538494d",
            },
          },
        ],
        default_products: [
          {
            productId: "1MW397_4HTQ_",
            title: "Sand Harbor Short",
            description: "",
            url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_",
            brand: "TM",
            badge: "",
            price: [
              {
                currencyIso: "USD",
                formattedValue: "$69.99",
                priceType: "sale_price",
                value: 69.99,
              },
              {
                currencyIso: "USD",
                formattedValue: "$69.99",
                priceType: "price",
                value: 69.99,
              },
              {
                currencyIso: "USD",
                formattedValue: "$undefined",
                priceType: "employee_price",
                value: 0,
              },
            ],
            stock: {
              stockLevelStatus: "instock",
            },
            images: [
              {
                altText: "1MW397-4HTQ.jpg",
                isVideoMedia: false,
                url: "https://images.ctfassets.net/621t91s0mnkp/75AReLJea4BMhvrqb4GOQM/1c9e163ecb3cab6fd8965be954de1ad2/car-011624-CS-faces-bg.png?fm=webp",
              },
              {
                altText: "1MW397-4HTQ-2.jpg",
                isVideoMedia: false,
                url: "https://images.ctfassets.net/621t91s0mnkp/75AReLJea4BMhvrqb4GOQM/1c9e163ecb3cab6fd8965be954de1ad2/car-011624-CS-faces-bg.png?fm=webp",
              },
              {
                altText: "1MW397-4HTQ-4.jpg",
                isVideoMedia: false,
                url: "https://images.ctfassets.net/621t91s0mnkp/75AReLJea4BMhvrqb4GOQM/1c9e163ecb3cab6fd8965be954de1ad2/car-011624-CS-faces-bg.png?fm=webp",
              },
              {
                altText: "1MW397-4HTQ-5.jpg",
                isVideoMedia: false,
                url: "https://images.ctfassets.net/621t91s0mnkp/75AReLJea4BMhvrqb4GOQM/1c9e163ecb3cab6fd8965be954de1ad2/car-011624-CS-faces-bg.png?fm=webp",
              },
            ],
            promotionText: "",
            variants: [
              {
                name: "size",
                code: "1MW397_4HTQ_30",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_30",
                value: "30",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_32",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_32",
                value: "32",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_33",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_33",
                value: "33",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_34",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_34",
                value: "34",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_35",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_35",
                value: "35",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_36",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_36",
                value: "36",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_38",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_38",
                value: "38",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_40",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_40",
                value: "40",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_42",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_42",
                value: "42",
                media: null,
              },
              {
                name: "color",
                code: "1MW397_4HTQ_",
                selected: true,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_",
                value: "HEATHER TURQUOISE",
                hexCode: "#9FC2BF",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/ha7/h7d/9240790925342/1MW397-4HTQ-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_3HSP_",
                selected: false,
                stock: {
                  stockLevelStatus: "outofstock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_3HSP_",
                value: "HEATHER SILVER PINE",
                hexCode: "#889A96",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h97/h36/9093537693726/1MW397-3HSP-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_4HBL_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HBL_",
                value: "Heather Blue",
                hexCode: "#9CB3D3",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h5c/h4a/9017322078238/1MW397-4HBL-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_0HSL_",
                selected: false,
                stock: {
                  stockLevelStatus: "outofstock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_0HSL_",
                value: "Heather Sleet",
                hexCode: "#AFADAE",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h5f/h55/9017320112158/1MW397-0HSL-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_6HGR_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_6HGR_",
                value: "Heather Garnet Rose",
                hexCode: "#88606C",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/hcc/hc0/9017318146078/1MW397-6HGR-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_9HDG_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_",
                value: "Heather Dark Grey",
                hexCode: "#5D5C60",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h3f/hb3/9024606208030/1MW397-9HDG-SWATCH.jpg",
                },
              },
            ],
            isGloveProduct: false,
            isGiftProduct: false,
            handOptions: [],
            colorVariants: [
              {
                name: "color",
                code: "1MW397_4HTQ_",
                selected: true,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_",
                value: "HEATHER TURQUOISE",
                hexCode: "#9FC2BF",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/ha7/h7d/9240790925342/1MW397-4HTQ-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_3HSP_",
                selected: false,
                stock: {
                  stockLevelStatus: "outofstock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_3HSP_",
                value: "HEATHER SILVER PINE",
                hexCode: "#889A96",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h97/h36/9093537693726/1MW397-3HSP-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_4HBL_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HBL_",
                value: "Heather Blue",
                hexCode: "#9CB3D3",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h5c/h4a/9017322078238/1MW397-4HBL-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_0HSL_",
                selected: false,
                stock: {
                  stockLevelStatus: "outofstock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_0HSL_",
                value: "Heather Sleet",
                hexCode: "#AFADAE",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h5f/h55/9017320112158/1MW397-0HSL-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_6HGR_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_6HGR_",
                value: "Heather Garnet Rose",
                hexCode: "#88606C",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/hcc/hc0/9017318146078/1MW397-6HGR-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_9HDG_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_",
                value: "Heather Dark Grey",
                hexCode: "#5D5C60",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h3f/hb3/9024606208030/1MW397-9HDG-SWATCH.jpg",
                },
              },
            ],
            defaultSizes: [
              {
                name: "size",
                code: "1MW397_4HTQ_30",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_30",
                value: "30",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_32",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_32",
                value: "32",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_33",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_33",
                value: "33",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_34",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_34",
                value: "34",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_35",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_35",
                value: "35",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_36",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_36",
                value: "36",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_38",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_38",
                value: "38",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_40",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_40",
                value: "40",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_42",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_42",
                value: "42",
                media: null,
              },
            ],
          },
          {
            productId: "1MW397_9HDG_",
            title: "Sand Harbor Short",
            description:
              "With a casual style that looks great for everyday wear the Sand Harbor short was crafted from TravisMathew’s signature micro-stripe fabric and is available in multiple color options.",
            url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_",
            brand: "TM",
            badge: "",
            price: [
              {
                currencyIso: "USD",
                formattedValue: "$69.99",
                priceType: "sale_price",
                value: 69.99,
              },
              {
                currencyIso: "USD",
                formattedValue: "$69.99",
                priceType: "price",
                value: 69.99,
              },
              {
                currencyIso: "USD",
                formattedValue: "$undefined",
                priceType: "employee_price",
                value: 0,
              },
            ],
            stock: {
              stockLevelStatus: "instock",
            },
            images: [
              {
                altText: "1MW397-4HTQ.jpg",
                isVideoMedia: false,
                url: "https://images.ctfassets.net/621t91s0mnkp/75AReLJea4BMhvrqb4GOQM/1c9e163ecb3cab6fd8965be954de1ad2/car-011624-CS-faces-bg.png?fm=webp",
              },
              {
                altText: "1MW397-4HTQ-2.jpg",
                isVideoMedia: false,
                url: "https://images.ctfassets.net/621t91s0mnkp/75AReLJea4BMhvrqb4GOQM/1c9e163ecb3cab6fd8965be954de1ad2/car-011624-CS-faces-bg.png?fm=webp",
              },
              {
                altText: "1MW397-4HTQ-4.jpg",
                isVideoMedia: false,
                url: "https://images.ctfassets.net/621t91s0mnkp/75AReLJea4BMhvrqb4GOQM/1c9e163ecb3cab6fd8965be954de1ad2/car-011624-CS-faces-bg.png?fm=webp",
              },
              {
                altText: "1MW397-4HTQ-5.jpg",
                isVideoMedia: false,
                url: "https://images.ctfassets.net/621t91s0mnkp/75AReLJea4BMhvrqb4GOQM/1c9e163ecb3cab6fd8965be954de1ad2/car-011624-CS-faces-bg.png?fm=webp",
              },
            ],
            promotionText: "",
            variants: [
              {
                name: "size",
                code: "1MW397_9HDG_30",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_30",
                value: "30",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_32",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_32",
                value: "32",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_33",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_33",
                value: "33",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_34",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_34",
                value: "34",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_35",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_35",
                value: "35",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_36",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_36",
                value: "36",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_38",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_38",
                value: "38",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_40",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_40",
                value: "40",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_42",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_42",
                value: "42",
                media: null,
              },
              {
                name: "color",
                code: "1MW397_9HDG_",
                selected: true,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_",
                value: "Heather Dark Grey",
                hexCode: "#5D5C60",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h3f/hb3/9024606208030/1MW397-9HDG-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_3HSP_",
                selected: false,
                stock: {
                  stockLevelStatus: "outofstock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_3HSP_",
                value: "HEATHER SILVER PINE",
                hexCode: "#889A96",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h97/h36/9093537693726/1MW397-3HSP-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_4HBL_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HBL_",
                value: "Heather Blue",
                hexCode: "#9CB3D3",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h5c/h4a/9017322078238/1MW397-4HBL-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_4HTQ_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_",
                value: "HEATHER TURQUOISE",
                hexCode: "#9FC2BF",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/ha7/h7d/9240790925342/1MW397-4HTQ-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_6HGR_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_6HGR_",
                value: "Heather Garnet Rose",
                hexCode: "#88606C",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/hcc/hc0/9017318146078/1MW397-6HGR-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_0HSL_",
                selected: false,
                stock: {
                  stockLevelStatus: "outofstock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_0HSL_",
                value: "Heather Sleet",
                hexCode: "#AFADAE",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h5f/h55/9017320112158/1MW397-0HSL-SWATCH.jpg",
                },
              },
            ],
            isGloveProduct: false,
            isGiftProduct: false,
            handOptions: [],
            colorVariants: [
              {
                name: "color",
                code: "1MW397_9HDG_",
                selected: true,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_",
                value: "Heather Dark Grey",
                hexCode: "#5D5C60",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h3f/hb3/9024606208030/1MW397-9HDG-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_3HSP_",
                selected: false,
                stock: {
                  stockLevelStatus: "outofstock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_3HSP_",
                value: "HEATHER SILVER PINE",
                hexCode: "#889A96",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h97/h36/9093537693726/1MW397-3HSP-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_4HBL_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HBL_",
                value: "Heather Blue",
                hexCode: "#9CB3D3",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h5c/h4a/9017322078238/1MW397-4HBL-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_4HTQ_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_",
                value: "HEATHER TURQUOISE",
                hexCode: "#9FC2BF",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/ha7/h7d/9240790925342/1MW397-4HTQ-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_6HGR_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_6HGR_",
                value: "Heather Garnet Rose",
                hexCode: "#88606C",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/hcc/hc0/9017318146078/1MW397-6HGR-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_0HSL_",
                selected: false,
                stock: {
                  stockLevelStatus: "outofstock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_0HSL_",
                value: "Heather Sleet",
                hexCode: "#AFADAE",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h5f/h55/9017320112158/1MW397-0HSL-SWATCH.jpg",
                },
              },
            ],
            defaultSizes: [
              {
                name: "size",
                code: "1MW397_9HDG_30",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_30",
                value: "30",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_32",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_32",
                value: "32",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_33",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_33",
                value: "33",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_34",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_34",
                value: "34",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_35",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_35",
                value: "35",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_36",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_36",
                value: "36",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_38",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_38",
                value: "38",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_40",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_40",
                value: "40",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_42",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_42",
                value: "42",
                media: null,
              },
            ],
          },
          {
            productId: "1MW397_4HTQ_",
            title: "Sand Harbor Short",
            description: "",
            url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_",
            brand: "TM",
            badge: "",
            price: [
              {
                currencyIso: "USD",
                formattedValue: "$69.99",
                priceType: "sale_price",
                value: 69.99,
              },
              {
                currencyIso: "USD",
                formattedValue: "$69.99",
                priceType: "price",
                value: 69.99,
              },
              {
                currencyIso: "USD",
                formattedValue: "$undefined",
                priceType: "employee_price",
                value: 0,
              },
            ],
            stock: {
              stockLevelStatus: "instock",
            },
            images: [
              {
                altText: "1MW397-4HTQ.jpg",
                isVideoMedia: false,
                url: "https://images.ctfassets.net/621t91s0mnkp/75AReLJea4BMhvrqb4GOQM/1c9e163ecb3cab6fd8965be954de1ad2/car-011624-CS-faces-bg.png?fm=webp",
              },
              {
                altText: "1MW397-4HTQ-2.jpg",
                isVideoMedia: false,
                url: "https://images.ctfassets.net/621t91s0mnkp/75AReLJea4BMhvrqb4GOQM/1c9e163ecb3cab6fd8965be954de1ad2/car-011624-CS-faces-bg.png?fm=webp",
              },
              {
                altText: "1MW397-4HTQ-4.jpg",
                isVideoMedia: false,
                url: "https://images.ctfassets.net/621t91s0mnkp/75AReLJea4BMhvrqb4GOQM/1c9e163ecb3cab6fd8965be954de1ad2/car-011624-CS-faces-bg.png?fm=webp",
              },
              {
                altText: "1MW397-4HTQ-5.jpg",
                isVideoMedia: false,
                url: "https://images.ctfassets.net/621t91s0mnkp/75AReLJea4BMhvrqb4GOQM/1c9e163ecb3cab6fd8965be954de1ad2/car-011624-CS-faces-bg.png?fm=webp",
              },
            ],
            promotionText: "",
            variants: [
              {
                name: "size",
                code: "1MW397_4HTQ_30",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_30",
                value: "30",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_32",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_32",
                value: "32",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_33",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_33",
                value: "33",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_34",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_34",
                value: "34",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_35",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_35",
                value: "35",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_36",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_36",
                value: "36",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_38",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_38",
                value: "38",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_40",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_40",
                value: "40",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_42",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_42",
                value: "42",
                media: null,
              },
              {
                name: "color",
                code: "1MW397_4HTQ_",
                selected: true,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_",
                value: "HEATHER TURQUOISE",
                hexCode: "#9FC2BF",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/ha7/h7d/9240790925342/1MW397-4HTQ-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_3HSP_",
                selected: false,
                stock: {
                  stockLevelStatus: "outofstock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_3HSP_",
                value: "HEATHER SILVER PINE",
                hexCode: "#889A96",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h97/h36/9093537693726/1MW397-3HSP-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_4HBL_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HBL_",
                value: "Heather Blue",
                hexCode: "#9CB3D3",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h5c/h4a/9017322078238/1MW397-4HBL-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_0HSL_",
                selected: false,
                stock: {
                  stockLevelStatus: "outofstock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_0HSL_",
                value: "Heather Sleet",
                hexCode: "#AFADAE",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h5f/h55/9017320112158/1MW397-0HSL-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_6HGR_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_6HGR_",
                value: "Heather Garnet Rose",
                hexCode: "#88606C",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/hcc/hc0/9017318146078/1MW397-6HGR-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_9HDG_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_",
                value: "Heather Dark Grey",
                hexCode: "#5D5C60",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h3f/hb3/9024606208030/1MW397-9HDG-SWATCH.jpg",
                },
              },
            ],
            isGloveProduct: false,
            isGiftProduct: false,
            handOptions: [],
            colorVariants: [
              {
                name: "color",
                code: "1MW397_4HTQ_",
                selected: true,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_",
                value: "HEATHER TURQUOISE",
                hexCode: "#9FC2BF",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/ha7/h7d/9240790925342/1MW397-4HTQ-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_3HSP_",
                selected: false,
                stock: {
                  stockLevelStatus: "outofstock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_3HSP_",
                value: "HEATHER SILVER PINE",
                hexCode: "#889A96",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h97/h36/9093537693726/1MW397-3HSP-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_4HBL_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HBL_",
                value: "Heather Blue",
                hexCode: "#9CB3D3",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h5c/h4a/9017322078238/1MW397-4HBL-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_0HSL_",
                selected: false,
                stock: {
                  stockLevelStatus: "outofstock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_0HSL_",
                value: "Heather Sleet",
                hexCode: "#AFADAE",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h5f/h55/9017320112158/1MW397-0HSL-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_6HGR_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_6HGR_",
                value: "Heather Garnet Rose",
                hexCode: "#88606C",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/hcc/hc0/9017318146078/1MW397-6HGR-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_9HDG_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_",
                value: "Heather Dark Grey",
                hexCode: "#5D5C60",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h3f/hb3/9024606208030/1MW397-9HDG-SWATCH.jpg",
                },
              },
            ],
            defaultSizes: [
              {
                name: "size",
                code: "1MW397_4HTQ_30",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_30",
                value: "30",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_32",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_32",
                value: "32",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_33",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_33",
                value: "33",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_34",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_34",
                value: "34",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_35",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_35",
                value: "35",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_36",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_36",
                value: "36",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_38",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_38",
                value: "38",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_40",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_40",
                value: "40",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_4HTQ_42",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_42",
                value: "42",
                media: null,
              },
            ],
          },
          {
            productId: "1MW397_9HDG_",
            title: "Sand Harbor Short",
            description:
              "With a casual style that looks great for everyday wear the Sand Harbor short was crafted from TravisMathew’s signature micro-stripe fabric and is available in multiple color options.",
            url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_",
            brand: "TM",
            badge: "",
            price: [
              {
                currencyIso: "USD",
                formattedValue: "$69.99",
                priceType: "sale_price",
                value: 69.99,
              },
              {
                currencyIso: "USD",
                formattedValue: "$69.99",
                priceType: "price",
                value: 69.99,
              },
              {
                currencyIso: "USD",
                formattedValue: "$undefined",
                priceType: "employee_price",
                value: 0,
              },
            ],
            stock: {
              stockLevelStatus: "instock",
            },
            images: [
              {
                altText: "1MW397-4HTQ.jpg",
                isVideoMedia: false,
                url: "https://images.ctfassets.net/621t91s0mnkp/75AReLJea4BMhvrqb4GOQM/1c9e163ecb3cab6fd8965be954de1ad2/car-011624-CS-faces-bg.png?fm=webp",
              },
              {
                altText: "1MW397-4HTQ-2.jpg",
                isVideoMedia: false,
                url: "https://images.ctfassets.net/621t91s0mnkp/75AReLJea4BMhvrqb4GOQM/1c9e163ecb3cab6fd8965be954de1ad2/car-011624-CS-faces-bg.png?fm=webp",
              },
              {
                altText: "1MW397-4HTQ-4.jpg",
                isVideoMedia: false,
                url: "https://images.ctfassets.net/621t91s0mnkp/75AReLJea4BMhvrqb4GOQM/1c9e163ecb3cab6fd8965be954de1ad2/car-011624-CS-faces-bg.png?fm=webp",
              },
              {
                altText: "1MW397-4HTQ-5.jpg",
                isVideoMedia: false,
                url: "https://images.ctfassets.net/621t91s0mnkp/75AReLJea4BMhvrqb4GOQM/1c9e163ecb3cab6fd8965be954de1ad2/car-011624-CS-faces-bg.png?fm=webp",
              },
            ],
            promotionText: "",
            variants: [
              {
                name: "size",
                code: "1MW397_9HDG_30",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_30",
                value: "30",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_32",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_32",
                value: "32",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_33",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_33",
                value: "33",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_34",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_34",
                value: "34",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_35",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_35",
                value: "35",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_36",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_36",
                value: "36",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_38",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_38",
                value: "38",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_40",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_40",
                value: "40",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_42",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_42",
                value: "42",
                media: null,
              },
              {
                name: "color",
                code: "1MW397_9HDG_",
                selected: true,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_",
                value: "Heather Dark Grey",
                hexCode: "#5D5C60",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h3f/hb3/9024606208030/1MW397-9HDG-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_3HSP_",
                selected: false,
                stock: {
                  stockLevelStatus: "outofstock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_3HSP_",
                value: "HEATHER SILVER PINE",
                hexCode: "#889A96",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h97/h36/9093537693726/1MW397-3HSP-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_4HBL_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HBL_",
                value: "Heather Blue",
                hexCode: "#9CB3D3",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h5c/h4a/9017322078238/1MW397-4HBL-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_4HTQ_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_",
                value: "HEATHER TURQUOISE",
                hexCode: "#9FC2BF",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/ha7/h7d/9240790925342/1MW397-4HTQ-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_6HGR_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_6HGR_",
                value: "Heather Garnet Rose",
                hexCode: "#88606C",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/hcc/hc0/9017318146078/1MW397-6HGR-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_0HSL_",
                selected: false,
                stock: {
                  stockLevelStatus: "outofstock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_0HSL_",
                value: "Heather Sleet",
                hexCode: "#AFADAE",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h5f/h55/9017320112158/1MW397-0HSL-SWATCH.jpg",
                },
              },
            ],
            isGloveProduct: false,
            isGiftProduct: false,
            handOptions: [],
            colorVariants: [
              {
                name: "color",
                code: "1MW397_9HDG_",
                selected: true,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_",
                value: "Heather Dark Grey",
                hexCode: "#5D5C60",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h3f/hb3/9024606208030/1MW397-9HDG-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_3HSP_",
                selected: false,
                stock: {
                  stockLevelStatus: "outofstock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_3HSP_",
                value: "HEATHER SILVER PINE",
                hexCode: "#889A96",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h97/h36/9093537693726/1MW397-3HSP-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_4HBL_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HBL_",
                value: "Heather Blue",
                hexCode: "#9CB3D3",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h5c/h4a/9017322078238/1MW397-4HBL-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_4HTQ_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_4HTQ_",
                value: "HEATHER TURQUOISE",
                hexCode: "#9FC2BF",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/ha7/h7d/9240790925342/1MW397-4HTQ-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_6HGR_",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_6HGR_",
                value: "Heather Garnet Rose",
                hexCode: "#88606C",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/hcc/hc0/9017318146078/1MW397-6HGR-SWATCH.jpg",
                },
              },
              {
                name: "color",
                code: "1MW397_0HSL_",
                selected: false,
                stock: {
                  stockLevelStatus: "outofstock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_0HSL_",
                value: "Heather Sleet",
                hexCode: "#AFADAE",
                media: {
                  altText: "SAND HARBOR SHORT",
                  isVideoMedia: false,
                  url: "https://hyqa2.travismathew.com/medias/sys_master/images/images/h5f/h55/9017320112158/1MW397-0HSL-SWATCH.jpg",
                },
              },
            ],
            defaultSizes: [
              {
                name: "size",
                code: "1MW397_9HDG_30",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_30",
                value: "30",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_32",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_32",
                value: "32",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_33",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_33",
                value: "33",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_34",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_34",
                value: "34",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_35",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_35",
                value: "35",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_36",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_36",
                value: "36",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_38",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_38",
                value: "38",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_40",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_40",
                value: "40",
                media: null,
              },
              {
                name: "size",
                code: "1MW397_9HDG_42",
                selected: false,
                stock: {
                  stockLevelStatus: "instock",
                },
                url: "/tm/bottoms/shorts/sand-harbor-short/p/1MW397_9HDG_42",
                value: "42",
                media: null,
              },
            ],
          },
        ],
        isStoryBook: true,
      },
    },

    {
      half_width_banner: {
        headline: "<p>Hi</p>",
        _metadata: {
          uid: "cs9b4dc44f6864f224",
        },
        banner_detail:
          "<p>Lorem ipsum dolor sit amet consectetur et dui ante risus gravida ac. Fermentum enim elit pharetra tellus dolor pellentesque.</p>\n<ul>\n  <li>Lorem ipsum dolor sit amet consectetur</li>\n  <li>Et dui ante risus gravida ac. Fermentum enim elit pharetra tellus dolor pellentesque</li>\n</ul>\n",
        alignment: "left",
        desktop_image_url: {
          _version: 1,
          is_dir: false,
          uid: "blte2dc1a68ec2c30e1",
          ACL: {},
          content_type: "image/jpeg",
          created_at: "2023-11-08T16:02:43.028Z",
          created_by: "blt78fe312f4dcc2750",
          file_size: "241357",
          filename: "Rectangle_895.jpg",
          parent_uid: "blt9223de886ffa2906",
          tags: [],
          title: "Rectangle_895.jpg",
          updated_at: "2023-11-08T16:02:43.028Z",
          updated_by: "blt78fe312f4dcc2750",
          publish_details: {
            environment: "blt0cb0a00f31ca2427",
            locale: "en-us",
            time: "2023-11-08T16:03:49.287Z",
            user: "blt78fe312f4dcc2750",
          },
          url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blte2dc1a68ec2c30e1/654bb123dd8ee90407019ea8/Rectangle_895.jpg",
        },
        desktop_alt_tag: "",
        tablet_image_url: {
          _version: 1,
          is_dir: false,
          uid: "blt2bde99631c4bc5ee",
          ACL: {},
          content_type: "image/jpeg",
          created_at: "2023-11-08T16:02:56.295Z",
          created_by: "blt78fe312f4dcc2750",
          file_size: "336242",
          filename: "palm-trees.jpg",
          parent_uid: "blt9223de886ffa2906",
          tags: [],
          title: "palm-trees.jpg",
          updated_at: "2023-11-08T16:02:56.295Z",
          updated_by: "blt78fe312f4dcc2750",
          publish_details: {
            environment: "blt0cb0a00f31ca2427",
            locale: "en-us",
            time: "2023-11-08T16:04:03.155Z",
            user: "blt78fe312f4dcc2750",
          },
          url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt2bde99631c4bc5ee/654bb130855e3a040a760a39/palm-trees.jpg",
        },
        tablet_alt_tag: "",
        mobile_image_url: {
          _version: 2,
          is_dir: false,
          uid: "bltaa7a94d5d571738b",
          ACL: {},
          content_type: "image/jpeg",
          created_at: "2023-11-08T16:02:54.127Z",
          created_by: "blt78fe312f4dcc2750",
          description: "",
          file_size: "35581",
          filename: "dog.jpg",
          parent_uid: "blt9223de886ffa2906",
          tags: [],
          title: "mobile_half_with_banner.png",
          updated_at: "2023-11-14T12:09:31.878Z",
          updated_by: "blt5a61aa7aeee6f9ff",
          publish_details: {
            environment: "blt0cb0a00f31ca2427",
            locale: "en-us",
            time: "2024-01-04T09:31:40.122Z",
            user: "blt5a61aa7aeee6f9ff",
          },
          url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltaa7a94d5d571738b/6553637b829051fd062c8a5f/dog.jpg",
        },
        mobile_alt_tag: "",
        component_height: 64,
        button: {
          title: "Shop now",
          href: "/",
        },
        button_type: "secondary-black",
      },
    },

    {
      subscription_banner: {
        heading: "<h2>GET 20% OFF YOUR ORDER vgvg34</h2>",
        _metadata: {
          uid: "csc4cd56a8c045d667",
        },
        main_content:
          "<span>Stay updated from TravisMathew on exclusive online and in-store offers, new product alerts, store events in your area and more. tgvttbnntt88999</span>",
        email_field_label: "Capgemini",
        button: {
          title: "Join later",
          href: "/",
        },
        disclaimer:
          "<span>*For new customers only. Not valid on Member Exclusive product, luggage or sale items. Cannot be combined with additional offers.</span>",
        submission_success_message:
          '<h2>THANK YOU. YOU\'RE IN!</h2> <p class="p-sm">Keep an eye out! If you’re a new email subscriber, your promo code will be sent via email.</p>',
        submission_failure_message: "",
      },
    },
    {
      accordion: {
        title: "Questions? We Got You",
        _metadata: {
          uid: "cs30481585527faaac",
        },
        accordion: [
          {
            title:
              "<h4><span>If my event is outside of California, can I still rent a TravisMathew bus?</span></h4>",
            _metadata: {
              uid: "cs29514e8701a4400a",
            },
            description:
              "<p>You can! Our fleet of 10 vehicles travels coast to coast, executing over 300 events each year. Location is not a problem.</p>",
          },
          {
            title:
              "<h4>How does the retail experience work ? What if we want logoed apparel? What if some guests want their TravisMathew purchase same-day? Get to know more below</h4>",
            _metadata: {
              uid: "cs028913ebae864b0d",
            },
            description:
              "Lorem ipsum dolor sit amet consectetur. Enim consectetur odio egestas senectus enim. Eget nam et metus ipsum ut quis ac ut.",
          },
          {
            title:
              "<h4>What if I don't have a very large budget ? Does TravisMathew have a vehicle for me under my preferred budget ?</h4>",
            _metadata: {
              uid: "cs85cefea41db83ffa",
            },
            description:
              "<p>Absolutely !! . Travis Mathew offers a wide range of vehicles on a budget. Lorem ipsum . Check now for details .</p>",
          },
          {
            title:
              "<h4>What comes with one of vehicles ? we want more than just a gifting experience-we want a party!</h4>",
            _metadata: {
              uid: "cs7a7d52bc5e12a5e1",
            },
            description:
              "<p>Lorem Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum</p>",
          },
          {
            title:
              "<h4>Will a TravisMathew event increase brand visibility or our sales?</h4>",
            _metadata: {
              uid: "csdbcd333ba57aeefb",
            },
            description:
              "Lorem Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum",
          },
          {
            title:
              "<h4>Seems awesome, but what about billing and receiving?</h4>",
            _metadata: {
              uid: "cs757211910729800c",
            },
            description:
              "Lorem Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum",
          },
        ],
      },
    },
    {
      blog_carousel: {
        wrap: false,
        _metadata: {
          uid: "cse9d5fa01eae64b22",
        },
        blog_carousel_cards: [
          {
            link: {
              title: "Link1",
              href: "/",
            },
            _metadata: {
              uid: "cs7c54bce429aa1e35",
            },
            thumbnail_image_url: {
              _version: 2,
              is_dir: false,
              uid: "blt8568297895291efc",
              ACL: [],
              content_type: "image/webp",
              created_at: "2023-12-15T22:57:23.311Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "11316",
              filename: "cg-card-moblility.webp",
              parent_uid: "blta547ff05681c3cf1",
              tags: [],
              title: "Modern Cloud Ecosystem",
              updated_at: "2024-01-16T17:10:55.234Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-17T06:51:09.981Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt8568297895291efc/65a6b89fb56104d45b8c2037/cg-card-moblility.webp",
            },
            alt_tag: "",
            blog_category: "Blog",
            post_title:
              "Nam tincidunt ut tortor in dapibus. Donec et rutrum diam tortor in dapibus.",
            date: "2022-01-12",
          },
          {
            link: {
              title: "Link2",
              href: "/",
            },
            _metadata: {
              uid: "cscbb07321b47c27c9",
            },
            thumbnail_image_url: {
              _version: 1,
              is_dir: false,
              uid: "blt086ff40f771879e2",
              ACL: {},
              content_type: "image/svg+xml",
              created_at: "2023-12-15T22:56:42.310Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "32495",
              filename: "traditional-decoupled-_headless-cms.svg",
              parent_uid: "blta547ff05681c3cf1",
              tags: [],
              title: "Traditional Decoupled Headless CMS",
              updated_at: "2023-12-15T22:56:42.310Z",
              updated_by: "blt78fe312f4dcc2750",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-16T17:13:06.988Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt086ff40f771879e2/657cd9aaa9a0f2823ea39063/traditional-decoupled-_headless-cms.svg",
            },
            alt_tag: "",
            blog_category: "Archive",
            post_title: "Nullam fringilla massa a odio maximus tristique. ",
            date: "2022-01-07",
          },
          {
            link: {
              title: "Link3",
              href: "/",
            },
            _metadata: {
              uid: "cse50519f11cdef1d8",
            },
            thumbnail_image_url: {
              _version: 2,
              is_dir: false,
              uid: "blt9c23563c33fc04d5",
              ACL: {},
              content_type: "image/webp",
              created_at: "2023-12-15T22:56:41.567Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "19650",
              filename: "cg-card-way.webp",
              parent_uid: "blta547ff05681c3cf1",
              tags: [],
              title: "Business With Al",
              updated_at: "2024-01-16T17:14:17.503Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-16T17:14:29.242Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt9c23563c33fc04d5/65a6b969fb10607fe6a40015/cg-card-way.webp",
            },
            alt_tag: "",
            blog_category: "Blog",
            post_title: "Off the Record - Lady Gang",
            date: "2022-01-12",
          },
          {
            link: {
              title: "Link4",
              href: "/",
            },
            _metadata: {
              uid: "cs6c38ae9aea44b454",
            },
            thumbnail_image_url: {
              _version: 2,
              is_dir: false,
              uid: "blt811f24f3d7afd571",
              ACL: [],
              content_type: "image/jpeg",
              created_at: "2023-12-15T22:56:40.763Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "77198",
              filename: "cg-card-man.jpg",
              parent_uid: "blta547ff05681c3cf1",
              tags: [],
              title: "Headless CMS Solution",
              updated_at: "2024-01-16T16:11:05.774Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-16T17:09:31.293Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt811f24f3d7afd571/65a6aa99bad37d4bc79df229/cg-card-man.jpg",
            },
            alt_tag: "",
            blog_category: "Blog",
            post_title: "Off the Record - Lady Gang",
            date: "2022-01-12",
          },
        ],
      },
    },

    {
      video_and_text_banner: {
        desktop_position: "left",
        video_poster_desktop: {
          _version: 2,
          is_dir: false,
          uid: "bltbbcc9dd76e3b5f63",
          ACL: {},
          content_type: "image/png",
          created_at: "2023-11-08T16:02:50.625Z",
          created_by: "blt78fe312f4dcc2750",
          description: "",
          file_size: "1390",
          filename: "img.png",
          parent_uid: "bltb1a51f52ec6adf11",
          tags: [],
          title: "VideoTextBanner.png",
          updated_at: "2024-01-10T05:53:21.289Z",
          updated_by: "bltb9c8458b6555a02c",
          publish_details: {
            environment: "blt0cb0a00f31ca2427",
            locale: "en-us",
            time: "2024-01-11T06:42:26.429Z",
            user: "bltb9c8458b6555a02c",
          },
          url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltbbcc9dd76e3b5f63/659e30d15a14f26d98181e6b/img.png",
        },
        _metadata: {
          uid: "csfd7e1c238937611d",
        },
        video_desktop: {
          _version: 4,
          is_dir: false,
          uid: "bltaa1df17a0f480ee2",
          ACL: {},
          content_type: "video/mp4",
          created_at: "2023-11-08T16:03:04.060Z",
          created_by: "blt78fe312f4dcc2750",
          description: "",
          file_size: "123754662",
          filename: "pexels_videos_2711134_(2160p).mp4",
          parent_uid: "bltb1a51f52ec6adf11",
          tags: [],
          title: "videoBannerDesktop.mp4",
          updated_at: "2024-01-11T06:41:51.263Z",
          updated_by: "bltb9c8458b6555a02c",
          publish_details: {
            environment: "blt0cb0a00f31ca2427",
            locale: "en-us",
            time: "2024-01-11T06:42:04.707Z",
            user: "bltb9c8458b6555a02c",
          },
          url: "https://assets.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltaa1df17a0f480ee2/659f8daf43e8cb37f9a4b457/pexels_videos_2711134_(2160p).mp4",
        },
        video_poster_mobile: {
          _version: 1,
          is_dir: false,
          uid: "blt0a37799857237477",
          ACL: {},
          content_type: "image/jpeg",
          created_at: "2023-11-08T16:03:10.084Z",
          created_by: "blt78fe312f4dcc2750",
          file_size: "135547",
          filename: "PosterMobile.jpg",
          parent_uid: "bltb1a51f52ec6adf11",
          tags: [],
          title: "PosterMobile.jpg",
          updated_at: "2023-11-08T16:03:10.084Z",
          updated_by: "blt78fe312f4dcc2750",
          publish_details: {
            environment: "blt0cb0a00f31ca2427",
            locale: "en-us",
            time: "2023-11-08T16:04:13.109Z",
            user: "blt78fe312f4dcc2750",
          },
          url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt0a37799857237477/654bb13e05ff78040761dc55/PosterMobile.jpg",
        },
        video_mobile: {
          _version: 1,
          is_dir: false,
          uid: "bltec3744d934787c75",
          ACL: {},
          content_type: "video/mp4",
          created_at: "2023-11-08T16:03:09.273Z",
          created_by: "blt78fe312f4dcc2750",
          file_size: "18470168",
          filename: "videoBannerMobile.mp4",
          parent_uid: "bltb1a51f52ec6adf11",
          tags: [],
          title: "videoBannerMobile.mp4",
          updated_at: "2023-11-08T16:03:09.273Z",
          updated_by: "blt78fe312f4dcc2750",
          publish_details: {
            environment: "blt0cb0a00f31ca2427",
            locale: "en-us",
            time: "2023-11-08T16:04:12.178Z",
            user: "blt78fe312f4dcc2750",
          },
          url: "https://assets.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltec3744d934787c75/654bb13d45aab4040a60d9c2/videoBannerMobile.mp4",
        },
        video_transcript: null,
        video_closed_captions: null,
        text_input:
          "<h2>Lorem ipsum dolor sit amet consectetur dui sapien leo</h2>",
        button: {
          title: "Shop Now",
          href: "/",
        },
        button_variants: "primary-black",
      },
    },
    {
      reward_banner: {
        title: "Reward Banner",
        _metadata: {
          uid: "csdf2a4a5208a8fc9a",
        },
        reward_icon: {
          _version: 1,
          is_dir: false,
          uid: "bltbb67b00c5b5296bf",
          ACL: {},
          content_type: "image/png",
          created_at: "2023-11-08T16:02:49.452Z",
          created_by: "blt78fe312f4dcc2750",
          file_size: "942",
          filename: "TM_Rewards.png",
          parent_uid: "blt13972d023b781290",
          tags: [],
          title: "TM_Rewards.png",
          updated_at: "2023-11-08T16:02:49.452Z",
          updated_by: "blt78fe312f4dcc2750",
          publish_details: {
            environment: "blt0cb0a00f31ca2427",
            locale: "en-us",
            time: "2023-11-08T16:03:55.212Z",
            user: "blt78fe312f4dcc2750",
          },
          url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltbb67b00c5b5296bf/654bb129ccca81040a850563/TM_Rewards.png",
        },
        reward_details:
          "<h3>Earn 159 points with this purchase</h3><p></p><p>TM Rewards Members get free shipping and free return on all purchases</p>",
        reward_signin: {
          title: "Sign In",
          href: "/",
        },
        reward_signout: {
          title: "Sign Up",
          href: "/",
        },
        cta_style: "Primary Black",
      },
    },
    {
      product_image_gallery: {
        gallery: [
          {
            thumbnail_image_url: {
              _version: 2,
              is_dir: false,
              uid: "blt162ff1ef3126a431",
              ACL: {},
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:02:53.732Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "51228",
              filename: "tree.jpg",
              parent_uid: null,
              tags: [],
              title: "bannercarousel.png",
              updated_at: "2023-11-14T12:21:33.643Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-04T09:31:40.189Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt162ff1ef3126a431/6553664d9f2b992f1ebc96d9/tree.jpg",
            },
            _metadata: {
              uid: "cs3a56723eb93e96ee",
            },
            original_image_or_video: {
              _version: 1,
              is_dir: false,
              uid: "bltdb657c6b4ebee736",
              ACL: {},
              content_type: "video/mp4",
              created_at: "2023-11-08T16:02:49.981Z",
              created_by: "blt78fe312f4dcc2750",
              file_size: "318465",
              filename: "movie.mp4",
              parent_uid: "bltb1a51f52ec6adf11",
              tags: [],
              title: "movie.mp4",
              updated_at: "2023-11-08T16:02:49.981Z",
              updated_by: "blt78fe312f4dcc2750",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2023-11-08T16:03:55.213Z",
                user: "blt78fe312f4dcc2750",
              },
              url: "https://assets.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltdb657c6b4ebee736/654bb1294e655f040a300afc/movie.mp4",
            },
          },
        ],
        _metadata: {
          uid: "cs820bb009b3d91916",
        },
      },
    },
    {
      banner_carousel: {
        slide: [
          {
            image_url: {
              _version: 2,
              is_dir: false,
              uid: "blt01b3172c46a13510",
              ACL: [],
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:02:52.763Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "51228",
              filename: "tree.jpg",
              parent_uid: null,
              tags: [],
              title: "bannercarousel.png",
              updated_at: "2024-01-16T16:06:28.640Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-16T17:09:31.286Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt01b3172c46a13510/65a6a9849b1ffe30b3e0d121/tree.jpg",
            },
            _metadata: {
              uid: "cs483674b0b1d8263f",
            },
            alt_tag: "Image 1",
          },
          {
            image_url: {
              _version: 2,
              is_dir: false,
              uid: "blt01b3172c46a13510",
              ACL: [],
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:02:52.763Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "51228",
              filename: "tree.jpg",
              parent_uid: null,
              tags: [],
              title: "bannercarousel.png",
              updated_at: "2024-01-16T16:06:28.640Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-16T17:09:31.286Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt01b3172c46a13510/65a6a9849b1ffe30b3e0d121/tree.jpg",
            },
            _metadata: {
              uid: "cs4db61b529166b505",
            },
            alt_tag: "",
          },
          {
            image_url: {
              _version: 2,
              is_dir: false,
              uid: "blt01b3172c46a13510",
              ACL: [],
              content_type: "image/jpeg",
              created_at: "2023-11-08T16:02:52.763Z",
              created_by: "blt78fe312f4dcc2750",
              description: "",
              file_size: "51228",
              filename: "tree.jpg",
              parent_uid: null,
              tags: [],
              title: "bannercarousel.png",
              updated_at: "2024-01-16T16:06:28.640Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-16T17:09:31.286Z",
                user: "blt5a61aa7aeee6f9ff",
              },
              url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt01b3172c46a13510/65a6a9849b1ffe30b3e0d121/tree.jpg",
            },
            _metadata: {
              uid: "cs64671286491d0a69",
            },
            alt_tag: "Image 2",
          },
        ],
        _metadata: {
          uid: "csea94a42d823d3342",
        },
      },
    },
  ];

  return (
    <>
      {sections?.length > 0 &&
        sections.map((el, i) => {
          if (el?.section_heading) {
            return (
              <>
                <SectionHeading
                  key={"SectionHeading" + i}
                  heading={el?.section_heading.heading}
                  content={el?.section_heading.content}
                  alignment={el?.section_heading.alignment}
                />
              </>
            );
          } else if (el?.landscape_card) {
            return (
              <>
                <LandscapeCard
                  key={"LandscapeCard" + i}
                  card={el?.landscape_card?.card}
                  wraps={el?.landscape_card?.wraps}
                  columns={el?.landscape_card?.columns}
                  image_heights={el?.landscape_card?.image_heights}
                />
              </>
            );
          } else if (el?.portrait_card) {
            return (
              <>
                <PortraitCard
                  key={"PortraitCard" + i}
                  cardDetails={el?.portrait_card}
                  cards={el?.portrait_card?.cards}
                  wrap_cards={el?.portrait_card?.wrap_cards}
                  card_count_per_row={el?.portrait_card?.card_count_per_row}
                  image_heights={el?.portrait_card?.image_heights}
                  card_box_shadow={el?.portrait_card?.card_box_shadow}
                  background_color={el?.portrait_card?.background_color}
                  card_body_font_size={el?.portrait_card?.card_body_font_size}
                />
              </>
            );
          } else if (el?.video_and_text_banner) {
            return (
              <>
                {/* <VideoAndTextBanner
                  key={"VideoAndTextBanner" + i}
                  button={el?.video_and_text_banner?.button}
                  button_variants={el?.video_and_text_banner?.button_variants}
                  desktop_position={el?.video_and_text_banner?.desktop_position}
                  video_poster_desktop={
                    el?.video_and_text_banner?.video_poster_desktop
                  }
                  video_desktop={el?.video_and_text_banner?.video_desktop}
                  video_poster_mobile={
                    el?.video_and_text_banner?.video_poster_mobile
                  }
                  video_mobile={el?.video_and_text_banner?.video_mobile}
                  text_input={el?.video_and_text_banner?.text_input}
                /> */}
              </>
            );
          } else if (el?.half_width_banner) {
            const desktopImageUrl = el?.half_width_banner?.desktop_image_url
              ? el?.half_width_banner?.desktop_image_url.url
              : null;
            const tabletImageUrl = el?.half_width_banner?.tablet_image_url
              ? el?.half_width_banner?.tablet_image_url.url
              : null;
            const mobileImageUrl = el?.half_width_banner?.mobile_image_url
              ? el?.half_width_banner?.mobile_image_url.url
              : null;
            return (
              <>
                {/* <HalfWidthBannerAndText
                  key={"HalfWidthBannerAndText" + i}
                  headline={el?.half_width_banner?.headline}
                  alignment={el?.half_width_banner?.alignment}
                  desktop_image_url={desktopImageUrl}
                  tablet_image_url={tabletImageUrl}
                  mobile_image_url={mobileImageUrl}
                  component_height={el?.half_width_banner?.component_height}
                  banner_detail={el?.half_width_banner?.banner_detail}
                  button_type={el?.half_width_banner?.button_type}
                  button={el?.half_width_banner?.button}
                /> */}
              </>
            );
          } else if (el?.accordion) {
            return (
              <>
                {/* <FAQAccordion
                  key={"FAQAccordion" + i}
                  accordionTitle={el?.accordion.title}
                  accordionData={el?.accordion.accordion}
                /> */}
              </>
            );
          } else if (el?.blog_carousel) {
            return (
              <>
                {/* <BlogCarousel
                  key={"BlogCarousel" + i}
                  wrap={el?.blog_carousel?.wrap}
                  image_heights={el?.blog_carousel?.image_heights}
                  card_box_shadow={el?.blog_carousel?.card_box_shadow}
                  blog_carousel_cards={el?.blog_carousel?.blog_carousel_cards}
                /> */}
              </>
            );
          } else if (el?.full_width_banner) {
            return (
              <>
                <FullWidthBanner
                  key={"FullWidthBanner" + i}
                  variation={el?.full_width_banner?.variation}
                  position={
                    el?.full_width_banner?.position
                      ? el?.full_width_banner?.position
                      : el?.full_width_banner?.block_position
                      ? el?.full_width_banner?.block_position
                      : null
                  }
                  text_color={el?.full_width_banner?.text_color}
                  vertical_offset={el?.full_width_banner?.padding_top}
                  horizontal_offset={el?.full_width_banner?.padding_left}
                  floating_box_height={
                    el?.full_width_banner?.floating_box_height
                  }
                  transparency={el?.full_width_banner.transparency}
                  heading={el?.full_width_banner?.heading}
                  paragraph={
                    el?.full_width_banner?.inner_text
                      ? el?.full_width_banner?.inner_text
                      : el?.full_width_banner?.paragraph
                      ? el?.full_width_banner?.paragraph
                      : null
                  }
                  text_alignment={el?.full_width_banner?.text_alignment}
                  banner_tablet_image_url={
                    el?.full_width_banner?.banner_tablet_image_url
                  }
                  banner_desktop_image_url={
                    el?.full_width_banner?.banner_desktop_image_url
                  }
                  banner_smartphone_image_url={
                    el?.full_width_banner?.banner_smartphone_image_url
                  }
                  button={el?.full_width_banner?.button}
                  block_background_color={
                    el?.full_width_banner?.block_background_color
                  }
                  button_variants={el?.full_width_banner?.button_variants}
                />
              </>
            );
          } else if (el?.subscription_banner) {
            return (
              <>
                {/* <SubscriptionBanner
                  key={"SubscriptionBanner" + i}
                  heading={el?.subscription_banner?.heading}
                  main_content={el?.subscription_banner?.main_content}
                  email_field_label={el?.subscription_banner?.email_field_label}
                  button={el?.subscription_banner?.button}
                  disclaimer={el?.subscription_banner?.disclaimer}
                  submission_success_message={
                    el?.subscription_banner?.submission_success_message
                  }
                  submission_failure_message={
                    el?.subscription_banner?.submission_failure_message
                  }
                /> */}
              </>
            );
          } else if (el?.short_banner) {
            return (
              <>
                <ShortBanner
                  key={"ShortBanner" + i}
                  min_height={el?.short_banner?.min_height}
                  block_background_color={
                    el?.short_banner?.block_background_color
                  }
                  promo_icon={el?.short_banner?.promo_icon}
                  text_color={el?.short_banner?.text_color}
                  banner_title={el?.short_banner?.banner_title}
                  banner_description={el?.short_banner?.banner_description}
                  cta={el?.short_banner?.cta}
                  cta_style={el?.short_banner?.cta_style}
                  alt_tag={el?.short_banner?.alt_tag}
                />
              </>
            );
          } else if (el?.banner_carousel) {
            return (
              <>
                { <BannerCarousel
                  key={"BannerCarousel" + i}
                  slide={el?.banner_carousel?.slide}
                /> }
              </>
            );
          } else if (el?.product_carousel) {
            return (
              <>
                {/* <ProductCarousel
                  key={"ProductCarousel" + i}
                  heading={el?.product_carousel.heading}
                  description={el?.product_carousel.description}
                  cta={el?.product_carousel.cta}
                  productCards={el?.product_carousel.product_picker_sample}
                  defaultProducts={el?.product_carousel.default_products || []}
                /> */}
              </>
            );
          }
        })}
    </>
  );
};

export default LandingPageComponentLoop;
