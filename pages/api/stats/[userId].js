const queryString = require("query-string");
var github = require("octonode");
const fs = require("fs");
const path = require("path");
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

const getClient = ({ accessToken } = {}) => {
  if (accessToken) {
    // Build a client from an access token
    return github.client(accessToken);
  }
  // Build a client which accesses any public information
  return github.client({});
};

async function handler(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const {
    query: { userId },
  } = request;
  const { search } = url;
  const queryParams = queryString.parse(search);
  let client = getClient(queryParams);

  const {
    accessToken,
    format,
    width,
    fontColor = "#000",
    type = "original",
    contentDisposition = null,
    ...otherQueryParams
  } = queryParams;
  client.user(userId).info(function (err, data, headers) {
    switch (format) {
      case "svg":
        response.statusCode = 200;
        response.setHeader("Content-Type", "image/svg+xml");
        response.setHeader(
          "Content-Disposition",
          `${"inline"}; filename="${userId}"`
        );
        const filePath = path.join(
          serverRuntimeConfig.PROJECT_ROOT,
          "/data/icon.tmpl"
        );
        if (fs.existsSync(filePath)) {
          let icon = fs.readFileSync(filePath, {
            encoding: "utf8",
            flag: "r",
          });
          icon = icon
            .split("${width}")
            .join(width)
            .split("${content}")
            .join(data.login)
            .split("${avatar_url}")
            .join(data.avatar_url)
            .split("${html_url}")
            .join(data.html_url)
            .split("${fontColor}")
            .join(fontColor)
            .split("${location}")
            .join(
              `https://www.google.com/maps/search/?api=1&amp;query=${data.location}`
            );
          response.end(icon);
        }
        break;
      case "json":
      default:
        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json");
        response.json({ userId, data, err });
        break;
    }
  });
  // client.get(`/users/${userId}`, function (err, status, body, headers) {
  //   console.log(body); //json object
  // });
  // if (fs.existsSync(filePath)) {
  //   const icon = fs.readFileSync(filePath, {encoding:'utf8', flag:'r'})
  // response.statusCode = 200;
  // response.setHeader('Content-Type', 'application/json');
  // response.setHeader('Content-Type', 'image/svg+xml')
  // contentDisposition && response.setHeader('Content-Disposition', `${contentDisposition}; filename="${iconName}"`) // null || 'attachment'
  // response.json({ userId, username, password, info });
  // } else {
  //   response.setHeader('Content-Type', 'application/json');
  //   response.end(JSON.stringify({ error: `the ${filePath} does not exist` }));
  // }
}
export default handler;
