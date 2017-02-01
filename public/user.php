<?php

class User
{
  protected $name;
  protected $color;
  protected $difficulty;

  function __construct($_name,$_color, $_difficulty)
  {
    setName($_name);
    setColor($_color);
    setDifficulty($_difficulty);
  }

  function getName(){
    return $name;
  }
  function setName($_name){
    $name = $_name;
  }
  function getColor(){
    return $color;
  }
  function setColor($_color){
    $color = $_color;
  }
  function getDifficulty(){
    return $difficulty;
  }
  function setDifficulty($_difficulty){
    $difficulty = $_difficulty;
  }
}
 ?>
