const {
  request
} = require("express");
// const mysql = require("mysql");
const conn = require("../db");

// get
const getCoins = (req, res) => {
  const command = "select * from COINS";

  conn.query(command, (err, data) => {
    if (!err) {
      return res.json(data).status(200);
    }
    res.send("xeta").status(401);
  });
};


// get by id
const getCoinsbyId = (req, res) => {
  const command = `select * from COINS where id = ${req.params.id}`;

  conn.query(command, (err, data) => {
    if (!err) {
      return res.json(data).status(200);
    }
    res.send("xeta").status(401);
  });
};

//create
const createCoins = (req, res) => {
  const {
    Title,
    Content,
    IssuingCountry,
    Composition,
    Quality,
    Denomination,
    Yearr,
    Weight,
    Price,
    url1,
    url2,
    Category
  } = req.body;
  const command = `INSERT INTO COINS (Title, Content, IssuingCountry, Composition, Quality, Denomination, Yearr, Weight, Price, url1, url2, Category)
  VALUES ("${Title}", "${Content}","${IssuingCountry}","${Composition}","${Quality}","${Denomination}",${Yearr}, "${Weight}","${Price}", "${url1}", "${url2}", "${Category}");`;
  conn.query(command, (err) => {
    if (!err) {
      return res.send("ugurla yaradildi");
    }
    res.send("xeta bas verdi");
  });
};

//update
const updateCoins = (req, res) => {
  const {
    Title,
    Content,
    IssuingCountry,
    Composition,
    Quality,
    Denomination,
    Yearr,
    Weight,
    Price,
    url1,
    url2,
    Category
  } = req.body;
  const command = `update COINS set Title='${Title}' , Content='${Content}', IssuingCountry='${IssuingCountry}', Composition='${Composition}'
  , Quality='${Quality}', Denomination='${Denomination}'
  , Yearr='${Yearr}', Weight='${Weight}', Price='${Price}', url1='${url1}', url2='${url2}', Category='${Category}' where id=${req.params.id}`;
  conn.query(command, (err) => {
    if (!err) {
      return res.send("ugurla yenilendi");
    }
    res.send("xeta bas verdi");
  });
};

//delete
const deleteCoins = (req, res) => {
  const command = `delete from COINS where id=${req.params.id}`;
  conn.query(command, (err) => {
    if (!err) {
      return res.send("ugurla silindi");
    }
    res.send("xeta bas verdi");
  });
};
module.exports = {
  getCoins,
  createCoins,
  updateCoins,
  deleteCoins,
  getCoinsbyId
};