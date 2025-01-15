export type TBlog = {
  _id: string; // Unique identifier for the blog
  title: string; // Blog title
  content: string; // Blog content (markdown or plain text)
  author: string; // Author's name
  createdAt: Date; // Blog creation date
  updatedAt?: Date; // Optional field for last update date
  tags?: string[]; // Optional list of tags or categories
  image?: string; // Optional URL for the blog's thumbnail image
  isPublished: boolean; // Indicates whether the blog is published or in draft mode
};
