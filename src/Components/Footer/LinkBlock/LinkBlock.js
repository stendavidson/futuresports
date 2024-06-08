import { useContext } from "react";

import styles from "./LinkBlock.module.scss";

import NavigationContext from "../../../Contexts/NavigationContext";


/**
 * This function renders a block of pseudo links to the footer
 */
function LinkBlock({blockTitle, pages}){

    const {setPage} = useContext(NavigationContext);

    return (
        <div className={styles.footerBlock}>
            <h2 className={styles.blockHeading}>{blockTitle}</h2>
            {pages.map((page, index) => {
                return (
                    <p className={styles.pageLinks} key={index} onClick={() => {setPage(page)}}>{page}</p>
                );
            })}
        </div>
    );
}

export default LinkBlock;