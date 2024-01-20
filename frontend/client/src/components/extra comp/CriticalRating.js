import { useState } from "react";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import styles from "./ratings.module.css"




function RatingProfile({value}) {
  const [currentValue] = useState(value);
  const stars = Array(5).fill(0)
  return (
      <div className={styles.stars}>
          {stars.map((_, index) => {
              return (
              <StarOutlinedIcon
                key={index}
                size={15}
                sx={{color: (currentValue) > index ? "orange" : "black"}}
                />
                )
              })}
        </div>        
  );
};






export default RatingProfile;
 