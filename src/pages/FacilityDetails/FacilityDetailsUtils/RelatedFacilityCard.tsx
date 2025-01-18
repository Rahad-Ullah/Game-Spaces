import { Button } from "@/components/ui/button";
import { TFacility } from "@/types/TFacility";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

const RelatedFacilityCard = ({ facility }: { facility: TFacility }) => {
  const price = facility?.pricePerHour;

  return (
    <div className="flex py-5 border-t gap-2">
      <Link to={`/facilities/${facility?._id}`}>
        <img src={facility?.image} className="max-w-28" alt="facility-image" />
      </Link>
      <div>
        <Link to={`/facilities/${facility?._id}`}>
          <h1 className="font-semibold hover:text-primary">{facility?.name}</h1>
        </Link>
        {/* Price */}
        <h2 className="py-1 text-base">
          <span className="text-base font-bold text-primary">${price}</span>
        </h2>
        <Link to={`/facilities/${facility?._id}`}>
          <Button variant={"ghost"} className="w-full gap-2">
            <Eye size={20} /> View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RelatedFacilityCard;
