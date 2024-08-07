import Footer from "/components/Sitewide/Footer/Footer";

const navigation_group = [
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
];

const locale_picker_regions = [
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
];

const bottom_row_links = [
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
];
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Components/Sitewide/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {
    // lang: "en-US",
    navigation_group: navigation_group,
    bottom_row_links: bottom_row_links,
    subfooter_copyright: "Copyright © ${year} Capgemini",
    contact_info:
      '<li><a classname="p-xs" href="tel:${1-877-969-1952}" target="_self">1-877-969-1952</a></li>\n<li classname="p-xs">Mon-Fri : 8AM - 5PM PST</li>\n<li><a classname="p-xs" href="/" target="_self">Contact us</a></li>\n<li><a classname="p-xs" href="/" target="_self">15202 Graham , St. Huntington<br />Beach, CA 926491</a></li>',
    contact_info_heading: "Contact Us",
    subfooter_copyright: "Copyright © ${year} Capgemini",
    locale_picker_regions: locale_picker_regions,
    // eachNode: { title: "hi" },
  },
  args: {
    navigation_group: navigation_group,
    bottom_row_links: bottom_row_links,
    contact_info:
      '<li><a classname="p-xs" href="tel:${1-877-969-1952}" target="_self">1-877-969-1952</a></li>\n<li classname="p-xs">Mon-Fri : 8AM - 5PM PST</li>\n<li><a classname="p-xs" href="/" target="_self">Contact us</a></li>\n<li><a classname="p-xs" href="/" target="_self">15202 Graham , St. Huntington<br />Beach, CA 926491</a></li>',
    contact_info_heading: "Contact Us",
    subfooter_copyright: "Copyright © ${year} Capgemini",
    locale_picker_regions: locale_picker_regions,
    // eachNode: { title: "hi" },
  },
  parameters: {
    design: [
      {
        type: "figma",
        name: "Mobile",
        url: "https://www.figma.com/file/tlQe2WirTOpYUmoRVmR441/CG-Site-Refresh-2023?type=design&node-id=1%3A26463&t=IOdtfClI40VIAsNr-1",
      },
      {
        type: "figma",
        name: "Desktop",
        url: "https://www.figma.com/file/tlQe2WirTOpYUmoRVmR441/CG-Site-Refresh-2023?type=design&node-id=1%3A34308&t=IOdtfClI40VIAsNr-1",
      },
    ],
  },
};

// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = (args) => <Footer {...args} />;
