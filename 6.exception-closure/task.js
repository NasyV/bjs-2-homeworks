﻿//ЗАДАЧА 1
function parseCount(value) {
    let parseResult = Number.parseFloat(value);
    if(Number.isNaN(parseResult)) {
      throw new Error ("Невалидное значение");
    } 
      return parseResult;
  } 
  
  function validateCount(value) {
    let parseResult;
    try {
      parseResult = parseCount(value);
      return parseResult;
    } catch (error) {
      return error;
    }
  }

//ЗАДАЧА 2
class Triangle {
    constructor(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get perimeter() {
        return this.a+this.b+this.c;
    }
    get area() {
        let p = this.perimeter / 2;
        let area = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
        return parseFloat(area.toFixed(3));
    }
   
}

function getTriangle(a, b, c) {
  let d 
  try {
    d = new Triangle(a, b, c);
    return d;
  } catch (error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      }
    }    
  }
}
