//INSTRUCTIONS-----------------------------------------------------------------------------------------------------------------------------------------------------
/*Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)*/
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//SOLUTION---------------------------------------------------------------------------------------------------------------------------------------------------------
function humanReadable(seconds) {
  let h = parseInt(seconds/3600)
  let m = seconds < 3600 ? parseInt(seconds/60) : parseInt((seconds % 3600)/60)
  let s = seconds < 60 ? seconds : (seconds % 60)
  if(h < 10){h = '0' + h;}
  if(m < 10){m = '0' + m;}
  if(s < 10){s = '0' + s;}
  return h < 100 ? `${h}:${m}:${s}` : `99:59:59`;
}
//EXAMPLES---------------------------------------------------------------------------------------------------------------------------------------------------------

/*describe('examples', function() {
  it('should format correctly', function() {
    Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
    Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
    Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
    Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
    Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
  });
});*/
