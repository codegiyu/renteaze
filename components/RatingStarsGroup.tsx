import utils from "@/utils";
import FullStar from "./FullStar";
import HalfStar from "./HalfStar";
import EmptyStar from "./EmptyStar";

const RatingStarsGroup: React.FC<RatingStarsGroupProps> = ({ color = "#F15756", rating }) => {
    const starArr = utils.getStarArr(rating);

    return (
        <div className="w-fit flex gap-1" style={{ color }}>
            { starArr.map((num, idx) => {
                if (num === 1) {
                    return <FullStar key={ idx } />
                } else if (num === 0.5) {
                    return <HalfStar key={ idx } />
                } else {
                    return <EmptyStar key={ idx } />
                }
            })}
        </div>
    )
}

export default RatingStarsGroup;