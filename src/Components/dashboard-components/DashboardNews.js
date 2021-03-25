import React, { useState, useEffect } from "react";
import Axios from "axios";
import Carousel from "./Carousel";
const kia = "5d4159eb77a44bb7931929ddaca74047";

function DashboardNews(props) {
  // useEffect((props) => {
  //   Axios.get(
  //     `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=5d4159eb77a44bb7931929ddaca74047`
  //   ).then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);
  return (
    <div>
      <Carousel />
    </div>
  );
}

export default DashboardNews;
