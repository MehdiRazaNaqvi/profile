
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Box, CardHeader, Card, CardContent, CardActions, Collapse, Chip, Avatar, IconButton } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';
import Rating from "../Rating"
import { useTheme } from "next-themes";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';





export default function ReviewCard({ image, title, heading, country, code, href, service }) {




    const { theme } = useTheme();
    const [mounted, setMounted] = useState();

    useEffect(() => {
        setMounted(true);
    }, []);


    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }




    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }


    
    return (


        <Card className={`${mounted && theme === "light" && "bg-gray-100"} hover:scale-95 transition-transform w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300}`} sx={{ backgroundColor: mounted && theme === "dark" && "#1F1B24", maxWidth: "100%", width: "600px" }}>
            <CardHeader
                avatar={
                    <Avatar {...stringAvatar(heading)} sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <Image width={30} height={25} src={`/${code}.png`} />
                    </IconButton>
                }
                title={heading}
                // subheader="Cofounder Statsmetrics"
                // subheader="Software Engineer at BT"
                subheader={heading == "Akala Moyo" ? country + " | Co-founder Statsmetrics" : country}



                titleTypographyProps={{
                    variant: 'h6',
                    color: mounted && theme == "dark" && "white"

                }}
                subheaderTypographyProps={{
                    color: mounted && theme == "dark" && "white"

                }}
            />

            <CardContent sx={{
                maxHeight: "270px",
                minHeight: "270px",
            }}>

                <FormatQuoteIcon className='m-0 mb-2 p-0 ' sx={{ fontSize: "4rem", color: mounted && theme == "dark" ? "white" : "text.primary", transform: "rotate(180deg)" }} />




                <Typography
                    className='opacity-70 text-xl'
                    sx={{
                        justifySelf: "center",
                        color: mounted && theme == "dark" ? "white" : 'text.primary',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        WebkitLineClamp: 5, // Set the number of lines
                        lineHeight: 1.6,
                    }}
                    variant="body1" color="text.secondary">
                    {title}
                </Typography>


            </CardContent>



            <CardActions disableSpacing>






                <IconButton className='mr-4' href={href} target='_blank' aria-label="add to favorites">
                    <ArrowOutwardIcon fontSize='large' sx={{ color: mounted && theme == "dark" && "white" }} />
                </IconButton>


                <Chip onClick={() => { }} label={service} variant="outlined" sx={{ color: mounted && theme == "dark" && "white" }} />


                <Rating rating={5} />


            </CardActions>




        </Card >


    );
}
