////////////////////////////////
///////////////////////////////
//   Scrolling Text Stuff   //
/////////////////////////////
////////////////////////////

// This is more challenging to see the characters, but way more efficient in terms of code space.
const unsigned char font5x4l [] PROGMEM = {      //Numeric Font Matrix (Arranged as 5x font data + 1x kerning data)
    0b00000000, 0b00000000, 0b00000000, 0b00000000, 5, //Space (Char 0x20)
    0b10000000, 0b10000000, 0b00000000, 0b10000000, 3, //!
    0b10100000, 0b10100000, 0b00000000, 0b00000000, 4, //"
    0b0, 0b0, 0b0, 0b0, 6, //#x
    0b0, 0b0, 0b0, 0b0, 6, //$x
    0b10010000, 0b00100000, 0b01000000, 0b10010000, 6, //%
    0b0, 0b0, 0b0, 0b0, 6, //&
    0b10000000, 0b10000000, 0b00000000, 0b00000000, 2, //'
    0b01000000, 0b10000000, 0b10000000, 0b01000000, 3, //(
    0b10000000, 0b01000000, 0b01000000, 0b10000000, 3, //)
    0b01100000, 0b01100000, 0b00000000, 0b00000000, 4, //*
    0b00100000, 0b01110000, 0b00100000, 0b00000000, 4, //+
    0b00000000, 0b00000000, 0b01000000, 0b10000000, 3, //,
    0b00000000, 0b11100000, 0b00000000, 0b00000000, 4, //-
    0b00000000, 0b00000000, 0b00000000, 0b10000000, 3, //.
    0b00010000, 0b00100000, 0b01000000, 0b10000000, 6, ///
    0b01100000, 0b10100000, 0b10100000, 0b11000000, 5, //0
    0b01000000, 0b11000000, 0b01000000, 0b01000000, 4, //1
    0b01100000, 0b10100000, 0b01000000, 0b11100000, 5, //2   
    0b01100000, 0b10110000, 0b01010000, 0b00100000, 5, //3
    0b10100000, 0b10100000, 0b11100000, 0b00100000, 5, //4
    0b01000000, 0b10110000, 0b11010000, 0b00100000, 5, //5
    0b01000000, 0b10110000, 0b11010000, 0b01100000, 5, //6
    0b11100000, 0b00100000, 0b01000000, 0b01000000, 5, //7
    0b01100000, 0b10110000, 0b11010000, 0b01100000, 5, //8
    0b01100000, 0b10100000, 0b11100000, 0b00100000, 5, //9
    0b00000000, 0b10000000, 0b00000000, 0b10000000, 2, //:
    0b00000000, 0b01000000, 0b00100000, 0b01000000, 4, //;
    0b00000000, 0b00100000, 0b01000000, 0b11100000, 4, //<
    0b00000000, 
    0b11100000, 
    0b00000000, 
    0b11100000, 4, //=x
    0b11100000, 0b01000000, 0b10000000, 0b00000000, 4, //>
    0b01100000, 0b10100000, 0b01100000, 0b00010000, 5, //?
    0b0, 
    0b0, 
    0b0, 
    0b0, 6, //@
    0b01100000, 0b10010000, 0b11110000, 0b10010000, 5, //A
    0b10000000, 0b11100000, 0b10100000, 0b11000000, 4, //0b    
    0b01100000, 0b10000000, 0b10010000, 0b01100000, 5, //C
    0b11000000, 0b10100000, 0b10100000, 0b11000000, 4, //D //0b11100000, 0b10100000, 0b10100000, 0b11000000, - Not sure ... test this too
    0b11100000, 0b10000000, 0b11000000, 0b11100000, 4, //E
    0b11100000, 0b10000000, 0b11000000, 0b10000000, 4, //F
    0b01100000, 0b10000000, 0b10100000, 0b01100000, 4, //G - Not super happy here.
    0b10010000, 0b10010000, 0b11110000, 0b10010000, 5, //H
    0b11100000, 0b01000000, 0b01000000, 0b11100000, 4, //I
    0b00100000, 0b00100000, 0b00100000, 0b11000000, 5, //J
    0b10100000, 0b11000000, 0b11000000, 0b10100000, 4, //K
    0b10000000, 0b10000000, 0b10000000, 0b11100000, 4, //L
    0b10101000, 0b11111000, 0b10001000, 0b10001000, 6, //M - Might be improved?
    0b11001000, 0b11101000, 0b10101000, 0b10011000, 6, //N
    0b01100000, 0b10100000, 0b10100000, 0b11000000, 5, //O
    0b01100000, 0b10100000, 0b11000000, 0b10000000, 4, //P
    0b01100000, 0b10100000, 0b10100000, 0b11110000, 5, //Q
    0b11100000, 0b10100000, 0b11000000, 0b10100000, 4, //R - coupld be tweaked I think,
    0b01000000, 0b10110000, 0b11010000, 0b00100000, 5, //S
    0b11100000, 0b01000000, 0b01000000, 0b01000000, 4, //T
    0b10010000, 0b10010000, 0b10010000, 0b01100000, 5, //U
    0b10010000, 0b10100000, 0b11000000, 0b10000000, 5, //V
    0b10000100, 0b10101000, 0b11110000, 0b10100000, 6, //W
    0b00101000, 0b00110000, 0b01100000, 0b10100000, 6, //X
    0b01010000, 0b01100000, 0b01000000, 0b10000000, 4, //Y
    0b11110000, 0b00100000, 0b01000000, 0b11110000, 5, //Z
    0b11000000, 0b10000000, 0b10000000, 0b11000000, 3, //[x
    0b10000000, 0b10000000, 0b01000000, 0b01000000, 3, //(0backward Slash)
    0b11000000, 0b01000000, 0b01000000, 0b11000000, 3, //]
    0b01000000, 0b11000000, 0b00000000, 0b00000000, 3, //^
    0b00000000, 0b00000000, 0b00000000, 0b11100000, 4, //_
    0b10000000, 0b10000000, 0b00000000, 0b00000000, 3, //`
    0b01100000, 0b10010000, 0b11110000, 0b10010000, 5, //a
    0b10000000, 0b11100000, 0b10100000, 0b11000000, 4, //b    
    0b01100000, 0b10000000, 0b10010000, 0b01100000, 5, //c
    0b11000000, 0b10100000, 0b10100000, 0b11000000, 4, //d //0b11100000, 0b10100000, 0b10100000, 0b11000000, - Not sure ... test this too
    0b11100000, 0b10000000, 0b11000000, 0b11100000, 4, //e
    0b11100000, 0b10000000, 0b11000000, 0b10000000, 4, //f
    0b01100000, 0b10000000, 0b10100000, 0b01100000, 4, //g - Not super happy here.
    0b10010000, 0b10010000, 0b11110000, 0b10010000, 5, //h
    0b11100000, 0b01000000, 0b01000000, 0b11100000, 4, //i
    0b00100000, 0b00100000, 0b00100000, 0b11000000, 5, //j
    0b10100000, 0b11000000, 0b11000000, 0b10100000, 4, //k
    0b10000000, 0b10000000, 0b10000000, 0b11100000, 4, //l
    0b10101000, 0b11111000, 0b10001000, 0b10001000, 6, //m - Might be improved?
    0b11001000, 0b11101000, 0b10101000, 0b10011000, 6, //n
    0b01100000, 0b10100000, 0b10100000, 0b11000000, 5, //o
    0b01100000, 0b10100000, 0b11000000, 0b10000000, 4, //p
    0b01100000, 0b10100000, 0b10100000, 0b11110000, 5, //q
    0b11100000, 0b10100000, 0b11000000, 0b10100000, 4, //r - coupld be tweaked I think,
    0b01000000, 0b10110000, 0b11010000, 0b00100000, 5, //s
    0b11100000, 0b01000000, 0b01000000, 0b01000000, 4, //t
    0b10010000, 0b10010000, 0b10010000, 0b01100000, 5, //u
    0b10010000, 0b10100000, 0b11000000, 0b10000000, 5, //v
    0b10000100, 0b10101000, 0b11110000, 0b10100000, 6, //w
    0b00101000, 0b00110000, 0b01100000, 0b10100000, 6, //x
    0b01010000, 0b01100000, 0b01000000, 0b10000000, 4, //y
    0b11110000, 0b00100000, 0b01000000, 0b11110000, 5, //z
    0b01100000, 0b01000000, 0b11000000, 0b01100000, 4, //{
    0b10000000, 0b10000000, 0b10000000, 0b10000000, 2, //|
    0b11000000, 0b01100000, 0b01000000, 0b11000000, 4, //}x
    0b01101000, 0b10110000, 0b00000000, 0b00000000, 5, //~x
    0b0, 0b0, 0b0, 0b0, 2, // (Char 0x7F)
    0b0, 0b0, 0b0, 0b0, 5 // smiley
};

