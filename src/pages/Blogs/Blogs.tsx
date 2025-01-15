import Container from "@/components/shared/Container";
import { Skeleton } from "@/components/ui/skeleton";
import BlogCard from "./BlogsUtils/BlogCard";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data); // Set the JSON data to the state
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  return (
    <div>
      <Container>
        <div>
          <div className="">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-center py-6 mt-10 pb-10">
              Our Blogs
            </h1>
          </div>
          <section>
            {/* blogs display */}
            <div className="pb-12">
              {blogs?.length < 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 justify-between items-center mb-16">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="space-y-4">
                      <Skeleton className="h-52 w-full rounded-xl" />
                      <div className="space-y-4">
                        <Skeleton className="h-6 w-8/12" />
                        <Skeleton className="h-6 w-4/12" />
                        <Skeleton className="h-10 w-12/12" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {blogs?.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                  {blogs?.map((item, index) => (
                    <BlogCard key={index} blog={item} />
                  ))}
                </div>
              )}
              {blogs?.length < 1 && (
                <h1 className="text-center text-lg text-gray-500 my-10">
                  No Data Found
                </h1>
              )}
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
