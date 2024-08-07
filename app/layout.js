import HeaderAndFooter from "@/components/Layouts/HeaderAndFooter/HeaderAndFooter";
import { getGlobalEntry } from "@/lib/methods";
import "../styles/cg.scss";
import { setGlobalState } from "@/lib/factories";

export default async function RootLayout({ children }) {
  const getGlobalDataResponse = await getGlobalEntry({ isPreviewMode: false });
  // console.log('getGlobalDataResponse', getGlobalDataResponse)
  const { labels, footerData, headerDataResponse } = setGlobalState(
    getGlobalDataResponse
  );
  

  const headerDataResponse2 = {
    _version: 4,
    locale: "en-us",
    uid: "blt43365380dcf69f82",
    ACL: {},
    _in_progress: false,
    created_at: "2024-01-09T04:28:32.420Z",
    created_by: "bltea2bd4ef3adcf68b",
    header_nav: {
      skip_links_label: "",
      brand_logo_icon: {
        _version: 1,
        is_dir: false,
        uid: "blt5b76f9dfafda101e",
        ACL: {},
        content_type: "image/svg+xml",
        created_at: "2024-01-09T07:49:13.487Z",
        created_by: "blt61463f2531c00ac7",
        file_size: "4441",
        filename: "logo-white.svg",
        parent_uid: "blt4ef9b612b61ce5a7",
        tags: [],
        title: "logo-white.svg",
        updated_at: "2024-01-09T07:49:13.487Z",
        updated_by: "blt61463f2531c00ac7",
        publish_details: {
          environment: "blt0cb0a00f31ca2427",
          locale: "en-us",
          time: "2024-01-09T07:49:36.253Z",
          user: "blt61463f2531c00ac7",
        },
        url: "https://www.logo.wine/a/logo/Capgemini/Capgemini-Logo.wine.svg",
      },
      brand_logo_icon_mobile: null,
      cart_icon: null,
      opening_time: "Open today until 9:30pm",
      alt_tag: "Logo",
      find_your_location: "Fashion Island",
      view_all_location: "View Locations",
      free_shipping: "",
      sign_in: "Sign In",
      join_now: "Join Now",
      points: "Points: 2057 ($20.57)",
      plus_status: "plus status",
      search: "search",
    },
    nav_items: [
      {
        first_level_link: {
          title: "New & Featured",
          href: "/",
        },
        _metadata: {
          uid: "cs81b26d2df47d7e7a",
        },
        navigation: [
          {
            _version: 3,
            locale: "en-us",
            uid: "blt9d458d4766ffe70e",
            ACL: {},
            _in_progress: false,
            created_at: "2023-11-08T16:05:37.510Z",
            created_by: "blt78fe312f4dcc2750",
            navigation: {
              first_level_link: {
                title: "Featured",
                href: "/",
              },
              link_list_column: [
                {
                  featured: true,
                  _metadata: {
                    uid: "csf19e492b91740cbf",
                  },
                  column_heading_link: {
                    title: "Member Exclusive",
                    href: "/",
                  },
                  list_link: [
                    {
                      title: "Shop All Member Exclusive",
                      href: "/",
                    },
                  ],
                },
                {
                  featured: false,
                  _metadata: {
                    uid: "cs51edfe170d824f87",
                  },
                  column_heading_link: {
                    title: "New arrivals",
                    href: "/",
                  },
                  list_link: [
                    {
                      title: "Best Sellers",
                      href: "/",
                    },
                    {
                      title: "Essentials",
                      href: "/",
                    },
                  ],
                },
                {
                  featured: false,
                  _metadata: {
                    uid: "cs01b42899bd1d5a01",
                  },
                  column_heading_link: {
                    title: "Services",
                    href: "/",
                  },
                  list_link: [
                    {
                      title: "The Heater Series",
                      href: "/",
                    },
                    {
                      title: "Cloud Collection",
                      href: "/",
                    },
                    {
                      title: "The Perfect Series",
                      href: "/",
                    },
                  ],
                },
              ],
              card_cta_link: [
                {
                  featured_image: {
                    _version: 2,
                    is_dir: false,
                    uid: "blte357c17be9a13c4e",
                    ACL: {},
                    content_type: "image/webp",
                    created_at: "2023-11-08T16:03:16.661Z",
                    created_by: "blt78fe312f4dcc2750",
                    description: "",
                    file_size: "206378",
                    filename: "cg_hero-banner.webp",
                    parent_uid: "blt9e313e28cf8edebf",
                    tags: [],
                    title: "cta-1.png",
                    updated_at: "2024-01-09T15:03:55.501Z",
                    updated_by: "blt5a61aa7aeee6f9ff",
                    publish_details: {
                      environment: "blt0cb0a00f31ca2427",
                      locale: "en-us",
                      time: "2024-01-09T15:04:15.830Z",
                      user: "blt5a61aa7aeee6f9ff",
                    },
                    url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blte357c17be9a13c4e/659d605bfadb3a4b96c39985/cg_hero-banner.webp",
                  },
                  _metadata: {
                    uid: "cs10d5f7cfd6e29005",
                  },
                  alt_tag: "",
                  card_heading: "RAHMBO STYLE",
                  cta_link: {
                    title: "Shop Now",
                    href: "/",
                  },
                },
                {
                  featured_image: {
                    _version: 2,
                    is_dir: false,
                    uid: "blt32836f5de98c5e37",
                    ACL: {},
                    content_type: "image/jpeg",
                    created_at: "2023-11-08T16:03:17.321Z",
                    created_by: "blt78fe312f4dcc2750",
                    description: "",
                    file_size: "81483",
                    filename: "cg-card-analysis.jpg",
                    parent_uid: "blt9e313e28cf8edebf",
                    tags: [],
                    title: "cta-2.png",
                    updated_at: "2024-01-09T15:05:02.918Z",
                    updated_by: "blt5a61aa7aeee6f9ff",
                    publish_details: {
                      environment: "blt0cb0a00f31ca2427",
                      locale: "en-us",
                      time: "2024-01-09T15:06:46.199Z",
                      user: "blt5a61aa7aeee6f9ff",
                    },
                    url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt32836f5de98c5e37/659d609e51c757c6b252c976/cg-card-analysis.jpg",
                  },
                  _metadata: {
                    uid: "csf10fb48b3d27bab8",
                  },
                  alt_tag: "",
                  card_heading: "AS WORN ON TOUR, THE BEACHSIDE STEALTH",
                  cta_link: {
                    title: "Shop now",
                    href: "/",
                  },
                },
              ],
            },
            tags: [],
            title: "Featured NavItem",
            updated_at: "2024-01-09T15:07:09.716Z",
            updated_by: "blt5a61aa7aeee6f9ff",
            _content_type_uid: "navigation",
            publish_details: {
              environment: "blt0cb0a00f31ca2427",
              locale: "en-us",
              time: "2024-01-09T15:07:15.301Z",
              user: "blt5a61aa7aeee6f9ff",
            },
          },
        ],
      },
      // {
      //   first_level_link: {
      //     title: "Tops",
      //     href: "/",
      //   },
      //   _metadata: {
      //     uid: "cs5c32331111d83c2b",
      //   },
      //   navigation: [
      //     {
      //       _version: 2,
      //       locale: "en-us",
      //       uid: "blt7b863f5cea157e70",
      //       ACL: {},
      //       _in_progress: false,
      //       created_at: "2023-11-08T16:05:37.460Z",
      //       created_by: "blt78fe312f4dcc2750",
      //       navigation: {
      //         first_level_link: {
      //           title: "Mens",
      //           href: "/",
      //         },
      //         link_list_column: [
      //           {
      //             featured: true,
      //             _metadata: {
      //               uid: "csdcccf5b833103a28",
      //             },
      //             column_heading_link: {
      //               title: "Featured",
      //               href: "/",
      //             },
      //             list_link: [
      //               {
      //                 title: "The Cloud Collections",
      //                 href: "/",
      //               },
      //               {
      //                 title: "The Heater Series",
      //                 href: "/",
      //               },
      //             ],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "csc523b29728ced108",
      //             },
      //             column_heading_link: {
      //               title: "Tops",
      //               href: "/",
      //             },
      //             list_link: [
      //               {
      //                 title: "Polos",
      //                 href: "/",
      //               },
      //               {
      //                 title: "Tees",
      //                 href: "/",
      //               },
      //               {
      //                 title: "Hoodies & Sweatshirts",
      //                 href: "/",
      //               },
      //             ],
      //           },
      //         ],
      //         card_cta_link: [
      //           {
      //             featured_image: {
      //               _version: 2,
      //               is_dir: false,
      //               uid: "blt10fae8ed8e348658",
      //               ACL: {},
      //               content_type: "image/webp",
      //               created_at: "2023-11-08T16:03:40.309Z",
      //               created_by: "blt78fe312f4dcc2750",
      //               description: "",
      //               file_size: "15214",
      //               filename: "cg-card-car.webp",
      //               parent_uid: null,
      //               tags: [],
      //               title: "cta.png",
      //               updated_at: "2024-01-09T15:09:37.124Z",
      //               updated_by: "blt5a61aa7aeee6f9ff",
      //               publish_details: {
      //                 environment: "blt0cb0a00f31ca2427",
      //                 locale: "en-us",
      //                 time: "2024-01-09T15:10:13.935Z",
      //                 user: "blt5a61aa7aeee6f9ff",
      //               },
      //               url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt10fae8ed8e348658/659d61b15a14f25d25181aa5/cg-card-car.webp",
      //             },
      //             _metadata: {
      //               uid: "cseb9bf4bb75a9e3ad",
      //             },
      //             alt_tag: "",
      //             card_heading: "SUMMER EVENINGS ON THE COURSE",
      //             cta_link: {
      //               title: "Shop Top",
      //               href: "/",
      //             },
      //           },
      //         ],
      //       },
      //       tags: [],
      //       title: "Tops NavItem",
      //       updated_at: "2024-01-09T08:00:35.380Z",
      //       updated_by: "blt61463f2531c00ac7",
      //       _content_type_uid: "navigation",
      //       publish_details: {
      //         environment: "blt0cb0a00f31ca2427",
      //         locale: "en-us",
      //         time: "2024-01-09T15:10:27.943Z",
      //         user: "blt5a61aa7aeee6f9ff",
      //       },
      //     },
      //   ],
      // },
      // {
      //   first_level_link: {
      //     title: "Bottoms",
      //     href: "/",
      //   },
      //   _metadata: {
      //     uid: "csa6c5b8f536a646a7",
      //   },
      //   navigation: [
      //     {
      //       _version: 3,
      //       locale: "en-us",
      //       uid: "blt83b97f978cbde1db",
      //       ACL: {},
      //       _in_progress: false,
      //       created_at: "2023-11-08T16:05:37.460Z",
      //       created_by: "blt78fe312f4dcc2750",
      //       navigation: {
      //         first_level_link: {
      //           title: "Bottoms",
      //           href: "/",
      //         },
      //         link_list_column: [
      //           {
      //             featured: true,
      //             _metadata: {
      //               uid: "cs28cb6c9204a60598",
      //             },
      //             column_heading_link: {
      //               title: "Bottoms",
      //               href: "/",
      //             },
      //             list_link: [
      //               {
      //                 title: "Shorts",
      //                 href: "/",
      //               },
      //               {
      //                 title: "Pants",
      //                 href: "/",
      //               },
      //             ],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "csb131d4fc86e63f3b",
      //             },
      //             column_heading_link: {
      //               title: "Boardshorts",
      //               href: "/",
      //             },
      //             list_link: [],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "cs26f2198425d13860",
      //             },
      //             column_heading_link: {
      //               title: "Trousers",
      //               href: "/",
      //             },
      //             list_link: [],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "cs3ec437ac8fb7abd5",
      //             },
      //             column_heading_link: {
      //               title: "Shop all",
      //               href: "/",
      //             },
      //             list_link: [],
      //           },
      //         ],
      //         card_cta_link: [
      //           {
      //             featured_image: {
      //               _version: 2,
      //               is_dir: false,
      //               uid: "blt48e65b9879dfc65a",
      //               ACL: {},
      //               content_type: "image/webp",
      //               created_at: "2023-11-08T16:03:19.629Z",
      //               created_by: "blt78fe312f4dcc2750",
      //               description: "",
      //               file_size: "15214",
      //               filename: "cg-card-car.webp",
      //               parent_uid: null,
      //               tags: [],
      //               title: "cta-1.png",
      //               updated_at: "2024-01-09T15:12:12.869Z",
      //               updated_by: "blt5a61aa7aeee6f9ff",
      //               publish_details: {
      //                 environment: "blt0cb0a00f31ca2427",
      //                 locale: "en-us",
      //                 time: "2024-01-09T15:14:43.531Z",
      //                 user: "blt5a61aa7aeee6f9ff",
      //               },
      //               url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt48e65b9879dfc65a/659d624cb6d5987adbb2ef08/cg-card-car.webp",
      //             },
      //             _metadata: {
      //               uid: "cs9af55399287fe0a0",
      //             },
      //             alt_tag: "",
      //             card_heading: "THE PERFECT PANT FOR ALL OCCASION",
      //             cta_link: {
      //               title: "Shop open to close",
      //               href: "/",
      //             },
      //           },
      //           {
      //             featured_image: {
      //               _version: 2,
      //               is_dir: false,
      //               uid: "bltf2bc922f0685be37",
      //               ACL: {},
      //               content_type: "image/webp",
      //               created_at: "2023-11-08T16:03:18.476Z",
      //               created_by: "blt78fe312f4dcc2750",
      //               description: "",
      //               file_size: "11316",
      //               filename: "cg-card-moblility.webp",
      //               parent_uid: null,
      //               tags: [],
      //               title: "cta-2.png",
      //               updated_at: "2024-01-09T15:13:09.530Z",
      //               updated_by: "blt5a61aa7aeee6f9ff",
      //               publish_details: {
      //                 environment: "blt0cb0a00f31ca2427",
      //                 locale: "en-us",
      //                 time: "2024-01-09T15:14:43.561Z",
      //                 user: "blt5a61aa7aeee6f9ff",
      //               },
      //               url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltf2bc922f0685be37/659d6285dc7cdd83845845f4/cg-card-moblility.webp",
      //             },
      //             _metadata: {
      //               uid: "csa034edc4e3f55411",
      //             },
      //             alt_tag: "",
      //             card_heading: "THE GEAR PREFFERED BY DALE WHITNELL",
      //             cta_link: {
      //               title: "Shop Now",
      //               href: "/",
      //             },
      //           },
      //         ],
      //       },
      //       tags: [],
      //       title: "Bottoms NavItem",
      //       updated_at: "2024-01-09T15:14:29.473Z",
      //       updated_by: "blt5a61aa7aeee6f9ff",
      //       _content_type_uid: "navigation",
      //       publish_details: {
      //         environment: "blt0cb0a00f31ca2427",
      //         locale: "en-us",
      //         time: "2024-01-09T15:14:43.609Z",
      //         user: "blt5a61aa7aeee6f9ff",
      //       },
      //     },
      //   ],
      // },
      // {
      //   first_level_link: {
      //     title: "Women",
      //     href: "/",
      //   },
      //   _metadata: {
      //     uid: "cs0fee52bea34abf2b",
      //   },
      //   navigation: [
      //     {
      //       _version: 3,
      //       locale: "en-us",
      //       uid: "blt83b97f978cbde1db",
      //       ACL: {},
      //       _in_progress: false,
      //       created_at: "2023-11-08T16:05:37.460Z",
      //       created_by: "blt78fe312f4dcc2750",
      //       navigation: {
      //         first_level_link: {
      //           title: "Bottoms",
      //           href: "/",
      //         },
      //         link_list_column: [
      //           {
      //             featured: true,
      //             _metadata: {
      //               uid: "cs28cb6c9204a60598",
      //             },
      //             column_heading_link: {
      //               title: "Bottoms",
      //               href: "/",
      //             },
      //             list_link: [
      //               {
      //                 title: "Shorts",
      //                 href: "/",
      //               },
      //               {
      //                 title: "Pants",
      //                 href: "/",
      //               },
      //             ],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "csb131d4fc86e63f3b",
      //             },
      //             column_heading_link: {
      //               title: "Boardshorts",
      //               href: "/",
      //             },
      //             list_link: [],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "cs26f2198425d13860",
      //             },
      //             column_heading_link: {
      //               title: "Trousers",
      //               href: "/",
      //             },
      //             list_link: [],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "cs3ec437ac8fb7abd5",
      //             },
      //             column_heading_link: {
      //               title: "Shop all",
      //               href: "/",
      //             },
      //             list_link: [],
      //           },
      //         ],
      //         card_cta_link: [
      //           {
      //             featured_image: {
      //               _version: 2,
      //               is_dir: false,
      //               uid: "blt48e65b9879dfc65a",
      //               ACL: {},
      //               content_type: "image/webp",
      //               created_at: "2023-11-08T16:03:19.629Z",
      //               created_by: "blt78fe312f4dcc2750",
      //               description: "",
      //               file_size: "15214",
      //               filename: "cg-card-car.webp",
      //               parent_uid: null,
      //               tags: [],
      //               title: "cta-1.png",
      //               updated_at: "2024-01-09T15:12:12.869Z",
      //               updated_by: "blt5a61aa7aeee6f9ff",
      //               publish_details: {
      //                 environment: "blt0cb0a00f31ca2427",
      //                 locale: "en-us",
      //                 time: "2024-01-09T15:14:43.531Z",
      //                 user: "blt5a61aa7aeee6f9ff",
      //               },
      //               url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt48e65b9879dfc65a/659d624cb6d5987adbb2ef08/cg-card-car.webp",
      //             },
      //             _metadata: {
      //               uid: "cs9af55399287fe0a0",
      //             },
      //             alt_tag: "",
      //             card_heading: "THE PERFECT PANT FOR ALL OCCASION",
      //             cta_link: {
      //               title: "Shop open to close",
      //               href: "/",
      //             },
      //           },
      //           {
      //             featured_image: {
      //               _version: 2,
      //               is_dir: false,
      //               uid: "bltf2bc922f0685be37",
      //               ACL: {},
      //               content_type: "image/webp",
      //               created_at: "2023-11-08T16:03:18.476Z",
      //               created_by: "blt78fe312f4dcc2750",
      //               description: "",
      //               file_size: "11316",
      //               filename: "cg-card-moblility.webp",
      //               parent_uid: null,
      //               tags: [],
      //               title: "cta-2.png",
      //               updated_at: "2024-01-09T15:13:09.530Z",
      //               updated_by: "blt5a61aa7aeee6f9ff",
      //               publish_details: {
      //                 environment: "blt0cb0a00f31ca2427",
      //                 locale: "en-us",
      //                 time: "2024-01-09T15:14:43.561Z",
      //                 user: "blt5a61aa7aeee6f9ff",
      //               },
      //               url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltf2bc922f0685be37/659d6285dc7cdd83845845f4/cg-card-moblility.webp",
      //             },
      //             _metadata: {
      //               uid: "csa034edc4e3f55411",
      //             },
      //             alt_tag: "",
      //             card_heading: "THE GEAR PREFFERED BY DALE WHITNELL",
      //             cta_link: {
      //               title: "Shop Now",
      //               href: "/",
      //             },
      //           },
      //         ],
      //       },
      //       tags: [],
      //       title: "Bottoms NavItem",
      //       updated_at: "2024-01-09T15:14:29.473Z",
      //       updated_by: "blt5a61aa7aeee6f9ff",
      //       _content_type_uid: "navigation",
      //       publish_details: {
      //         environment: "blt0cb0a00f31ca2427",
      //         locale: "en-us",
      //         time: "2024-01-09T15:14:43.609Z",
      //         user: "blt5a61aa7aeee6f9ff",
      //       },
      //     },
      //   ],
      // },
      // {
      //   first_level_link: {
      //     title: "Footwear",
      //     href: "/",
      //   },
      //   _metadata: {
      //     uid: "csaf4cf5019c0f3e05",
      //   },
      //   navigation: [
      //     {
      //       _version: 2,
      //       locale: "en-us",
      //       uid: "blt676bac3f9c9cf078",
      //       ACL: {},
      //       _in_progress: false,
      //       created_at: "2023-11-08T16:05:38.381Z",
      //       created_by: "blt78fe312f4dcc2750",
      //       navigation: {
      //         first_level_link: {
      //           title: "Footwear",
      //           href: "/",
      //         },
      //         link_list_column: [
      //           {
      //             featured: true,
      //             _metadata: {
      //               uid: "cs138bf3eda93318f9",
      //             },
      //             column_heading_link: {
      //               title: "Shop all",
      //               href: "/",
      //             },
      //             list_link: [
      //               {
      //                 title: "All Shoes",
      //                 href: "/",
      //               },
      //             ],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "csd1e1047c15cb624c",
      //             },
      //             column_heading_link: {
      //               title: "Casual shoes",
      //               href: "/",
      //             },
      //             list_link: [
      //               {
      //                 title: "Lace Up",
      //                 href: "/",
      //               },
      //               {
      //                 title: "Slip On",
      //                 href: "/",
      //               },
      //               {
      //                 title: "Sandals",
      //                 href: "/",
      //               },
      //             ],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "cs8177a8f953cdc2b6",
      //             },
      //             column_heading_link: {
      //               title: "Golf shoes",
      //               href: "/",
      //             },
      //             list_link: [
      //               {
      //                 title: "Spiked",
      //                 href: "/",
      //               },
      //               {
      //                 title: "Spikeless",
      //                 href: "/",
      //               },
      //             ],
      //           },
      //         ],
      //         card_cta_link: [
      //           {
      //             featured_image: {
      //               _version: 2,
      //               is_dir: false,
      //               uid: "blt4fc84da653ac20f8",
      //               ACL: {},
      //               content_type: "image/webp",
      //               created_at: "2023-11-08T16:03:21.755Z",
      //               created_by: "blt78fe312f4dcc2750",
      //               description: "",
      //               file_size: "15422",
      //               filename: "cg-card-cake.webp",
      //               parent_uid: null,
      //               tags: [],
      //               title: "cta-1.png",
      //               updated_at: "2024-01-09T15:27:58.904Z",
      //               updated_by: "blt5a61aa7aeee6f9ff",
      //               publish_details: {
      //                 environment: "blt0cb0a00f31ca2427",
      //                 locale: "en-us",
      //                 time: "2024-01-09T15:29:00.743Z",
      //                 user: "blt5a61aa7aeee6f9ff",
      //               },
      //               url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt4fc84da653ac20f8/659d65fe18123edece26d082/cg-card-cake.webp",
      //             },
      //             _metadata: {
      //               uid: "csc33e7c957e40e8b4",
      //             },
      //             alt_tag: "",
      //             card_heading: "WORN BY RAHM",
      //             cta_link: {
      //               title: "Shop the Ringer >",
      //               href: "/",
      //             },
      //           },
      //           {
      //             featured_image: {
      //               _version: 2,
      //               is_dir: false,
      //               uid: "blt67329971660d3c5f",
      //               ACL: {},
      //               content_type: "image/webp",
      //               created_at: "2023-11-08T16:03:20.437Z",
      //               created_by: "blt78fe312f4dcc2750",
      //               description: "",
      //               file_size: "8166",
      //               filename: "cg-card-edge.webp",
      //               parent_uid: null,
      //               tags: [],
      //               title: "cta-2.png",
      //               updated_at: "2024-01-09T15:28:38.003Z",
      //               updated_by: "blt5a61aa7aeee6f9ff",
      //               publish_details: {
      //                 environment: "blt0cb0a00f31ca2427",
      //                 locale: "en-us",
      //                 time: "2024-01-09T15:29:00.763Z",
      //                 user: "blt5a61aa7aeee6f9ff",
      //               },
      //               url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt67329971660d3c5f/659d662618123e6a4f26d084/cg-card-edge.webp",
      //             },
      //             _metadata: {
      //               uid: "cs6c8c1bd802ce5a77",
      //             },
      //             alt_tag: "",
      //             card_heading: "THE NEW MONEYMAKER",
      //             cta_link: {
      //               title: "Shop now>",
      //               href: "/",
      //             },
      //           },
      //         ],
      //       },
      //       tags: [],
      //       title: "Footwear NavItem",
      //       updated_at: "2024-01-09T08:03:50.821Z",
      //       updated_by: "blt61463f2531c00ac7",
      //       _content_type_uid: "navigation",
      //       publish_details: {
      //         environment: "blt0cb0a00f31ca2427",
      //         locale: "en-us",
      //         time: "2024-01-09T15:29:00.828Z",
      //         user: "blt5a61aa7aeee6f9ff",
      //       },
      //     },
      //   ],
      // },
      // {
      //   first_level_link: {
      //     title: "Collections",
      //     href: "/",
      //   },
      //   _metadata: {
      //     uid: "cs8eb710e4ee43052b",
      //   },
      //   navigation: [
      //     {
      //       _version: 2,
      //       locale: "en-us",
      //       uid: "blt3e8a43e570c0eba1",
      //       ACL: {},
      //       _in_progress: false,
      //       created_at: "2023-11-08T16:05:37.466Z",
      //       created_by: "blt78fe312f4dcc2750",
      //       navigation: {
      //         first_level_link: {
      //           title: "Collections",
      //           href: "/",
      //         },
      //         link_list_column: [
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "cs662090f2d641a80b",
      //             },
      //             column_heading_link: {
      //               title: "The perfect series",
      //               href: "/",
      //             },
      //             list_link: [
      //               {
      //                 title: "Weekend Getaway",
      //                 href: "/",
      //               },
      //             ],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "csd3f7b0d7141a8228",
      //             },
      //             column_heading_link: {
      //               title: "Jon Rahm's picks",
      //               href: "/",
      //             },
      //             list_link: [
      //               {
      //                 title: "Active Lifestyle",
      //                 href: "/",
      //               },
      //             ],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "cs438f6c3f915513bb",
      //             },
      //             column_heading_link: {
      //               title: "Chris Pratt's pick",
      //               href: "/",
      //             },
      //             list_link: [
      //               {
      //                 title: "Red, White & Blue",
      //                 href: "/",
      //               },
      //             ],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "cse9b0c66dd8d19d2a",
      //             },
      //             column_heading_link: {
      //               title: "Outerwear Collections",
      //               href: "/",
      //             },
      //             list_link: [
      //               {
      //                 title: "Outerwear",
      //                 href: "/",
      //               },
      //             ],
      //           },
      //         ],
      //         card_cta_link: [
      //           {
      //             featured_image: {
      //               _version: 2,
      //               is_dir: false,
      //               uid: "blte4c754387461c189",
      //               ACL: {},
      //               content_type: "image/webp",
      //               created_at: "2023-11-08T16:03:23.666Z",
      //               created_by: "blt78fe312f4dcc2750",
      //               description: "",
      //               file_size: "19650",
      //               filename: "cg-card-way.webp",
      //               parent_uid: null,
      //               tags: [],
      //               title: "cta-1.png",
      //               updated_at: "2024-01-09T15:25:48.930Z",
      //               updated_by: "blt5a61aa7aeee6f9ff",
      //               publish_details: {
      //                 environment: "blt0cb0a00f31ca2427",
      //                 locale: "en-us",
      //                 time: "2024-01-09T15:26:26.465Z",
      //                 user: "blt5a61aa7aeee6f9ff",
      //               },
      //               url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blte4c754387461c189/659d657c18123e369e26d080/cg-card-way.webp",
      //             },
      //             _metadata: {
      //               uid: "cs2ca954e8f753b04d",
      //             },
      //             alt_tag: "",
      //             card_heading: "THE PERFECT POLO FOR ALL OCCASION",
      //             cta_link: {
      //               title: "Shop now",
      //               href: "/",
      //             },
      //           },
      //         ],
      //       },
      //       tags: [],
      //       title: "Collections NavItem",
      //       updated_at: "2024-01-09T08:05:04.428Z",
      //       updated_by: "blt61463f2531c00ac7",
      //       _content_type_uid: "navigation",
      //       publish_details: {
      //         environment: "blt0cb0a00f31ca2427",
      //         locale: "en-us",
      //         time: "2024-01-09T15:26:26.492Z",
      //         user: "blt5a61aa7aeee6f9ff",
      //       },
      //     },
      //   ],
      // },
      // {
      //   first_level_link: {
      //     title: "Hats",
      //     href: "/",
      //   },
      //   _metadata: {
      //     uid: "cs69c543f1abcf091e",
      //   },
      //   navigation: [
      //     {
      //       _version: 3,
      //       locale: "en-us",
      //       uid: "bltae441370d20abced",
      //       ACL: {},
      //       _in_progress: false,
      //       created_at: "2023-11-08T16:05:38.373Z",
      //       created_by: "blt78fe312f4dcc2750",
      //       navigation: {
      //         first_level_link: {
      //           title: "News",
      //           href: "/",
      //         },
      //         link_list_column: [
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "cs1d262be414f6e58a",
      //             },
      //             column_heading_link: {
      //               title: "SNAP BACK HATS",
      //               href: "/",
      //             },
      //             list_link: [],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "csf7cf74f019e0980a",
      //             },
      //             column_heading_link: {
      //               title: "FITTED HATS",
      //               href: "/",
      //             },
      //             list_link: [],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "csbac060ceb60b4239",
      //             },
      //             column_heading_link: {
      //               title: "BEANIES",
      //               href: "/",
      //             },
      //             list_link: [],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "csf36c65bd0c33b8af",
      //             },
      //             column_heading_link: {
      //               title: "YOUTH HATS",
      //               href: "/",
      //             },
      //             list_link: [],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "cs29b0ed302323ab57",
      //             },
      //             column_heading_link: {
      //               title: "SHOP ALL",
      //               href: "/",
      //             },
      //             list_link: [],
      //           },
      //         ],
      //         card_cta_link: [
      //           {
      //             featured_image: {
      //               _version: 2,
      //               is_dir: false,
      //               uid: "bltdab6313e67be07a3",
      //               ACL: {},
      //               content_type: "image/webp",
      //               created_at: "2023-11-08T16:03:25.715Z",
      //               created_by: "blt78fe312f4dcc2750",
      //               description: "",
      //               file_size: "23478",
      //               filename: "cg-card-cloud.webp",
      //               parent_uid: null,
      //               tags: [],
      //               title: "cta-1.png",
      //               updated_at: "2024-01-09T15:20:57.694Z",
      //               updated_by: "blt5a61aa7aeee6f9ff",
      //               publish_details: {
      //                 environment: "blt0cb0a00f31ca2427",
      //                 locale: "en-us",
      //                 time: "2024-01-09T15:21:08.363Z",
      //                 user: "blt5a61aa7aeee6f9ff",
      //               },
      //               url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltdab6313e67be07a3/659d64591f2d0f203aacfb3e/cg-card-cloud.webp",
      //             },
      //             _metadata: {
      //               uid: "csd83202cc4cd8a0ad",
      //             },
      //             alt_tag: "",
      //             card_heading: "THE ICONIC B-BAHAMAS",
      //             cta_link: {
      //               title: "Shop now>",
      //               href: "/",
      //             },
      //           },
      //           {
      //             featured_image: {
      //               _version: 2,
      //               is_dir: false,
      //               uid: "blt8fdb23d1f5292769",
      //               ACL: {},
      //               content_type: "image/webp",
      //               created_at: "2023-11-08T16:03:23.449Z",
      //               created_by: "blt78fe312f4dcc2750",
      //               description: "",
      //               file_size: "21684",
      //               filename: "cg-card-tecgnology.webp",
      //               parent_uid: null,
      //               tags: [],
      //               title: "cta-2.png",
      //               updated_at: "2024-01-09T15:23:31.273Z",
      //               updated_by: "blt5a61aa7aeee6f9ff",
      //               publish_details: {
      //                 environment: "blt0cb0a00f31ca2427",
      //                 locale: "en-us",
      //                 time: "2024-01-09T15:24:00.626Z",
      //                 user: "blt5a61aa7aeee6f9ff",
      //               },
      //               url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt8fdb23d1f5292769/659d64f3e4d0aa0c612db7e2/cg-card-tecgnology.webp",
      //             },
      //             _metadata: {
      //               uid: "csfeabccc24024e247",
      //             },
      //             alt_tag: "",
      //             card_heading: "ALWAYS ON VACATION?",
      //             cta_link: {
      //               title: "Shop new hats",
      //               href: "/",
      //             },
      //           },
      //         ],
      //       },
      //       tags: [],
      //       title: "Hats NavItem",
      //       updated_at: "2024-01-09T15:22:44.317Z",
      //       updated_by: "blt5a61aa7aeee6f9ff",
      //       _content_type_uid: "navigation",
      //       publish_details: {
      //         environment: "blt0cb0a00f31ca2427",
      //         locale: "en-us",
      //         time: "2024-01-09T15:25:15.100Z",
      //         user: "blt5a61aa7aeee6f9ff",
      //       },
      //     },
      //   ],
      // },
      // {
      //   first_level_link: {
      //     title: "Accessories",
      //     href: "/",
      //   },
      //   _metadata: {
      //     uid: "cs84d91226e6b7604b",
      //   },
      //   navigation: [
      //     {
      //       _version: 3,
      //       locale: "en-us",
      //       uid: "bltc9ec219b538e78f0",
      //       ACL: {},
      //       _in_progress: false,
      //       created_at: "2023-11-08T16:05:37.382Z",
      //       created_by: "blt78fe312f4dcc2750",
      //       navigation: {
      //         first_level_link: {
      //           title: "Accessories",
      //           href: "/",
      //         },
      //         link_list_column: [
      //           {
      //             featured: true,
      //             _metadata: {
      //               uid: "cs679c898690ccdf8f",
      //             },
      //             column_heading_link: {
      //               title: "Golf Accessories",
      //               href: "/",
      //             },
      //             list_link: [
      //               {
      //                 title: "Golf Gloves",
      //                 href: "/",
      //               },
      //               {
      //                 title: "Golf Bags",
      //                 href: "/",
      //               },
      //               {
      //                 title: "Golf Headcovers",
      //                 href: "/",
      //               },
      //               {
      //                 title: "Golf Towels",
      //                 href: "/",
      //               },
      //             ],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "csb8c61247ce2cbae7",
      //             },
      //             column_heading_link: {
      //               title: "Hats",
      //               href: "/",
      //             },
      //             list_link: [
      //               {
      //                 title: "Beanies",
      //                 href: "/",
      //               },
      //               {
      //                 title: "Fitted Hats",
      //                 href: "/",
      //               },
      //               {
      //                 title: "Snapback Hats",
      //                 href: "/",
      //               },
      //             ],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "cs633777ea1ddf6867",
      //             },
      //             column_heading_link: {
      //               title: "Golf towels",
      //               href: "/",
      //             },
      //             list_link: [
      //               {
      //                 title: "Microfiber Towels",
      //                 href: "/",
      //               },
      //               {
      //                 title: "Cotton Towels",
      //                 href: "/",
      //               },
      //             ],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "csdeaeac6f56b2050d",
      //             },
      //             column_heading_link: {
      //               title: "Other Accessories",
      //               href: "/",
      //             },
      //             list_link: [
      //               {
      //                 title: "Belts",
      //                 href: "/",
      //               },
      //               {
      //                 title: "Socks",
      //                 href: "/",
      //               },
      //             ],
      //           },
      //           {
      //             featured: false,
      //             _metadata: {
      //               uid: "cs4e7c8dbfdf513e14",
      //             },
      //             column_heading_link: {
      //               title: "Essentials",
      //               href: "/",
      //             },
      //             list_link: [
      //               {
      //                 title: "New Arrival",
      //                 href: "/",
      //               },
      //             ],
      //           },
      //         ],
      //         card_cta_link: [
      //           {
      //             featured_image: {
      //               _version: 2,
      //               is_dir: false,
      //               uid: "blt0aa370d72dd95082",
      //               ACL: {},
      //               content_type: "image/jpeg",
      //               created_at: "2023-11-08T16:03:28.135Z",
      //               created_by: "blt78fe312f4dcc2750",
      //               description: "",
      //               file_size: "77198",
      //               filename: "cg-card-man.jpg",
      //               parent_uid: "blt4286898d5239dc72",
      //               tags: [],
      //               title: "Rectangle_132.png",
      //               updated_at: "2024-01-09T15:17:04.413Z",
      //               updated_by: "blt5a61aa7aeee6f9ff",
      //               publish_details: {
      //                 environment: "blt0cb0a00f31ca2427",
      //                 locale: "en-us",
      //                 time: "2024-01-09T15:19:56.002Z",
      //                 user: "blt5a61aa7aeee6f9ff",
      //               },
      //               url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt0aa370d72dd95082/659d637069ba2870f48ee72d/cg-card-man.jpg",
      //             },
      //             _metadata: {
      //               uid: "csc2d081c3a3ecfd58",
      //             },
      //             alt_tag: "",
      //             card_heading: "40% off on all cuater gloves ",
      //             cta_link: {
      //               title: "Shop now",
      //               href: "/",
      //             },
      //           },
      //         ],
      //       },
      //       tags: [],
      //       title: "Accesories NavItem",
      //       updated_at: "2024-01-09T15:18:45.541Z",
      //       updated_by: "blt5a61aa7aeee6f9ff",
      //       _content_type_uid: "navigation",
      //       publish_details: {
      //         environment: "blt0cb0a00f31ca2427",
      //         locale: "en-us",
      //         time: "2024-01-09T15:20:05.504Z",
      //         user: "blt5a61aa7aeee6f9ff",
      //       },
      //     },
      //   ],
      // },
    ],
    promo_bar_bottom: {
      link: {
        title: "20% Off on Men's Joggers & Lounge ",
        href: "/",
      },
      promo_code: "",
    },
    promo_bar_top: [
      {
        promo_message: "Eligible for 20% Off Your First Order! Use Code: ",
        _metadata: {
          uid: "cs69845e212c751b85",
        },
        promo_code: "COD20",
        cta_link: {
          title: "Shop Now",
          href: "/",
        },
      },
      {
        promo_message: "40 % Off On Women Footwear !! ",
        _metadata: {
          uid: "csb007cb616e59a1a7",
        },
        promo_code: "",
        cta_link: {
          title: "Avail Now",
          href: "/",
        },
      },
    ],
    tags: [],
    title: "Header",
    updated_at: "2024-01-09T07:49:20.798Z",
    updated_by: "blt61463f2531c00ac7",
    _content_type_uid: "header",
    publish_details: {
      environment: "blt0cb0a00f31ca2427",
      locale: "en-us",
      time: "2024-01-09T15:07:56.761Z",
      user: "blt5a61aa7aeee6f9ff",
    },
  };

  const footerData2 = {
    start_the_footer_here_shuba: "Footer",
    navigation_group: [
      {
        column_title: "Shop",
        _metadata: {
          uid: "cs74ab01e3cad8489c",
        },
        column_heading_link: {
          title: "Shop",
          href: "/",
        },
        navigation_node: [
          {
            title: "New & Featured",
            href: "/",
          },
          {
            title: "Men",
            href: "/",
          },
          {
            title: "Women",
            href: "/",
          },
          {
            title: "Youth",
            href: "/",
          },
          {
            title: "Shoes",
            href: "/",
          },
          {
            title: "Accessories",
            href: "/",
          },
          {
            title: "Sale",
            href: "/",
          },
        ],
      },
      {
        column_title: "Customer Support",
        _metadata: {
          uid: "cs704de0be727f9c20",
        },
        column_heading_link: {
          title: "Customer Support",
          href: "/",
        },
        navigation_node: [
          {
            title: "Help Center",
            href: "/",
          },
          {
            title: "Shipping Information",
            href: "/",
          },
          {
            title: "Returns",
            href: "/",
          },
          {
            title: "Gift Cards",
            href: "/",
          },
          {
            title: "FAQ",
            href: "/",
          },
          {
            title: "Store Locator",
            href: "/",
          },
        ],
      },
      {
        column_title: "About Capgemini",
        _metadata: {
          uid: "cs9d17a10cd162ac3b",
        },
        column_heading_link: {
          title: "About Capgemini",
          href: "/",
        },
        navigation_node: [
          {
            title: "About",
            href: "/",
          },
          {
            title: "Stories",
            href: "/",
          },
          {
            title: "Life On Tour",
            href: "/",
          },
          {
            title: "Fabric & Tech",
            href: "/",
          },
        ],
      },
      {
        column_title: "Discover",
        _metadata: {
          uid: "csa47881e022b622a9",
        },
        column_heading_link: {
          title: "Discover",
          href: "/",
        },
        navigation_node: [
          {
            title: "Ambassador",
            href: "/",
          },
          {
            title: "Store Locator",
            href: "/",
          },
          {
            title: "Corporate Sales",
            href: "/",
          },
          {
            title: "Become an Affiliate",
            href: "/",
          },
          {
            title: "Sustainability",
            href: "/",
          },
        ],
      },
    ],
    bottom_row_links: [
      {
        title: "Manage Cookie Preferences",
        href: "/",
      },
      {
        title: "Your Privacy Choices",
        href: "/",
      },
      {
        title: "Privacy, Ads & Cookie Policy",
        href: "/",
      },
      {
        title: "Terms & Conditions",
        href: "/",
      },
    ],
    locale_picker_regions: [
      {
        region_name: "United Kingdom",
        _metadata: {
          uid: "cscd259a3b9d08fe13",
        },
        language_name: "English",
        flag_variable_pairing: "UK",
      },
      {
        region_name: "United States",
        _metadata: {
          uid: "csce5a3680377dc186",
        },
        language_name: "English US",
        flag_variable_pairing: "US",
      },
    ],
    contact_info:
      '<ul>\n  <li><a class="p-xs" href="tel:+33 1 47 54 50 00" target="_self">+33 1 47 54 50 25</a>\n    <p class="p-xs">+33 1 47 54 50 25</p>\n  </li>\n  <li><a class="p-xs" href="/" target="_self">Contact us</a></li>\n  <li><a class="p-xs" href="/" target="_blank">Capgemini Service, Place de l’Étoile<br /> 11 rue de Tilsitt, 75017 Paris, France</a></li>\n</ul>',
    subfooter_copyright: "Copyright © ${year} Capgemini",
    contact_info_heading: "Contact Us",
    alt_tag: "",
    brand_logo_icon: {
      url:"https://www.logo.wine/a/logo/Capgemini/Capgemini-Logo.wine.svg"
    },
    brand_logo_icon_mobile: null,
    social_media_links: [],
  };

  const labels2 = {
    footer: {},
    formValidation: {
      _version: 1,
      locale: "en-us",
      uid: "bltd95423f5c8e0bae5",
      ACL: {},
      _in_progress: false,
      created_at: "2023-11-08T16:05:48.503Z",
      created_by: "blt78fe312f4dcc2750",
      form_validation_failure_message: "",
      input_validation_messages: [
        {
          validation_type: "required",
          validation_message: "This is a required field.",
          _metadata: {
            uid: "csba0da27238a65149",
          },
        },
        {
          validation_type: "invalidEmail",
          validation_message: "Please enter a valid email address.",
          _metadata: {
            uid: "csfaee89f35a21058b",
          },
        },
      ],
      tags: [],
      title: "Form Validation Messages",
      updated_at: "2023-11-08T16:05:48.503Z",
      updated_by: "blt78fe312f4dcc2750",
      _content_type_uid: "form_validation_messages",
      publish_details: {
        environment: "blt0cb0a00f31ca2427",
        locale: "en-us",
        time: "2023-11-08T16:06:25.229Z",
        user: "blt78fe312f4dcc2750",
      },
    },
    header: {
      _version: 4,
      locale: "en-us",
      uid: "blt43365380dcf69f82",
      ACL: {},
      _in_progress: false,
      created_at: "2024-01-09T04:28:32.420Z",
      created_by: "bltea2bd4ef3adcf68b",
      header_nav: {
        skip_links_label: "",
        brand_logo_icon: {
          _version: 1,
          is_dir: false,
          uid: "blt5b76f9dfafda101e",
          ACL: {},
          content_type: "image/svg+xml",
          created_at: "2024-01-09T07:49:13.487Z",
          created_by: "blt61463f2531c00ac7",
          file_size: "4441",
          filename: "logo-white.svg",
          parent_uid: "blt4ef9b612b61ce5a7",
          tags: [],
          title: "logo-white.svg",
          updated_at: "2024-01-09T07:49:13.487Z",
          updated_by: "blt61463f2531c00ac7",
          publish_details: {
            environment: "blt0cb0a00f31ca2427",
            locale: "en-us",
            time: "2024-01-09T07:49:36.253Z",
            user: "blt61463f2531c00ac7",
          },
          url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt5b76f9dfafda101e/659cfa79b6d598195cb2ecc3/logo-white.svg",
        },
        brand_logo_icon_mobile: null,
        cart_icon: null,
        opening_time: "Open today until 9:30pm",
        alt_tag: "Logo",
        find_your_location: "Fashion Island",
        view_all_location: "View Locations",
        free_shipping: "",
        sign_in: "Sign In",
        join_now: "Join Now",
        points: "Points: 2057 ($20.57)",
        plus_status: "plus status",
        search: "search",
      },
      nav_items: [
        {
          first_level_link: {
            title: "New & Featured",
            href: "/",
          },
          _metadata: {
            uid: "cs81b26d2df47d7e7a",
          },
          navigation: [
            {
              _version: 3,
              locale: "en-us",
              uid: "blt9d458d4766ffe70e",
              ACL: {},
              _in_progress: false,
              created_at: "2023-11-08T16:05:37.510Z",
              created_by: "blt78fe312f4dcc2750",
              navigation: {
                first_level_link: {
                  title: "Featured",
                  href: "/",
                },
                link_list_column: [
                  {
                    featured: true,
                    _metadata: {
                      uid: "csf19e492b91740cbf",
                    },
                    column_heading_link: {
                      title: "Member Exclusive",
                      href: "/",
                    },
                    list_link: [
                      {
                        title: "Shop All Member Exclusive",
                        href: "/",
                      },
                    ],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "cs51edfe170d824f87",
                    },
                    column_heading_link: {
                      title: "New arrivals",
                      href: "/",
                    },
                    list_link: [
                      {
                        title: "Best Sellers",
                        href: "/",
                      },
                      {
                        title: "Essentials",
                        href: "/",
                      },
                    ],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "cs01b42899bd1d5a01",
                    },
                    column_heading_link: {
                      title: "Golf",
                      href: "/",
                    },
                    list_link: [
                      {
                        title: "The Heater Series",
                        href: "/",
                      },
                      {
                        title: "Cloud Collection",
                        href: "/",
                      },
                      {
                        title: "The Perfect Series",
                        href: "/",
                      },
                    ],
                  },
                ],
                card_cta_link: [
                  {
                    featured_image: {
                      _version: 2,
                      is_dir: false,
                      uid: "blte357c17be9a13c4e",
                      ACL: {},
                      content_type: "image/webp",
                      created_at: "2023-11-08T16:03:16.661Z",
                      created_by: "blt78fe312f4dcc2750",
                      description: "",
                      file_size: "206378",
                      filename: "cg_hero-banner.webp",
                      parent_uid: "blt9e313e28cf8edebf",
                      tags: [],
                      title: "cta-1.png",
                      updated_at: "2024-01-09T15:03:55.501Z",
                      updated_by: "blt5a61aa7aeee6f9ff",
                      publish_details: {
                        environment: "blt0cb0a00f31ca2427",
                        locale: "en-us",
                        time: "2024-01-09T15:04:15.830Z",
                        user: "blt5a61aa7aeee6f9ff",
                      },
                      url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blte357c17be9a13c4e/659d605bfadb3a4b96c39985/cg_hero-banner.webp",
                    },
                    _metadata: {
                      uid: "cs10d5f7cfd6e29005",
                    },
                    alt_tag: "",
                    card_heading: "RAHMBO STYLE",
                    cta_link: {
                      title: "Shop Now",
                      href: "/",
                    },
                  },
                  {
                    featured_image: {
                      _version: 2,
                      is_dir: false,
                      uid: "blt32836f5de98c5e37",
                      ACL: {},
                      content_type: "image/jpeg",
                      created_at: "2023-11-08T16:03:17.321Z",
                      created_by: "blt78fe312f4dcc2750",
                      description: "",
                      file_size: "81483",
                      filename: "cg-card-analysis.jpg",
                      parent_uid: "blt9e313e28cf8edebf",
                      tags: [],
                      title: "cta-2.png",
                      updated_at: "2024-01-09T15:05:02.918Z",
                      updated_by: "blt5a61aa7aeee6f9ff",
                      publish_details: {
                        environment: "blt0cb0a00f31ca2427",
                        locale: "en-us",
                        time: "2024-01-09T15:06:46.199Z",
                        user: "blt5a61aa7aeee6f9ff",
                      },
                      url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt32836f5de98c5e37/659d609e51c757c6b252c976/cg-card-analysis.jpg",
                    },
                    _metadata: {
                      uid: "csf10fb48b3d27bab8",
                    },
                    alt_tag: "",
                    card_heading: "AS WORN ON TOUR, THE BEACHSIDE STEALTH",
                    cta_link: {
                      title: "Shop now",
                      href: "/",
                    },
                  },
                ],
              },
              tags: [],
              title: "Featured NavItem",
              updated_at: "2024-01-09T15:07:09.716Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              _content_type_uid: "navigation",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-09T15:07:15.301Z",
                user: "blt5a61aa7aeee6f9ff",
              },
            },
          ],
        },
        {
          first_level_link: {
            title: "Tops",
            href: "/",
          },
          _metadata: {
            uid: "cs5c32331111d83c2b",
          },
          navigation: [
            {
              _version: 2,
              locale: "en-us",
              uid: "blt7b863f5cea157e70",
              ACL: {},
              _in_progress: false,
              created_at: "2023-11-08T16:05:37.460Z",
              created_by: "blt78fe312f4dcc2750",
              navigation: {
                first_level_link: {
                  title: "Mens",
                  href: "/",
                },
                link_list_column: [
                  {
                    featured: true,
                    _metadata: {
                      uid: "csdcccf5b833103a28",
                    },
                    column_heading_link: {
                      title: "Featured",
                      href: "/",
                    },
                    list_link: [
                      {
                        title: "The Cloud Collections",
                        href: "/",
                      },
                      {
                        title: "The Heater Series",
                        href: "/",
                      },
                    ],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "csc523b29728ced108",
                    },
                    column_heading_link: {
                      title: "Tops",
                      href: "/",
                    },
                    list_link: [
                      {
                        title: "Polos",
                        href: "/",
                      },
                      {
                        title: "Tees",
                        href: "/",
                      },
                      {
                        title: "Hoodies & Sweatshirts",
                        href: "/",
                      },
                    ],
                  },
                ],
                card_cta_link: [
                  {
                    featured_image: {
                      _version: 2,
                      is_dir: false,
                      uid: "blt10fae8ed8e348658",
                      ACL: {},
                      content_type: "image/webp",
                      created_at: "2023-11-08T16:03:40.309Z",
                      created_by: "blt78fe312f4dcc2750",
                      description: "",
                      file_size: "15214",
                      filename: "cg-card-car.webp",
                      parent_uid: null,
                      tags: [],
                      title: "cta.png",
                      updated_at: "2024-01-09T15:09:37.124Z",
                      updated_by: "blt5a61aa7aeee6f9ff",
                      publish_details: {
                        environment: "blt0cb0a00f31ca2427",
                        locale: "en-us",
                        time: "2024-01-09T15:10:13.935Z",
                        user: "blt5a61aa7aeee6f9ff",
                      },
                      url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt10fae8ed8e348658/659d61b15a14f25d25181aa5/cg-card-car.webp",
                    },
                    _metadata: {
                      uid: "cseb9bf4bb75a9e3ad",
                    },
                    alt_tag: "",
                    card_heading: "SUMMER EVENINGS ON THE COURSE",
                    cta_link: {
                      title: "Shop Top",
                      href: "/",
                    },
                  },
                ],
              },
              tags: [],
              title: "Tops NavItem",
              updated_at: "2024-01-09T08:00:35.380Z",
              updated_by: "blt61463f2531c00ac7",
              _content_type_uid: "navigation",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-09T15:10:27.943Z",
                user: "blt5a61aa7aeee6f9ff",
              },
            },
          ],
        },
        {
          first_level_link: {
            title: "Bottoms",
            href: "/",
          },
          _metadata: {
            uid: "csa6c5b8f536a646a7",
          },
          navigation: [
            {
              _version: 3,
              locale: "en-us",
              uid: "blt83b97f978cbde1db",
              ACL: {},
              _in_progress: false,
              created_at: "2023-11-08T16:05:37.460Z",
              created_by: "blt78fe312f4dcc2750",
              navigation: {
                first_level_link: {
                  title: "Bottoms",
                  href: "/",
                },
                link_list_column: [
                  {
                    featured: true,
                    _metadata: {
                      uid: "cs28cb6c9204a60598",
                    },
                    column_heading_link: {
                      title: "Bottoms",
                      href: "/",
                    },
                    list_link: [
                      {
                        title: "Shorts",
                        href: "/",
                      },
                      {
                        title: "Pants",
                        href: "/",
                      },
                    ],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "csb131d4fc86e63f3b",
                    },
                    column_heading_link: {
                      title: "Boardshorts",
                      href: "/",
                    },
                    list_link: [],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "cs26f2198425d13860",
                    },
                    column_heading_link: {
                      title: "Trousers",
                      href: "/",
                    },
                    list_link: [],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "cs3ec437ac8fb7abd5",
                    },
                    column_heading_link: {
                      title: "Shop all",
                      href: "/",
                    },
                    list_link: [],
                  },
                ],
                card_cta_link: [
                  {
                    featured_image: {
                      _version: 2,
                      is_dir: false,
                      uid: "blt48e65b9879dfc65a",
                      ACL: {},
                      content_type: "image/webp",
                      created_at: "2023-11-08T16:03:19.629Z",
                      created_by: "blt78fe312f4dcc2750",
                      description: "",
                      file_size: "15214",
                      filename: "cg-card-car.webp",
                      parent_uid: null,
                      tags: [],
                      title: "cta-1.png",
                      updated_at: "2024-01-09T15:12:12.869Z",
                      updated_by: "blt5a61aa7aeee6f9ff",
                      publish_details: {
                        environment: "blt0cb0a00f31ca2427",
                        locale: "en-us",
                        time: "2024-01-09T15:14:43.531Z",
                        user: "blt5a61aa7aeee6f9ff",
                      },
                      url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt48e65b9879dfc65a/659d624cb6d5987adbb2ef08/cg-card-car.webp",
                    },
                    _metadata: {
                      uid: "cs9af55399287fe0a0",
                    },
                    alt_tag: "",
                    card_heading: "THE PERFECT PANT FOR ALL OCCASION",
                    cta_link: {
                      title: "Shop open to close",
                      href: "/",
                    },
                  },
                  {
                    featured_image: {
                      _version: 2,
                      is_dir: false,
                      uid: "bltf2bc922f0685be37",
                      ACL: {},
                      content_type: "image/webp",
                      created_at: "2023-11-08T16:03:18.476Z",
                      created_by: "blt78fe312f4dcc2750",
                      description: "",
                      file_size: "11316",
                      filename: "cg-card-moblility.webp",
                      parent_uid: null,
                      tags: [],
                      title: "cta-2.png",
                      updated_at: "2024-01-09T15:13:09.530Z",
                      updated_by: "blt5a61aa7aeee6f9ff",
                      publish_details: {
                        environment: "blt0cb0a00f31ca2427",
                        locale: "en-us",
                        time: "2024-01-09T15:14:43.561Z",
                        user: "blt5a61aa7aeee6f9ff",
                      },
                      url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltf2bc922f0685be37/659d6285dc7cdd83845845f4/cg-card-moblility.webp",
                    },
                    _metadata: {
                      uid: "csa034edc4e3f55411",
                    },
                    alt_tag: "",
                    card_heading: "THE GEAR PREFFERED BY DALE WHITNELL",
                    cta_link: {
                      title: "Shop Now",
                      href: "/",
                    },
                  },
                ],
              },
              tags: [],
              title: "Bottoms NavItem",
              updated_at: "2024-01-09T15:14:29.473Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              _content_type_uid: "navigation",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-09T15:14:43.609Z",
                user: "blt5a61aa7aeee6f9ff",
              },
            },
          ],
        },
        {
          first_level_link: {
            title: "Women",
            href: "/",
          },
          _metadata: {
            uid: "cs0fee52bea34abf2b",
          },
          navigation: [
            {
              _version: 3,
              locale: "en-us",
              uid: "blt83b97f978cbde1db",
              ACL: {},
              _in_progress: false,
              created_at: "2023-11-08T16:05:37.460Z",
              created_by: "blt78fe312f4dcc2750",
              navigation: {
                first_level_link: {
                  title: "Bottoms",
                  href: "/",
                },
                link_list_column: [
                  {
                    featured: true,
                    _metadata: {
                      uid: "cs28cb6c9204a60598",
                    },
                    column_heading_link: {
                      title: "Bottoms",
                      href: "/",
                    },
                    list_link: [
                      {
                        title: "Shorts",
                        href: "/",
                      },
                      {
                        title: "Pants",
                        href: "/",
                      },
                    ],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "csb131d4fc86e63f3b",
                    },
                    column_heading_link: {
                      title: "Boardshorts",
                      href: "/",
                    },
                    list_link: [],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "cs26f2198425d13860",
                    },
                    column_heading_link: {
                      title: "Trousers",
                      href: "/",
                    },
                    list_link: [],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "cs3ec437ac8fb7abd5",
                    },
                    column_heading_link: {
                      title: "Shop all",
                      href: "/",
                    },
                    list_link: [],
                  },
                ],
                card_cta_link: [
                  {
                    featured_image: {
                      _version: 2,
                      is_dir: false,
                      uid: "blt48e65b9879dfc65a",
                      ACL: {},
                      content_type: "image/webp",
                      created_at: "2023-11-08T16:03:19.629Z",
                      created_by: "blt78fe312f4dcc2750",
                      description: "",
                      file_size: "15214",
                      filename: "cg-card-car.webp",
                      parent_uid: null,
                      tags: [],
                      title: "cta-1.png",
                      updated_at: "2024-01-09T15:12:12.869Z",
                      updated_by: "blt5a61aa7aeee6f9ff",
                      publish_details: {
                        environment: "blt0cb0a00f31ca2427",
                        locale: "en-us",
                        time: "2024-01-09T15:14:43.531Z",
                        user: "blt5a61aa7aeee6f9ff",
                      },
                      url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt48e65b9879dfc65a/659d624cb6d5987adbb2ef08/cg-card-car.webp",
                    },
                    _metadata: {
                      uid: "cs9af55399287fe0a0",
                    },
                    alt_tag: "",
                    card_heading: "THE PERFECT PANT FOR ALL OCCASION",
                    cta_link: {
                      title: "Shop open to close",
                      href: "/",
                    },
                  },
                  {
                    featured_image: {
                      _version: 2,
                      is_dir: false,
                      uid: "bltf2bc922f0685be37",
                      ACL: {},
                      content_type: "image/webp",
                      created_at: "2023-11-08T16:03:18.476Z",
                      created_by: "blt78fe312f4dcc2750",
                      description: "",
                      file_size: "11316",
                      filename: "cg-card-moblility.webp",
                      parent_uid: null,
                      tags: [],
                      title: "cta-2.png",
                      updated_at: "2024-01-09T15:13:09.530Z",
                      updated_by: "blt5a61aa7aeee6f9ff",
                      publish_details: {
                        environment: "blt0cb0a00f31ca2427",
                        locale: "en-us",
                        time: "2024-01-09T15:14:43.561Z",
                        user: "blt5a61aa7aeee6f9ff",
                      },
                      url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltf2bc922f0685be37/659d6285dc7cdd83845845f4/cg-card-moblility.webp",
                    },
                    _metadata: {
                      uid: "csa034edc4e3f55411",
                    },
                    alt_tag: "",
                    card_heading: "THE GEAR PREFFERED BY DALE WHITNELL",
                    cta_link: {
                      title: "Shop Now",
                      href: "/",
                    },
                  },
                ],
              },
              tags: [],
              title: "Bottoms NavItem",
              updated_at: "2024-01-09T15:14:29.473Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              _content_type_uid: "navigation",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-09T15:14:43.609Z",
                user: "blt5a61aa7aeee6f9ff",
              },
            },
          ],
        },
        {
          first_level_link: {
            title: "Footwear",
            href: "/",
          },
          _metadata: {
            uid: "csaf4cf5019c0f3e05",
          },
          navigation: [
            {
              _version: 2,
              locale: "en-us",
              uid: "blt676bac3f9c9cf078",
              ACL: {},
              _in_progress: false,
              created_at: "2023-11-08T16:05:38.381Z",
              created_by: "blt78fe312f4dcc2750",
              navigation: {
                first_level_link: {
                  title: "Footwear",
                  href: "/",
                },
                link_list_column: [
                  {
                    featured: true,
                    _metadata: {
                      uid: "cs138bf3eda93318f9",
                    },
                    column_heading_link: {
                      title: "Shop all",
                      href: "/",
                    },
                    list_link: [
                      {
                        title: "All Shoes",
                        href: "/",
                      },
                    ],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "csd1e1047c15cb624c",
                    },
                    column_heading_link: {
                      title: "Casual shoes",
                      href: "/",
                    },
                    list_link: [
                      {
                        title: "Lace Up",
                        href: "/",
                      },
                      {
                        title: "Slip On",
                        href: "/",
                      },
                      {
                        title: "Sandals",
                        href: "/",
                      },
                    ],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "cs8177a8f953cdc2b6",
                    },
                    column_heading_link: {
                      title: "Golf shoes",
                      href: "/",
                    },
                    list_link: [
                      {
                        title: "Spiked",
                        href: "/",
                      },
                      {
                        title: "Spikeless",
                        href: "/",
                      },
                    ],
                  },
                ],
                card_cta_link: [
                  {
                    featured_image: {
                      _version: 2,
                      is_dir: false,
                      uid: "blt4fc84da653ac20f8",
                      ACL: {},
                      content_type: "image/webp",
                      created_at: "2023-11-08T16:03:21.755Z",
                      created_by: "blt78fe312f4dcc2750",
                      description: "",
                      file_size: "15422",
                      filename: "cg-card-cake.webp",
                      parent_uid: null,
                      tags: [],
                      title: "cta-1.png",
                      updated_at: "2024-01-09T15:27:58.904Z",
                      updated_by: "blt5a61aa7aeee6f9ff",
                      publish_details: {
                        environment: "blt0cb0a00f31ca2427",
                        locale: "en-us",
                        time: "2024-01-09T15:29:00.743Z",
                        user: "blt5a61aa7aeee6f9ff",
                      },
                      url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt4fc84da653ac20f8/659d65fe18123edece26d082/cg-card-cake.webp",
                    },
                    _metadata: {
                      uid: "csc33e7c957e40e8b4",
                    },
                    alt_tag: "",
                    card_heading: "WORN BY RAHM",
                    cta_link: {
                      title: "Shop the Ringer >",
                      href: "/",
                    },
                  },
                  {
                    featured_image: {
                      _version: 2,
                      is_dir: false,
                      uid: "blt67329971660d3c5f",
                      ACL: {},
                      content_type: "image/webp",
                      created_at: "2023-11-08T16:03:20.437Z",
                      created_by: "blt78fe312f4dcc2750",
                      description: "",
                      file_size: "8166",
                      filename: "cg-card-edge.webp",
                      parent_uid: null,
                      tags: [],
                      title: "cta-2.png",
                      updated_at: "2024-01-09T15:28:38.003Z",
                      updated_by: "blt5a61aa7aeee6f9ff",
                      publish_details: {
                        environment: "blt0cb0a00f31ca2427",
                        locale: "en-us",
                        time: "2024-01-09T15:29:00.763Z",
                        user: "blt5a61aa7aeee6f9ff",
                      },
                      url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt67329971660d3c5f/659d662618123e6a4f26d084/cg-card-edge.webp",
                    },
                    _metadata: {
                      uid: "cs6c8c1bd802ce5a77",
                    },
                    alt_tag: "",
                    card_heading: "THE NEW MONEYMAKER",
                    cta_link: {
                      title: "Shop now>",
                      href: "/",
                    },
                  },
                ],
              },
              tags: [],
              title: "Footwear NavItem",
              updated_at: "2024-01-09T08:03:50.821Z",
              updated_by: "blt61463f2531c00ac7",
              _content_type_uid: "navigation",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-09T15:29:00.828Z",
                user: "blt5a61aa7aeee6f9ff",
              },
            },
          ],
        },
        {
          first_level_link: {
            title: "Collections",
            href: "/",
          },
          _metadata: {
            uid: "cs8eb710e4ee43052b",
          },
          navigation: [
            {
              _version: 2,
              locale: "en-us",
              uid: "blt3e8a43e570c0eba1",
              ACL: {},
              _in_progress: false,
              created_at: "2023-11-08T16:05:37.466Z",
              created_by: "blt78fe312f4dcc2750",
              navigation: {
                first_level_link: {
                  title: "Collections",
                  href: "/",
                },
                link_list_column: [
                  {
                    featured: false,
                    _metadata: {
                      uid: "cs662090f2d641a80b",
                    },
                    column_heading_link: {
                      title: "The perfect series",
                      href: "/",
                    },
                    list_link: [
                      {
                        title: "Weekend Getaway",
                        href: "/",
                      },
                    ],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "csd3f7b0d7141a8228",
                    },
                    column_heading_link: {
                      title: "Jon Rahm's picks",
                      href: "/",
                    },
                    list_link: [
                      {
                        title: "Active Lifestyle",
                        href: "/",
                      },
                    ],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "cs438f6c3f915513bb",
                    },
                    column_heading_link: {
                      title: "Chris Pratt's pick",
                      href: "/",
                    },
                    list_link: [
                      {
                        title: "Red, White & Blue",
                        href: "/",
                      },
                    ],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "cse9b0c66dd8d19d2a",
                    },
                    column_heading_link: {
                      title: "Outerwear Collections",
                      href: "/",
                    },
                    list_link: [
                      {
                        title: "Outerwear",
                        href: "/",
                      },
                    ],
                  },
                ],
                card_cta_link: [
                  {
                    featured_image: {
                      _version: 2,
                      is_dir: false,
                      uid: "blte4c754387461c189",
                      ACL: {},
                      content_type: "image/webp",
                      created_at: "2023-11-08T16:03:23.666Z",
                      created_by: "blt78fe312f4dcc2750",
                      description: "",
                      file_size: "19650",
                      filename: "cg-card-way.webp",
                      parent_uid: null,
                      tags: [],
                      title: "cta-1.png",
                      updated_at: "2024-01-09T15:25:48.930Z",
                      updated_by: "blt5a61aa7aeee6f9ff",
                      publish_details: {
                        environment: "blt0cb0a00f31ca2427",
                        locale: "en-us",
                        time: "2024-01-09T15:26:26.465Z",
                        user: "blt5a61aa7aeee6f9ff",
                      },
                      url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blte4c754387461c189/659d657c18123e369e26d080/cg-card-way.webp",
                    },
                    _metadata: {
                      uid: "cs2ca954e8f753b04d",
                    },
                    alt_tag: "",
                    card_heading: "THE PERFECT POLO FOR ALL OCCASION",
                    cta_link: {
                      title: "Shop now",
                      href: "/",
                    },
                  },
                ],
              },
              tags: [],
              title: "Collections NavItem",
              updated_at: "2024-01-09T08:05:04.428Z",
              updated_by: "blt61463f2531c00ac7",
              _content_type_uid: "navigation",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-09T15:26:26.492Z",
                user: "blt5a61aa7aeee6f9ff",
              },
            },
          ],
        },
        {
          first_level_link: {
            title: "Hats",
            href: "/",
          },
          _metadata: {
            uid: "cs69c543f1abcf091e",
          },
          navigation: [
            {
              _version: 3,
              locale: "en-us",
              uid: "bltae441370d20abced",
              ACL: {},
              _in_progress: false,
              created_at: "2023-11-08T16:05:38.373Z",
              created_by: "blt78fe312f4dcc2750",
              navigation: {
                first_level_link: {
                  title: "News",
                  href: "/",
                },
                link_list_column: [
                  {
                    featured: false,
                    _metadata: {
                      uid: "cs1d262be414f6e58a",
                    },
                    column_heading_link: {
                      title: "SNAP BACK HATS",
                      href: "/",
                    },
                    list_link: [],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "csf7cf74f019e0980a",
                    },
                    column_heading_link: {
                      title: "FITTED HATS",
                      href: "/",
                    },
                    list_link: [],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "csbac060ceb60b4239",
                    },
                    column_heading_link: {
                      title: "BEANIES",
                      href: "/",
                    },
                    list_link: [],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "csf36c65bd0c33b8af",
                    },
                    column_heading_link: {
                      title: "YOUTH HATS",
                      href: "/",
                    },
                    list_link: [],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "cs29b0ed302323ab57",
                    },
                    column_heading_link: {
                      title: "SHOP ALL",
                      href: "/",
                    },
                    list_link: [],
                  },
                ],
                card_cta_link: [
                  {
                    featured_image: {
                      _version: 2,
                      is_dir: false,
                      uid: "bltdab6313e67be07a3",
                      ACL: {},
                      content_type: "image/webp",
                      created_at: "2023-11-08T16:03:25.715Z",
                      created_by: "blt78fe312f4dcc2750",
                      description: "",
                      file_size: "23478",
                      filename: "cg-card-cloud.webp",
                      parent_uid: null,
                      tags: [],
                      title: "cta-1.png",
                      updated_at: "2024-01-09T15:20:57.694Z",
                      updated_by: "blt5a61aa7aeee6f9ff",
                      publish_details: {
                        environment: "blt0cb0a00f31ca2427",
                        locale: "en-us",
                        time: "2024-01-09T15:21:08.363Z",
                        user: "blt5a61aa7aeee6f9ff",
                      },
                      url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltdab6313e67be07a3/659d64591f2d0f203aacfb3e/cg-card-cloud.webp",
                    },
                    _metadata: {
                      uid: "csd83202cc4cd8a0ad",
                    },
                    alt_tag: "",
                    card_heading: "THE ICONIC B-BAHAMAS",
                    cta_link: {
                      title: "Shop now>",
                      href: "/",
                    },
                  },
                  {
                    featured_image: {
                      _version: 2,
                      is_dir: false,
                      uid: "blt8fdb23d1f5292769",
                      ACL: {},
                      content_type: "image/webp",
                      created_at: "2023-11-08T16:03:23.449Z",
                      created_by: "blt78fe312f4dcc2750",
                      description: "",
                      file_size: "21684",
                      filename: "cg-card-tecgnology.webp",
                      parent_uid: null,
                      tags: [],
                      title: "cta-2.png",
                      updated_at: "2024-01-09T15:23:31.273Z",
                      updated_by: "blt5a61aa7aeee6f9ff",
                      publish_details: {
                        environment: "blt0cb0a00f31ca2427",
                        locale: "en-us",
                        time: "2024-01-09T15:24:00.626Z",
                        user: "blt5a61aa7aeee6f9ff",
                      },
                      url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt8fdb23d1f5292769/659d64f3e4d0aa0c612db7e2/cg-card-tecgnology.webp",
                    },
                    _metadata: {
                      uid: "csfeabccc24024e247",
                    },
                    alt_tag: "",
                    card_heading: "ALWAYS ON VACATION?",
                    cta_link: {
                      title: "Shop new hats",
                      href: "/",
                    },
                  },
                ],
              },
              tags: [],
              title: "Hats NavItem",
              updated_at: "2024-01-09T15:22:44.317Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              _content_type_uid: "navigation",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-09T15:25:15.100Z",
                user: "blt5a61aa7aeee6f9ff",
              },
            },
          ],
        },
        {
          first_level_link: {
            title: "Accessories",
            href: "/",
          },
          _metadata: {
            uid: "cs84d91226e6b7604b",
          },
          navigation: [
            {
              _version: 3,
              locale: "en-us",
              uid: "bltc9ec219b538e78f0",
              ACL: {},
              _in_progress: false,
              created_at: "2023-11-08T16:05:37.382Z",
              created_by: "blt78fe312f4dcc2750",
              navigation: {
                first_level_link: {
                  title: "Accessories",
                  href: "/",
                },
                link_list_column: [
                  {
                    featured: true,
                    _metadata: {
                      uid: "cs679c898690ccdf8f",
                    },
                    column_heading_link: {
                      title: "Golf Accessories",
                      href: "/",
                    },
                    list_link: [
                      {
                        title: "Golf Gloves",
                        href: "/",
                      },
                      {
                        title: "Golf Bags",
                        href: "/",
                      },
                      {
                        title: "Golf Headcovers",
                        href: "/",
                      },
                      {
                        title: "Golf Towels",
                        href: "/",
                      },
                    ],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "csb8c61247ce2cbae7",
                    },
                    column_heading_link: {
                      title: "Hats",
                      href: "/",
                    },
                    list_link: [
                      {
                        title: "Beanies",
                        href: "/",
                      },
                      {
                        title: "Fitted Hats",
                        href: "/",
                      },
                      {
                        title: "Snapback Hats",
                        href: "/",
                      },
                    ],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "cs633777ea1ddf6867",
                    },
                    column_heading_link: {
                      title: "Golf towels",
                      href: "/",
                    },
                    list_link: [
                      {
                        title: "Microfiber Towels",
                        href: "/",
                      },
                      {
                        title: "Cotton Towels",
                        href: "/",
                      },
                    ],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "csdeaeac6f56b2050d",
                    },
                    column_heading_link: {
                      title: "Other Accessories",
                      href: "/",
                    },
                    list_link: [
                      {
                        title: "Belts",
                        href: "/",
                      },
                      {
                        title: "Socks",
                        href: "/",
                      },
                    ],
                  },
                  {
                    featured: false,
                    _metadata: {
                      uid: "cs4e7c8dbfdf513e14",
                    },
                    column_heading_link: {
                      title: "Essentials",
                      href: "/",
                    },
                    list_link: [
                      {
                        title: "New Arrival",
                        href: "/",
                      },
                    ],
                  },
                ],
                card_cta_link: [
                  {
                    featured_image: {
                      _version: 2,
                      is_dir: false,
                      uid: "blt0aa370d72dd95082",
                      ACL: {},
                      content_type: "image/jpeg",
                      created_at: "2023-11-08T16:03:28.135Z",
                      created_by: "blt78fe312f4dcc2750",
                      description: "",
                      file_size: "77198",
                      filename: "cg-card-man.jpg",
                      parent_uid: "blt4286898d5239dc72",
                      tags: [],
                      title: "Rectangle_132.png",
                      updated_at: "2024-01-09T15:17:04.413Z",
                      updated_by: "blt5a61aa7aeee6f9ff",
                      publish_details: {
                        environment: "blt0cb0a00f31ca2427",
                        locale: "en-us",
                        time: "2024-01-09T15:19:56.002Z",
                        user: "blt5a61aa7aeee6f9ff",
                      },
                      url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt0aa370d72dd95082/659d637069ba2870f48ee72d/cg-card-man.jpg",
                    },
                    _metadata: {
                      uid: "csc2d081c3a3ecfd58",
                    },
                    alt_tag: "",
                    card_heading: "40% off on all cuater gloves ",
                    cta_link: {
                      title: "Shop now",
                      href: "/",
                    },
                  },
                ],
              },
              tags: [],
              title: "Accesories NavItem",
              updated_at: "2024-01-09T15:18:45.541Z",
              updated_by: "blt5a61aa7aeee6f9ff",
              _content_type_uid: "navigation",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2024-01-09T15:20:05.504Z",
                user: "blt5a61aa7aeee6f9ff",
              },
            },
          ],
        },
      ],
      promo_bar_bottom: {
        link: {
          title: "20% Off on Men's Joggers & Lounge ",
          href: "/",
        },
        promo_code: "",
      },
      promo_bar_top: [
        {
          promo_message: "Eligible for 20% Off Your First Order! Use Code: ",
          _metadata: {
            uid: "cs69845e212c751b85",
          },
          promo_code: "COD20",
          cta_link: {
            title: "Shop Now",
            href: "/",
          },
        },
        {
          promo_message: "40 % Off On Women Footwear !! ",
          _metadata: {
            uid: "csb007cb616e59a1a7",
          },
          promo_code: "",
          cta_link: {
            title: "Avail Now",
            href: "/",
          },
        },
      ],
      tags: [],
      title: "Header",
      updated_at: "2024-01-09T07:49:20.798Z",
      updated_by: "blt61463f2531c00ac7",
      _content_type_uid: "header",
      publish_details: {
        environment: "blt0cb0a00f31ca2427",
        locale: "en-us",
        time: "2024-01-09T15:07:56.761Z",
        user: "blt5a61aa7aeee6f9ff",
      },
    },
    PDP: {
      add_to_wishlist: "Add to Wishlist",
      available_online: "Available Online",
      color: "Color",
      easy_wash_and_wear: "Easy Wash and Wear",
      enhanced_quick_dry: "Enhanced Quick-Dry",
      enhanced_stretch: "Enhanced Stretch",
      find_your_size: "Find Your Size",
      finder: "Finder",
      fit: "Fit",
      hand_size: "Hand Size",
      in_stock: "In Stock",
      lightweight: "Lightweight",
      material: "Material",
      out_of_stock: "Out of Stock",
      size_guide: "Size Guide",
      sizing: "Sizing",
      supreme_comfort: "Supreme Comfort",
      wrinkle_resistant: "Wrinkle Resistant",
      add_to_cart_validation_message: "Add to Cart Test",
      select_size_color_validation_message: "Please select a color",
      select_style_validation_message: "Please select a size",
      select_variant_validation_message: "Please select hand size",
      wishlist_login_validation_message: "",
      wishlist_success_message: "",
      insufficient_stock_message: "Insufficient Stock Message",
      low_inventory_message: "Only {inventory} left!",
      quantity: "Quantity",
    },
    PLP: {
      best_seller: "Best Seller",
      clear_all: "Clear All",
      filter: "Filter",
      load_more: "Load More",
      loading: "Loading...",
      more: "more",
      name_ascending_: "Name (Ascending",
      name_descending_: "Name (Descending)",
      newest: "Newest",
      no_records_exists: "No records exists",
      no_sizes_found: "No Sizes Found",
      price_highest_first_: "Price (Highest First)",
      price_lowest_first_: "Price (Lowest First)",
      quick_add: "Quick Add +",
      related_categories: "Related Categories",
      related_items: "Related Items",
      related_products: "Related Products",
      relevance: "Sort By",
      results: "Results",
      search: "Search",
      show_less: "Show Less",
      show_more: "Show More",
      showing: "Showing",
      sort_by: "Sort By",
      top_rated: "Top Rated",
      top_suggestion: "Top Suggestions",
      type_to_search: "Type to search",
      view_all: "View All",
      view_results: "View Results",
      left_cadet: "Left Cadet",
      left_hand: "Left",
      right_cadet: "Right Cadet",
      right_hand: "Right",
      hand: "Hand",
      size: "Size",
      brand: "Brand",
      color: "Color",
      design: "Design",
      fabric_technology: "Fabric & Technology",
      gender: "Gender",
      sizes: "Sizes",
      sleeve_length: "Sleeve Length",
      type: "Type",
    },
    responseCode: {
      _version: 1,
      locale: "en-us",
      uid: "blt5a1b549856696148",
      ACL: {},
      _in_progress: false,
      api_response_messages: [
        {
          response_code: 201,
          _metadata: {
            uid: "cs0b6f8651a09b47b6",
          },
          message: "The resource created successfully.",
        },
        {
          response_code: 401,
          _metadata: {
            uid: "cs0e2d7a3f0bc78de8",
          },
          message: "You are unauthorized to access this resource.",
        },
        {
          response_code: 404,
          _metadata: {
            uid: "cs42fb4d7c847b05b7",
          },
          message: "This resource is not found.",
        },
        {
          response_code: 403,
          _metadata: {
            uid: "cs9330ea71bcd6e979",
          },
          message: "You do not have right permission to access this.",
        },
        {
          response_code: 400,
          _metadata: {
            uid: "cscd4d761d4fbc8a40",
          },
          message: "Something went wrong.",
        },
        {
          response_code: 202,
          message: "This request has created successfully.",
          _metadata: {
            uid: "cs60d6b68eb5db2356",
          },
        },
      ],
      authentication_response_messages: [],
      authorization_response_messages: [],
      configuration_response_messages: [],
      created_at: "2023-11-08T16:05:36.412Z",
      created_by: "blt78fe312f4dcc2750",
      form_submission_default_response_messages: [],
      server_response_messages: [],
      tags: [],
      title: "Response Code Messages",
      updated_at: "2023-11-08T16:05:36.412Z",
      updated_by: "blt78fe312f4dcc2750",
      utility_response_messages: [],
      validation_response_messages: [],
      _content_type_uid: "response_code_messages",
      publish_details: {
        environment: "blt0cb0a00f31ca2427",
        locale: "en-us",
        time: "2023-11-08T16:06:14.277Z",
        user: "blt78fe312f4dcc2750",
      },
    },
    screenReader: {
      _version: 1,
      locale: "en-us",
      uid: "bltc2fec3836f7c363d",
      ACL: {},
      _in_progress: false,
      cart_link: "items in cart",
      color_swatch_links: "",
      created_at: "2023-11-08T16:05:54.463Z",
      created_by: "blt78fe312f4dcc2750",
      tags: [],
      title: "Screen Reader Messages",
      updated_at: "2023-11-08T16:05:54.463Z",
      updated_by: "blt78fe312f4dcc2750",
      _content_type_uid: "screen_reader_messages",
      publish_details: {
        environment: "blt0cb0a00f31ca2427",
        locale: "en-us",
        time: "2023-11-08T16:06:31.272Z",
        user: "blt78fe312f4dcc2750",
      },
    },
    sizeChart: {
      _version: 1,
      locale: "en-us",
      uid: "blt68798325ea24bd3e",
      ACL: {},
      _in_progress: false,
      created_at: "2023-11-08T16:05:47.595Z",
      created_by: "blt78fe312f4dcc2750",
      size_charts: {
        component_label: "Featured",
        charts_help_text:
          '<div class="help-block">\n  <h4 class="help-text">Need Help</h4>\n  <p>Still not sure what you need? TravisMathew can help you find the perfect size.Call us&nbsp;<a href="tel:0800 026 4653">0800 026 4653</a></p>\n  <hr />\n</div>',
        chart_and_content: [
          {
            category_picker: "0131,0132,0133,0134,013",
            _metadata: {
              uid: "cs1ab97652bd2991f3",
            },
            label: "Tops",
            table_data:
              '<div class="table-data"><p>Measure at the fullest part of the chest, under the armpits and over the shoulder blades, keeping the tape measure firm and level.</p><p></p><div class="row"><div class="table"><table class="table table-striped"><thead><tr><th>Size</th><th>Chest(Inch)</th><th>Chest(CM)</th></tr></thead><tbody><tr><td>S </td><td>34" - 36" </td><td>86cm - 91cm </td></tr><tr><td>M </td><td>37" - 39" </td><td>94cm - 99cm </td></tr><tr><td>L </td><td>40" - 42" </td><td>102cm - 107cm </td></tr><tr><td>XL </td><td>43" - 45" </td><td>109cm - 114cm </td></tr><tr><td>2XL </td><td>46" - 48" </td><td>117cm - 122cm </td></tr><tr><td>3XL </td><td>49" - 50" </td><td>124cm - 127cm</td></tr></tbody></table></div><div class="table-image"><img asset_uid="blt765825809bb684a0" src="https://images.contentstack.io/v3/assets/blt5e74b011b6ec65cd/blt765825809bb684a0/6541fc798b3f8e001b7ae852/TopsSizeCharts.png?branch=develop" height="auto"/></div></div></div>',
          },
          {
            category_picker: "0142",
            _metadata: {
              uid: "csf199407595a896ec",
            },
            label: "Pants",
            table_data:
              '<div class="table-data">\n  <p>**Waist: Measure around the narrowest part (typically the small of your back and where your body bends side to side) keeping the tape horizontal.</p>\n  <p>**Hip: Measure around the fullest part of your hips, keeping the tape horizontal.</p>\n  <div class="row">\n    <div class="table">\n      <table class="table table-striped" style="width: 1000px;">\n        <thead>\n          <tr>\n            <th class="noCenter" rowspan="2">Size</th>\n            <th colspan="2">30</th>\n            <th colspan="2">32</th>\n            <th colspan="2">34</th>\n            <th colspan="2">36</th>\n            <th colspan="2">38</th>\n            <th colspan="2">40</th>\n          </tr>\n          <tr>\n            <th>Inch</th>\n            <th>CM</th>\n            <th>Inch</th>\n            <th>CM</th>\n            <th>Inch</th>\n            <th>CM</th>\n            <th>Inch</th>\n            <th>CM</th>\n            <th>Inch</th>\n            <th>CM</th>\n            <th>Inch</th>\n            <th>CM</th>\n          </tr>\n          <tr>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td class="noCenter">Waist</td>\n            <td>30 1/2"<br />-<br />31 1/2" </td>\n            <td>77cm<br />-<br />80cm </td>\n            <td>32 1/2"<br />-<br />33 1/2" </td>\n            <td>83cm<br />-<br />85cm </td>\n            <td>34 1/2"<br />-<br />35 1/2" </td>\n            <td>90cm<br />-<br />90cm</td>\n            <td>36 1/2"<br />-<br />37 1/2" </td>\n            <td>93cm<br />-<br />95cm </td>\n            <td>38 1/2"<br />-<br />39 1/2" </td>\n            <td>98cm<br />-<br />100cm </td>\n            <td>40 1/2"<br />-<br />41 1/2" </td>\n            <td>103cm<br />-<br />105cm </td>\n          </tr>\n          <tr>\n            <td class="noCenter">Hip</td>\n            <td>35 1/2"<br />-<br />36 1/2" </td>\n            <td>90cm<br />-<br />93 cm </td>\n            <td>37 1/2"<br />-<br />38 1/2" </td>\n            <td>95cm<br />-<br />98 cm </td>\n            <td>39 1/2"<br />-<br />40 1/2" </td>\n            <td>100cm<br />-<br />103 cm</td>\n            <td>41 1/2"<br />-<br />42 1/2" </td>\n            <td>105cm<br />-<br />108cm</td>\n            <td>43 1/2"<br />-<br />44 1/2" </td>\n            <td>110cm<br />-<br />113cm</td>\n            <td>45 1/2"<br />-<br />46 1/2" </td>\n            <td>116cm<br />-<br />118cm</td>\n          </tr>\n          <tr>\n            <td class="noCenter">Pant Inseam</td>\n            <td>32" </td>\n            <td>81cm </td>\n            <td>32 1/4"</td>\n            <td>82cm </td>\n            <td>32 1/2"</td>\n            <td>83cm </td>\n            <td>32 1/2"</td>\n            <td>83cm </td>\n            <td>32 1/2"</td>\n            <td>83cm </td>\n            <td>32 1/2"</td>\n            <td>83cm</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class="table-image"></div>\n  </div>\n</div>',
          },
          {
            category_picker: "0136,0145",
            _metadata: {
              uid: "cse72676bd4a4d5fd4",
            },
            label: "Juniors",
            table_data:
              '<div class="table-data">\n  <p>**Waist: Measure around the narrowest part (typically the small of your back and where your body bends side to side) keeping the tape horizontal.</p>\n  <p>**Hip: Measure around the fullest part of your hips, keeping the tape horizontal.</p>\n  <div class="row">\n    <div class="table">\n      <table class="table table-striped" style="width: 1000px;">\n        <thead>\n          <tr>\n            <th class="noCenter" rowspan="2">Size</th>\n            <th colspan="2">30</th>\n            <th colspan="2">32</th>\n            <th colspan="2">34</th>\n            <th colspan="2">36</th>\n            <th colspan="2">38</th>\n            <th colspan="2">40</th>\n          </tr>\n          <tr>\n            <th>Inch</th>\n            <th>CM</th>\n            <th>Inch</th>\n            <th>CM</th>\n            <th>Inch</th>\n            <th>CM</th>\n            <th>Inch</th>\n            <th>CM</th>\n            <th>Inch</th>\n            <th>CM</th>\n            <th>Inch</th>\n            <th>CM</th>\n          </tr>\n          <tr>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td class="noCenter">Waist</td>\n            <td>30 1/2"<br />-<br />31 1/2" </td>\n            <td>77cm<br />-<br />80cm </td>\n            <td>32 1/2"<br />-<br />33 1/2" </td>\n            <td>83cm<br />-<br />85cm </td>\n            <td>34 1/2"<br />-<br />35 1/2" </td>\n            <td>90cm<br />-<br />90cm</td>\n            <td>36 1/2"<br />-<br />37 1/2" </td>\n            <td>93cm<br />-<br />95cm </td>\n            <td>38 1/2"<br />-<br />39 1/2" </td>\n            <td>98cm<br />-<br />100cm </td>\n            <td>40 1/2"<br />-<br />41 1/2" </td>\n            <td>103cm<br />-<br />105cm </td>\n          </tr>\n          <tr>\n            <td class="noCenter">Hip</td>\n            <td>35 1/2"<br />-<br />36 1/2" </td>\n            <td>90cm<br />-<br />93 cm </td>\n            <td>37 1/2"<br />-<br />38 1/2" </td>\n            <td>95cm<br />-<br />98 cm </td>\n            <td>39 1/2"<br />-<br />40 1/2" </td>\n            <td>100cm<br />-<br />103 cm</td>\n            <td>41 1/2"<br />-<br />42 1/2" </td>\n            <td>105cm<br />-<br />108cm</td>\n            <td>43 1/2"<br />-<br />44 1/2" </td>\n            <td>110cm<br />-<br />113cm</td>\n            <td>45 1/2"<br />-<br />46 1/2" </td>\n            <td>116cm<br />-<br />118cm</td>\n          </tr>\n          <tr>\n            <td class="noCenter">Pant Inseam</td>\n            <td>32" </td>\n            <td>81cm </td>\n            <td>32 1/4"</td>\n            <td>82cm </td>\n            <td>32 1/2"</td>\n            <td>83cm </td>\n            <td>32 1/2"</td>\n            <td>83cm </td>\n            <td>32 1/2"</td>\n            <td>83cm </td>\n            <td>32 1/2"</td>\n            <td>83cm</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class="table-image"></div>\n  </div>\n</div>',
          },
          {
            category_picker: "0441,0443",
            _metadata: {
              uid: "cs0ce5b2771023e695",
            },
            label: "WOMENTOPS",
            table_data:
              '<div class="table-data"><p>Measure at the fullest part of the chest, under the armpits and over the shoulder blades, keeping the tape measure firm and level.</p><p></p><div class="row"><div class="table"><table class="table table-striped"><thead><tr><th>Size</th><th>Chest(Inch)</th><th>Chest(CM)</th></tr></thead><tbody><tr><td>S </td><td>34" - 36" </td><td>86cm - 91cm </td></tr><tr><td>M </td><td>37" - 39" </td><td>94cm - 99cm </td></tr><tr><td>L </td><td>40" - 42" </td><td>102cm - 107cm </td></tr><tr><td>XL </td><td>43" - 45" </td><td>109cm - 114cm </td></tr><tr><td>2XL </td><td>46" - 48" </td><td>117cm - 122cm </td></tr><tr><td>3XL </td><td>49" - 50" </td><td>124cm - 127cm</td></tr></tbody></table></div><div class="table-image"><img asset_uid="blt48688b40c325374d" src="https://images.contentstack.io/v3/assets/blt5e74b011b6ec65cd/blt48688b40c325374d/6541fc838b3f8e001b7ae857/WomensTopsSizeCharts.png?branch=develop" height="auto"/></div></div></div>',
          },
          {
            category_picker: "0141,0144",
            _metadata: {
              uid: "csae044ba82d25ab4e",
            },
            label: "SHORTS",
            table_data:
              '<div class="table-data">\n  <p>Measure at the fullest part of the chest, under the armpits and over the shoulder blades, keeping the tape measure firm and level.</p>\n  <div class="row">\n    <div class="table">\n      <table class="table table-striped">\n        <thead>\n          <tr>\n            <th>Size</th>\n            <th>Chest(Inch)</th>\n            <th>Chest(CM)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>S </td>\n            <td>34" - 36" </td>\n            <td>86cm - 91cm </td>\n          </tr>\n          <tr>\n            <td>M </td>\n            <td>37" - 39" </td>\n            <td>94cm - 99cm </td>\n          </tr>\n          <tr>\n            <td>L </td>\n            <td>40" - 42" </td>\n            <td>102cm - 107cm </td>\n          </tr>\n          <tr>\n            <td>XL </td>\n            <td>43" - 45" </td>\n            <td>109cm - 114cm </td>\n          </tr>\n          <tr>\n            <td>2XL </td>\n            <td>46" - 48" </td>\n            <td>117cm - 122cm </td>\n          </tr>\n          <tr>\n            <td>3XL </td>\n            <td>49" - 50" </td>\n            <td>124cm - 127cm</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class="table-image"><img asset_uid="bltbb67b00c5b5296bf" src="https://images.contentstack.io/v3/assets/blt5e74b011b6ec65cd/bltbb67b00c5b5296bf/64c11d8b320b7e3b7bca859a/TM_Rewards.png?branch=predev" /></div>\n  </div>\n</div>',
          },
          {
            category_picker: "0241",
            _metadata: {
              uid: "cs2cf28f58ea601f85",
            },
            label: "BELTS",
            table_data:
              '<div class="table-data">\n  <p>Measure at the fullest part of the chest, under the armpits and over the shoulder blades, keeping the tape measure firm and level.</p>\n  <div class="row">\n    <div class="table">\n      <table class="table table-striped">\n        <thead>\n          <tr>\n            <th>Size</th>\n            <th>Chest(Inch)</th>\n            <th>Chest(CM)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>S </td>\n            <td>34" - 36" </td>\n            <td>86cm - 91cm </td>\n          </tr>\n          <tr>\n            <td>M </td>\n            <td>37" - 39" </td>\n            <td>94cm - 99cm </td>\n          </tr>\n          <tr>\n            <td>L </td>\n            <td>40" - 42" </td>\n            <td>102cm - 107cm </td>\n          </tr>\n          <tr>\n            <td>XL </td>\n            <td>43" - 45" </td>\n            <td>109cm - 114cm </td>\n          </tr>\n          <tr>\n            <td>2XL </td>\n            <td>46" - 48" </td>\n            <td>117cm - 122cm </td>\n          </tr>\n          <tr>\n            <td>3XL </td>\n            <td>49" - 50" </td>\n            <td>124cm - 127cm</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class="table-image"><img asset_uid="bltbb67b00c5b5296bf" src="https://images.contentstack.io/v3/assets/blt5e74b011b6ec65cd/bltbb67b00c5b5296bf/64c11d8b320b7e3b7bca859a/TM_Rewards.png?branch=predev" /></div>\n  </div>\n</div>',
          },
          {
            category_picker: "0243",
            _metadata: {
              uid: "csada3efaa0bc78199",
            },
            label: "BOXERS",
            table_data:
              '<div class="table-data">\n  <p>Measure at the fullest part of the chest, under the armpits and over the shoulder blades, keeping the tape measure firm and level.</p>\n  <div class="row">\n    <div class="table">\n      <table class="table table-striped">\n        <thead>\n          <tr>\n            <th>Size</th>\n            <th>Chest(Inch)</th>\n            <th>Chest(CM)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>S </td>\n            <td>34" - 36" </td>\n            <td>86cm - 91cm </td>\n          </tr>\n          <tr>\n            <td>M </td>\n            <td>37" - 39" </td>\n            <td>94cm - 99cm </td>\n          </tr>\n          <tr>\n            <td>L </td>\n            <td>40" - 42" </td>\n            <td>102cm - 107cm </td>\n          </tr>\n          <tr>\n            <td>XL </td>\n            <td>43" - 45" </td>\n            <td>109cm - 114cm </td>\n          </tr>\n          <tr>\n            <td>2XL </td>\n            <td>46" - 48" </td>\n            <td>117cm - 122cm </td>\n          </tr>\n          <tr>\n            <td>3XL </td>\n            <td>49" - 50" </td>\n            <td>124cm - 127cm</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class="table-image"><img asset_uid="bltbb67b00c5b5296bf" src="https://images.contentstack.io/v3/assets/blt5e74b011b6ec65cd/bltbb67b00c5b5296bf/64c11d8b320b7e3b7bca859a/TM_Rewards.png?branch=predev" /></div>\n  </div>\n</div>',
          },
          {
            category_picker: "0242",
            _metadata: {
              uid: "cse5da2352e973c4e5",
            },
            label: "SOCKS",
            table_data:
              '<div class="table-data">\n  <p>Measure at the fullest part of the chest, under the armpits and over the shoulder blades, keeping the tape measure firm and level.</p>\n  <div class="row">\n    <div class="table">\n      <table class="table table-striped">\n        <thead>\n          <tr>\n            <th>Size</th>\n            <th>Chest(Inch)</th>\n            <th>Chest(CM)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>S </td>\n            <td>34" - 36" </td>\n            <td>86cm - 91cm </td>\n          </tr>\n          <tr>\n            <td>M </td>\n            <td>37" - 39" </td>\n            <td>94cm - 99cm </td>\n          </tr>\n          <tr>\n            <td>L </td>\n            <td>40" - 42" </td>\n            <td>102cm - 107cm </td>\n          </tr>\n          <tr>\n            <td>XL </td>\n            <td>43" - 45" </td>\n            <td>109cm - 114cm </td>\n          </tr>\n          <tr>\n            <td>2XL </td>\n            <td>46" - 48" </td>\n            <td>117cm - 122cm </td>\n          </tr>\n          <tr>\n            <td>3XL </td>\n            <td>49" - 50" </td>\n            <td>124cm - 127cm</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class="table-image"><img asset_uid="bltbb67b00c5b5296bf" src="https://images.contentstack.io/v3/assets/blt5e74b011b6ec65cd/bltbb67b00c5b5296bf/64c11d8b320b7e3b7bca859a/TM_Rewards.png?branch=predev" /></div>\n  </div>\n</div>',
          },
          {
            category_picker: "0263,0271,026,022",
            _metadata: {
              uid: "csdb13eb8e9313f86c",
            },
            label: "SHOES",
            table_data:
              '<div class="table-data">\n  <p>Measure at the fullest part of the chest, under the armpits and over the shoulder blades, keeping the tape measure firm and level.</p>\n  <div class="row">\n    <div class="table">\n      <table class="table table-striped">\n        <thead>\n          <tr>\n            <th>Size</th>\n            <th>Chest(Inch)</th>\n            <th>Chest(CM)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>S </td>\n            <td>34" - 36" </td>\n            <td>86cm - 91cm </td>\n          </tr>\n          <tr>\n            <td>M </td>\n            <td>37" - 39" </td>\n            <td>94cm - 99cm </td>\n          </tr>\n          <tr>\n            <td>L </td>\n            <td>40" - 42" </td>\n            <td>102cm - 107cm </td>\n          </tr>\n          <tr>\n            <td>XL </td>\n            <td>43" - 45" </td>\n            <td>109cm - 114cm </td>\n          </tr>\n          <tr>\n            <td>2XL </td>\n            <td>46" - 48" </td>\n            <td>117cm - 122cm </td>\n          </tr>\n          <tr>\n            <td>3XL </td>\n            <td>49" - 50" </td>\n            <td>124cm - 127cm</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class="table-image"><img asset_uid="bltbb67b00c5b5296bf" src="https://images.contentstack.io/v3/assets/blt5e74b011b6ec65cd/bltbb67b00c5b5296bf/64c11d8b320b7e3b7bca859a/TM_Rewards.png?branch=predev" /></div>\n  </div>\n</div>',
          },
          {
            category_picker: "0244",
            _metadata: {
              uid: "cs9ca27ddb8e9b6069",
            },
            label: "GLOVES",
            table_data:
              '<div class="table-data">\n  <p>Measure at the fullest part of the chest, under the armpits and over the shoulder blades, keeping the tape measure firm and level.</p>\n  <p></p>\n  <div class="row">\n    <div class="table">\n      <table class="table table-striped">\n        <thead>\n          <tr>\n            <th>Size</th>\n            <th>Chest(Inch)</th>\n            <th>Chest(CM)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>S </td>\n            <td>34" - 36" </td>\n            <td>86cm - 91cm </td>\n          </tr>\n          <tr>\n            <td>M </td>\n            <td>37" - 39" </td>\n            <td>94cm - 99cm </td>\n          </tr>\n          <tr>\n            <td>L </td>\n            <td>40" - 42" </td>\n            <td>102cm - 107cm </td>\n          </tr>\n          <tr>\n            <td>XL </td>\n            <td>43" - 45" </td>\n            <td>109cm - 114cm </td>\n          </tr>\n          <tr>\n            <td>2XL </td>\n            <td>46" - 48" </td>\n            <td>117cm - 122cm </td>\n          </tr>\n          <tr>\n            <td>3XL </td>\n            <td>49" - 50" </td>\n            <td>124cm - 127cm</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class="table-image"><img asset_uid="bltc26470b5dea704d4" src="https://images.contentstack.io/v3/assets/blt5e74b011b6ec65cd/bltc26470b5dea704d4/6541fcbc4ed3b2001a90c445/GolfGlovesSizeCharts.png?branch=develop" height="auto" /></div>\n</div>',
          },
          {
            category_picker: "01412,0145,0143",
            _metadata: {
              uid: "cs47608cc40eea4883",
            },
            label: "BOTTOMS",
            table_data:
              '<div class="table-data">\n  <p>Measure at the fullest part of the chest, under the armpits and over the shoulder blades, keeping the tape measure firm and level.</p>\n  <div class="row">\n    <div class="table">\n      <table class="table table-striped">\n        <thead>\n          <tr>\n            <th>Size</th>\n            <th>Chest(Inch)</th>\n            <th>Chest(CM)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>S </td>\n            <td>34" - 36" </td>\n            <td>86cm - 91cm </td>\n          </tr>\n          <tr>\n            <td>M </td>\n            <td>37" - 39" </td>\n            <td>94cm - 99cm </td>\n          </tr>\n          <tr>\n            <td>L </td>\n            <td>40" - 42" </td>\n            <td>102cm - 107cm </td>\n          </tr>\n          <tr>\n            <td>XL </td>\n            <td>43" - 45" </td>\n            <td>109cm - 114cm </td>\n          </tr>\n          <tr>\n            <td>2XL </td>\n            <td>46" - 48" </td>\n            <td>117cm - 122cm </td>\n          </tr>\n          <tr>\n            <td>3XL </td>\n            <td>49" - 50" </td>\n            <td>124cm - 127cm</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class="table-image"><img asset_uid="bltbb67b00c5b5296bf" src="https://images.contentstack.io/v3/assets/blt5e74b011b6ec65cd/bltbb67b00c5b5296bf/64c11d8b320b7e3b7bca859a/TM_Rewards.png?branch=predev" /></div>\n  </div>\n</div>',
          },
        ],
      },
      tags: [],
      title: "Size Charts",
      updated_at: "2023-11-08T16:05:47.595Z",
      updated_by: "blt78fe312f4dcc2750",
      _content_type_uid: "size_charts",
      publish_details: {
        environment: "blt0cb0a00f31ca2427",
        locale: "en-us",
        time: "2023-11-08T16:06:24.248Z",
        user: "blt78fe312f4dcc2750",
      },
    },
    userAuthModal: {
      _version: 1,
      locale: "en-us",
      uid: "blte3a9ca72b197e924",
      ACL: {},
      _in_progress: false,
      created_at: "2023-11-08T16:05:52.551Z",
      created_by: "blt78fe312f4dcc2750",
      private: {
        user_greeting: "Hi {firstName}",
        rewards_status: "",
        redeemable_points: "",
        rewards_dashboard_link_label: "",
        account_links: [
          {
            title: "Account Dashboard",
            href: "/",
            uuid: 36457,
          },
          {
            title: "Order Status",
            href: "/",
          },
          {
            title: "Purchase History",
            href: "/",
          },
          {
            title: "Returns",
            href: "/",
          },
        ],
        account_management_links_heading: "Account Managment",
        logout_button_label: "Logout",
      },
      shared: {
        brand_logo: {
          _version: 1,
          is_dir: false,
          uid: "blt55be7e36e4e5f56d",
          ACL: {},
          content_type: "image/png",
          created_at: "2023-11-08T16:02:54.638Z",
          created_by: "blt78fe312f4dcc2750",
          file_size: "1471",
          filename: "headerlogo_mobile.png",
          parent_uid: "blt9e313e28cf8edebf",
          tags: [],
          title: "headerlogo_mobile.png",
          updated_at: "2023-11-08T16:02:54.638Z",
          updated_by: "blt78fe312f4dcc2750",
          publish_details: {
            environment: "blt0cb0a00f31ca2427",
            locale: "en-us",
            time: "2023-11-08T16:04:03.124Z",
            user: "blt78fe312f4dcc2750",
          },
          url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt55be7e36e4e5f56d/654bb12edd8ee90407019eb0/headerlogo_mobile.png",
        },
        rewards_label: "Rewards",
        email: "Email",
        password: "Password",
        terms_and_conditions:
          '<label class="py-3 italic gigya-composite-control gigya-composite-control-label agree-text padding-bottom agree-text-padding" data-binding="true" data-screenset-roles="template,instance,instance,instance" data-screenset-element-id="__gig_template_element_12_1697191102292" data-screenset-element-id-publish="false">By signing in, you agree to Travis Mathew\'s <a target="_blank" data-binding="true" class="underline" data-screenset-roles="template,instance,template,instance,template,instance,instance" href="https://login.travismathew.com/accounts.store.downloadPublicConsentDocument?docID=54071875_602458724689_4f3d6f12044b49cb9d8f95499dddb202" data-screenset-element-id="__gig_template_element_13_1697191102292" data-screenset-element-id-publish="false"><u>Terms of Use</u></a> and <a target="_blank" data-binding="true" class="underline" data-screenset-element-id-publish="false" data-screenset-roles="template,instance,template,instance,template,instance,instance" href="https://login.travismathew.com/accounts.store.downloadPublicConsentDocument?docID=54071875_602458724689_9169f597ce8a4052b3a8eddf3a52b3e0" data-screenset-element-id="__gig_template_element_14_1697191102292"><u>TM Reward Program Terms of Use</u></a>, and that you have reviewed its <a target="_blank" class="underline" data-binding="true" data-screenset-element-id-publish="false" data-screenset-roles="template,instance,template,instance,template,instance,instance" href="https://login.travismathew.com/accounts.store.downloadPublicConsentDocument?docID=54071875_602458724689_8e76fb9215924b29873315f7f25d25a1" data-screenset-element-id="__gig_template_element_15_1697191102292"><u>Privacy, Ad, &amp; Cookie Policies</u>.</a></label>',
      },
      sign_in: {
        welcome: "Welcome Back!",
        message:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>",
        need_an_account: "Need an Account?",
        sign_up_toggle_label: "Sign up",
        sign_in_form_label: "Sign in",
        remember_me_checkbox_label: "Remember Me",
        forgot_password_link_label: "Forgot Password",
        sign_in_button_label: "Sign In",
        submission_failure_message: "",
      },
      sign_up: {
        welcome: "Welcome",
        message:
          "<p>It’s free to join &amp; you can start earning right away!</p>",
        callouts: [
          {
            icon: {
              _version: 1,
              is_dir: false,
              uid: "blt6839ada6003522c3",
              ACL: {},
              content_type: "image/png",
              created_at: "2023-11-08T16:03:02.855Z",
              created_by: "blt78fe312f4dcc2750",
              file_size: "963",
              filename: "tmr1_1.png",
              parent_uid: "blt9e313e28cf8edebf",
              tags: [],
              title: "tmr1_1.png",
              updated_at: "2023-11-08T16:03:02.855Z",
              updated_by: "blt78fe312f4dcc2750",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2023-11-08T16:04:11.112Z",
                user: "blt78fe312f4dcc2750",
              },
              url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt6839ada6003522c3/654bb136e4791d040a0fb950/tmr1_1.png",
            },
            _metadata: {
              uid: "cs1119482b97664042",
            },
            message: "Get FREE Shipping & Returns",
          },
          {
            icon: {
              _version: 1,
              is_dir: false,
              uid: "blt68ae6735b61227ea",
              ACL: {},
              content_type: "image/png",
              created_at: "2023-11-08T16:03:01.805Z",
              created_by: "blt78fe312f4dcc2750",
              file_size: "1191",
              filename: "tmr2_1.png",
              parent_uid: "blt9e313e28cf8edebf",
              tags: [],
              title: "tmr2_1.png",
              updated_at: "2023-11-08T16:03:01.805Z",
              updated_by: "blt78fe312f4dcc2750",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2023-11-08T16:04:10.138Z",
                user: "blt78fe312f4dcc2750",
              },
              url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt68ae6735b61227ea/654bb135b052e404077814e9/tmr2_1.png",
            },
            _metadata: {
              uid: "cs2ae9ed8abec4345e",
            },
            message: "Earn FREE Exclusive Products",
          },
          {
            icon: {
              _version: 1,
              is_dir: false,
              uid: "bltf14e0cb9afcc835a",
              ACL: {},
              content_type: "image/png",
              created_at: "2023-11-08T16:03:01.748Z",
              created_by: "blt78fe312f4dcc2750",
              file_size: "1385",
              filename: "tmr3_1.png",
              parent_uid: "blt9e313e28cf8edebf",
              tags: [],
              title: "tmr3_1.png",
              updated_at: "2023-11-08T16:03:01.748Z",
              updated_by: "blt78fe312f4dcc2750",
              publish_details: {
                environment: "blt0cb0a00f31ca2427",
                locale: "en-us",
                time: "2023-11-08T16:04:10.100Z",
                user: "blt78fe312f4dcc2750",
              },
              url: "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltf14e0cb9afcc835a/654bb1359f81bf040a6484ac/tmr3_1.png",
            },
            _metadata: {
              uid: "csc617e7dec564f007",
            },
            message: "Earn & Redeem Points on Purchases",
          },
        ],
        learn_more_link: {
          title: "Learn More",
          href: "/",
        },
        sign_up_form_label: "Sign UP",
        first_name: "First Name",
        last_name: "Last Name",
        promo_signup_checkbox_label:
          "Sign up for email and get special news and offers from TravisMathew and Cuater.",
        sign_up_button_label: "Sign Up",
        submission_failure_message: "",
      },
      tags: [],
      title: "Travis Mathew User Authentication Form Labels",
      updated_at: "2023-11-08T16:05:52.551Z",
      updated_by: "blt78fe312f4dcc2750",
      _content_type_uid: "user_auth_modal",
      publish_details: {
        environment: "blt0cb0a00f31ca2427",
        locale: "en-us",
        time: "2023-11-08T16:06:29.117Z",
        user: "blt78fe312f4dcc2750",
      },
    },
  };

  return (
    <html lang="en">
      <body>
        <HeaderAndFooter
          labels={labels2}
          footerData={footerData2}
          headerDataResponse={headerDataResponse2}
        >
          {children}
        </HeaderAndFooter>
      </body>
    </html>
  );
}
