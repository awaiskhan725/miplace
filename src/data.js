import newsImg1 from "./images/news-image-1.jpg";
import newsImg2 from "./images/news-image-2.png";
import newsImg3 from "./images/news-image-3.jpeg";
import newsImg4 from "./images/news-image-4.jpg";

import Agent1 from "./images/agent-1.jpg";
import Agent2 from "./images/agent-2.jpg";
import Agent3 from "./images/agent-3.jpg";

import PropertyImage1 from "./images/property-image-1.jpg";
import PropertyImage2 from "./images/property-image-2.png";
import PropertyImage3 from "./images/property-image-3.jpg";

import BedroomImage1 from "./images/bedroom-image-1.jpg";
import BedroomImage2 from "./images/bedroom-image-2.jpg";

export default [
  {
    sys: {
      id: "1",
    },
    fields: {
      heading:
        "Open-for-inspections go online as property market shifts to virtual",
      slug:
        "Open-for-inspections go online as property market shifts to virtual",
      type: "news",
      user: "Emily Hutchinson",
      postDate: "1st March 2020",
      featured: true,
      description:
        "Despite the ban on auctions and open for inspections, MiPlace's new tool means you can still virtually tour...",
      images: [
        {
          fields: {
            file: {
              url: newsImg1,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      heading: "Online off-the-plan enquiries surge ahead of open house ban",
      slug: "Online off-the-plan enquiries surge ahead of open house ban",
      type: "news",
      user: "Jacob Robinson",
      postDate: "2nd March 2020",
      featured: true,
      description:
        "The Government will ban open-for-inspections from midnight tonight amid the coronavirus crisis, but potential off-the...",
      images: [
        {
          fields: {
            file: {
              url: newsImg2,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      heading: "For Sale",
      slug: "property-apartment-nsw-sydney-3",
      type: "buy",
      user: "Josh Greene",
      userContact: "0412345678",
      postDate: "4th March 2020",
      price: 1100000,
      address: "391 Pitt Street",
      suburb: "Sydney",
      state: "NSW",
      postCode: 2000,
      bedrooms: 3,
      bathroom: 2,
      carPark: 2,
      propertyType: "Apartment",
      description:
        "Inspections available by private appointment. Please contact our team to arrange your preferred viewing time. A showcase of style and sophistication on Level 26 of 'Quay West', this magnificent apartment is defined by a luxuriously spacious 145sqm floorplan and stunning views across the harbour to the city skyline within steps of Barangaroo and Circular Quay.",
      extra: [
        "Generous living and dining areas boasts a wraparound balcony",
        "Sweeping views of the western harbour, Blue Mountains and CBD",
        "Large gourmet granite kitchen offers premium Miele appliances",
        "Deluxe master bedroom has built-ins and a plush bath ensuite",
        "Bright second bedroom has built-ins, third bedroom or office",
        "Pristine granite bathroom with bath, separate internal laundry",
        "Air conditioning, secure tandem parking, recently updated",
        "Positioned in the 'private residences' wing with private lobby",
        "Lift access, concierge, communal balconies plus gym and pool",
        "Short stroll to Circular Quay, fine dining and entertainment",
      ],
      strataInfo: {
        strata: 4668,
        council: 247,
        water: 183,
      },
      propertyInfo: {
        area: 145,
        parking: 32,
      },
      featured: true,
      images: [
        {
          fields: {
            file: {
              url: PropertyImage1,
            },
          },
        },
        {
          fields: {
            file: {
              url: BedroomImage1,
            },
          },
        },
        {
          fields: {
            file: {
              url: BedroomImage2,
            },
          },
        },
      ],
      userPhoto: [{ fields: { file: { url: Agent1 } } }],
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      heading:
        "The perfect place to self-isolate: Noosa beachfront home with epic water slide and killer views sell for $8.6m",
      slug:
        "The perfect place to self-isolate: Noosa beachfront home with epic water slide and killer views sell for $8.6m",
      type: "news",
      user: "Elizabeth Tilley",
      postDate: "4th March 2020",
      featured: true,
      description:
        "A very lucky - and loaded - buyer has just scored a beachfront trophy home with its own water slide and insane views...",
      images: [
        {
          fields: {
            file: {
              url: newsImg3,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "5",
    },
    fields: {
      heading: "Technology that helps renters make a house a home",
      slug: "Technology that helps renters make a house a home",
      type: "news",
      user: "Emily Hutchinson",
      postDate: "10th March 2020",
      featured: false,
      description:
        "As a renter, it can often feel as though you're asking your landlord if you're allowed to sneeze in your own home...",
      images: [
        {
          fields: {
            file: {
              url: newsImg4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "6",
    },
    fields: {
      heading: "$6,000,000",
      slug: "property-buy-2",
      type: "buy",
      user: "Genevieve Meegan",
      postDate: "4th March 2020",
      price: 6000000,
      address: "Tusmore",
      suburb: "Adelaide",
      state: "SA",
      postCode: 5065,
      bedrooms: 6,
      bathroom: 6,
      carPark: 4,
      propertyType: "Villa",
      featured: false,
      images: [
        {
          fields: {
            file: {
              url: PropertyImage2,
            },
          },
        },
      ],
      userPhoto: [{ fields: { file: { url: Agent2 } } }],
    },
  },
  {
    sys: {
      id: "7",
    },
    fields: {
      heading: "$1,925,000",
      slug: "property-buy-3",
      type: "buy",
      user: "Mark McRae",
      postDate: "4th March 2020",
      price: 1925000,
      address: "103 Bendooley Street",
      suburb: "Bowral",
      state: "NSW",
      postCode: 2576,
      bedrooms: 3,
      bathroom: 2,
      carPark: 2,
      propertyType: "House",
      featured: false,
      images: [
        {
          fields: {
            file: {
              url: PropertyImage3,
            },
          },
        },
      ],
      userPhoto: [{ fields: { file: { url: Agent3 } } }],
    },
  },
  {
    sys: {
      id: "8",
    },
    fields: {
      heading: "$1,925,000",
      slug: "property-buy-3",
      type: "buy",
      user: "Mark McRae",
      postDate: "4th March 2020",
      price: 1925000,
      address: "103 Bendooley Street",
      suburb: "Bowral",
      state: "NSW",
      postCode: 2576,
      bedrooms: 3,
      bathroom: 2,
      carPark: 2,
      propertyType: "Townhouse",
      featured: false,
      images: [
        {
          fields: {
            file: {
              url: PropertyImage3,
            },
          },
        },
      ],
      userPhoto: [{ fields: { file: { url: Agent3 } } }],
    },
  },
];
