import { RatingProps } from "./Rating.props";
import style from "./Rating.module.css";
import { useEffect, useState } from "react";
import classNames from "classnames";
import StarIcon from "./star.svg";


const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {

    // массив с количеством звездочек
    const [stars, setStars] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    // инициализация звездочек согласно рейтингу
    useEffect(() => {
        // изменяем состояние компонента согласно рейтингу
        setStars(renderStar(rating));
    }, [rating]);

    // функция которая создает звездочки и подкрашивает массив звездочек и возвращает
    const renderStar = (currentRating: number): JSX.Element[] => {
        return stars.map((star: JSX.Element, index: number) => {
            return (
                <span
                    className={classNames(style.star, {
                        [style.filled]: index < currentRating,
                        [style.isEditable]: isEditable
                    })}
                    onMouseEnter={() => isEditable ?  setStars(renderStar(index+1)) : undefined}
                    onMouseLeave={() => isEditable ? setStars(renderStar(rating)) : undefined}
                    onClick={() => isEditable && setRating ? setRating(index + 1) : undefined}
                >
                    <StarIcon  
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={e => isEditable && setRating && e.code === 'Space' ? setRating(index + 1) : undefined}
                    />
                </span>
            );
        });
    };
    
    return(
        <div {...props}>
            {
                stars.map((r, i) => (<span key={i}>{r}</span>))
            }
        </div>
    );
};

export default Rating;