const unsigned char font5x4r [] PROGMEM = {      //Numeric Font Matrix (Arranged as 5x font data + 1x kerning data)
    0b00000000, 0b00000000, 0b00000000, 0b00000000, 5, //Space (Char 0x20)
    0b10000000, 0b10000000, 0b00000000, 0b10000000, 3, //!
    0b10100000, 0b10100000, 0b00000000, 0b00000000, 4, //"
    0b0, 0b0, 0b0, 0b0, 6, //#x
    0b0, 0b0, 0b0, 0b0, 6, //$x
    0b10010000, 0b00100000, 0b01000000, 0b10010000, 6, //%
    0b0, 0b0, 0b0, 0b0, 6, //&
    0b10000000, 0b10000000, 0b00000000, 0b00000000, 2, //'
    0b01000000, 0b10000000, 0b10000000, 0b01000000, 3, //(
    0b10000000, 0b01000000, 0b01000000, 0b10000000, 3, //)
    0b01100000, 0b01100000, 0b00000000, 0b00000000, 4, //*
    0b00100000, 0b01110000, 0b00100000, 0b00000000, 5, //+
    0b00000000, 0b00000000, 0b10000000, 0b10000000, 2, //,
    0b00000000, 0b11100000, 0b00000000, 0b00000000, 4, //-
    0b00000000, 0b00000000, 0b00000000, 0b10000000, 3, //.
    0b00010000, 0b00100000, 0b01000000, 0b10000000, 6, ///
    0b01100000, 0b10100000, 0b10100000, 0b11000000, 5, //0
    0b01000000, 0b11000000, 0b01000000, 0b01000000, 4, //1
    0b11000000, 0b00100000, 0b01000000, 0b01110000, 5, //2 - This is bad ... needs work!
    0b11000000, 0b00100000, 0b01100000, 0b11100000, 5, //3 - Not great!
    0b10100000, 0b10100000, 0b11100000, 0b00100000, 5, //4
    0b11100000, 0b01000000, 0b10100000, 0b01100000, 5, //5 - 0better than 2 or 3
    0b10000000, 0b11000000, 0b10100000, 0b01100000, 5, //6
    0b11100000, 0b00100000, 0b01000000, 0b01000000, 5, //7
    0b11000000, 0b01000000, 0b10100000, 0b01100000, 5, //8 - Meh ... this slant is harder!
    0b11000000, 0b10100000, 0b01100000, 0b00100000, 5, //9
    0b00000000, 0b10000000, 0b00000000, 0b10000000, 2, //:
    0b00000000, 0b10000000, 0b00000000, 0b10000000, 4, //; - Yeah, it's just the ;
    0b10000000, 0b10000000, 0b01000000, 0b00100000, 4, //<
    0b00000000, 
    0b11100000, 
    0b00000000, 
    0b11100000, 4, //=x
    0b10000000, 0b01000000, 0b00100000, 0b00100000, 4, //>
    0b11000000, 0b00100000, 0b01000000, 0b01000000, 5, //?
    0b0, 
    0b0, 
    0b0, 
    0b0, 6, //@
    0b01100000, 0b10010000, 0b11110000, 0b10010000, 5, //A
    0b10000000, 0b11000000, 0b10100000, 0b11100000, 4, //0b    
    0b11000000, 0b10000000, 0b10000000, 0b01100000, 5, //C
    0b11000000, 0b10100000, 0b10100000, 0b11000000, 4, //D //0b11100000, 0b10100000, 0b10100000, 0b11000000, - Not sure ... test this too
    0b11100000, 0b10000000, 0b11000000, 0b11100000, 4, //E
    0b11100000, 0b10000000, 0b11000000, 0b10000000, 4, //F
    0b01100000, 0b10000000, 0b10100000, 0b01100000, 4, //G - Not super happy here.
    0b10010000, 0b10010000, 0b11110000, 0b10010000, 5, //H
    0b11100000, 0b01000000, 0b01000000, 0b11100000, 4, //I
    0b00100000, 0b00100000, 0b00100000, 0b11000000, 5, //J
    0b10100000, 0b11000000, 0b11000000, 0b10100000, 4, //K
    0b10000000, 0b10000000, 0b10000000, 0b11100000, 4, //L
    0b10101000, 0b11111000, 0b10001000, 0b10001000, 6, //M - Might be improved?
    0b11001000, 0b11101000, 0b10101000, 0b10011000, 6, //N
    0b01100000, 0b10100000, 0b10100000, 0b11000000, 5, //O
    0b01100000, 0b10100000, 0b11000000, 0b10000000, 4, //P
    0b01100000, 0b10100000, 0b10100000, 0b11110000, 5, //Q
    0b11100000, 0b10100000, 0b11000000, 0b10100000, 4, //R - coupld be tweaked I think,
    0b01100000, 0b01010000, 0b10100000, 0b01100000, 5, //S
    0b11100000, 0b01000000, 0b01000000, 0b01000000, 4, //T
    0b10010000, 0b10010000, 0b10010000, 0b01100000, 5, //U
    0b10010000, 0b10100000, 0b11000000, 0b10000000, 5, //V
    0b10001000, 0b01001000, 0b00111000, 0b00011000, 6, //W
    0b10100000, 0b01100000, 0b01100000, 0b01010000, 5, //X
    0b10100000, 0b01100000, 0b00100000, 0b00100000, 4, //Y
    0b11100000, 0b00100000, 0b01000000, 0b01110000, 5, //Z
    0b11000000, 0b10000000, 0b10000000, 0b11000000, 3, //[x
    0b10000000, 0b01000000, 0b00100000, 0b00010000, 5, //(0backward Slash)
    0b11000000, 0b01000000, 0b01000000, 0b11000000, 3, //]
    0b10000000, 0b11000000, 0b00000000, 0b00000000, 3, //^
    0b00000000, 0b00000000, 0b00000000, 0b11100000, 4, //_
    0b10000000, 0b10000000, 0b00000000, 0b00000000, 3, //`
    0b01100000, 0b10010000, 0b11110000, 0b10010000, 5, //a
    0b10000000, 0b11100000, 0b10100000, 0b11000000, 4, //b    
    0b01100000, 0b10000000, 0b10010000, 0b01100000, 5, //c
    0b11000000, 0b10100000, 0b10100000, 0b11000000, 4, //d //0b11100000, 0b10100000, 0b10100000, 0b11000000, - Not sure ... test this too
    0b11100000, 0b10000000, 0b11000000, 0b11100000, 4, //e
    0b11100000, 0b10000000, 0b11000000, 0b10000000, 4, //f
    0b01100000, 0b10000000, 0b10100000, 0b01100000, 4, //g - Not super happy here.
    0b10010000, 0b10010000, 0b11110000, 0b10010000, 5, //h
    0b11100000, 0b01000000, 0b01000000, 0b11100000, 4, //i
    0b00100000, 0b00100000, 0b00100000, 0b11000000, 5, //j
    0b10100000, 0b11000000, 0b11000000, 0b10100000, 4, //k
    0b10000000, 0b10000000, 0b10000000, 0b11100000, 4, //l
    0b10101000, 0b11111000, 0b10001000, 0b10001000, 6, //m - Might be improved?
    0b11001000, 0b11101000, 0b10101000, 0b10011000, 6, //n
    0b01100000, 0b10100000, 0b10100000, 0b11000000, 5, //o
    0b01100000, 0b10100000, 0b11000000, 0b10000000, 4, //p
    0b01100000, 0b10100000, 0b10100000, 0b11110000, 5, //q
    0b11100000, 0b10100000, 0b11000000, 0b10100000, 4, //r - coupld be tweaked I think,
    0b01100000, 0b01010000, 0b10100000, 0b01100000, 5, //s
    0b11100000, 0b01000000, 0b01000000, 0b01000000, 4, //t
    0b10010000, 0b10010000, 0b10010000, 0b01100000, 5, //u
    0b10010000, 0b10100000, 0b11000000, 0b10000000, 5, //v
    0b10000100, 0b10101000, 0b11110000, 0b10100000, 6, //w
    0b00101000, 0b00110000, 0b01100000, 0b10100000, 6, //x
    0b01010000, 0b01100000, 0b01000000, 0b10000000, 4, //y
    0b11110000, 0b00100000, 0b01000000, 0b11110000, 5, //z
    0b01100000, 0b11000000, 0b01000000, 0b01100000, 4, //{
    0b10000000, 0b10000000, 0b10000000, 0b10000000, 2, //|
    0b11000000, 0b01000000, 0b01100000, 0b11000000, 4, //}x
    0b11010000, 0b10110000, 0b00000000, 0b00000000, 5, //~x
    0b0, 0b0, 0b0, 0b0, 2, // (Char 0x7F)
    0b0, 0b0, 0b0, 0b0, 5 // smiley
};


