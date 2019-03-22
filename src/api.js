export class grabApi {
  runDoctor() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const apiKey = process.env.exports.apiKey;
      let url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=41.8781,-87.6298,100&skip=2&limit=10&user_key=' + apiKey;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}