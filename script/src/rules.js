export default {
  "version": "1.0.0",
  "meta": {
    "clientCode": "targettesting",
    "environment": "production"
  },
  "globalMbox": "target-global-mbox",
  "geoTargetingEnabled": true,
  "responseTokens": [
    "activity.id",
    "activity.name",
    "experience.id",
    "experience.name",
    "geo.city",
    "geo.country",
    "geo.state",
    "offer.id",
    "offer.name",
    "option.id",
    "option.name"
  ],
  "remoteMboxes": [],
  "remoteViews": [],
  "localMboxes": [
    "100k",
    "1MB",
    "1MB2",
    "1MB3",
    "250k",
    "500k",
    "allmatches",
    "browserTest",
    "mbox-browsers",
    "mbox-dateranges",
    "mbox-feature-flags",
    "mbox-geography",
    "mbox-macros",
    "mbox-magician",
    "mbox-params",
    "mbox-prioritized",
    "mbox-salutations",
    "mbox-urlcontains",
    "perf-mbox",
    "super-duper",
    "testoffer"
  ],
  "rules": {
    "mboxes": {
      "mbox-macros": [
        {
          "ruleKey": "125891",
          "activityId": 125891,
          "meta": {
            "activity.id": 125891,
            "activity.name": "[unit-test] mbox-macros",
            "activity.type": "ab",
            "experience.id": 0,
            "experience.name": "Experience A",
            "location.name": "mbox-macros",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [],
            "offer.id": 246892,
            "offer.name": "/_unit-test_mbox-macros/experiences/0/pages/0/zones/0/1612393051539",
            "option.id": 2,
            "option.name": "Offer2"
          },
          "condition": {
            "and": [
              {
                "<=": [
                  0.0,
                  {
                    "var": "allocation"
                  }
                ]
              },
              {
                ">=": [
                  50.0,
                  {
                    "var": "allocation"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "mbox-macros",
            "options": [
              {
                "type": "html",
                "eventToken": "DpFV0O7sTrjpJSbqoBduF2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<ul>\n  <li>${offer.id}</li>\n  <li>${offer.name}</li>\n  <li>${campaign.id}</li>\n  <li>${campaign.name}</li>\n  <li>${campaign.recipe.id}</li>\n  <li>${campaign.recipe.name}</li>\n  <li>${activity.id}</li>\n  <li>${activity.name}</li>\n  <li>${activity.experience.id}</li>\n  <li>${activity.experience.name}</li>\n  <li>${mbox.name}</li>\n  <li>${mbox.user}</li>\n  <li>${mbox.pgname}</li>\n  <li>${mbox.browserWidth}</li>\n</ul>"
              }
            ],
            "metrics": []
          }
        },
        {
          "ruleKey": "125891",
          "activityId": 125891,
          "meta": {
            "activity.id": 125891,
            "activity.name": "[unit-test] mbox-macros",
            "activity.type": "ab",
            "experience.id": 1,
            "experience.name": "Experience B",
            "location.name": "mbox-macros",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [],
            "offer.id": 246893,
            "offer.name": "/_unit-test_mbox-macros/experiences/1/pages/0/zones/0/1612393051556",
            "option.id": 3,
            "option.name": "Offer3"
          },
          "condition": {
            "and": [
              {
                "<": [
                  50.0,
                  {
                    "var": "allocation"
                  }
                ]
              },
              {
                ">=": [
                  100.0,
                  {
                    "var": "allocation"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "mbox-macros",
            "options": [
              {
                "type": "html",
                "eventToken": "DpFV0O7sTrjpJSbqoBduF5NWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<ol>\n  <li>${offer.id}</li>\n  <li>${offer.name}</li>\n  <li>${campaign.id}</li>\n  <li>${campaign.name}</li>\n  <li>${campaign.recipe.id}</li>\n  <li>${campaign.recipe.name}</li>\n  <li>${activity.id}</li>\n  <li>${activity.name}</li>\n  <li>${activity.experience.id}</li>\n  <li>${activity.experience.name}</li>\n  <li>${mbox.name}</li>\n  <li>${mbox.user}</li>\n  <li>${mbox.pgname}</li>\n  <li>${mbox.browserWidth}</li>\n</ol>"
              }
            ],
            "metrics": []
          }
        }
      ],
      "mbox-salutations": [
        {
          "ruleKey": "125872",
          "activityId": 125872,
          "meta": {
            "activity.id": 125872,
            "activity.name": "[unit-test] mbox-salutations",
            "activity.type": "ab",
            "experience.id": 0,
            "experience.name": "Experience A",
            "location.name": "mbox-salutations",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [],
            "offer.id": 246847,
            "offer.name": "/_unit-test_mbox-salutations/experiences/0/pages/0/zones/0/1612386185278",
            "option.id": 2,
            "option.name": "Offer2"
          },
          "condition": {
            "and": [
              {
                "<=": [
                  0.0,
                  {
                    "var": "allocation"
                  }
                ]
              },
              {
                ">=": [
                  50.0,
                  {
                    "var": "allocation"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "mbox-salutations",
            "options": [
              {
                "type": "html",
                "eventToken": "avr5zuTFMrtFi7QuWrscBmqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<div>hello</div>"
              }
            ],
            "metrics": []
          }
        },
        {
          "ruleKey": "125872",
          "activityId": 125872,
          "meta": {
            "activity.id": 125872,
            "activity.name": "[unit-test] mbox-salutations",
            "activity.type": "ab",
            "experience.id": 1,
            "experience.name": "Experience B",
            "location.name": "mbox-salutations",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [],
            "offer.id": 246848,
            "offer.name": "/_unit-test_mbox-salutations/experiences/1/pages/0/zones/0/1612386185295",
            "option.id": 3,
            "option.name": "Offer3"
          },
          "condition": {
            "and": [
              {
                "<": [
                  50.0,
                  {
                    "var": "allocation"
                  }
                ]
              },
              {
                ">=": [
                  100.0,
                  {
                    "var": "allocation"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "mbox-salutations",
            "options": [
              {
                "type": "html",
                "eventToken": "avr5zuTFMrtFi7QuWrscBpNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<div>goodbye</div>"
              }
            ],
            "metrics": []
          }
        }
      ],
      "super-duper": [
        {
          "ruleKey": "121723",
          "activityId": 121723,
          "meta": {
            "activity.id": 121723,
            "activity.name": "demo mbox: super-duper",
            "activity.type": "ab",
            "experience.id": 0,
            "experience.name": "Experience A",
            "location.name": "super-duper",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [],
            "offer.id": 238129,
            "offer.name": "/demo_mbox_super-duper/experiences/0/pages/0/zones/0/1601501517686",
            "option.id": 2,
            "option.name": "Offer2"
          },
          "condition": {
            "and": [
              {
                "<=": [
                  0.0,
                  {
                    "var": "allocation"
                  }
                ]
              },
              {
                ">=": [
                  50.0,
                  {
                    "var": "allocation"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "super-duper",
            "options": [
              {
                "type": "json",
                "eventToken": "yFKTpUjZ7nV5sesQouP+s2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": {
                  "experience": "A"
                }
              }
            ],
            "metrics": []
          },
          "propertyTokens": [
            "16ffac77-1de4-ffe1-54de-aedbb34dcf7b"
          ]
        },
        {
          "ruleKey": "121723",
          "activityId": 121723,
          "meta": {
            "activity.id": 121723,
            "activity.name": "demo mbox: super-duper",
            "activity.type": "ab",
            "experience.id": 1,
            "experience.name": "Experience B",
            "location.name": "super-duper",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [],
            "offer.id": 238130,
            "offer.name": "/demo_mbox_super-duper/experiences/1/pages/0/zones/0/1601501517699",
            "option.id": 3,
            "option.name": "Offer3"
          },
          "condition": {
            "and": [
              {
                "<": [
                  50.0,
                  {
                    "var": "allocation"
                  }
                ]
              },
              {
                ">=": [
                  100.0,
                  {
                    "var": "allocation"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "super-duper",
            "options": [
              {
                "type": "json",
                "eventToken": "yFKTpUjZ7nV5sesQouP+s5NWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": {
                  "experience": "B"
                }
              }
            ],
            "metrics": []
          },
          "propertyTokens": [
            "16ffac77-1de4-ffe1-54de-aedbb34dcf7b"
          ]
        }
      ],
      "mbox-magician": [
        {
          "ruleKey": "125873",
          "activityId": 125873,
          "meta": {
            "activity.id": 125873,
            "activity.name": "[unit-test] mbox-magician",
            "activity.type": "ab",
            "experience.id": 0,
            "experience.name": "Experience A",
            "location.name": "mbox-magician",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [],
            "offer.id": 246850,
            "offer.name": "/_unit-test_mbox-magician/experiences/0/pages/0/zones/0/1612386382173",
            "option.id": 2,
            "option.name": "Offer2"
          },
          "condition": {
            "and": [
              {
                "<=": [
                  0.0,
                  {
                    "var": "allocation"
                  }
                ]
              },
              {
                ">=": [
                  50.0,
                  {
                    "var": "allocation"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "mbox-magician",
            "options": [
              {
                "type": "json",
                "eventToken": "eHKYleVZBTi/nM3Fv/fx1WqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": {
                  "doMagic": true,
                  "importantValue": 150
                }
              }
            ],
            "metrics": []
          }
        },
        {
          "ruleKey": "125873",
          "activityId": 125873,
          "meta": {
            "activity.id": 125873,
            "activity.name": "[unit-test] mbox-magician",
            "activity.type": "ab",
            "experience.id": 1,
            "experience.name": "Experience B",
            "location.name": "mbox-magician",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [],
            "offer.id": 246849,
            "offer.name": "/_unit-test_mbox-magician/experiences/1/pages/0/zones/0/1612386382166",
            "option.id": 3,
            "option.name": "Offer3"
          },
          "condition": {
            "and": [
              {
                "<": [
                  50.0,
                  {
                    "var": "allocation"
                  }
                ]
              },
              {
                ">=": [
                  100.0,
                  {
                    "var": "allocation"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "mbox-magician",
            "options": [
              {
                "type": "json",
                "eventToken": "eHKYleVZBTi/nM3Fv/fx1ZNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": {
                  "doMagic": false,
                  "importantValue": 75
                }
              }
            ],
            "metrics": []
          }
        }
      ],
      "mbox-geography": [
        {
          "ruleKey": "125889",
          "activityId": 125889,
          "meta": {
            "activity.id": 125889,
            "activity.name": "[unit-test] mbox-geography",
            "activity.type": "ab",
            "experience.id": 0,
            "experience.name": "Experience A",
            "location.name": "mbox-geography",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [
              1821883
            ],
            "offer.id": 246889,
            "offer.name": "/_unit-test_mbox-geography/experiences/0/pages/0/zones/0/1612391678374",
            "option.id": 2,
            "option.name": "Offer2"
          },
          "condition": {
            "and": [
              {
                "and": [
                  {
                    "<=": [
                      0.0,
                      {
                        "var": "allocation"
                      }
                    ]
                  },
                  {
                    ">=": [
                      50.0,
                      {
                        "var": "allocation"
                      }
                    ]
                  }
                ]
              },
              {
                "and": [
                  {
                    "or": [
                      {
                        "==": [
                          "UNITED STATES",
                          {
                            "var": "geo.country"
                          }
                        ]
                      },
                      {
                        "==": [
                          "US",
                          {
                            "var": "geo.country"
                          }
                        ]
                      },
                      {
                        "==": [
                          "CANADA",
                          {
                            "var": "geo.country"
                          }
                        ]
                      },
                      {
                        "==": [
                          "CA",
                          {
                            "var": "geo.country"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "or": [
                      {
                        "==": [
                          "CALIFORNIA",
                          {
                            "var": "geo.region"
                          }
                        ]
                      },
                      {
                        "==": [
                          "CA",
                          {
                            "var": "geo.region"
                          }
                        ]
                      },
                      {
                        "==": [
                          "BRITISH COLUMBIA",
                          {
                            "var": "geo.region"
                          }
                        ]
                      },
                      {
                        "==": [
                          "BC",
                          {
                            "var": "geo.region"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "or": [
                      {
                        "==": [
                          "SAN FRANCISCO",
                          {
                            "var": "geo.city"
                          }
                        ]
                      },
                      {
                        "==": [
                          "SANFRANCISCO",
                          {
                            "var": "geo.city"
                          }
                        ]
                      },
                      {
                        "==": [
                          "VANCOUVER",
                          {
                            "var": "geo.city"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "<": [
                      "37.70",
                      {
                        "var": "geo.latitude"
                      }
                    ]
                  },
                  {
                    ">=": [
                      "37.80",
                      {
                        "var": "geo.latitude"
                      }
                    ]
                  },
                  {
                    "<=": [
                      "-122.5",
                      {
                        "var": "geo.longitude"
                      }
                    ]
                  },
                  {
                    ">": [
                      "-122.3",
                      {
                        "var": "geo.longitude"
                      }
                    ]
                  },
                  {
                    "!": {
                      "or": [
                        {
                          "==": [
                            "SOUTH SAN FRANCISCO",
                            {
                              "var": "geo.city"
                            }
                          ]
                        },
                        {
                          "==": [
                            "SOUTHSANFRANCISCO",
                            {
                              "var": "geo.city"
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "mbox-geography",
            "options": [
              {
                "type": "json",
                "eventToken": "coIgApD3Y5vSUJeOkfTmHWqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": {
                  "geo": true,
                  "exp": "geo.a"
                }
              }
            ],
            "metrics": []
          }
        },
        {
          "ruleKey": "125889",
          "activityId": 125889,
          "meta": {
            "activity.id": 125889,
            "activity.name": "[unit-test] mbox-geography",
            "activity.type": "ab",
            "experience.id": 1,
            "experience.name": "Experience B",
            "location.name": "mbox-geography",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [
              1821883
            ],
            "offer.id": 246888,
            "offer.name": "/_unit-test_mbox-geography/experiences/1/pages/0/zones/0/1612391678370",
            "option.id": 3,
            "option.name": "Offer3"
          },
          "condition": {
            "and": [
              {
                "and": [
                  {
                    "<": [
                      50.0,
                      {
                        "var": "allocation"
                      }
                    ]
                  },
                  {
                    ">=": [
                      100.0,
                      {
                        "var": "allocation"
                      }
                    ]
                  }
                ]
              },
              {
                "and": [
                  {
                    "or": [
                      {
                        "==": [
                          "UNITED STATES",
                          {
                            "var": "geo.country"
                          }
                        ]
                      },
                      {
                        "==": [
                          "US",
                          {
                            "var": "geo.country"
                          }
                        ]
                      },
                      {
                        "==": [
                          "CANADA",
                          {
                            "var": "geo.country"
                          }
                        ]
                      },
                      {
                        "==": [
                          "CA",
                          {
                            "var": "geo.country"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "or": [
                      {
                        "==": [
                          "CALIFORNIA",
                          {
                            "var": "geo.region"
                          }
                        ]
                      },
                      {
                        "==": [
                          "CA",
                          {
                            "var": "geo.region"
                          }
                        ]
                      },
                      {
                        "==": [
                          "BRITISH COLUMBIA",
                          {
                            "var": "geo.region"
                          }
                        ]
                      },
                      {
                        "==": [
                          "BC",
                          {
                            "var": "geo.region"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "or": [
                      {
                        "==": [
                          "SAN FRANCISCO",
                          {
                            "var": "geo.city"
                          }
                        ]
                      },
                      {
                        "==": [
                          "SANFRANCISCO",
                          {
                            "var": "geo.city"
                          }
                        ]
                      },
                      {
                        "==": [
                          "VANCOUVER",
                          {
                            "var": "geo.city"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "<": [
                      "37.70",
                      {
                        "var": "geo.latitude"
                      }
                    ]
                  },
                  {
                    ">=": [
                      "37.80",
                      {
                        "var": "geo.latitude"
                      }
                    ]
                  },
                  {
                    "<=": [
                      "-122.5",
                      {
                        "var": "geo.longitude"
                      }
                    ]
                  },
                  {
                    ">": [
                      "-122.3",
                      {
                        "var": "geo.longitude"
                      }
                    ]
                  },
                  {
                    "!": {
                      "or": [
                        {
                          "==": [
                            "SOUTH SAN FRANCISCO",
                            {
                              "var": "geo.city"
                            }
                          ]
                        },
                        {
                          "==": [
                            "SOUTHSANFRANCISCO",
                            {
                              "var": "geo.city"
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "mbox-geography",
            "options": [
              {
                "type": "json",
                "eventToken": "coIgApD3Y5vSUJeOkfTmHZNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": {
                  "geo": true,
                  "exp": "geo.b"
                }
              }
            ],
            "metrics": []
          }
        }
      ],
      "perf-mbox": [
        {
          "ruleKey": "120100",
          "activityId": 120100,
          "meta": {
            "activity.id": 120100,
            "activity.name": "perf-mbox ab",
            "activity.type": "ab",
            "experience.id": 0,
            "experience.name": "Experience A",
            "location.name": "perf-mbox",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [],
            "offer.id": 234084,
            "offer.name": "/perf-mbox_ab/experiences/0/pages/0/zones/0/1597348174705",
            "option.id": 2,
            "option.name": "Offer2"
          },
          "condition": {
            "and": [
              {
                "<=": [
                  0.0,
                  {
                    "var": "allocation"
                  }
                ]
              },
              {
                ">=": [
                  50.0,
                  {
                    "var": "allocation"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "perf-mbox",
            "options": [
              {
                "type": "json",
                "eventToken": "l6xWntUYACBBIBr390eIY2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": {
                  "experience": "A",
                  "name": "perf-mbox"
                }
              }
            ],
            "metrics": []
          },
          "propertyTokens": [
            "be92ac4c-e72f-9f82-2a80-2c211ea86578",
            "693de2cd-ac92-d2c7-59fc-a3c0f2bce646"
          ]
        },
        {
          "ruleKey": "120100",
          "activityId": 120100,
          "meta": {
            "activity.id": 120100,
            "activity.name": "perf-mbox ab",
            "activity.type": "ab",
            "experience.id": 1,
            "experience.name": "Experience B",
            "location.name": "perf-mbox",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [],
            "offer.id": 234085,
            "offer.name": "/perf-mbox_ab/experiences/1/pages/0/zones/0/1597348174719",
            "option.id": 3,
            "option.name": "Offer3"
          },
          "condition": {
            "and": [
              {
                "<": [
                  50.0,
                  {
                    "var": "allocation"
                  }
                ]
              },
              {
                ">=": [
                  100.0,
                  {
                    "var": "allocation"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "perf-mbox",
            "options": [
              {
                "type": "json",
                "eventToken": "l6xWntUYACBBIBr390eIY5NWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": {
                  "experience": "B",
                  "name": "perf-mbox"
                }
              }
            ],
            "metrics": []
          },
          "propertyTokens": [
            "be92ac4c-e72f-9f82-2a80-2c211ea86578",
            "693de2cd-ac92-d2c7-59fc-a3c0f2bce646"
          ]
        }
      ],
      "mbox-params": [
        {
          "ruleKey": "125874",
          "activityId": 125874,
          "meta": {
            "activity.id": 125874,
            "activity.name": "[unit-test] mbox-params",
            "activity.type": "ab",
            "experience.id": 0,
            "experience.name": "Experience A",
            "location.name": "mbox-params",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [
              1821805
            ],
            "offer.id": 246852,
            "offer.name": "/_unit-test_mbox-params/experiences/0/pages/0/zones/0/1612386851217",
            "option.id": 2,
            "option.name": "Offer2"
          },
          "condition": {
            "and": [
              {
                "and": [
                  {
                    "<=": [
                      0.0,
                      {
                        "var": "allocation"
                      }
                    ]
                  },
                  {
                    ">=": [
                      50.0,
                      {
                        "var": "allocation"
                      }
                    ]
                  }
                ]
              },
              {
                "==": [
                  "bar",
                  {
                    "var": "mbox.foo"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "mbox-params",
            "options": [
              {
                "type": "json",
                "eventToken": "gsDuhGuCbuMhKLusIlPUI2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": {
                  "foo": "bar",
                  "isFooBar": true,
                  "experience": "A"
                }
              }
            ],
            "metrics": []
          }
        },
        {
          "ruleKey": "125874",
          "activityId": 125874,
          "meta": {
            "activity.id": 125874,
            "activity.name": "[unit-test] mbox-params",
            "activity.type": "ab",
            "experience.id": 1,
            "experience.name": "Experience B",
            "location.name": "mbox-params",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [
              1821805
            ],
            "offer.id": 246851,
            "offer.name": "/_unit-test_mbox-params/experiences/1/pages/0/zones/0/1612386851213",
            "option.id": 3,
            "option.name": "Offer3"
          },
          "condition": {
            "and": [
              {
                "and": [
                  {
                    "<": [
                      50.0,
                      {
                        "var": "allocation"
                      }
                    ]
                  },
                  {
                    ">=": [
                      100.0,
                      {
                        "var": "allocation"
                      }
                    ]
                  }
                ]
              },
              {
                "==": [
                  "bar",
                  {
                    "var": "mbox.foo"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "mbox-params",
            "options": [
              {
                "type": "json",
                "eventToken": "gsDuhGuCbuMhKLusIlPUI5NWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": {
                  "foo": "bar",
                  "isFooBar": true,
                  "experience": "B"
                }
              }
            ],
            "metrics": []
          }
        }
      ],
      "mbox-feature-flags": [
        {
          "ruleKey": "125885",
          "activityId": 125885,
          "meta": {
            "activity.id": 125885,
            "activity.name": "[unit-test] mbox-feature-flags",
            "activity.type": "ab",
            "experience.id": 0,
            "experience.name": "Experience A",
            "location.name": "mbox-feature-flags",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [],
            "offer.id": 246878,
            "offer.name": "/_unit-test_mbox-feature-flags/experiences/0/pages/0/zones/0/1612389952922",
            "option.id": 2,
            "option.name": "Offer2"
          },
          "condition": {
            "and": [
              {
                "<=": [
                  0.0,
                  {
                    "var": "allocation"
                  }
                ]
              },
              {
                ">=": [
                  50.0,
                  {
                    "var": "allocation"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "mbox-feature-flags",
            "options": [
              {
                "type": "json",
                "eventToken": "Gr3lfpVVQA7MB0ma+rFZwGqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": {
                  "paymentExperience": "legacy",
                  "showFeatureX": false,
                  "paymentGatewayVersion": 2.3,
                  "customerFeedbackValue": 10
                }
              }
            ],
            "metrics": []
          }
        },
        {
          "ruleKey": "125885",
          "activityId": 125885,
          "meta": {
            "activity.id": 125885,
            "activity.name": "[unit-test] mbox-feature-flags",
            "activity.type": "ab",
            "experience.id": 1,
            "experience.name": "Experience B",
            "location.name": "mbox-feature-flags",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [],
            "offer.id": 246879,
            "offer.name": "/_unit-test_mbox-feature-flags/experiences/1/pages/0/zones/0/1612389952933",
            "option.id": 3,
            "option.name": "Offer3"
          },
          "condition": {
            "and": [
              {
                "<": [
                  50.0,
                  {
                    "var": "allocation"
                  }
                ]
              },
              {
                ">=": [
                  100.0,
                  {
                    "var": "allocation"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "mbox-feature-flags",
            "options": [
              {
                "type": "json",
                "eventToken": "Gr3lfpVVQA7MB0ma+rFZwJNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": {
                  "paymentExperience": "alpha10",
                  "showFeatureX": true,
                  "paymentGatewayVersion": 3.1,
                  "customerFeedbackValue": 99
                }
              }
            ],
            "metrics": []
          }
        }
      ],
      "mbox-urlcontains": [
        {
          "ruleKey": "125867",
          "activityId": 125867,
          "meta": {
            "activity.id": 125867,
            "activity.name": "[unit-test] mbox-urlcontains",
            "activity.type": "ab",
            "experience.id": 0,
            "experience.name": "Experience A",
            "location.name": "mbox-urlcontains",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [
              1821691
            ],
            "offer.id": 246839,
            "offer.name": "/mbox-urlcontains/experiences/0/pages/0/zones/0/1612377739875",
            "option.id": 2,
            "option.name": "Offer2"
          },
          "condition": {
            "and": [
              {
                "and": [
                  {
                    "<=": [
                      0.0,
                      {
                        "var": "allocation"
                      }
                    ]
                  },
                  {
                    ">=": [
                      50.0,
                      {
                        "var": "allocation"
                      }
                    ]
                  }
                ]
              },
              {
                "in": [
                  "bar",
                  {
                    "var": "page.url_lc"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "mbox-urlcontains",
            "options": [
              {
                "type": "json",
                "eventToken": "Fz8yENHFv2OZFezX3Cj7fGqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": {
                  "baz": 1
                }
              }
            ],
            "metrics": []
          }
        },
        {
          "ruleKey": "125867",
          "activityId": 125867,
          "meta": {
            "activity.id": 125867,
            "activity.name": "[unit-test] mbox-urlcontains",
            "activity.type": "ab",
            "experience.id": 1,
            "experience.name": "Experience B",
            "location.name": "mbox-urlcontains",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [
              1821691
            ],
            "offer.id": 246838,
            "offer.name": "/mbox-urlcontains/experiences/1/pages/0/zones/0/1612377739867",
            "option.id": 3,
            "option.name": "Offer3"
          },
          "condition": {
            "and": [
              {
                "and": [
                  {
                    "<": [
                      50.0,
                      {
                        "var": "allocation"
                      }
                    ]
                  },
                  {
                    ">=": [
                      100.0,
                      {
                        "var": "allocation"
                      }
                    ]
                  }
                ]
              },
              {
                "in": [
                  "bar",
                  {
                    "var": "page.url_lc"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "mbox-urlcontains",
            "options": [
              {
                "type": "json",
                "eventToken": "Fz8yENHFv2OZFezX3Cj7fJNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": {
                  "baz": 2
                }
              }
            ],
            "metrics": []
          }
        }
      ],
      "mbox-prioritized": [
        {
          "ruleKey": "125877",
          "activityId": 125877,
          "meta": {
            "activity.id": 125877,
            "activity.name": "[unit-test] mbox-prioritized high with targeting",
            "activity.type": "landing",
            "experience.id": 0,
            "experience.name": "Experience A",
            "location.name": "mbox-prioritized",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [
              1750975
            ],
            "offer.id": 246857,
            "offer.name": "/_unit-test_mbox-prioritizedhighwithtargeting/experiences/0/pages/0/zones/0/1612387453374",
            "option.id": 2,
            "option.name": "Offer2"
          },
          "condition": {
            "==": [
              {
                "var": "user.browserType"
              },
              "firefox"
            ]
          },
          "consequence": {
            "name": "mbox-prioritized",
            "options": [
              {
                "type": "html",
                "eventToken": "/pLXAvfJbFlti2W9k7cANWqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<div>prioritized high with targeting: Firefox</div>"
              }
            ],
            "metrics": []
          }
        },
        {
          "ruleKey": "125877",
          "activityId": 125877,
          "meta": {
            "activity.id": 125877,
            "activity.name": "[unit-test] mbox-prioritized high with targeting",
            "activity.type": "landing",
            "experience.id": 1,
            "experience.name": "Experience B",
            "location.name": "mbox-prioritized",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [
              1750991
            ],
            "offer.id": 246858,
            "offer.name": "/_unit-test_mbox-prioritizedhighwithtargeting/experiences/1/pages/0/zones/0/1612387453380",
            "option.id": 3,
            "option.name": "Offer3"
          },
          "condition": {
            "==": [
              {
                "var": "user.browserType"
              },
              "safari"
            ]
          },
          "consequence": {
            "name": "mbox-prioritized",
            "options": [
              {
                "type": "html",
                "eventToken": "/pLXAvfJbFlti2W9k7cANZNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<div>prioritized high with targeting: Safari</div>"
              }
            ],
            "metrics": []
          }
        },
        {
          "ruleKey": "125876",
          "activityId": 125876,
          "meta": {
            "activity.id": 125876,
            "activity.name": "[unit-test] mbox-prioritized high",
            "activity.type": "ab",
            "experience.id": 0,
            "experience.name": "Experience A",
            "location.name": "mbox-prioritized",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [],
            "offer.id": 246855,
            "offer.name": "/_unit-test_mbox-prioritizedhigh/experiences/0/pages/0/zones/0/1612387280489",
            "option.id": 2,
            "option.name": "Offer2"
          },
          "condition": {
            "and": [
              {
                "<=": [
                  0.0,
                  {
                    "var": "allocation"
                  }
                ]
              },
              {
                ">=": [
                  50.0,
                  {
                    "var": "allocation"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "mbox-prioritized",
            "options": [
              {
                "type": "html",
                "eventToken": "K48CgydFcAttgrFpQ6oMaGqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<div>prioritized high A</div>"
              }
            ],
            "metrics": []
          }
        },
        {
          "ruleKey": "125876",
          "activityId": 125876,
          "meta": {
            "activity.id": 125876,
            "activity.name": "[unit-test] mbox-prioritized high",
            "activity.type": "ab",
            "experience.id": 1,
            "experience.name": "Experience B",
            "location.name": "mbox-prioritized",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [],
            "offer.id": 246856,
            "offer.name": "/_unit-test_mbox-prioritizedhigh/experiences/1/pages/0/zones/0/1612387280498",
            "option.id": 3,
            "option.name": "Offer3"
          },
          "condition": {
            "and": [
              {
                "<": [
                  50.0,
                  {
                    "var": "allocation"
                  }
                ]
              },
              {
                ">=": [
                  100.0,
                  {
                    "var": "allocation"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "mbox-prioritized",
            "options": [
              {
                "type": "html",
                "eventToken": "K48CgydFcAttgrFpQ6oMaJNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<div>prioritized high B</div>"
              }
            ],
            "metrics": []
          }
        },
        {
          "ruleKey": "125875",
          "activityId": 125875,
          "meta": {
            "activity.id": 125875,
            "activity.name": "[unit-test] mbox-prioritized low",
            "activity.type": "ab",
            "experience.id": 0,
            "experience.name": "Experience A",
            "location.name": "mbox-prioritized",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [],
            "offer.id": 246853,
            "offer.name": "/_unit-test_mbox-prioritizedlow/experiences/0/pages/0/zones/0/1612387116413",
            "option.id": 2,
            "option.name": "Offer2"
          },
          "condition": {
            "and": [
              {
                "<=": [
                  0.0,
                  {
                    "var": "allocation"
                  }
                ]
              },
              {
                ">=": [
                  50.0,
                  {
                    "var": "allocation"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "mbox-prioritized",
            "options": [
              {
                "type": "html",
                "eventToken": "5rESxhp5Gu3znJEt9Zbx7WqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<div>prioritized low A</div>"
              }
            ],
            "metrics": []
          }
        },
        {
          "ruleKey": "125875",
          "activityId": 125875,
          "meta": {
            "activity.id": 125875,
            "activity.name": "[unit-test] mbox-prioritized low",
            "activity.type": "ab",
            "experience.id": 1,
            "experience.name": "Experience B",
            "location.name": "mbox-prioritized",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [],
            "offer.id": 246854,
            "offer.name": "/_unit-test_mbox-prioritizedlow/experiences/1/pages/0/zones/0/1612387116418",
            "option.id": 3,
            "option.name": "Offer3"
          },
          "condition": {
            "and": [
              {
                "<": [
                  50.0,
                  {
                    "var": "allocation"
                  }
                ]
              },
              {
                ">=": [
                  100.0,
                  {
                    "var": "allocation"
                  }
                ]
              }
            ]
          },
          "consequence": {
            "name": "mbox-prioritized",
            "options": [
              {
                "type": "html",
                "eventToken": "5rESxhp5Gu3znJEt9Zbx7ZNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<div>prioritized low B</div>"
              }
            ],
            "metrics": []
          }
        }
      ],
      "mbox-browsers": [
        {
          "ruleKey": "125871",
          "activityId": 125871,
          "meta": {
            "activity.id": 125871,
            "activity.name": "[unit-test] mbox-browsers",
            "activity.type": "landing",
            "experience.id": 0,
            "experience.name": "Experience B",
            "location.name": "mbox-browsers",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [
              1750975
            ],
            "offer.id": 246842,
            "offer.name": "/_unit-test_mbox-browsers/experiences/0/pages/0/zones/0/1612382815070",
            "option.id": 2,
            "option.name": "Offer2"
          },
          "condition": {
            "==": [
              {
                "var": "user.browserType"
              },
              "firefox"
            ]
          },
          "consequence": {
            "name": "mbox-browsers",
            "options": [
              {
                "type": "html",
                "eventToken": "hnriCPC1+WKdphJNCmqRW2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<h1>it's firefox</h1>"
              }
            ],
            "metrics": []
          }
        },
        {
          "ruleKey": "125871",
          "activityId": 125871,
          "meta": {
            "activity.id": 125871,
            "activity.name": "[unit-test] mbox-browsers",
            "activity.type": "landing",
            "experience.id": 1,
            "experience.name": "Experience C",
            "location.name": "mbox-browsers",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [
              1750991
            ],
            "offer.id": 246843,
            "offer.name": "/_unit-test_mbox-browsers/experiences/1/pages/0/zones/0/1612382815073",
            "option.id": 3,
            "option.name": "Offer3"
          },
          "condition": {
            "==": [
              {
                "var": "user.browserType"
              },
              "safari"
            ]
          },
          "consequence": {
            "name": "mbox-browsers",
            "options": [
              {
                "type": "html",
                "eventToken": "hnriCPC1+WKdphJNCmqRW5NWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<h1>it's safari</h1>"
              }
            ],
            "metrics": []
          }
        },
        {
          "ruleKey": "125871",
          "activityId": 125871,
          "meta": {
            "activity.id": 125871,
            "activity.name": "[unit-test] mbox-browsers",
            "activity.type": "landing",
            "experience.id": 2,
            "experience.name": "Experience D",
            "location.name": "mbox-browsers",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [
              1750953
            ],
            "offer.id": 246841,
            "offer.name": "/_unit-test_mbox-browsers/experiences/2/pages/0/zones/0/1612382815066",
            "option.id": 4,
            "option.name": "Offer4"
          },
          "condition": {
            "==": [
              {
                "var": "user.browserType"
              },
              "chrome"
            ]
          },
          "consequence": {
            "name": "mbox-browsers",
            "options": [
              {
                "type": "html",
                "eventToken": "hnriCPC1+WKdphJNCmqRWwreqXMfVUcUx0s/BHR5kCKCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<h1>it's chrome</h1>"
              }
            ],
            "metrics": []
          }
        },
        {
          "ruleKey": "125871",
          "activityId": 125871,
          "meta": {
            "activity.id": 125871,
            "activity.name": "[unit-test] mbox-browsers",
            "activity.type": "landing",
            "experience.id": 3,
            "experience.name": "Experience E",
            "location.name": "mbox-browsers",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [
              1751423
            ],
            "offer.id": 246844,
            "offer.name": "/_unit-test_mbox-browsers/experiences/3/pages/0/zones/0/1612382815076",
            "option.id": 5,
            "option.name": "Offer5"
          },
          "condition": {
            "==": [
              {
                "var": "user.browserType"
              },
              "ie"
            ]
          },
          "consequence": {
            "name": "mbox-browsers",
            "options": [
              {
                "type": "html",
                "eventToken": "hnriCPC1+WKdphJNCmqRW5ZBXFCzaoRRABbzIA9EnZOCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<h1>it's internet explorer</h1>"
              }
            ],
            "metrics": []
          }
        },
        {
          "ruleKey": "125871",
          "activityId": 125871,
          "meta": {
            "activity.id": 125871,
            "activity.name": "[unit-test] mbox-browsers",
            "activity.type": "landing",
            "experience.id": 4,
            "experience.name": "Experience A",
            "location.name": "mbox-browsers",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [],
            "offer.id": 246845,
            "offer.name": "/_unit-test_mbox-browsers/experiences/4/pages/0/zones/0/1612382815080",
            "option.id": 6,
            "option.name": "Offer6"
          },
          "condition": true,
          "consequence": {
            "name": "mbox-browsers",
            "options": [
              {
                "type": "html",
                "eventToken": "hnriCPC1+WKdphJNCmqRWxB3JWElmEno9qwHyGr0QvSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<h1>not firefox, safari, chrome or ie</h1>"
              }
            ],
            "metrics": []
          }
        }
      ],
      "browserTest": [
        {
          "ruleKey": "121937",
          "activityId": 121937,
          "meta": {
            "activity.id": 121937,
            "activity.name": "browserTest",
            "activity.type": "landing",
            "experience.id": 0,
            "experience.name": "Experience A",
            "location.name": "browserTest",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [
              1750991
            ],
            "offer.id": 238632,
            "offer.name": "/browsertest/experiences/0/pages/0/zones/0/1602097568991",
            "option.id": 2,
            "option.name": "Offer2"
          },
          "condition": {
            "==": [
              {
                "var": "user.browserType"
              },
              "safari"
            ]
          },
          "consequence": {
            "name": "browserTest",
            "options": [
              {
                "type": "html",
                "eventToken": "n7Lut9NCnBqP8EY6pwDiu2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<h1>Safari</h1>"
              }
            ],
            "metrics": []
          },
          "propertyTokens": [
            "8f338442-d308-3456-4298-e454aa6341bf"
          ]
        },
        {
          "ruleKey": "121937",
          "activityId": 121937,
          "meta": {
            "activity.id": 121937,
            "activity.name": "browserTest",
            "activity.type": "landing",
            "experience.id": 1,
            "experience.name": "Experience B",
            "location.name": "browserTest",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [
              1750975
            ],
            "offer.id": 238633,
            "offer.name": "/browsertest/experiences/1/pages/0/zones/0/1602097568996",
            "option.id": 3,
            "option.name": "Offer3"
          },
          "condition": {
            "==": [
              {
                "var": "user.browserType"
              },
              "firefox"
            ]
          },
          "consequence": {
            "name": "browserTest",
            "options": [
              {
                "type": "html",
                "eventToken": "n7Lut9NCnBqP8EY6pwDiu5NWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<h1>Firefox</h1>"
              }
            ],
            "metrics": []
          },
          "propertyTokens": [
            "8f338442-d308-3456-4298-e454aa6341bf"
          ]
        },
        {
          "ruleKey": "121937",
          "activityId": 121937,
          "meta": {
            "activity.id": 121937,
            "activity.name": "browserTest",
            "activity.type": "landing",
            "experience.id": 2,
            "experience.name": "Experience C",
            "location.name": "browserTest",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [
              1750953
            ],
            "offer.id": 238634,
            "offer.name": "/browsertest/experiences/2/pages/0/zones/0/1602097569001",
            "option.id": 4,
            "option.name": "Offer4"
          },
          "condition": {
            "==": [
              {
                "var": "user.browserType"
              },
              "chrome"
            ]
          },
          "consequence": {
            "name": "browserTest",
            "options": [
              {
                "type": "html",
                "eventToken": "n7Lut9NCnBqP8EY6pwDiuwreqXMfVUcUx0s/BHR5kCKCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<h1>Chrome</h1>"
              }
            ],
            "metrics": []
          },
          "propertyTokens": [
            "8f338442-d308-3456-4298-e454aa6341bf"
          ]
        }
      ],
      "mbox-dateranges": [
        {
          "ruleKey": "125879",
          "activityId": 125879,
          "meta": {
            "activity.id": 125879,
            "activity.name": "[unit-test] mbox-dateranges",
            "activity.type": "landing",
            "experience.id": 0,
            "experience.name": "Experience C",
            "location.name": "mbox-dateranges",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [
              1821826
            ],
            "offer.id": 246860,
            "offer.name": "/_unit-test_mbox-dateranges/experiences/0/pages/0/zones/0/1612388787483",
            "option.id": 2,
            "option.name": "Offer2"
          },
          "condition": {
            "and": [
              {
                "or": [
                  {
                    "==": [
                      {
                        "var": "current_day"
                      },
                      "5"
                    ]
                  }
                ]
              },
              {
                "<=": [
                  "0000",
                  {
                    "var": "current_time"
                  },
                  "2359"
                ]
              }
            ]
          },
          "consequence": {
            "name": "mbox-dateranges",
            "options": [
              {
                "type": "html",
                "eventToken": "gUwIlRvXckxF9guX7PpLqGqipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<strong>it's friday</strong>"
              }
            ],
            "metrics": []
          }
        },
        {
          "ruleKey": "125879",
          "activityId": 125879,
          "meta": {
            "activity.id": 125879,
            "activity.name": "[unit-test] mbox-dateranges",
            "activity.type": "landing",
            "experience.id": 1,
            "experience.name": "Experience D",
            "location.name": "mbox-dateranges",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [
              1821824
            ],
            "offer.id": 246861,
            "offer.name": "/_unit-test_mbox-dateranges/experiences/1/pages/0/zones/0/1612388787487",
            "option.id": 3,
            "option.name": "Offer3"
          },
          "condition": {
            "<=": [
              1613034000000,
              {
                "var": "current_timestamp"
              },
              1613239200000
            ]
          },
          "consequence": {
            "name": "mbox-dateranges",
            "options": [
              {
                "type": "html",
                "eventToken": "gUwIlRvXckxF9guX7PpLqJNWHtnQtQrJfmRrQugEa2qCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<strong>date range 1 (feb 11-13)</strong>"
              }
            ],
            "metrics": []
          }
        },
        {
          "ruleKey": "125879",
          "activityId": 125879,
          "meta": {
            "activity.id": 125879,
            "activity.name": "[unit-test] mbox-dateranges",
            "activity.type": "landing",
            "experience.id": 2,
            "experience.name": "Experience B",
            "location.name": "mbox-dateranges",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [
              1821825
            ],
            "offer.id": 246862,
            "offer.name": "/_unit-test_mbox-dateranges/experiences/2/pages/0/zones/0/1612388787492",
            "option.id": 4,
            "option.name": "Offer4"
          },
          "condition": {
            "<=": [
              1613389200000,
              {
                "var": "current_timestamp"
              },
              1613734800000
            ]
          },
          "consequence": {
            "name": "mbox-dateranges",
            "options": [
              {
                "type": "html",
                "eventToken": "gUwIlRvXckxF9guX7PpLqAreqXMfVUcUx0s/BHR5kCKCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<strong>date range 2 (feb 15 - 19, 2021)</strong>"
              }
            ],
            "metrics": []
          }
        },
        {
          "ruleKey": "125879",
          "activityId": 125879,
          "meta": {
            "activity.id": 125879,
            "activity.name": "[unit-test] mbox-dateranges",
            "activity.type": "landing",
            "experience.id": 3,
            "experience.name": "Experience A",
            "location.name": "mbox-dateranges",
            "location.type": "mbox",
            "location.id": 0,
            "audience.ids": [],
            "offer.id": 246863,
            "offer.name": "/_unit-test_mbox-dateranges/experiences/3/pages/0/zones/0/1612388842573",
            "option.id": 5,
            "option.name": "Offer5"
          },
          "condition": true,
          "consequence": {
            "name": "mbox-dateranges",
            "options": [
              {
                "type": "html",
                "eventToken": "gUwIlRvXckxF9guX7PpLqJZBXFCzaoRRABbzIA9EnZOCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",
                "content": "<strong>default result</strong>"
              }
            ],
            "metrics": []
          }
        }
      ]
    }
  }
};