// This is more challenging to see the characters, but way more efficient in terms of code space.
// Note this is more of a 7x4 font than 5x4, but who's counting ?  The kerning value manages it and we have 8 wide on the FLD :)
// AURE0bESH IS NOT IMPLEMENTED IN THE 4 HIGH  REAR!
const unsigned char aurabesh5x4l [] PROGMEM = {      //Numeric Font Matrix for Aurabesh, created by TheJugg1er (Arranged as 7x font data + 1x kerning data)
    0b00000000, 0b00000000, 0b00000000, 0b00000000, 5, //Space (Char 0x20)
    0b10000000, 0b10000000, 0b00000000, 0b10000000, 3, //!
    0b10100000, 0b10100000, 0b00000000, 0b00000000, 4, //"
    0b0, 0b0, 0b0, 0b0, 6, //#x
    0b0, 0b0, 0b0, 0b0, 6, //$x
    0b10010000, 0b00100000, 0b01000000, 0b10010000, 6, //%
    0b0, 0b0, 0b0, 0b0, 6, //&
    0b10000000, 0b10000000, 0b00000000, 0b00000000, 2, //'
    0b01000000, 0b10000000, 0b10000000, 0b01000000, 3, //(
    0b10000000, 0b01000000, 0b01000000, 0b10000000, 3, //)
    0b01100000, 0b01100000, 0b00000000, 0b00000000, 4, //*
    0b00100000, 0b01110000, 0b00100000, 0b00000000, 4, //+
    0b00000000, 0b00000000, 0b01000000, 0b10000000, 3, //,
    0b00000000, 0b11100000, 0b00000000, 0b00000000, 4, //-
    0b00000000, 0b00000000, 0b00000000, 0b10000000, 3, //.
    0b00010000, 0b00100000, 0b01000000, 0b10000000, 6, ///
    0b01100000, 0b10100000, 0b10100000, 0b11000000, 5, //0
    0b01000000, 0b11000000, 0b01000000, 0b01000000, 4, //1
    0b01100000, 0b10100000, 0b01000000, 0b11100000, 5, //2   
    0b01100000, 0b10110000, 0b01010000, 0b00100000, 5, //3
    0b10100000, 0b10100000, 0b11100000, 0b00100000, 5, //4
    0b01000000, 0b10110000, 0b11010000, 0b00100000, 5, //5
    0b01000000, 0b10110000, 0b11010000, 0b01100000, 5, //6
    0b11100000, 0b00100000, 0b01000000, 0b01000000, 5, //7
    0b01100000, 0b10110000, 0b11010000, 0b01100000, 5, //8
    0b01100000, 0b10100000, 0b11100000, 0b00100000, 5, //9
    0b00000000, 0b10000000, 0b00000000, 0b10000000, 2, //:
    0b00000000, 0b01000000, 0b00100000, 0b01000000, 4, //;
    0b00000000, 0b00100000, 0b01000000, 0b11100000, 4, //<
    0b00000000, 
    0b11100000, 
    0b00000000, 
    0b11100000, 4, //=x
    0b11100000, 0b01000000, 0b10000000, 0b00000000, 4, //>
    0b01100000, 0b10100000, 0b01100000, 0b00010000, 5, //?
    0b0, 
    0b0, 
    0b0, 
    0b0, 6, //@
    0b01100000, 0b10010000, 0b11110000, 0b10010000, 5, //A
    0b10000000, 0b11100000, 0b10100000, 0b11000000, 4, //0b    
    0b01100000, 0b10000000, 0b10010000, 0b01100000, 5, //C
    0b11000000, 0b10100000, 0b10100000, 0b11000000, 4, //D //0b11100000, 0b10100000, 0b10100000, 0b11000000, - Not sure ... test this too
    0b11100000, 0b10000000, 0b11000000, 0b11100000, 4, //E
    0b11100000, 0b10000000, 0b11000000, 0b10000000, 4, //F
    0b01100000, 0b10000000, 0b10100000, 0b01100000, 4, //G - Not super happy here.
    0b10010000, 0b10010000, 0b11110000, 0b10010000, 5, //H
    0b11100000, 0b01000000, 0b01000000, 0b11100000, 4, //I
    0b00100000, 0b00100000, 0b00100000, 0b11000000, 5, //J
    0b10100000, 0b11000000, 0b11000000, 0b10100000, 4, //K
    0b10000000, 0b10000000, 0b10000000, 0b11100000, 4, //L
    0b10101000, 0b11111000, 0b10001000, 0b10001000, 6, //M - Might be improved?
    0b11001000, 0b11101000, 0b10101000, 0b10011000, 6, //N
    0b01100000, 0b10100000, 0b10100000, 0b11000000, 5, //O
    0b01100000, 0b10100000, 0b11000000, 0b10000000, 4, //P
    0b01100000, 0b10100000, 0b10100000, 0b11110000, 5, //Q
    0b11100000, 0b10100000, 0b11000000, 0b10100000, 4, //R - coupld be tweaked I think,
    0b01000000, 0b10110000, 0b11010000, 0b00100000, 5, //S
    0b11100000, 0b01000000, 0b01000000, 0b01000000, 4, //T
    0b10010000, 0b10010000, 0b10010000, 0b01100000, 5, //U
    0b10010000, 0b10100000, 0b11000000, 0b10000000, 5, //V
    0b10000100, 0b10101000, 0b11110000, 0b10100000, 6, //W
    0b00101000, 0b00110000, 0b01100000, 0b10100000, 6, //X
    0b01010000, 0b01100000, 0b01000000, 0b10000000, 4, //Y
    0b11110000, 0b00100000, 0b01000000, 0b11110000, 5, //Z
    0b11000000, 0b10000000, 0b10000000, 0b11000000, 3, //[x
    0b10000000, 0b10000000, 0b01000000, 0b01000000, 3, //(0backward Slash)
    0b11000000, 0b01000000, 0b01000000, 0b11000000, 3, //]
    0b01000000, 0b11000000, 0b00000000, 0b00000000, 3, //^
    0b00000000, 0b00000000, 0b00000000, 0b11100000, 4, //_
    0b10000000, 0b10000000, 0b00000000, 0b00000000, 3, //`
    0b01100000, 0b10010000, 0b11110000, 0b10010000, 5, //a
    0b10000000, 0b11100000, 0b10100000, 0b11000000, 4, //b    
    0b01100000, 0b10000000, 0b10010000, 0b01100000, 5, //c
    0b11000000, 0b10100000, 0b10100000, 0b11000000, 4, //d //0b11100000, 0b10100000, 0b10100000, 0b11000000, - Not sure ... test this too
    0b11100000, 0b10000000, 0b11000000, 0b11100000, 4, //e
    0b11100000, 0b10000000, 0b11000000, 0b10000000, 4, //f
    0b01100000, 0b10000000, 0b10100000, 0b01100000, 4, //g - Not super happy here.
    0b10010000, 0b10010000, 0b11110000, 0b10010000, 5, //h
    0b11100000, 0b01000000, 0b01000000, 0b11100000, 4, //i
    0b00100000, 0b00100000, 0b00100000, 0b11000000, 5, //j
    0b10100000, 0b11000000, 0b11000000, 0b10100000, 4, //k
    0b10000000, 0b10000000, 0b10000000, 0b11100000, 4, //l
    0b10101000, 0b11111000, 0b10001000, 0b10001000, 6, //m - Might be improved?
    0b11001000, 0b11101000, 0b10101000, 0b10011000, 6, //n
    0b01100000, 0b10100000, 0b10100000, 0b11000000, 5, //o
    0b01100000, 0b10100000, 0b11000000, 0b10000000, 4, //p
    0b01100000, 0b10100000, 0b10100000, 0b11110000, 5, //q
    0b11100000, 0b10100000, 0b11000000, 0b10100000, 4, //r - coupld be tweaked I think,
    0b01000000, 0b10110000, 0b11010000, 0b00100000, 5, //s
    0b11100000, 0b01000000, 0b01000000, 0b01000000, 4, //t
    0b10010000, 0b10010000, 0b10010000, 0b01100000, 5, //u
    0b10010000, 0b10100000, 0b11000000, 0b10000000, 5, //v
    0b10000100, 0b10101000, 0b11110000, 0b10100000, 6, //w
    0b00101000, 0b00110000, 0b01100000, 0b10100000, 6, //x
    0b01010000, 0b01100000, 0b01000000, 0b10000000, 4, //y
    0b11110000, 0b00100000, 0b01000000, 0b11110000, 5, //z
    0b01100000, 0b01000000, 0b11000000, 0b01100000, 4, //{
    0b10000000, 0b10000000, 0b10000000, 0b10000000, 2, //|
    0b11000000, 0b01100000, 0b01000000, 0b11000000, 4, //}x
    0b01101000, 0b10110000, 0b00000000, 0b00000000, 5, //~x
    0b0, 0b0, 0b0, 0b0, 2, // (Char 0x7F)
    0b0, 0b0, 0b0, 0b0, 5 // smiley
};

