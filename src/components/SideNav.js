import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Clear } from "@material-ui/icons";
import {
  Drawer,
  Typograpy,
  Divider,
  Link,
  Typography,
} from "@material-ui/core";
import { getMyImage } from "../context/imgApi";
const useStyles = makeStyles((theme) => ({
  drawBox: {
    width: "400px",
  },
  titleWrap: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "space-around",
    marginBottom: theme.spacing(2),
  },
  navWrap: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  navItem: {
    width: "45%",
    height: "90px",
    background: "steelblue",
    display: "flex",
    alignItems: "flex-end",
    borderRadius: "8px",
    marginTop: theme.spacing(2),
    cursor: "pointer",
  },
  link: {
    fontSize: "1rem",
    color: "#fff",
  },
  cursor: {
    cursor: "pointer",
  },
}));
function SideNav({ open, setOpen, setBgUrl }) {
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);
  //   console.log(photos);
  const getImg = async () => {
    const imgList = await getMyImage();
    // console.log(imgList);
    setPhotos(imgList);
  };
  useEffect(() => {
    getImg();
  }, []);
  return (
    <Drawer anchor="right" open={open}>
      <div className={classes.drawBox}>
        <div className={classes.titleWrap}>
          <Typography>selected your background</Typography>
          <Clear onClick={() => setOpen(!open)} className={classes.cursor} />
        </div>

        <Divider />
        <div className={classes.navWrap}>
          <div
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/755726/pexels-photo-755726.jpeg?cs=srgb&dl=astronomy-astrophotography-clouds-colors-755726.jpg&fm=jpg)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={classes.navItem}
          >
            <span>photo</span>
          </div>

          <div
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/755726/pexels-photo-755726.jpeg?cs=srgb&dl=astronomy-astrophotography-clouds-colors-755726.jpg&fm=jpg)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={classes.navItem}
          >
            <span>colors</span>
          </div>
        </div>
        <div className={classes.navWrap}>
          {photos.map((photo, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${photo.thumb})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className={classes.navItem}
              onClick={() => setBgUrl(photo.full)}
            >
              <span>
                <Link
                  href={photo.user.link}
                  target="_blank"
                  className={classes.link}
                >
                  {photo.user.username}
                </Link>
              </span>
            </div>
          ))}
        </div>
      </div>
    </Drawer>
  );
}

export default SideNav;
