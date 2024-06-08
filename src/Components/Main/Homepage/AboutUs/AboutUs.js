import styles from "./AboutUs.module.scss";

import MarginedRegion from "../../MarginedRegion/MarginedRegion";


/**
 * This function renders an About Us article to the homepage.
 */
function AboutUs(){

    return (
        <MarginedRegion type="article">
            <h1 className={styles.regionHeading}>About Us</h1>
            <p className={styles.regionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla ex, pretium vel pellentesque a, cursus non urna.
                Vestibulum commodo dui et ipsum porttitor congue. Sed tristique tellus eget pretium congue. Ut ultricies a sapien commodo
                tempor. In libero augue, condimentum et dictum vitae, volutpat nec enim. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Cras leo enim, fringilla vel odio in, ornare fringilla sapien.Maecenas et 
                tristique velit. Ut sed tempor leo, sagittis bibendum ex. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Suspendisse at aliquam sem. Cras sodales tortor quis hendrerit sollicitudin.
                <br/><br/>
                Praesent tristique, nibh vel posuere vehicula, turpis leo rhoncus libero, fermentum bibendum arcu nunc ut ante. Suspendisse
                vel semper ante, at sodales libero. Maecenas et tristique velit. Ut sed tempor leo, sagittis bibendum ex. Pellentesque 
                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis tincidunt libero. Ut ultricies 
                a sapien commodo tempor. In libero augue, condimentum et dictum vitae, volutpat nec enim. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Cras leo enim, fringilla vel odio in, ornare fringilla sapien.Maecenas
                et tristique velit. Ut sed tempor leo, sagittis bibendum ex. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Suspendisse at aliquam sem. Proin quis lacus ligula. Praesent quis quam lacus. Curabitur
                egestas cursus libero a fringilla. Nullam placerat eget ante vitae sodales.
                <br/><br/>
                Duis viverra est ut lorem viverra, non commodo est eleifend. Aliquam iaculis mattis congue. Nunc efficitur sit amet felis
                ultrices accumsan. Maecenas et tristique velit. Ut sed tempor leo, sagittis bibendum ex. Pellentesque 
                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis tincidunt libero. Ut ultricies 
                a sapien commodo tempor. In libero augue, condimentum et dictum vitae, volutpat nec enim. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Cras leo enim, fringilla vel odio in, ornare fringilla sapien.Maecenas
                et tristique velit. Ut sed tempor leo, sagittis bibendum ex. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Suspendisse at aliquam sem. Proin quis lacus ligula. Praesent quis quam lacus. Curabitur
                egestas cursus libero a fringilla Sed ex tellus, convallis eu condimentum non, cursus eget diam. Suspendisse at aliquam sem. 
                Cras sodales tortor quis hendrerit sollicitudin. Praesent gravida efficitur metus, in auctor enim consectetur a. Nulla mollis
                sed urna eget mattis.
            </p>
        </MarginedRegion>
    );
}

export default AboutUs;