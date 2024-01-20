import { Box} from "@mui/material";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  
  const angle = progress * 360;
  return (
    <Box
      sx={{
        // background: `radial-gradient(red 55%, transparent 56%),
        //     conic-gradient(transparent 0deg ${angle}deg, lime} ${angle}deg 360deg)`,
        background:`radial-gradient(white 55%, transparent 56%), conic-gradient(transparent 0deg ${angle}deg, rgba(255, 99, 400, 0.5) ${angle}deg 360deg), cyan`,

        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
        // backgroundColor:"red"
      }}
    />
  );
};

export default ProgressCircle;