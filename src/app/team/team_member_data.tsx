interface TeamMemberData {
    name: string;
    image: string;
    links: {
        url: string;
        iconPath: string;
    }[];
}

export const team: TeamMemberData[] = [
    {
        name: "Lukas Plenk",
        image: "/team/lukas.jpeg",
        links: [
            {
            url: "https://github.com/LukPle",
            iconPath: "/github.svg"
            },
            {
            url: "https://linkedin.com/in/lukasplenk",
            iconPath: "/linkedin.svg"
            }
        ]
    },
    {
        name: "Paul Walter",
        image: "/team/paul.jpeg",
        links: [
            {
            url: "https://github.com/BitterSchoki",
            iconPath: "/github.svg"
            },
            {
            url: "https://www.linkedin.com/in/paul-walter-74009224b/",
            iconPath: "/linkedin.svg"
            }
        ]
    },
    {
        name: "Raphael Wennmacher",
        image: "/team/raffi.jpeg",
        links: [
          {
            url: "https://github.com/rpgraffi",
            iconPath: "/github.svg"
          },
          {
            url: "https://www.linkedin.com/in/raphael-wennmacher/",
            iconPath: "/linkedin.svg"
          }
        ]
      },
      {
        name: "Timothy Summers",
        image: "/team/tim.jpeg",
        links: [
          {
            url: "https://github.com/timothymaxwellsummers",
            iconPath: "/github.svg"
          },
          {
            url: "https://www.linkedin.com/in/timothymaxwellsummers/",
            iconPath: "/linkedin.svg"
          }
        ]
      },
      {
        name: "Fiona Lau",
        image: "/team/fiona.jpeg",
        links: [
          {
            url: "https://github.com/blackSwan566",
            iconPath: "/github.svg"
          },
          {
            url: "https://www.linkedin.com/in/fiona-lau-040421280/",
            iconPath: "/linkedin.svg"
          }
        ]
      },
      {
        name: "Anton Rockenstein",
        image: "/team/anton.jpg",
        links: [
          {
            url: "https://github.com/SirAntonySir",
            iconPath: "/github.svg"
          },
          {
            url: "https://www.linkedin.com/in/anton-rockenstein-87a332244/",
            iconPath: "/linkedin.svg"
          }
        ]
      },
]
