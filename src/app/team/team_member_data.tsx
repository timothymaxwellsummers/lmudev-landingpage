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
        image: "/team/avatar_placeholder_male.png",
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
        image: "/team/avatar_placeholder_male.png",
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
        image: "/team/avatar_placeholder_male.png",
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
        image: "/team/avatar_placeholder_male.png",
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
        image: "/team/avatar_placeholder_female.png",
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
        image: "/team/avatar_placeholder_male.png",
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
