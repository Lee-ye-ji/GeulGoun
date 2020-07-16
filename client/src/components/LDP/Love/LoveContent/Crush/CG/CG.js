import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
{
    url: '/static/images/grid-list/breakfast.jpg',
    title: 'Breakfast',
    width: '30%',
},
{
    url: '/static/images/grid-list/camera.jpg',
    title: 'Camera',
    width: '30%',
},
{
    url: '/static/images/grid-list/camera.jpg',
    title: 'Camera',
    width: '30%',
},
{
    url: '/static/images/grid-list/camera.jpg',
    title: 'Camera',
    width: '30%',
},
{
    url: '/static/images/grid-list/camera.jpg',
    title: 'Camera',
    width: '30%',
},
{
    url: '/static/images/grid-list/camera.jpg',
    title: 'Camera',
    width: '30%',
},
];

const useStyles = makeStyles((theme) => ({
root: {
    flexGrow: 1,
    marginTop: 250,
},
image: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 100,
    height: 250,

    '&:hover, &$focusVisible': {
    zIndex: 1,
    '& $imageBackdrop': {
        opacity: 0.15,
    },
    '& $imageMarked': {
        opacity: 0,
    },
    '& $imageTitle': {
        border: '4px solid currentColor',
    },
    },
},
focusVisible: {},
    imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
},
imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
},
imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
},
imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
},
}));

function letter() {
    alert("Great Shot!");
}

export default function ButtonBases() {
const classes = useStyles();

return (
    <div className={classes.root}>
    {images.map((image) => (
        <ButtonBase 
        focusRipple
        key={image.title}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
            width: image.width,
        }}
        onclick={letter}
        >
        <span
            className={classes.imageSrc}
            style={{
            backgroundImage: `url(${image.url})`,
            }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
            <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
            >
            {image.title}
            <span className={classes.imageMarked} />
            </Typography>
        </span>
        </ButtonBase>
    ))}
    </div>
);
}
