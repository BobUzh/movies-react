import { Box, Button, CardMedia, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

// const totalSlides = 12;
const widthSlide = 283;

const Carousel = ({children, arrows, totalSlides}) => {
    const boxEl = useRef(null);
    const [maxValueTranslate, setMaxValueTranslate] = useState(0);
    const [width, setWidth] = useState(0);
    const [transform, setTransform] = useState(0)

    useEffect(() => {
        let _width = boxEl.current.offsetWidth;
        let _count = Math.floor(_width/widthSlide);

        setWidth((widthSlide+10)*_count);
        setMaxValueTranslate(totalSlides*(widthSlide+10)-_width);
    },[totalSlides])

    const prev = () => {
        setTransform(prev => (prev + width) > maxValueTranslate ? maxValueTranslate : (prev + width))
    }

    const next = () => {
        setTransform(prev => (prev - width) < 0 ? 0 : (prev - width))
    }

    return (
        <Box ref={boxEl} overflow="hidden" flex="1" position="relative">
            <Box position="relative" sx={{transition: '1s', transform: `translateX(-${transform}px)`}} display="flex">
                {children}
            </Box>
            <Box 
                sx={{background: '#060d17cc', cursor: 'pointer'}} 
                position="absolute" 
                width={40}
                height="1" 
                left="0" 
                display={!arrows ? "flex" : "none"}
                justifyContent="center"
                alignItems="center"
                top={0}
                onClick={next}
            >
                <ArrowBackIosIcon color="info" sx={{"&:hover": {color: "white"}}}/>
            </Box>
            <Box 
                sx={{background: '#060d17cc', cursor: 'pointer'}} 
                position="absolute" 
                width={40}
                justifyContent="center"
                height="1" 
                top={0}
                right="0" 
                bgcolor="gray" 
                display={!arrows ? "flex" : "none"}
                alignItems="center"
                onClick={prev}
            >
                <ArrowForwardIosIcon color="info" sx={{"&:hover": {color: "white"}}}/>
            </Box>
        </Box>
    )
}

export default Carousel;