import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, Col } from "antd";

interface CategoryCardProps {
  category: {
    category_id: string;
    category_name: string;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Col
      md={8}
      sm={12}
      xs={24}
      lg={6}
      className="wow fadeInUp mb-4"
      data-wow-delay="0.1s"
    >
      <div className="service-item bg-white rounded h-full p-5 shadow-lg flex  sm:block flex-col justify-center items-center">
        <div className="flex items-center justify-center bg-white rounded-full mb-4 w-16 h-16">
          <i className="text-blue-500 text-2xl">
            <FontAwesomeIcon icon={faTooth} />
          </i>
        </div>
        <h4
          className="mb-3 font-semibold capitalize"
          style={{ maxWidth: "125px" }}
        >
          {category.category_name}
        </h4>

        <Button className="bg-white">
          <Link
            className="text-blue-500"
            to={`/detailServices/${category.category_id}`}
          >
            <i className="text-blue-500 mr-4">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            Xem thêm
          </Link>
        </Button>
      </div>
    </Col>
  );
};

export default CategoryCard;
