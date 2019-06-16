import React  from 'react';
import classes from './Card.css';
import ReactImageFallback from "react-image-fallback";

const BrewImage = (props) => {
    const defaultImage = "https://www.manutea.pl/projekt/public/fotky/maxi/power-tea-caj-pro-ziskani-energie-cerny-caj_123_1.jpg";
    const loadingImage= "https://thomas.vanhoutte.be/miniblog/wp-content/uploads/light_blue_material_design_loading.gif";
    const imageUrl = props.imgUrl;

    return (
        <div className="image">
            <ReactImageFallback
                className="image"
                src={imageUrl}
                fallbackImage={defaultImage}
                initialImage={loadingImage}
                alt="brew"
                height={200} width={200}/>
        </div>
    )
};

export default BrewImage;
