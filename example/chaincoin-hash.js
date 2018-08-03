var c11 = require('../');

//block 1 header for chaincoin
var blockNumber = 1;
var blockHeaderHash = "00000012f1c40ff12a9e6b0e9076fe4fa7ad27012e256a5ad7bcb80dc02c0409";
var blochHeaderHex = "02000000646c86cc3b092da100e03dd144ded7eb3ac3ccdbf81e862b4b73b59d630f000079283de96a366f310862ebe0b70993b95dfe6c5a2bf1511f2156107e9e2e2baa1749db52ffff0f1ee9070200";


//hex to binary buffer
function hex2bin(hex) {
  var buffer = new Uint8Array(hex.length / 2);

  for (var i = 0; i < hex.length - 1; i += 2) {
      buffer[i / 2] = parseInt(hex.substr(i, 2), 16)
  }

  return buffer;
}

//binary buffer to hex
function bin2hex(bin) {
  var result = "";

  for (var i = 0; i < bin.length; i++) {

      var hex = bin[i].toString(16);
      if (hex.length < 2) hex = "0" + hex;

      result = result + hex;
  }

  return result;
}

//hash the buffer
function ComputeC11Hash(input) {
        
  var a = c11.blake(input,1,1);
  a = c11.bmw(a,1,1);
  a = c11.groestl(a,1,1);
  a = c11.jh(a,1,1);
  a = c11.keccak(a,1,1);
  a = c11.skein(a,1,1);
  a = c11.luffa(a,1,1);
  a = c11.cubehash(a,1,1);
  a = c11.shavite(a,1,1);
  a = c11.simd(a,1,1);
  a = c11.echo(a,1,1);
  a = a.slice(0,32);
  
  return a.reverse();
}



//turn hex into a buffer
var blockHeaderBuffer = hex2bin(blochHeaderHex);

//hash the buffer
var blockHeaderHashBuffer = ComputeC11Hash(blockHeaderBuffer);

//convert header hash buffer to hex and compare to the header hash for block 1
if (bin2hex(blockHeaderHashBuffer) == blockHeaderHash)
{
  console.log("Block header hashed successfully");
}
else
{
  console.log("Block header hashing failed");
}