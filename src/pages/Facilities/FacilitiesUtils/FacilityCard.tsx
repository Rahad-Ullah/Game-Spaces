import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TFacility } from "@/types/TFacility";
import { Link } from "react-router-dom";

const FacilityCard = ({ facility }: { facility: TFacility }) => {
  const { _id, name, image, pricePerHour } = facility;

  return (
    <Card>
      <Link to={`/products/${_id}`}>
        <CardHeader className="pb-3">
          <img
            src={image}
            alt="product-image"
            className="pb-2 object-cover w-full h-56 rounded"
          />
          <CardTitle className="text-xl">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-bold">${pricePerHour}</p>
        </CardContent>
      </Link>
      <CardFooter>
        <Button
          className={`w-full text-base`}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FacilityCard;
