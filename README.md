# gas_wialon
Google Apps Script Integration with Wialon

For using this script

Install clasp

https://github.com/google/clasp/

Use the clasp in Visual Studio Code

https://yagisanatode.com/2019/04/01/working-with-google-apps-script-in-visual-studio-code-using-clasp/

# Example
```javascript
  url = 'https://hst-api.wialon.com';
  token = '<token>'
  ws  = new WialonSDKService(url, token)
  auth = ws.login()
  response = ws.request('core/search_items', {
    spec: {
                    itemsType: 'avl_resource',
                    propName: 'rel_is_account, sys_name',
                    propValueMask: '1,*',
                    sortType: 'sys_name'
                },
                force: 1,
                flags: 1,
                from: 0,
                to: 0
  });
  ws.logout();
```
