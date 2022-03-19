import { RatingProps } from "./Rating.props";
import style from "./Rating.module.css";
import { useEffect, useState } from "react";
import classNames from "classnames";
import StarIcon from "./star.svg";


const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        setRatingArray(renderStar(rating));
    }, [rating]);

    const renderStar = (currentRating: number): JSX.Element[] => {
        return ratingArray.map((star: JSX.Element, index: number) => {
            return (
                <span key={index}>
                    <StarIcon  
                        className={classNames(style.star, {
                            [style.filled]: index < currentRating
                        })}
                    />
                </span>
            );
        });
    };
    
    return(
        <div {...props}>
            {
                ratingArray
            }
        </div>
    );
};

export default Rating;