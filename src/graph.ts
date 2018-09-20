import { GraphVerticeDTO } from "./dto/models";

export const graph: Array<GraphVerticeDTO> = [
  {
    id: 6870,
    parents: [],
    i18n: [
      {
        id: 849,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 1"
          },
          {
            key: "description",
            value: "this is the content of the question 1"
          }
        ]
      }
    ],
    children: [
      {
        id: 1772,
        source: 6870,
        destination: 5008,
        weight: 1,
        i18n: [
          {
            id: 7151,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 3"
              },
              {
                key: "description",
                value: "this is the content of the question 3"
              }
            ]
          }
        ]
      },
      {
        id: 1765,
        source: 6870,
        destination: 6481,
        weight: 6,
        i18n: [
          {
            id: 7475,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 29"
              },
              {
                key: "description",
                value: "this is the content of the question 29"
              }
            ]
          }
        ]
      },
      {
        id: 6583,
        source: 6870,
        destination: 4452,
        weight: 11,
        i18n: [
          {
            id: 5191,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 55"
              },
              {
                key: "description",
                value: "this is the content of the question 55"
              }
            ]
          }
        ]
      },
      {
        id: 7336,
        source: 6870,
        destination: 7936,
        weight: 15,
        i18n: [
          {
            id: 5986,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 75"
              },
              {
                key: "description",
                value: "this is the content of the question 75"
              }
            ]
          }
        ]
      }
    ],
    choices: []
  },
  {
    id: 5008,
    parents: [1772],
    i18n: [
      {
        id: 6613,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 2"
          },
          {
            key: "description",
            value: "this is the content of the question 2"
          }
        ]
      }
    ],
    children: [
      {
        id: 4097,
        source: 5008,
        destination: 8945,
        weight: 2,
        i18n: [
          {
            id: 785,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 5"
              },
              {
                key: "description",
                value: "this is the content of the question 5"
              }
            ]
          }
        ]
      },
      {
        id: 1334,
        source: 5008,
        destination: 4156,
        weight: 3,
        i18n: [
          {
            id: 7747,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 11"
              },
              {
                key: "description",
                value: "this is the content of the question 11"
              }
            ]
          }
        ]
      },
      {
        id: 7625,
        source: 5008,
        destination: 6901,
        weight: 4,
        i18n: [
          {
            id: 1583,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 17"
              },
              {
                key: "description",
                value: "this is the content of the question 17"
              }
            ]
          }
        ]
      },
      {
        id: 3284,
        source: 5008,
        destination: 578,
        weight: 5,
        i18n: [
          {
            id: 4715,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 23"
              },
              {
                key: "description",
                value: "this is the content of the question 23"
              }
            ]
          }
        ]
      }
    ],
    choices: []
  },
  {
    id: 8945,
    parents: [4097],
    i18n: [
      {
        id: 9648,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 4"
          },
          {
            key: "description",
            value: "this is the content of the question 4"
          }
        ]
      }
    ],
    children: [],
    choices: [
      {
        id: 9902,
        i18n: [
          {
            id: 1718,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 6"
              },
              {
                key: "description",
                value: "this is the content of the question 6"
              }
            ]
          }
        ],
        rank: 0
      },
      {
        id: 3212,
        i18n: [
          {
            id: 6472,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 7"
              },
              {
                key: "description",
                value: "this is the content of the question 7"
              }
            ]
          }
        ],
        rank: 1
      },
      {
        id: 9188,
        i18n: [
          {
            id: 4508,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 8"
              },
              {
                key: "description",
                value: "this is the content of the question 8"
              }
            ]
          }
        ],
        rank: 2
      },
      {
        id: 1812,
        i18n: [
          {
            id: 7459,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 9"
              },
              {
                key: "description",
                value: "this is the content of the question 9"
              }
            ]
          }
        ],
        rank: 3
      }
    ]
  },
  {
    id: 4156,
    parents: [1334],
    i18n: [
      {
        id: 7058,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 10"
          },
          {
            key: "description",
            value: "this is the content of the question 10"
          }
        ]
      }
    ],
    children: [],
    choices: [
      {
        id: 3134,
        i18n: [
          {
            id: 10006,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 12"
              },
              {
                key: "description",
                value: "this is the content of the question 12"
              }
            ]
          }
        ],
        rank: 0
      },
      {
        id: 8583,
        i18n: [
          {
            id: 5577,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 13"
              },
              {
                key: "description",
                value: "this is the content of the question 13"
              }
            ]
          }
        ],
        rank: 1
      },
      {
        id: 8854,
        i18n: [
          {
            id: 2338,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 14"
              },
              {
                key: "description",
                value: "this is the content of the question 14"
              }
            ]
          }
        ],
        rank: 2
      },
      {
        id: 5163,
        i18n: [
          {
            id: 4413,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 15"
              },
              {
                key: "description",
                value: "this is the content of the question 15"
              }
            ]
          }
        ],
        rank: 3
      }
    ]
  },
  {
    id: 6901,
    parents: [7625],
    i18n: [
      {
        id: 78,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 16"
          },
          {
            key: "description",
            value: "this is the content of the question 16"
          }
        ]
      }
    ],
    children: [],
    choices: [
      {
        id: 555,
        i18n: [
          {
            id: 10023,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 18"
              },
              {
                key: "description",
                value: "this is the content of the question 18"
              }
            ]
          }
        ],
        rank: 0
      },
      {
        id: 5467,
        i18n: [
          {
            id: 6927,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 19"
              },
              {
                key: "description",
                value: "this is the content of the question 19"
              }
            ]
          }
        ],
        rank: 1
      },
      {
        id: 4125,
        i18n: [
          {
            id: 861,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 20"
              },
              {
                key: "description",
                value: "this is the content of the question 20"
              }
            ]
          }
        ],
        rank: 2
      },
      {
        id: 9357,
        i18n: [
          {
            id: 518,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 21"
              },
              {
                key: "description",
                value: "this is the content of the question 21"
              }
            ]
          }
        ],
        rank: 3
      }
    ]
  },
  {
    id: 578,
    parents: [3284],
    i18n: [
      {
        id: 8067,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 22"
          },
          {
            key: "description",
            value: "this is the content of the question 22"
          }
        ]
      }
    ],
    children: [],
    choices: [
      {
        id: 8643,
        i18n: [
          {
            id: 4977,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 24"
              },
              {
                key: "description",
                value: "this is the content of the question 24"
              }
            ]
          }
        ],
        rank: 0
      },
      {
        id: 2175,
        i18n: [
          {
            id: 7343,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 25"
              },
              {
                key: "description",
                value: "this is the content of the question 25"
              }
            ]
          }
        ],
        rank: 1
      },
      {
        id: 8179,
        i18n: [
          {
            id: 8914,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 26"
              },
              {
                key: "description",
                value: "this is the content of the question 26"
              }
            ]
          }
        ],
        rank: 2
      },
      {
        id: 8521,
        i18n: [
          {
            id: 4866,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 27"
              },
              {
                key: "description",
                value: "this is the content of the question 27"
              }
            ]
          }
        ],
        rank: 3
      }
    ]
  },
  {
    id: 6481,
    parents: [1765],
    i18n: [
      {
        id: 1715,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 28"
          },
          {
            key: "description",
            value: "this is the content of the question 28"
          }
        ]
      }
    ],
    children: [
      {
        id: 3369,
        source: 6481,
        destination: 9063,
        weight: 7,
        i18n: [
          {
            id: 2601,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 31"
              },
              {
                key: "description",
                value: "this is the content of the question 31"
              }
            ]
          }
        ]
      },
      {
        id: 4008,
        source: 6481,
        destination: 8546,
        weight: 8,
        i18n: [
          {
            id: 8699,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 37"
              },
              {
                key: "description",
                value: "this is the content of the question 37"
              }
            ]
          }
        ]
      },
      {
        id: 8203,
        source: 6481,
        destination: 4368,
        weight: 9,
        i18n: [
          {
            id: 2425,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 43"
              },
              {
                key: "description",
                value: "this is the content of the question 43"
              }
            ]
          }
        ]
      },
      {
        id: 4360,
        source: 6481,
        destination: 5326,
        weight: 10,
        i18n: [
          {
            id: 823,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 49"
              },
              {
                key: "description",
                value: "this is the content of the question 49"
              }
            ]
          }
        ]
      }
    ],
    choices: []
  },
  {
    id: 9063,
    parents: [3369],
    i18n: [
      {
        id: 3931,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 30"
          },
          {
            key: "description",
            value: "this is the content of the question 30"
          }
        ]
      }
    ],
    children: [],
    choices: [
      {
        id: 3553,
        i18n: [
          {
            id: 5217,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 32"
              },
              {
                key: "description",
                value: "this is the content of the question 32"
              }
            ]
          }
        ],
        rank: 0
      },
      {
        id: 5716,
        i18n: [
          {
            id: 1131,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 33"
              },
              {
                key: "description",
                value: "this is the content of the question 33"
              }
            ]
          }
        ],
        rank: 1
      },
      {
        id: 9459,
        i18n: [
          {
            id: 5105,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 34"
              },
              {
                key: "description",
                value: "this is the content of the question 34"
              }
            ]
          }
        ],
        rank: 2
      },
      {
        id: 1904,
        i18n: [
          {
            id: 3917,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 35"
              },
              {
                key: "description",
                value: "this is the content of the question 35"
              }
            ]
          }
        ],
        rank: 3
      }
    ]
  },
  {
    id: 8546,
    parents: [4008],
    i18n: [
      {
        id: 2754,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 36"
          },
          {
            key: "description",
            value: "this is the content of the question 36"
          }
        ]
      }
    ],
    children: [],
    choices: [
      {
        id: 7526,
        i18n: [
          {
            id: 9203,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 38"
              },
              {
                key: "description",
                value: "this is the content of the question 38"
              }
            ]
          }
        ],
        rank: 0
      },
      {
        id: 529,
        i18n: [
          {
            id: 8075,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 39"
              },
              {
                key: "description",
                value: "this is the content of the question 39"
              }
            ]
          }
        ],
        rank: 1
      },
      {
        id: 3854,
        i18n: [
          {
            id: 1878,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 40"
              },
              {
                key: "description",
                value: "this is the content of the question 40"
              }
            ]
          }
        ],
        rank: 2
      },
      {
        id: 2575,
        i18n: [
          {
            id: 5883,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 41"
              },
              {
                key: "description",
                value: "this is the content of the question 41"
              }
            ]
          }
        ],
        rank: 3
      }
    ]
  },
  {
    id: 4368,
    parents: [8203],
    i18n: [
      {
        id: 2776,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 42"
          },
          {
            key: "description",
            value: "this is the content of the question 42"
          }
        ]
      }
    ],
    children: [],
    choices: [
      {
        id: 7259,
        i18n: [
          {
            id: 3954,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 44"
              },
              {
                key: "description",
                value: "this is the content of the question 44"
              }
            ]
          }
        ],
        rank: 0
      },
      {
        id: 3000,
        i18n: [
          {
            id: 9194,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 45"
              },
              {
                key: "description",
                value: "this is the content of the question 45"
              }
            ]
          }
        ],
        rank: 1
      },
      {
        id: 1255,
        i18n: [
          {
            id: 9968,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 46"
              },
              {
                key: "description",
                value: "this is the content of the question 46"
              }
            ]
          }
        ],
        rank: 2
      },
      {
        id: 7032,
        i18n: [
          {
            id: 5917,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 47"
              },
              {
                key: "description",
                value: "this is the content of the question 47"
              }
            ]
          }
        ],
        rank: 3
      }
    ]
  },
  {
    id: 5326,
    parents: [4360],
    i18n: [
      {
        id: 3289,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 48"
          },
          {
            key: "description",
            value: "this is the content of the question 48"
          }
        ]
      }
    ],
    children: [],
    choices: [
      {
        id: 2279,
        i18n: [
          {
            id: 3427,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 50"
              },
              {
                key: "description",
                value: "this is the content of the question 50"
              }
            ]
          }
        ],
        rank: 0
      },
      {
        id: 6432,
        i18n: [
          {
            id: 1752,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 51"
              },
              {
                key: "description",
                value: "this is the content of the question 51"
              }
            ]
          }
        ],
        rank: 1
      },
      {
        id: 7675,
        i18n: [
          {
            id: 992,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 52"
              },
              {
                key: "description",
                value: "this is the content of the question 52"
              }
            ]
          }
        ],
        rank: 2
      },
      {
        id: 1937,
        i18n: [
          {
            id: 7008,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 53"
              },
              {
                key: "description",
                value: "this is the content of the question 53"
              }
            ]
          }
        ],
        rank: 3
      }
    ]
  },
  {
    id: 4452,
    parents: [6583],
    i18n: [
      {
        id: 9309,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 54"
          },
          {
            key: "description",
            value: "this is the content of the question 54"
          }
        ]
      }
    ],
    children: [
      {
        id: 2461,
        source: 4452,
        destination: 1297,
        weight: 12,
        i18n: [
          {
            id: 1350,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 57"
              },
              {
                key: "description",
                value: "this is the content of the question 57"
              }
            ]
          }
        ]
      },
      {
        id: 5256,
        source: 4452,
        destination: 9991,
        weight: 13,
        i18n: [
          {
            id: 3179,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 63"
              },
              {
                key: "description",
                value: "this is the content of the question 63"
              }
            ]
          }
        ]
      },
      {
        id: 3831,
        source: 4452,
        destination: 9163,
        weight: 14,
        i18n: [
          {
            id: 4824,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 69"
              },
              {
                key: "description",
                value: "this is the content of the question 69"
              }
            ]
          }
        ]
      }
    ],
    choices: []
  },
  {
    id: 1297,
    parents: [2461],
    i18n: [
      {
        id: 8547,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 56"
          },
          {
            key: "description",
            value: "this is the content of the question 56"
          }
        ]
      }
    ],
    children: [],
    choices: [
      {
        id: 9004,
        i18n: [
          {
            id: 679,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 58"
              },
              {
                key: "description",
                value: "this is the content of the question 58"
              }
            ]
          }
        ],
        rank: 0
      },
      {
        id: 2177,
        i18n: [
          {
            id: 1162,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 59"
              },
              {
                key: "description",
                value: "this is the content of the question 59"
              }
            ]
          }
        ],
        rank: 1
      },
      {
        id: 3799,
        i18n: [
          {
            id: 6050,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 60"
              },
              {
                key: "description",
                value: "this is the content of the question 60"
              }
            ]
          }
        ],
        rank: 2
      },
      {
        id: 3400,
        i18n: [
          {
            id: 6790,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 61"
              },
              {
                key: "description",
                value: "this is the content of the question 61"
              }
            ]
          }
        ],
        rank: 3
      }
    ]
  },
  {
    id: 9991,
    parents: [5256],
    i18n: [
      {
        id: 803,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 62"
          },
          {
            key: "description",
            value: "this is the content of the question 62"
          }
        ]
      }
    ],
    children: [],
    choices: [
      {
        id: 9133,
        i18n: [
          {
            id: 1102,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 64"
              },
              {
                key: "description",
                value: "this is the content of the question 64"
              }
            ]
          }
        ],
        rank: 0
      },
      {
        id: 9971,
        i18n: [
          {
            id: 1463,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 65"
              },
              {
                key: "description",
                value: "this is the content of the question 65"
              }
            ]
          }
        ],
        rank: 1
      },
      {
        id: 8544,
        i18n: [
          {
            id: 8723,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 66"
              },
              {
                key: "description",
                value: "this is the content of the question 66"
              }
            ]
          }
        ],
        rank: 2
      },
      {
        id: 9305,
        i18n: [
          {
            id: 4775,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 67"
              },
              {
                key: "description",
                value: "this is the content of the question 67"
              }
            ]
          }
        ],
        rank: 3
      }
    ]
  },
  {
    id: 9163,
    parents: [3831],
    i18n: [
      {
        id: 3835,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 68"
          },
          {
            key: "description",
            value: "this is the content of the question 68"
          }
        ]
      }
    ],
    children: [],
    choices: [
      {
        id: 7942,
        i18n: [
          {
            id: 7917,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 70"
              },
              {
                key: "description",
                value: "this is the content of the question 70"
              }
            ]
          }
        ],
        rank: 0
      },
      {
        id: 597,
        i18n: [
          {
            id: 6254,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 71"
              },
              {
                key: "description",
                value: "this is the content of the question 71"
              }
            ]
          }
        ],
        rank: 1
      },
      {
        id: 4464,
        i18n: [
          {
            id: 8757,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 72"
              },
              {
                key: "description",
                value: "this is the content of the question 72"
              }
            ]
          }
        ],
        rank: 2
      },
      {
        id: 2029,
        i18n: [
          {
            id: 2820,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 73"
              },
              {
                key: "description",
                value: "this is the content of the question 73"
              }
            ]
          }
        ],
        rank: 3
      }
    ]
  },
  {
    id: 7936,
    parents: [7336],
    i18n: [
      {
        id: 1773,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 74"
          },
          {
            key: "description",
            value: "this is the content of the question 74"
          }
        ]
      }
    ],
    children: [
      {
        id: 3081,
        source: 7936,
        destination: 648,
        weight: 16,
        i18n: [
          {
            id: 8499,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 77"
              },
              {
                key: "description",
                value: "this is the content of the question 77"
              }
            ]
          }
        ]
      },
      {
        id: 9886,
        source: 7936,
        destination: 875,
        weight: 17,
        i18n: [
          {
            id: 5295,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 83"
              },
              {
                key: "description",
                value: "this is the content of the question 83"
              }
            ]
          }
        ]
      },
      {
        id: 9103,
        source: 7936,
        destination: 6493,
        weight: 18,
        i18n: [
          {
            id: 7656,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 89"
              },
              {
                key: "description",
                value: "this is the content of the question 89"
              }
            ]
          }
        ]
      },
      {
        id: 5141,
        source: 7936,
        destination: 7045,
        weight: 19,
        i18n: [
          {
            id: 8029,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 95"
              },
              {
                key: "description",
                value: "this is the content of the question 95"
              }
            ]
          }
        ]
      }
    ],
    choices: []
  },
  {
    id: 648,
    parents: [3081],
    i18n: [
      {
        id: 3902,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 76"
          },
          {
            key: "description",
            value: "this is the content of the question 76"
          }
        ]
      }
    ],
    children: [],
    choices: [
      {
        id: 8981,
        i18n: [
          {
            id: 3350,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 78"
              },
              {
                key: "description",
                value: "this is the content of the question 78"
              }
            ]
          }
        ],
        rank: 0
      },
      {
        id: 4813,
        i18n: [
          {
            id: 447,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 79"
              },
              {
                key: "description",
                value: "this is the content of the question 79"
              }
            ]
          }
        ],
        rank: 1
      },
      {
        id: 3079,
        i18n: [
          {
            id: 6552,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 80"
              },
              {
                key: "description",
                value: "this is the content of the question 80"
              }
            ]
          }
        ],
        rank: 2
      },
      {
        id: 8835,
        i18n: [
          {
            id: 1763,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 81"
              },
              {
                key: "description",
                value: "this is the content of the question 81"
              }
            ]
          }
        ],
        rank: 3
      }
    ]
  },
  {
    id: 875,
    parents: [9886],
    i18n: [
      {
        id: 3183,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 82"
          },
          {
            key: "description",
            value: "this is the content of the question 82"
          }
        ]
      }
    ],
    children: [],
    choices: [
      {
        id: 2157,
        i18n: [
          {
            id: 7679,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 84"
              },
              {
                key: "description",
                value: "this is the content of the question 84"
              }
            ]
          }
        ],
        rank: 0
      },
      {
        id: 5248,
        i18n: [
          {
            id: 4608,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 85"
              },
              {
                key: "description",
                value: "this is the content of the question 85"
              }
            ]
          }
        ],
        rank: 1
      },
      {
        id: 6906,
        i18n: [
          {
            id: 2811,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 86"
              },
              {
                key: "description",
                value: "this is the content of the question 86"
              }
            ]
          }
        ],
        rank: 2
      },
      {
        id: 7576,
        i18n: [
          {
            id: 1865,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 87"
              },
              {
                key: "description",
                value: "this is the content of the question 87"
              }
            ]
          }
        ],
        rank: 3
      }
    ]
  },
  {
    id: 6493,
    parents: [9103],
    i18n: [
      {
        id: 6093,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 88"
          },
          {
            key: "description",
            value: "this is the content of the question 88"
          }
        ]
      }
    ],
    children: [],
    choices: [
      {
        id: 8027,
        i18n: [
          {
            id: 565,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 90"
              },
              {
                key: "description",
                value: "this is the content of the question 90"
              }
            ]
          }
        ],
        rank: 0
      },
      {
        id: 2253,
        i18n: [
          {
            id: 9980,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 91"
              },
              {
                key: "description",
                value: "this is the content of the question 91"
              }
            ]
          }
        ],
        rank: 1
      },
      {
        id: 8091,
        i18n: [
          {
            id: 983,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 92"
              },
              {
                key: "description",
                value: "this is the content of the question 92"
              }
            ]
          }
        ],
        rank: 2
      },
      {
        id: 4336,
        i18n: [
          {
            id: 2924,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 93"
              },
              {
                key: "description",
                value: "this is the content of the question 93"
              }
            ]
          }
        ],
        rank: 3
      }
    ]
  },
  {
    id: 7045,
    parents: [5141],
    i18n: [
      {
        id: 2373,
        lang: "en",
        properties: [
          {
            key: "label",
            value: "question 94"
          },
          {
            key: "description",
            value: "this is the content of the question 94"
          }
        ]
      }
    ],
    children: [],
    choices: [
      {
        id: 2405,
        i18n: [
          {
            id: 2992,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 96"
              },
              {
                key: "description",
                value: "this is the content of the question 96"
              }
            ]
          }
        ],
        rank: 0
      },
      {
        id: 9586,
        i18n: [
          {
            id: 5409,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 97"
              },
              {
                key: "description",
                value: "this is the content of the question 97"
              }
            ]
          }
        ],
        rank: 1
      },
      {
        id: 3443,
        i18n: [
          {
            id: 5997,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 98"
              },
              {
                key: "description",
                value: "this is the content of the question 98"
              }
            ]
          }
        ],
        rank: 2
      },
      {
        id: 9236,
        i18n: [
          {
            id: 9761,
            lang: "en",
            properties: [
              {
                key: "label",
                value: "question 99"
              },
              {
                key: "description",
                value: "this is the content of the question 99"
              }
            ]
          }
        ],
        rank: 3
      }
    ]
  }
];
