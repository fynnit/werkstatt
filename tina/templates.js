export function homeFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "permalink",
      label: "permalink",
    },
    {
      type: "object",
      name: "header",
      label: "header",
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "subtitle",
          label: "subtitle",
        },
        {
          type: "image",
          name: "image",
          label: "image",
        },
        {
          type: "string",
          name: "copyright",
          label: "copyright",
        },
      ],
    },
    {
      type: "object",
      name: "i_want",
      label: "i_want",
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "object",
          name: "wants",
          label: "wants",
          list: true,
          fields: [
            {
              type: "string",
              name: "title",
              label: "title",
            },
            {
              type: "boolean",
              name: "bool",
              label: "bool",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "text_block",
      label: "text_block",
      fields: [
        {
          type: "string",
          name: "headline",
          label: "headline",
        },
        {
          type: "string",
          name: "copytext",
          label: "copytext",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "teaser",
      label: "teaser",
      list: true,
      fields: [
        {
          type: "string",
          name: "headline",
          label: "headline",
        },
        {
          type: "string",
          name: "description",
          label: "description",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "object",
          name: "icon",
          label: "icon",
          fields: [
            {
              type: "image",
              name: "url",
              label: "url",
            },
            {
              type: "string",
              name: "name",
              label: "name",
            },
          ],
        },
        {
          type: "object",
          name: "link",
          label: "link",
          fields: [
            {
              type: "string",
              name: "text",
              label: "text",
            },
            {
              type: "string",
              name: "url",
              label: "url",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "team",
      label: "team",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "object",
          name: "image",
          label: "image",
          fields: [
            {
              type: "string",
              name: "url",
              label: "url",
            },
            {
              type: "string",
              name: "name",
              label: "name",
            },
          ],
        },
        {
          type: "string",
          name: "description",
          label: "description",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ];
}
export function memberFields() {
  return [
    {
      type: "string",
      name: "tags",
      label: "tags",
    },
    {
      type: "string",
      name: "name",
      label: "name",
    },
    {
      type: "string",
      name: "first_name",
      nameOverride: "first-name",
      label: "first-name",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "phone",
      label: "phone",
    },
    {
      type: "string",
      name: "mail",
      label: "mail",
    },
    {
      type: "string",
      name: "color",
      label: "color",
    },
    {
      type: "string",
      name: "about",
      label: "about",
      ui: {
        component: "textarea",
      },
    },
  ];
}
export function terminFields() {
  return [
    {
      type: "string",
      name: "tags",
      label: "tags",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "datetime",
      name: "end_date",
      label: "end_date",
    },
    {
      type: "string",
      name: "location",
      label: "location",
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "trainer",
      label: "trainer",
    },
    {
      type: "string",
      name: "price",
      label: "price",
    },
    {
      type: "string",
      name: "category",
      label: "category",
    },
  ];
}
