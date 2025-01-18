import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TBlog } from "@/types/TBlog";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  const { _id, title, image } = blog;

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="pb-3">
        <img
          src={image}
          alt="product-image"
          className="pb-2 object-cover w-full h-56 rounded"
        />
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      {/* <CardContent></CardContent> */}
      <CardFooter>
        <Link to={`/blogs/${_id}`} className="w-full">
          <Button
            variant={"outline"}
            className="w-full text-base text-primary border-primary"
          >
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
