import { Box, Typography} from "@mui/material";
import ProgressCircle from "./ProgressCircle";
import { adminOverview } from "../../../stores/CartContxt";
import { useContext } from "react";
import { ThemeData } from "../../../App";
// import { ThemeData } from "../../../App";
// const Themes=useContext(ThemeData)


const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const Theme=useContext(ThemeData)
  const{TotalUsers}=useContext(adminOverview)
  console.log(TotalUsers)
  return (
    <Box sx={{
      width:"100%", m:"0 10px", boxShadow:"3"
    }} >
      <Box sx={{p:"3%"}}>
        <Box display="flex" justifyContent="space-between">
          <Box>
            {icon}
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: Theme? "white":"gray"}}
            >
              {title}
            </Typography>
          </Box>
          <Box>
            <ProgressCircle progress={progress} />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mt="2px">
          <Typography variant="p" sx={{ color: Theme? "cyan": "black", opacity:"0.7", mt:"12px" }}>
            {subtitle}
          </Typography>
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{ color: "cyan" }}
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;