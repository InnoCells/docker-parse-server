/**
 * Sample cloud function.
 *
 * To test cloud functions through the command line use (remember to replace [app_id]
 * with your custom app id):
 *
 * curl -X POST \
 *      -H "X-Parse-Application-Id: [app_id]" \
 *      -H "Content-Type: application/json" \
 *      http://localhost/parse/functions/greeting
 *
 * Sample response:
 *
 *      {"result":"Hello World!"}
 */
Parse.Cloud.define("greeting", function(request, response) {
  response.success('Hello World!');
});