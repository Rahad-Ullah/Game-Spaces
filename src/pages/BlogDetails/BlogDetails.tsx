import Container from "@/components/shared/Container";
import { TBlog } from "@/types/TBlog";
import { formatDate } from "@/utils/formatDate";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState<TBlog | null>(null);

  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        return response.json();
      })
      .then((data) => {
        const blog = data?.find((item: TBlog) => item?._id === id);

        setBlog(blog); // Set the JSON data to the state
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, [id]);

  return (
    <div>
      <Container>
        <section className="my-6">
          <h1 className="text-3xl md:text-5xl font-bold pt-6 pb-4">
            {blog?.title}
          </h1>
          <p>
            Published on{" "}
            {blog?.createdAt
              ? formatDate(new Date(blog.createdAt))
              : "Unknown date"}
          </p>
        </section>
        <section>
          <div className="py-4 md:py-8">
            <img
              src={blog?.image}
              alt="blog"
              className="w-full max-h-[700px]"
            />
          </div>
          <p className="py-6 text-xl">{blog?.content}</p>
        </section>
      </Container>
    </div>
  );
};

export default BlogDetails;
