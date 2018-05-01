const getWimsData = require('./getWimsData.js')
var cron = require('node-cron');
 
cron.schedule('36 23 * * *', function(){
  getWimsData(reqDateAr[0],reqDateAr[1],reqDateAr[2],reqDateAr[3],reqDateAr[4],reqDateAr[5],reqDateAr[6],reqDateAr[7],reqDateAr[8])
});

Date.prototype.addDays = function(days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
}
Date.prototype.subDays = function(days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() - days);
  return dat;
}
var dat = new Date();
var monthAr = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

var h0 = new Date();
var h24 = dat.subDays(1)
var h48 = dat.subDays(2)

var datAr = [h0,h24,h48];
var reqDateAr = []
datAr.map((curr)=>{
	var day = curr.getDate();
	var mon = monthAr[curr.getMonth()];
	var yr = curr.getFullYear() - 2000; 
	reqDateAr.push(day,mon,yr)
})

// console.log(reqDateAr[0],reqDateAr[1],reqDateAr[2],reqDateAr[3],reqDateAr[4],reqDateAr[5],reqDateAr[6],reqDateAr[7],reqDateAr[8])


// getWimsData(1,'JUL',17,2,'JUL',17,3,'JUL',17)
// getWimsData(reqDateAr[0],reqDateAr[1],reqDateAr[2],reqDateAr[3],reqDateAr[4],reqDateAr[5],reqDateAr[6],reqDateAr[7],reqDateAr[8])