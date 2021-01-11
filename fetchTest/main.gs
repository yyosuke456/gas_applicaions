function myFunction() {
  const options = {
    muteHttpExceptions: true, // 404エラーでも処理を継続する
  };
  const response = UrlFetchApp.fetch(
    "https://login.salesforce.com/services/Soap/u/40.0",
    options
  );
  const html = response.getContentText();
  const doc = XmlService.parse(html);
  const xml = doc.getRootElement();
  const title = parser.getElementById(xml, "main");
  Logger.log(title);
}
