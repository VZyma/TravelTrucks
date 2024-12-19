import { BallTriangle } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => {
    return (
        <div className={css.loaderContainer}>
            <div className={css.loaderContent}>
                <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#e44848"
                    ariaLabel="ball-triangle-loading"
                    visible={true}
                />
                <p className={css.loaderText}>Loading...</p>
            </div>
        </div>
    );
};

export const LoaderBtn = () => {
    return (
        <div className={css.loaderContainerBtn}>
            <BallTriangle
                height={40}
                width={40}
                radius={5}
                color="#e44848"
                ariaLabel="ball-triangle-loading"
                visible={true}
            />
        </div>
    );
};