const unsigned char aurabesh5x4r [] PROGMEM = {      //Numeric Font Matrix for Aurabesh, created by TheJugg1er (Arranged as 7x font data + 1x kerning data)
  // AURE0bESH IS NOT IMPLEMENTED IN THE 4 HIGH  REAR!
   0b00000000, 0b00000000, 0b00000000, 0b00000000, 5, //Space (Char 0x20)
    0b10000000, 0b10000000, 0b00000000, 0b10000000, 3, //!
    0b10100000, 0b10100000, 0b00000000, 0b00000000, 4, //"
    0b0, 0b0, 0b0, 0b0, 6, //#x
    0b0, 0b0, 0b0, 0b0, 6, //$x
    0b10010000, 0b00100000, 0b01000000, 0b10010000, 6, //%
    0b0, 0b0, 0b0, 0b0, 6, //&
    0b10000000, 0b10000000, 0b00000000, 0b00000000, 2, //'
    0b01000000, 0b10000000, 0b10000000, 0b01000000, 3, //(
    0b10000000, 0b01000000, 0b01000000, 0b10000000, 3, //)
    0b01100000, 0b01100000, 0b00000000, 0b00000000, 4, //*
    0b00100000, 0b01110000, 0b00100000, 0b00000000, 5, //+
    0b00000000, 0b00000000, 0b10000000, 0b10000000, 2, //,
    0b00000000, 0b11100000, 0b00000000, 0b00000000, 4, //-
    0b00000000, 0b00000000, 0b00000000, 0b10000000, 3, //.
    0b00010000, 0b00100000, 0b01000000, 0b10000000, 6, ///
    0b01100000, 0b10100000, 0b10100000, 0b11000000, 5, //0
    0b01000000, 0b11000000, 0b01000000, 0b01000000, 4, //1
    0b11000000, 0b00100000, 0b01000000, 0b01110000, 5, //2 - This is bad ... needs work!
    0b11000000, 0b00100000, 0b01100000, 0b11100000, 5, //3 - Not great!
    0b10100000, 0b10100000, 0b11100000, 0b00100000, 5, //4
    0b11100000, 0b01000000, 0b10100000, 0b01100000, 5, //5 - 0better than 2 or 3
    0b10000000, 0b11000000, 0b10100000, 0b01100000, 5, //6
    0b11100000, 0b00100000, 0b01000000, 0b01000000, 5, //7
    0b11000000, 0b01000000, 0b10100000, 0b01100000, 5, //8 - Meh ... this slant is harder!
    0b11000000, 0b10100000, 0b01100000, 0b00100000, 5, //9
    0b00000000, 0b10000000, 0b00000000, 0b10000000, 2, //:
    0b00000000, 0b10000000, 0b00000000, 0b10000000, 4, //; - Yeah, it's just the ;
    0b10000000, 0b10000000, 0b01000000, 0b00100000, 4, //<
    0b00000000, 
    0b11100000, 
    0b00000000, 
    0b11100000, 4, //=x
    0b10000000, 0b01000000, 0b00100000, 0b00100000, 4, //>
    0b11000000, 0b00100000, 0b01000000, 0b01000000, 5, //?
    0b0, 
    0b0, 
    0b0, 
    0b0, 6, //@
    0b01100000, 0b10010000, 0b11110000, 0b10010000, 5, //A
    0b10000000, 0b11000000, 0b10100000, 0b11100000, 4, //0b    
    0b11000000, 0b10000000, 0b10000000, 0b01100000, 5, //C
    0b11000000, 0b10100000, 0b10100000, 0b11000000, 4, //D //0b11100000, 0b10100000, 0b10100000, 0b11000000, - Not sure ... test this too
    0b11100000, 0b10000000, 0b11000000, 0b11100000, 4, //E
    0b11100000, 0b10000000, 0b11000000, 0b10000000, 4, //F
    0b01100000, 0b10000000, 0b10100000, 0b01100000, 4, //G - Not super happy here.
    0b10010000, 0b10010000, 0b11110000, 0b10010000, 5, //H
    0b11100000, 0b01000000, 0b01000000, 0b11100000, 4, //I
    0b00100000, 0b00100000, 0b00100000, 0b11000000, 5, //J
    0b10100000, 0b11000000, 0b11000000, 0b10100000, 4, //K
    0b10000000, 0b10000000, 0b10000000, 0b11100000, 4, //L
    0b10101000, 0b11111000, 0b10001000, 0b10001000, 6, //M - Might be improved?
    0b11001000, 0b11101000, 0b10101000, 0b10011000, 6, //N
    0b01100000, 0b10100000, 0b10100000, 0b11000000, 5, //O
    0b01100000, 0b10100000, 0b11000000, 0b10000000, 4, //P
    0b01100000, 0b10100000, 0b10100000, 0b11110000, 5, //Q
    0b11100000, 0b10100000, 0b11000000, 0b10100000, 4, //R - coupld be tweaked I think,
    0b01100000, 0b01010000, 0b10100000, 0b01100000, 5, //S
    0b11100000, 0b01000000, 0b01000000, 0b01000000, 4, //T
    0b10010000, 0b10010000, 0b10010000, 0b01100000, 5, //U
    0b10010000, 0b10100000, 0b11000000, 0b10000000, 5, //V
    0b10001000, 0b01001000, 0b00111000, 0b00011000, 6, //W
    0b10100000, 0b01100000, 0b01100000, 0b01010000, 5, //X
    0b10100000, 0b01100000, 0b00100000, 0b00100000, 4, //Y
    0b11100000, 0b00100000, 0b01000000, 0b01110000, 5, //Z
    0b11000000, 0b10000000, 0b10000000, 0b11000000, 3, //[x
    0b10000000, 0b01000000, 0b00100000, 0b00010000, 5, //(0backward Slash)
    0b11000000, 0b01000000, 0b01000000, 0b11000000, 3, //]
    0b10000000, 0b11000000, 0b00000000, 0b00000000, 3, //^
    0b00000000, 0b00000000, 0b00000000, 0b11100000, 4, //_
    0b10000000, 0b10000000, 0b00000000, 0b00000000, 3, //`
    0b01100000, 0b10010000, 0b11110000, 0b10010000, 5, //a
    0b10000000, 0b11100000, 0b10100000, 0b11000000, 4, //b    
    0b01100000, 0b10000000, 0b10010000, 0b01100000, 5, //c
    0b11000000, 0b10100000, 0b10100000, 0b11000000, 4, //d //0b11100000, 0b10100000, 0b10100000, 0b11000000, - Not sure ... test this too
    0b11100000, 0b10000000, 0b11000000, 0b11100000, 4, //e
    0b11100000, 0b10000000, 0b11000000, 0b10000000, 4, //f
    0b01100000, 0b10000000, 0b10100000, 0b01100000, 4, //g - Not super happy here.
    0b10010000, 0b10010000, 0b11110000, 0b10010000, 5, //h
    0b11100000, 0b01000000, 0b01000000, 0b11100000, 4, //i
    0b00100000, 0b00100000, 0b00100000, 0b11000000, 5, //j
    0b10100000, 0b11000000, 0b11000000, 0b10100000, 4, //k
    0b10000000, 0b10000000, 0b10000000, 0b11100000, 4, //l
    0b10101000, 0b11111000, 0b10001000, 0b10001000, 6, //m - Might be improved?
    0b11001000, 0b11101000, 0b10101000, 0b10011000, 6, //n
    0b01100000, 0b10100000, 0b10100000, 0b11000000, 5, //o
    0b01100000, 0b10100000, 0b11000000, 0b10000000, 4, //p
    0b01100000, 0b10100000, 0b10100000, 0b11110000, 5, //q
    0b11100000, 0b10100000, 0b11000000, 0b10100000, 4, //r - coupld be tweaked I think,
    0b01000000, 0b10110000, 0b11010000, 0b00100000, 5, //s
    0b11100000, 0b01000000, 0b01000000, 0b01000000, 4, //t
    0b10010000, 0b10010000, 0b10010000, 0b01100000, 5, //u
    0b10010000, 0b10100000, 0b11000000, 0b10000000, 5, //v
    0b10000100, 0b10101000, 0b11110000, 0b10100000, 6, //w
    0b00101000, 0b00110000, 0b01100000, 0b10100000, 6, //x
    0b01010000, 0b01100000, 0b01000000, 0b10000000, 4, //y
    0b11110000, 0b00100000, 0b01000000, 0b11110000, 5, //z
    0b01100000, 0b11000000, 0b01000000, 0b01100000, 4, //{
    0b10000000, 0b10000000, 0b10000000, 0b10000000, 2, //|
    0b11000000, 0b01000000, 0b01100000, 0b11000000, 4, //}x
    0b11010000, 0b10110000, 0b00000000, 0b00000000, 5, //~x
    0b0, 0b0, 0b0, 0b0, 2, // (Char 0x7F)
    0b0, 0b0, 0b0, 0b0, 5 // smiley
};