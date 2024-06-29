export const homePageData = [
  {
    id: 1,
    type: "series",
    description: "Popular Series",
    image: "/assets/placeholder.png",
  },
  {
    id: 2,
    type: "movies",
    description: "Popular Movies",
    image: "/assets/placeholder.png",
  },
];

export const sortOptions = [
  { label: "Sort By", value: "", disabled: true, hidden: true , selected:true },
  { label: "Year (Descending)", value: "year_desc" },
  { label: "Year (Ascending)", value: "year_asc" },
  { label: "Title (Descending)", value: "title_desc" },
  { label: "Title (Ascending)", value: "title_asc" },
];
